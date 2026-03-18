<div align="center">

# ✉️ MailPulse

**Ein leichtgewichtiges SMTP- & IMAP-E-Mail-Testtool**

Testen Sie E-Mail-Verbindungen, senden Sie Test-E-Mails und lesen Sie Ihren Posteingang — alles über eine schöne, mehrsprachige Web-Oberfläche.

[![Lizenz: MIT](https://img.shields.io/badge/Lizenz-MIT-6366f1.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Bereit-2496ED.svg)](Dockerfile)

🌍 **Language / Dil / Idioma / Langue / Sprache / 语言**

[🇹🇷 Türkçe](README.tr.md) · [🇺🇸 English](README.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇩🇪 Deutsch](README.de.md) · [🇨🇳 中文](README.zh.md)

</div>

---

## ✨ Funktionen

- 📬 **Senden & Empfangen** — Senden Sie Test-E-Mails über SMTP und lesen Sie den Posteingang über IMAP
- 🔌 **Verbindungstest** — Überprüfen Sie SMTP/IMAP-Einstellungen vor dem Senden
- 🌍 **6 Sprachen** — Türkisch, Englisch, Spanisch, Französisch, Deutsch, Chinesisch
- 🌙 **Dunkles & Helles Design** — Wechseln Sie zwischen Designs mit Persistenz
- 💾 **Verbindungen Speichern** — Speichern Sie Verbindungseinstellungen im Browser-localStorage
- 📮 **Anbieter-Presets** — Ein-Klick-Konfiguration für Gmail, Outlook, Yandex
- 🐳 **Docker-Bereit** — Überall mit einem einzigen Befehl bereitstellen
- 📱 **Responsive** — Funktioniert auf Desktop, Tablet und Mobilgerät

---

## 🚀 Schnellstart

### Option 1: Node.js

```bash
git clone https://github.com/YOUR_USERNAME/mailpulse.git
cd mailpulse
npm install
npm start
```

Öffnen Sie **http://localhost:3000**

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

## ⚙️ Konfiguration

| Variable | Standard | Beschreibung |
|----------|----------|-------------|
| `PORT` | `3000` | Server-Port |

```bash
PORT=8080 npm start
```

---

## 📡 API

| Endpoint | Methode | Beschreibung |
|----------|---------|-------------|
| `/api/health` | `GET` | Gesundheitsprüfung (Status, Version, Uptime) |
| `/api/test` | `POST` | SMTP- oder IMAP-Verbindung testen |
| `/api/send` | `POST` | Eine E-Mail über SMTP senden |
| `/api/inbox` | `POST` | Die letzten 10 E-Mails über IMAP abrufen |

---

## 🔐 Gmail-Einrichtung

1. Gehen Sie zu [Google App-Passwörter](https://myaccount.google.com/apppasswords)
2. Erstellen Sie ein neues App-Passwort
3. Verwenden Sie Ihre Gmail-Adresse und das generierte Passwort in MailPulse

> **Hinweis:** Normale Gmail-Passwörter funktionieren nicht. Sie benötigen ein App-Passwort.

---

## 📄 Lizenz

[MIT](LICENSE) — frei zu verwenden, zu ändern und zu verteilen.
