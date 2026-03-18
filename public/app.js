// ── Presets ──
const PRESETS = {
  gmail: {
    smtp_host: 'smtp.gmail.com', smtp_port: 587, smtp_secure: false,
    imap_host: 'imap.gmail.com', imap_port: 993, imap_tls: true,
  },
  outlook: {
    smtp_host: 'smtp.office365.com', smtp_port: 587, smtp_secure: false,
    imap_host: 'outlook.office365.com', imap_port: 993, imap_tls: true,
  },
  yandex: {
    smtp_host: 'smtp.yandex.com', smtp_port: 465, smtp_secure: true,
    imap_host: 'imap.yandex.com', imap_port: 993, imap_tls: true,
  },
  custom: {
    smtp_host: '', smtp_port: 587, smtp_secure: false,
    imap_host: '', imap_port: 993, imap_tls: true,
  },
};

function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;

  document.getElementById('smtp_host').value = p.smtp_host;
  document.getElementById('smtp_port').value = p.smtp_port;
  document.getElementById('smtp_secure').checked = p.smtp_secure;
  document.getElementById('imap_host').value = p.imap_host;
  document.getElementById('imap_port').value = p.imap_port;
  document.getElementById('imap_tls').checked = p.imap_tls;

  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

// ── Tabs ──
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

  document.getElementById('panel-send').classList.toggle('hidden', tab !== 'send');
  document.getElementById('panel-inbox').classList.toggle('hidden', tab !== 'inbox');
}

// ── Helpers ──
function getConnectionData() {
  return {
    smtp_host: document.getElementById('smtp_host').value,
    smtp_port: document.getElementById('smtp_port').value,
    smtp_secure: document.getElementById('smtp_secure').checked,
    smtp_user: document.getElementById('email_user').value,
    smtp_pass: document.getElementById('email_pass').value,
    imap_host: document.getElementById('imap_host').value,
    imap_port: document.getElementById('imap_port').value,
    imap_user: document.getElementById('email_user').value,
    imap_pass: document.getElementById('email_pass').value,
    imap_tls: document.getElementById('imap_tls').checked,
  };
}

function showResult(elId, type, message) {
  const el = document.getElementById(elId);
  el.className = `result ${type}`;
  el.innerHTML = message;
  el.classList.remove('hidden');
}

function showToast(type, message) {
  const toast = document.getElementById('toast');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function setLoading(btnId, loading, text) {
  const btn = document.getElementById(btnId);
  if (loading) {
    btn.disabled = true;
    btn._originalHTML = btn.innerHTML;
    btn.innerHTML = `<span class="spinner"></span> ${text || t('loading')}`;
  } else {
    btn.disabled = false;
    btn.innerHTML = btn._originalHTML;
  }
}

// ── Theme Toggle ──
function initTheme() {
  const saved = localStorage.getItem('mailpulse_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcons('light');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mailpulse_theme', next);
  updateThemeIcons(next);
}

function updateThemeIcons(theme) {
  const dark = document.getElementById('theme-icon-dark');
  const light = document.getElementById('theme-icon-light');
  if (dark && light) {
    dark.classList.toggle('hidden', theme === 'light');
    light.classList.toggle('hidden', theme !== 'light');
  }
}

// ── Connection Test ──
async function testConnection() {
  const conn = getConnectionData();
  if (!conn.smtp_user || !conn.smtp_pass) {
    showToast('error', t('fillCredentials'));
    return;
  }

  setLoading('btn-test', true, t('testing'));
  document.getElementById('test-result').classList.add('hidden');

  const results = [];

  // Test SMTP
  try {
    const res = await fetch('/api/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...conn, type: 'smtp' }),
    });
    const data = await res.json();
    results.push(data.success
      ? `<span class="test-ok">${t('smtpOk')}</span>`
      : `<span class="test-fail">${t('smtpFail', { error: data.error })}</span>`
    );
  } catch (err) {
    results.push(`<span class="test-fail">${t('smtpFail', { error: err.message })}</span>`);
  }

  // Test IMAP
  try {
    const res = await fetch('/api/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...conn, type: 'imap' }),
    });
    const data = await res.json();
    results.push(data.success
      ? `<span class="test-ok">${t('imapOk')}</span>`
      : `<span class="test-fail">${t('imapFail', { error: data.error })}</span>`
    );
  } catch (err) {
    results.push(`<span class="test-fail">${t('imapFail', { error: err.message })}</span>`);
  }

  const allOk = results.every(r => r.includes('test-ok'));
  showResult('test-result', allOk ? 'success' : 'error', results.join('<br>'));

  if (allOk) {
    showToast('success', t('bothOk'));
  }

  setLoading('btn-test', false);
}

