<div align="center">

# ✉️ MailPulse

**轻量级 SMTP 和 IMAP 邮件测试工具**

测试邮件连接、发送测试邮件、查看收件箱 —— 一切尽在美观的多语言 Web 界面中。

[![许可证: MIT](https://img.shields.io/badge/许可证-MIT-6366f1.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-就绪-2496ED.svg)](Dockerfile)

🌍 **Language / Dil / Idioma / Langue / Sprache / 语言**

[🇹🇷 Türkçe](README.tr.md) · [🇺🇸 English](README.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇩🇪 Deutsch](README.de.md) · [🇨🇳 中文](README.zh.md)

</div>

---

## ✨ 功能特点

- 📬 **发送与接收** — 通过 SMTP 发送测试邮件，通过 IMAP 读取收件箱
- 🔌 **连接测试** — 发送前验证 SMTP/IMAP 设置
- 🌍 **6 种语言** — 土耳其语、英语、西班牙语、法语、德语、中文
- 🌙 **深色与浅色主题** — 主题切换并持久保存
- 💾 **保存连接** — 在浏览器 localStorage 中存储连接设置
- 📮 **服务商预设** — 一键配置 Gmail、Outlook、Yandex
- 🐳 **Docker 就绪** — 一条命令部署到任何地方
- 📱 **响应式设计** — 适用于桌面、平板和手机

---

## 🚀 快速开始

### 方式一：Node.js

```bash
git clone https://github.com/YOUR_USERNAME/mailpulse.git
cd mailpulse
npm install
npm start
```

打开 **http://localhost:3000**

### 方式二：Docker

```bash
docker build -t mailpulse .
docker run -p 3000:3000 mailpulse
```

### 方式三：Docker Compose

```bash
docker compose up -d
```

---

## ⚙️ 配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `PORT` | `3000` | 服务器端口 |

```bash
PORT=8080 npm start
```

---

## 📡 API

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/health` | `GET` | 健康检查（状态、版本、运行时间） |
| `/api/test` | `POST` | 测试 SMTP 或 IMAP 连接 |
| `/api/send` | `POST` | 通过 SMTP 发送邮件 |
| `/api/inbox` | `POST` | 通过 IMAP 获取最近 10 封邮件 |

---

## 🔐 Gmail 设置

1. 前往 [Google 应用专用密码](https://myaccount.google.com/apppasswords)
2. 生成新的应用专用密码
3. 在 MailPulse 中使用您的 Gmail 地址和生成的密码

> **注意：** 普通 Gmail 密码无法使用，您需要创建应用专用密码。

---

## 📄 许可证

[MIT](LICENSE) — 可自由使用、修改和分发。
