<div align="center">

# ✉️ MailPulse

**Una herramienta ligera para pruebas de correo SMTP e IMAP**

Prueba conexiones de correo, envía correos de prueba y lee tu bandeja de entrada — todo desde una interfaz web hermosa y multilingüe.

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-6366f1.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Listo-2496ED.svg)](Dockerfile)

🌍 **Language / Dil / Idioma / Langue / Sprache / 语言**

[🇹🇷 Türkçe](README.tr.md) · [🇺🇸 English](README.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇩🇪 Deutsch](README.de.md) · [🇨🇳 中文](README.zh.md)

</div>

---

## ✨ Características

- 📬 **Enviar y Recibir** — Envía correos de prueba por SMTP y lee la bandeja por IMAP
- 🔌 **Prueba de Conexión** — Verifica la configuración SMTP/IMAP antes de enviar
- 🌍 **6 Idiomas** — Turco, Inglés, Español, Francés, Alemán, Chino
- 🌙 **Tema Oscuro y Claro** — Alterna entre temas con persistencia
- 💾 **Guardar Conexiones** — Almacena la configuración en el localStorage del navegador
- 📮 **Presets de Proveedores** — Configuración con un clic para Gmail, Outlook, Yandex
- 🐳 **Docker Listo** — Despliega en cualquier lugar con un solo comando
- 📱 **Responsive** — Funciona en escritorio, tablet y móvil

---

## 🚀 Inicio Rápido

### Opción 1: Node.js

```bash
git clone https://github.com/YOUR_USERNAME/mailpulse.git
cd mailpulse
npm install
npm start
```

Abre **http://localhost:3000**

### Opción 2: Docker

```bash
docker build -t mailpulse .
docker run -p 3000:3000 mailpulse
```

### Opción 3: Docker Compose

```bash
docker compose up -d
```

---

## ⚙️ Configuración

| Variable | Por defecto | Descripción |
|----------|-------------|-------------|
| `PORT` | `3000` | Puerto del servidor |

```bash
PORT=8080 npm start
```

---

## 📡 API

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/health` | `GET` | Verificación de salud (estado, versión, uptime) |
| `/api/test` | `POST` | Probar conexión SMTP o IMAP |
| `/api/send` | `POST` | Enviar un correo por SMTP |
| `/api/inbox` | `POST` | Obtener los últimos 10 correos por IMAP |

---

## 🔐 Configuración de Gmail

1. Ve a [Contraseñas de aplicación de Google](https://myaccount.google.com/apppasswords)
2. Genera una nueva contraseña de aplicación
3. Usa tu dirección de Gmail y la contraseña generada en MailPulse

> **Nota:** Las contraseñas normales de Gmail no funcionan. Necesitas una Contraseña de Aplicación.

---

## 📄 Licencia

[MIT](LICENSE) — libre para usar, modificar y distribuir.
