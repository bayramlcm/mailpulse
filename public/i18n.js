// ── MailPulse i18n System ──
const TRANSLATIONS = {
  tr: {
    // Header
    appName: 'MailPulse',
    subtitle: 'SMTP & IMAP Test Uygulaması',
    // Connection
    connectionSettings: 'Bağlantı Ayarları',
    custom: 'Özel',
    smtpSending: 'SMTP (Gönderme)',
    imapReceiving: 'IMAP (Alma)',
    server: 'Sunucu',
    emailAddress: 'E-posta Adresi',
    emailPlaceholder: 'ornek@gmail.com',
    appPassword: 'Uygulama Şifresi',
    appPasswordHint: 'Gmail için {link} oluşturun',
    appPasswordLink: 'Uygulama Şifresi',
    // Tabs
    tabSend: 'Mail Gönder',
    tabInbox: 'Gelen Kutusu',
    // Send
    recipient: 'Alıcı',
    subject: 'Konu',
    content: 'İçerik',
    send: 'Gönder',
    defaultSubject: 'Test Maili 🧪',
    defaultBody: 'Merhaba! 👋\n\nBu bir test mailidir. MailPulse uygulaması üzerinden gönderilmiştir.\n\nİyi günler! 🎉',
    // Inbox
    loadInbox: 'Gelen Kutusu Yükle',
    // Messages
    loading: 'Yükleniyor...',
    mailSentSuccess: '✅ Mail gönderildi! ID: {id}',
    mailSentToast: 'Mail başarıyla gönderildi!',
    mailSendError: '❌ Hata: {error}',
    mailSendFailed: 'Mail gönderilemedi!',
    connectionError: '❌ Bağlantı hatası: {error}',
    connectionFailed: 'Sunucuya bağlanılamadı!',
    fillCredentials: 'E-posta ve şifre alanlarını doldurun!',
    noEmails: '📭 Gelen kutusunda mail bulunamadı.',
    emailsFound: '📬 {count} mail bulundu.',
    inboxLoaded: 'Gelen kutusu yüklendi!',
    inboxLoadError: '❌ Hata: {error}',
    inboxLoadFailed: 'Gelen kutusu yüklenemedi!',
    // Language
    language: 'Dil',
    // Connection Test
    testConnection: 'Bağlantıyı Test Et',
    testing: 'Test ediliyor...',
    smtpOk: '✅ SMTP bağlantısı başarılı',
    smtpFail: '❌ SMTP hatası: {error}',
    imapOk: '✅ IMAP bağlantısı başarılı',
    imapFail: '❌ IMAP hatası: {error}',
    bothOk: '✅ SMTP ve IMAP bağlantıları başarılı!',
    // Theme
    theme: 'Tema',
    // Save
    saveConnection: 'Bağlantıyı Kaydet',
    connectionSaved: 'Bağlantı bilgileri kaydedildi!',
    connectionLoaded: 'Kayıtlı bağlantı yüklendi.',
    clearSaved: 'Kaydı Sil',
    connectionCleared: 'Kayıtlı bağlantı silindi.',
  },
  en: {
    appName: 'MailPulse',
    subtitle: 'SMTP & IMAP Test Application',
    connectionSettings: 'Connection Settings',
    custom: 'Custom',
    smtpSending: 'SMTP (Sending)',
    imapReceiving: 'IMAP (Receiving)',
    server: 'Server',
    emailAddress: 'Email Address',
    emailPlaceholder: 'example@gmail.com',
    appPassword: 'App Password',
    appPasswordHint: 'Create an {link} for Gmail',
    appPasswordLink: 'App Password',
    tabSend: 'Send Mail',
    tabInbox: 'Inbox',
    recipient: 'Recipient',
    subject: 'Subject',
    content: 'Content',
    send: 'Send',
    defaultSubject: 'Test Email 🧪',
    defaultBody: 'Hello! 👋\n\nThis is a test email sent via MailPulse.\n\nHave a great day! 🎉',
    loadInbox: 'Load Inbox',
    loading: 'Loading...',
    mailSentSuccess: '✅ Email sent! ID: {id}',
    mailSentToast: 'Email sent successfully!',
    mailSendError: '❌ Error: {error}',
    mailSendFailed: 'Failed to send email!',
    connectionError: '❌ Connection error: {error}',
    connectionFailed: 'Could not connect to server!',
    fillCredentials: 'Please fill in email and password fields!',
    noEmails: '📭 No emails found in inbox.',
    emailsFound: '📬 {count} email(s) found.',
    inboxLoaded: 'Inbox loaded!',
    inboxLoadError: '❌ Error: {error}',
    inboxLoadFailed: 'Failed to load inbox!',
    language: 'Language',
    testConnection: 'Test Connection',
    testing: 'Testing...',
    smtpOk: '✅ SMTP connection successful',
    smtpFail: '❌ SMTP error: {error}',
    imapOk: '✅ IMAP connection successful',
    imapFail: '❌ IMAP error: {error}',
    bothOk: '✅ SMTP & IMAP connections successful!',
    theme: 'Theme',
    saveConnection: 'Save Connection',
    connectionSaved: 'Connection info saved!',
    connectionLoaded: 'Saved connection loaded.',
    clearSaved: 'Clear Saved',
    connectionCleared: 'Saved connection cleared.',
  },
  es: {
    appName: 'MailPulse',
    subtitle: 'Aplicación de prueba SMTP e IMAP',
    connectionSettings: 'Configuración de conexión',
    custom: 'Personalizado',
    smtpSending: 'SMTP (Envío)',
    imapReceiving: 'IMAP (Recepción)',
    server: 'Servidor',
    emailAddress: 'Correo electrónico',
    emailPlaceholder: 'ejemplo@gmail.com',
    appPassword: 'Contraseña de aplicación',
    appPasswordHint: 'Crea una {link} para Gmail',
    appPasswordLink: 'Contraseña de aplicación',
    tabSend: 'Enviar correo',
    tabInbox: 'Bandeja de entrada',
    recipient: 'Destinatario',
    subject: 'Asunto',
    content: 'Contenido',
    send: 'Enviar',
    defaultSubject: 'Correo de prueba 🧪',
    defaultBody: '¡Hola! 👋\n\nEste es un correo de prueba enviado desde MailPulse.\n\n¡Que tengas un buen día! 🎉',
    loadInbox: 'Cargar bandeja',
    loading: 'Cargando...',
    mailSentSuccess: '✅ ¡Correo enviado! ID: {id}',
    mailSentToast: '¡Correo enviado con éxito!',
    mailSendError: '❌ Error: {error}',
    mailSendFailed: '¡No se pudo enviar el correo!',
    connectionError: '❌ Error de conexión: {error}',
    connectionFailed: '¡No se pudo conectar al servidor!',
    fillCredentials: '¡Complete los campos de correo y contraseña!',
    noEmails: '📭 No se encontraron correos.',
    emailsFound: '📬 {count} correo(s) encontrado(s).',
    inboxLoaded: '¡Bandeja cargada!',
    inboxLoadError: '❌ Error: {error}',
    inboxLoadFailed: '¡No se pudo cargar la bandeja!',
    language: 'Idioma',
    testConnection: 'Probar conexión',
    testing: 'Probando...',
    smtpOk: '✅ Conexión SMTP exitosa',
    smtpFail: '❌ Error SMTP: {error}',
    imapOk: '✅ Conexión IMAP exitosa',
    imapFail: '❌ Error IMAP: {error}',
    bothOk: '✅ ¡Conexiones SMTP e IMAP exitosas!',
    theme: 'Tema',
    saveConnection: 'Guardar conexión',
    connectionSaved: '¡Conexión guardada!',
    connectionLoaded: 'Conexión guardada cargada.',
    clearSaved: 'Borrar guardado',
    connectionCleared: 'Conexión guardada eliminada.',
  },
  fr: {
    appName: 'MailPulse',
    subtitle: 'Application de test SMTP et IMAP',
    connectionSettings: 'Paramètres de connexion',
    custom: 'Personnalisé',
    smtpSending: 'SMTP (Envoi)',
    imapReceiving: 'IMAP (Réception)',
    server: 'Serveur',
    emailAddress: 'Adresse e-mail',
    emailPlaceholder: 'exemple@gmail.com',
    appPassword: "Mot de passe d'application",
    appPasswordHint: "Créez un {link} pour Gmail",
    appPasswordLink: "Mot de passe d'application",
    tabSend: 'Envoyer un mail',
    tabInbox: 'Boîte de réception',
    recipient: 'Destinataire',
    subject: 'Objet',
    content: 'Contenu',
    send: 'Envoyer',
    defaultSubject: 'E-mail de test 🧪',
    defaultBody: 'Bonjour ! 👋\n\nCeci est un e-mail de test envoyé via MailPulse.\n\nBonne journée ! 🎉',
    loadInbox: 'Charger la boîte',
    loading: 'Chargement...',
    mailSentSuccess: '✅ E-mail envoyé ! ID : {id}',
    mailSentToast: 'E-mail envoyé avec succès !',
    mailSendError: '❌ Erreur : {error}',
    mailSendFailed: "Échec de l'envoi !",
    connectionError: '❌ Erreur de connexion : {error}',
    connectionFailed: 'Impossible de se connecter au serveur !',
    fillCredentials: 'Veuillez remplir les champs e-mail et mot de passe !',
    noEmails: '📭 Aucun e-mail trouvé.',
    emailsFound: '📬 {count} e-mail(s) trouvé(s).',
    inboxLoaded: 'Boîte de réception chargée !',
    inboxLoadError: '❌ Erreur : {error}',
    inboxLoadFailed: 'Échec du chargement de la boîte !',
    language: 'Langue',
    testConnection: 'Tester la connexion',
    testing: 'Test en cours...',
    smtpOk: '✅ Connexion SMTP réussie',
    smtpFail: '❌ Erreur SMTP : {error}',
    imapOk: '✅ Connexion IMAP réussie',
    imapFail: '❌ Erreur IMAP : {error}',
    bothOk: '✅ Connexions SMTP et IMAP réussies !',
    theme: 'Thème',
    saveConnection: 'Enregistrer',
    connectionSaved: 'Connexion enregistrée !',
    connectionLoaded: 'Connexion sauvegardée chargée.',
    clearSaved: 'Effacer',
    connectionCleared: 'Connexion sauvegardée effacée.',
  },
  de: {
    appName: 'MailPulse',
    subtitle: 'SMTP- & IMAP-Testanwendung',
    connectionSettings: 'Verbindungseinstellungen',
    custom: 'Benutzerdefiniert',
    smtpSending: 'SMTP (Senden)',
    imapReceiving: 'IMAP (Empfangen)',
    server: 'Server',
    emailAddress: 'E-Mail-Adresse',
    emailPlaceholder: 'beispiel@gmail.com',
    appPassword: 'App-Passwort',
    appPasswordHint: 'Erstellen Sie ein {link} für Gmail',
    appPasswordLink: 'App-Passwort',
    tabSend: 'E-Mail senden',
    tabInbox: 'Posteingang',
    recipient: 'Empfänger',
    subject: 'Betreff',
    content: 'Inhalt',
    send: 'Senden',
    defaultSubject: 'Test-E-Mail 🧪',
    defaultBody: 'Hallo! 👋\n\nDies ist eine Test-E-Mail, gesendet über MailPulse.\n\nSchönen Tag noch! 🎉',
    loadInbox: 'Posteingang laden',
    loading: 'Wird geladen...',
    mailSentSuccess: '✅ E-Mail gesendet! ID: {id}',
    mailSentToast: 'E-Mail erfolgreich gesendet!',
    mailSendError: '❌ Fehler: {error}',
    mailSendFailed: 'E-Mail konnte nicht gesendet werden!',
    connectionError: '❌ Verbindungsfehler: {error}',
    connectionFailed: 'Verbindung zum Server nicht möglich!',
    fillCredentials: 'Bitte E-Mail und Passwort ausfüllen!',
    noEmails: '📭 Keine E-Mails gefunden.',
    emailsFound: '📬 {count} E-Mail(s) gefunden.',
    inboxLoaded: 'Posteingang geladen!',
    inboxLoadError: '❌ Fehler: {error}',
    inboxLoadFailed: 'Posteingang konnte nicht geladen werden!',
    language: 'Sprache',
    testConnection: 'Verbindung testen',
    testing: 'Teste...',
    smtpOk: '✅ SMTP-Verbindung erfolgreich',
    smtpFail: '❌ SMTP-Fehler: {error}',
    imapOk: '✅ IMAP-Verbindung erfolgreich',
    imapFail: '❌ IMAP-Fehler: {error}',
    bothOk: '✅ SMTP- & IMAP-Verbindungen erfolgreich!',
    theme: 'Design',
    saveConnection: 'Speichern',
    connectionSaved: 'Verbindung gespeichert!',
    connectionLoaded: 'Gespeicherte Verbindung geladen.',
    clearSaved: 'Löschen',
    connectionCleared: 'Gespeicherte Verbindung gelöscht.',
  },
  zh: {
    appName: 'MailPulse',
    subtitle: 'SMTP 和 IMAP 邮件测试工具',
    connectionSettings: '连接设置',
    custom: '自定义',
    smtpSending: 'SMTP（发送）',
    imapReceiving: 'IMAP（接收）',
    server: '服务器',
    emailAddress: '电子邮箱',
    emailPlaceholder: 'example@gmail.com',
    appPassword: '应用专用密码',
    appPasswordHint: '为 Gmail 创建 {link}',
    appPasswordLink: '应用专用密码',
    tabSend: '发送邮件',
    tabInbox: '收件箱',
    recipient: '收件人',
    subject: '主题',
    content: '内容',
    send: '发送',
    defaultSubject: '测试邮件 🧪',
    defaultBody: '你好！👋\n\n这是一封通过 MailPulse 发送的测试邮件。\n\n祝你愉快！🎉',
    loadInbox: '加载收件箱',
    loading: '加载中...',
    mailSentSuccess: '✅ 邮件已发送！ID：{id}',
    mailSentToast: '邮件发送成功！',
    mailSendError: '❌ 错误：{error}',
    mailSendFailed: '邮件发送失败！',
    connectionError: '❌ 连接错误：{error}',
    connectionFailed: '无法连接到服务器！',
    fillCredentials: '请填写邮箱和密码！',
    noEmails: '📭 收件箱中没有邮件。',
    emailsFound: '📬 找到 {count} 封邮件。',
    inboxLoaded: '收件箱已加载！',
    inboxLoadError: '❌ 错误：{error}',
    inboxLoadFailed: '收件箱加载失败！',
    language: '语言',
    testConnection: '测试连接',
    testing: '测试中...',
    smtpOk: '✅ SMTP 连接成功',
    smtpFail: '❌ SMTP 错误：{error}',
    imapOk: '✅ IMAP 连接成功',
    imapFail: '❌ IMAP 错误：{error}',
    bothOk: '✅ SMTP 和 IMAP 连接成功！',
    theme: '主题',
    saveConnection: '保存连接',
    connectionSaved: '连接信息已保存！',
    connectionLoaded: '已加载保存的连接。',
    clearSaved: '清除保存',
    connectionCleared: '已清除保存的连接。',
  },
};

