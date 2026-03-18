<div align="center">

# ✉️ MailPulse

**A lightweight SMTP & IMAP email testing tool**

Test email connections, send test emails, and read your inbox — all from a beautiful, multilingual web interface.

[![License: MIT](https://img.shields.io/badge/License-MIT-6366f1.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](Dockerfile)

🌍 **Language / Dil / Idioma / Langue / Sprache / 语言**

[🇹🇷 Türkçe](README.tr.md) · [🇺🇸 English](README.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇩🇪 Deutsch](README.de.md) · [🇨🇳 中文](README.zh.md)

</div>

---

## ✨ Features

- 📬 **Send & Receive** — Send test emails via SMTP and read inbox via IMAP
- 🔌 **Connection Test** — Verify SMTP/IMAP settings before sending
- 🌍 **6 Languages** — Turkish, English, Spanish, French, German, Chinese
- 🌙 **Dark & Light Theme** — Toggle between themes with persistence
- 💾 **Save Connections** — Store connection settings in browser localStorage
- 📮 **Provider Presets** — One-click setup for Gmail, Outlook, Yandex
- 🐳 **Docker Ready** — Deploy anywhere with a single command
- 📱 **Responsive** — Works on desktop, tablet, and mobile

---

## 🚀 Quick Start

### Option 1: Node.js

```bash
git clone https://github.com/YOUR_USERNAME/mailpulse.git
cd mailpulse
npm install
npm start
```

Open **http://localhost:3000**

### Option 2: Docker

```bash
docker build -t mailpulse .
docker run -p 3000:3000 mailpulse
```

### Option 3: Docker Compose

```bash
docker compose up -d
```

---

## ⚙️ Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |

```bash
PORT=8080 npm start
```

---

## 🌍 Supported Languages

| Flag | Language | Code |
|------|----------|------|
| 🇹🇷 | Türkçe | `tr` |
| 🇺🇸 | English | `en` |
| 🇪🇸 | Español | `es` |
| 🇫🇷 | Français | `fr` |
| 🇩🇪 | Deutsch | `de` |
| 🇨🇳 | 中文 | `zh` |

The app auto-detects your browser language on first visit. You can switch languages from the dropdown in the header. Your preference is saved in `localStorage`.

### Adding a New Language

1. Add translations to `public/i18n.js` under `TRANSLATIONS.xx`
2. Add metadata to `LANG_META`
3. Add date locale to `DATE_LOCALES`
4. Add a `<button>` to the language dropdown in `public/index.html`

---

## 📡 API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | `GET` | Health check (status, version, uptime) |
| `/api/test` | `POST` | Test SMTP or IMAP connection |
| `/api/send` | `POST` | Send an email via SMTP |
| `/api/inbox` | `POST` | Fetch latest 10 emails via IMAP |

---

## 🔐 Gmail Setup

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Generate a new app password
3. Use your Gmail address and the generated password in MailPulse

> **Note:** Regular Gmail passwords won't work. You need an App Password.

---

## 📁 Project Structure

```
mailpulse/
├── server.js            # Express server + API endpoints
├── public/
│   ├── index.html       # Main page
│   ├── style.css        # Dark/Light theme styles
│   ├── app.js           # Frontend logic
│   └── i18n.js          # Translations (6 languages)
├── Dockerfile           # Docker image
├── docker-compose.yml   # Docker Compose config
├── package.json
└── LICENSE
```

---

## 📄 License

[MIT](LICENSE) — free to use, modify, and distribute.
