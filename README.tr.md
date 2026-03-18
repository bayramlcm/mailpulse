<div align="center">

# ✉️ MailPulse

**Hafif bir SMTP ve IMAP e-posta test aracı**

E-posta bağlantılarını test edin, test mailleri gönderin ve gelen kutunuzu okuyun — güzel, çok dilli bir web arayüzünden.

[![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-6366f1.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Hazır-2496ED.svg)](Dockerfile)

🌍 **Language / Dil / Idioma / Langue / Sprache / 语言**

[🇹🇷 Türkçe](README.tr.md) · [🇺🇸 English](README.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇩🇪 Deutsch](README.de.md) · [🇨🇳 中文](README.zh.md)

</div>

---

## ✨ Özellikler

- 📬 **Gönder ve Al** — SMTP ile test mailleri gönderin, IMAP ile gelen kutusunu okuyun
- 🔌 **Bağlantı Testi** — Göndermeden önce SMTP/IMAP ayarlarını doğrulayın
- 🌍 **6 Dil Desteği** — Türkçe, İngilizce, İspanyolca, Fransızca, Almanca, Çince
- 🌙 **Koyu ve Açık Tema** — Temalar arası geçiş, tercih kalıcı olarak saklanır
- 💾 **Bağlantı Kaydetme** — Bağlantı bilgilerini tarayıcıda saklayın
- 📮 **Sağlayıcı Hazır Ayarları** — Gmail, Outlook, Yandex için tek tıkla kurulum
- 🐳 **Docker Desteği** — Tek komutla her yere deploy edin
- 📱 **Responsive** — Masaüstü, tablet ve mobilde çalışır

---

## 🚀 Hızlı Başlangıç

### Seçenek 1: Node.js

```bash
git clone https://github.com/YOUR_USERNAME/mailpulse.git
cd mailpulse
npm install
npm start
```

Tarayıcıda **http://localhost:3000** adresini açın

### Seçenek 2: Docker

```bash
docker build -t mailpulse .
docker run -p 3000:3000 mailpulse
```

### Seçenek 3: Docker Compose

```bash
docker compose up -d
```

---

## ⚙️ Yapılandırma

| Değişken | Varsayılan | Açıklama |
|----------|-----------|----------|
| `PORT` | `3000` | Sunucu portu |

```bash
PORT=8080 npm start
```

---

## 🌍 Desteklenen Diller

| Bayrak | Dil | Kod |
|--------|-----|-----|
| 🇹🇷 | Türkçe | `tr` |
| 🇺🇸 | English | `en` |
| 🇪🇸 | Español | `es` |
| 🇫🇷 | Français | `fr` |
| 🇩🇪 | Deutsch | `de` |
| 🇨🇳 | 中文 | `zh` |

Uygulama ilk ziyarette tarayıcı dilinizi otomatik algılar. Başlıktaki açılır menüden dil değiştirebilirsiniz. Tercihiniz `localStorage`'a kaydedilir.

### Yeni Dil Ekleme

1. `public/i18n.js` dosyasında `TRANSLATIONS.xx` altına çevirileri ekleyin
2. `LANG_META` objesine dil meta bilgisini ekleyin
3. `DATE_LOCALES` objesine tarih formatını ekleyin
4. `public/index.html` dosyasındaki dil açılır menüsüne bir `<button>` ekleyin

---

## 📡 API

| Endpoint | Metod | Açıklama |
|----------|-------|----------|
| `/api/health` | `GET` | Sağlık kontrolü (durum, versiyon, uptime) |
| `/api/test` | `POST` | SMTP veya IMAP bağlantısını test et |
| `/api/send` | `POST` | SMTP ile e-posta gönder |
| `/api/inbox` | `POST` | IMAP ile son 10 e-postayı getir |

---

## 🔐 Gmail Kurulumu

1. [Google Uygulama Şifreleri](https://myaccount.google.com/apppasswords) sayfasına gidin
2. Yeni bir uygulama şifresi oluşturun
3. Gmail adresinizi ve oluşturulan şifreyi MailPulse'ta kullanın

> **Not:** Normal Gmail şifreleri çalışmaz. Uygulama Şifresi oluşturmanız gerekir.

---

## 📁 Proje Yapısı

```
mailpulse/
├── server.js            # Express sunucu + API endpointleri
├── public/
│   ├── index.html       # Ana sayfa
│   ├── style.css        # Koyu/Açık tema stilleri
│   ├── app.js           # Frontend mantığı
│   └── i18n.js          # Çeviriler (6 dil)
├── Dockerfile           # Docker imajı
├── docker-compose.yml   # Docker Compose yapılandırması
├── package.json
└── LICENSE
```

---

## 📄 Lisans

[MIT](LICENSE) — ücretsiz olarak kullanabilir, değiştirebilir ve dağıtabilirsiniz.