// ── Save / Load Connection to localStorage ──
function saveConnection() {
  const data = {
    smtp_host: document.getElementById('smtp_host').value,
    smtp_port: document.getElementById('smtp_port').value,
    smtp_secure: document.getElementById('smtp_secure').checked,
    imap_host: document.getElementById('imap_host').value,
    imap_port: document.getElementById('imap_port').value,
    imap_tls: document.getElementById('imap_tls').checked,
    email_user: document.getElementById('email_user').value,
    // NOTE: password NOT saved for security
  };
  localStorage.setItem('mailpulse_conn', JSON.stringify(data));
  showToast('success', t('connectionSaved'));
}

function loadSavedConnection() {
  const raw = localStorage.getItem('mailpulse_conn');
  if (!raw) return false;

  try {
    const data = JSON.parse(raw);
    document.getElementById('smtp_host').value = data.smtp_host || '';
    document.getElementById('smtp_port').value = data.smtp_port || '587';
    document.getElementById('smtp_secure').checked = !!data.smtp_secure;
    document.getElementById('imap_host').value = data.imap_host || '';
    document.getElementById('imap_port').value = data.imap_port || '993';
    document.getElementById('imap_tls').checked = data.imap_tls !== false;
    document.getElementById('email_user').value = data.email_user || '';

    // Deactivate preset buttons since we loaded custom data
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));

    return true;
  } catch {
    return false;
  }
}

function clearSavedConnection() {
  localStorage.removeItem('mailpulse_conn');
  showToast('success', t('connectionCleared'));
}

// ── Send Mail ──
async function sendMail() {
  const conn = getConnectionData();
  if (!conn.smtp_user || !conn.smtp_pass) {
    showToast('error', t('fillCredentials'));
    return;
  }

  setLoading('btn-send', true);
  document.getElementById('send-result').classList.add('hidden');

  try {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...conn,
        to: document.getElementById('mail_to').value,
        subject: document.getElementById('mail_subject').value,
        body: document.getElementById('mail_body').value,
      }),
    });

    const data = await res.json();

    if (data.success) {
      showResult('send-result', 'success', t('mailSentSuccess', { id: data.messageId }));
      showToast('success', t('mailSentToast'));
    } else {
      showResult('send-result', 'error', t('mailSendError', { error: data.error }));
      showToast('error', t('mailSendFailed'));
    }
  } catch (err) {
    showResult('send-result', 'error', t('connectionError', { error: err.message }));
    showToast('error', t('connectionFailed'));
  } finally {
    setLoading('btn-send', false);
  }
}

// ── Fetch Inbox ──
async function fetchInbox() {
  const conn = getConnectionData();
  if (!conn.imap_user || !conn.imap_pass) {
    showToast('error', t('fillCredentials'));
    return;
  }

  setLoading('btn-fetch', true);
  document.getElementById('inbox-result').classList.add('hidden');
  document.getElementById('email-list').innerHTML = '';

  try {
    const res = await fetch('/api/inbox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conn),
    });

    const data = await res.json();

    if (data.success) {
      if (data.emails.length === 0) {
        showResult('inbox-result', 'success', t('noEmails'));
      } else {
        showResult('inbox-result', 'success', t('emailsFound', { count: data.emails.length }));
        renderEmails(data.emails);
      }
      showToast('success', t('inboxLoaded'));
    } else {
      showResult('inbox-result', 'error', t('inboxLoadError', { error: data.error }));
      showToast('error', t('inboxLoadFailed'));
    }
  } catch (err) {
    showResult('inbox-result', 'error', t('connectionError', { error: err.message }));
    showToast('error', t('connectionFailed'));
  } finally {
    setLoading('btn-fetch', false);
  }
}

// ── Render Emails ──
function renderEmails(emails) {
  const container = document.getElementById('email-list');
  container.innerHTML = '';

  emails.forEach((email, i) => {
    const dateStr = email.date
      ? new Date(email.date).toLocaleDateString(getDateLocale(), {
          day: 'numeric', month: 'short', year: 'numeric',
          hour: '2-digit', minute: '2-digit'
        })
      : '';

    const item = document.createElement('div');
    item.className = 'email-item';
    item.style.animationDelay = `${i * 0.05}s`;

    item.innerHTML = `
      <div class="email-header" onclick="toggleEmail(this)">
        <div class="email-meta">
          <div class="email-from">${escapeHtml(email.from)}</div>
          <div class="email-subject">${escapeHtml(email.subject)}</div>
        </div>
        <span class="email-date">${dateStr}</span>
        <svg class="email-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="email-body">
        <div class="email-body-content">${email.html || escapeHtml(email.text)}</div>
      </div>
    `;

    container.appendChild(item);
  });
}

function toggleEmail(header) {
  const item = header.closest('.email-item');
  const body = item.querySelector('.email-body');
  const isOpen = item.classList.toggle('expanded');
  body.classList.toggle('open', isOpen);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text || ''));
  return div.innerHTML;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const loaded = loadSavedConnection();
  if (loaded) {
    showToast('success', t('connectionLoaded'));
  }
});
