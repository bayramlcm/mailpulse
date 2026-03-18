const express = require('express');
const nodemailer = require('nodemailer');
const Imap = require('imap');
const { simpleParser } = require('mailparser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── HEALTH CHECK ───
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    name: 'MailPulse',
    version: '1.0.0',
    uptime: process.uptime(),
  });
});

// ─── TEST CONNECTION ───
app.post('/api/test', async (req, res) => {
  const { type, smtp_host, smtp_port, smtp_user, smtp_pass, smtp_secure, imap_host, imap_port, imap_user, imap_pass, imap_tls } = req.body;

  // Test SMTP
  if (type === 'smtp') {
    try {
      const transporter = nodemailer.createTransport({
        host: smtp_host,
        port: parseInt(smtp_port),
        secure: smtp_secure === true || smtp_secure === 'true',
        auth: { user: smtp_user, pass: smtp_pass },
        connectionTimeout: 10000,
      });
      await transporter.verify();
      res.json({ success: true, message: 'SMTP connection successful' });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
    return;
  }

  // Test IMAP
  if (type === 'imap') {
    const imap = new Imap({
      user: imap_user,
      password: imap_pass,
      host: imap_host,
      port: parseInt(imap_port),
      tls: imap_tls === true || imap_tls === 'true',
      tlsOptions: { rejectUnauthorized: false },
      connTimeout: 10000,
    });

    let responded = false;

    imap.once('ready', () => {
      if (!responded) {
        responded = true;
        imap.end();
        res.json({ success: true, message: 'IMAP connection successful' });
      }
    });

    imap.once('error', (err) => {
      if (!responded) {
        responded = true;
        res.status(400).json({ success: false, error: err.message });
      }
    });

    imap.connect();
    return;
  }

  res.status(400).json({ success: false, error: 'Invalid type. Use "smtp" or "imap".' });
});

// ─── SEND MAIL (SMTP) ───
app.post('/api/send', async (req, res) => {
  const { smtp_host, smtp_port, smtp_user, smtp_pass, smtp_secure, to, subject, body } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: smtp_host,
      port: parseInt(smtp_port),
      secure: smtp_secure === true || smtp_secure === 'true',
      auth: { user: smtp_user, pass: smtp_pass },
    });

    const info = await transporter.sendMail({
      from: smtp_user,
      to,
      subject,
      html: body,
    });

    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── FETCH LATEST MAIL (IMAP) ───
app.post('/api/inbox', (req, res) => {
  const { imap_host, imap_port, imap_user, imap_pass, imap_tls } = req.body;

  const imap = new Imap({
    user: imap_user,
    password: imap_pass,
    host: imap_host,
    port: parseInt(imap_port),
    tls: imap_tls === true || imap_tls === 'true',
    tlsOptions: { rejectUnauthorized: false },
  });

  const emails = [];

  imap.once('ready', () => {
    imap.openBox('INBOX', true, (err, box) => {
      if (err) {
        imap.end();
        return res.status(500).json({ success: false, error: err.message });
      }

      const total = box.messages.total;
      if (total === 0) {
        imap.end();
        return res.json({ success: true, emails: [] });
      }

      // Fetch last 10 emails
      const fetchCount = Math.min(total, 10);
      const from = total - fetchCount + 1;
      const f = imap.seq.fetch(`${from}:${total}`, { bodies: '', struct: true });

      f.on('message', (msg) => {
        msg.on('body', (stream) => {
          simpleParser(stream, (err, parsed) => {
            if (!err) {
              emails.push({
                from: parsed.from?.text || '',
                to: parsed.to?.text || '',
                subject: parsed.subject || '(no subject)',
                date: parsed.date || null,
                html: parsed.html || parsed.textAsHtml || parsed.text || '',
                text: parsed.text || '',
              });
            }
          });
        });
      });

      f.once('error', (fetchErr) => {
        imap.end();
        res.status(500).json({ success: false, error: fetchErr.message });
      });

      f.once('end', () => {
        imap.end();
      });
    });
  });

  imap.once('error', (err) => {
    res.status(500).json({ success: false, error: err.message });
  });

  imap.once('end', () => {
    // Sort newest first
    emails.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json({ success: true, emails });
  });

  imap.connect();
});

app.listen(PORT, () => {
  console.log(`✉️  MailPulse running at http://localhost:${PORT}`);
});