// Language display names with flag emojis
const LANG_META = {
  tr: { name: 'Türkçe', flag: '🇹🇷' },
  en: { name: 'English', flag: '🇺🇸' },
  es: { name: 'Español', flag: '🇪🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  zh: { name: '中文', flag: '🇨🇳' },
};

// Date format locales
const DATE_LOCALES = {
  tr: 'tr-TR', en: 'en-US', es: 'es-ES',
  fr: 'fr-FR', de: 'de-DE', zh: 'zh-CN',
};

let currentLang = 'en';

// Detect best language from browser
function detectLanguage() {
  const stored = localStorage.getItem('mailpulse_lang');
  if (stored && TRANSLATIONS[stored]) return stored;

  const browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
  return TRANSLATIONS[browserLang] ? browserLang : 'en';
}

// Get translation with interpolation
function t(key, params = {}) {
  const val = TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en[key] || key;
  return val.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
}

// Get current date locale
function getDateLocale() {
  return DATE_LOCALES[currentLang] || 'en-US';
}

// Apply translations to all data-i18n elements
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    if (key) el.value = t(key);
  });

  // Special: hint with link
  const hintEl = document.querySelector('[data-i18n-hint="appPasswordHint"]');
  if (hintEl) {
    const link = `<a href="https://myaccount.google.com/apppasswords" target="_blank">${t('appPasswordLink')}</a>`;
    hintEl.innerHTML = `Gmail: ${t('appPasswordHint', { link })}`;
  }

  // Update page title
  document.title = 'MailPulse — ' + t('subtitle');

  // Update html lang
  document.documentElement.lang = currentLang;

  // Update default mail body textarea
  const bodyEl = document.getElementById('mail_body');
  if (bodyEl && bodyEl.getAttribute('data-i18n-value') === 'defaultBody') {
    bodyEl.value = t('defaultBody');
  }

  // Update lang selector display
  const langDisplay = document.getElementById('lang-current');
  if (langDisplay) {
    langDisplay.textContent = `${LANG_META[currentLang].flag} ${LANG_META[currentLang].name}`;
  }
}

// Set language and persist
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('mailpulse_lang', lang);
  applyTranslations();

  // Close dropdown
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.remove('open');
}

// Toggle language dropdown
function toggleLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.toggle('open');
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  const selector = document.querySelector('.lang-selector');
  if (selector && !selector.contains(e.target)) {
    document.getElementById('lang-dropdown')?.classList.remove('open');
  }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLanguage();
  applyTranslations();
});
