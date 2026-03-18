<div align="center">

# ✉️ MailPulse

**Un outil léger de test d'e-mails SMTP et IMAP**

Testez les connexions e-mail, envoyez des e-mails de test et lisez votre boîte de réception — le tout depuis une belle interface web multilingue.

[![Licence : MIT](https://img.shields.io/badge/Licence-MIT-6366f1.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Prêt-2496ED.svg)](Dockerfile)

🌍 **Language / Dil / Idioma / Langue / Sprache / 语言**

[🇹🇷 Türkçe](README.tr.md) · [🇺🇸 English](README.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇩🇪 Deutsch](README.de.md) · [🇨🇳 中文](README.zh.md)

</div>

---

## ✨ Fonctionnalités

- 📬 **Envoyer et Recevoir** — Envoyez des e-mails de test via SMTP et lisez la boîte via IMAP
- 🔌 **Test de Connexion** — Vérifiez les paramètres SMTP/IMAP avant l'envoi
- 🌍 **6 Langues** — Turc, Anglais, Espagnol, Français, Allemand, Chinois
- 🌙 **Thème Sombre et Clair** — Basculez entre les thèmes avec persistance
- 💾 **Sauvegarder les Connexions** — Stockez les paramètres dans le localStorage
- 📮 **Presets Fournisseurs** — Configuration en un clic pour Gmail, Outlook, Yandex
- 🐳 **Docker Prêt** — Déployez partout avec une seule commande
- 📱 **Responsive** — Fonctionne sur desktop, tablette et mobile

---

## 🚀 Démarrage Rapide

### Option 1 : Node.js

```bash
git clone https://github.com/YOUR_USERNAME/mailpulse.git
cd mailpulse
npm install
npm start
```

Ouvrez **http://localhost:3000**

### Option 2 : Docker

```bash
docker build -t mailpulse .
docker run -p 3000:3000 mailpulse
```

### Option 3 : Docker Compose

```bash
docker compose up -d
```

---

## ⚙️ Configuration

| Variable | Par défaut | Description |
|----------|-----------|-------------|
| `PORT` | `3000` | Port du serveur |

```bash
PORT=8080 npm start
```

---

## 📡 API

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/api/health` | `GET` | Vérification de santé (statut, version, uptime) |
| `/api/test` | `POST` | Tester la connexion SMTP ou IMAP |
| `/api/send` | `POST` | Envoyer un e-mail via SMTP |
| `/api/inbox` | `POST` | Récupérer les 10 derniers e-mails via IMAP |

---

## 🔐 Configuration Gmail

1. Allez sur [Mots de passe d'application Google](https://myaccount.google.com/apppasswords)
2. Générez un nouveau mot de passe d'application
3. Utilisez votre adresse Gmail et le mot de passe généré dans MailPulse

> **Note :** Les mots de passe Gmail normaux ne fonctionneront pas. Vous avez besoin d'un Mot de passe d'Application.

---

## 📄 Licence

[MIT](LICENSE) — libre d'utiliser, modifier et distribuer.
