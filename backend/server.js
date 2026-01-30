require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: true }))
app.use(express.json({ limit: '10mb' }))

const contactEmail = process.env.CONTACT_EMAIL || 'info@team24security.de'

function getTransporter() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT) || 587

  if (!user || !pass) {
    console.warn('SMTP_USER oder SMTP_PASS fehlt in .env – E-Mails werden nicht versendet.')
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

// POST /api/contact – Kontaktformular
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, E-Mail und Nachricht sind erforderlich.',
      })
    }

    const transporter = getTransporter()
    if (!transporter) {
      return res.status(503).json({
        success: false,
        error: 'E-Mail-Server ist nicht konfiguriert. Bitte .env prüfen.',
      })
    }

    const mailOptions = {
      from: `"Team24Security Kontakt" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Kontaktanfrage von ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || '–'}`,
        '',
        'Nachricht:',
        message,
      ].join('\n'),
      html: [
        `<p><strong>Name:</strong> ${name}</p>`,
        `<p><strong>E-Mail:</strong> ${email}</p>`,
        `<p><strong>Telefon:</strong> ${phone || '–'}</p>`,
        `<p><strong>Nachricht:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
      ].join(''),
    }

    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Nachricht wurde gesendet.' })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({
      success: false,
      error: 'E-Mail konnte nicht gesendet werden. Bitte später erneut versuchen.',
    })
  }
})

// POST /api/quote – Angebotsanfrage (Quote Wizard)
app.post('/api/quote', async (req, res) => {
  try {
    const { name, email, phone, company, service, date, time, location, description } = req.body
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name, E-Mail und Telefon sind erforderlich.',
      })
    }

    const transporter = getTransporter()
    if (!transporter) {
      return res.status(503).json({
        success: false,
        error: 'E-Mail-Server ist nicht konfiguriert. Bitte .env prüfen.',
      })
    }

    const mailOptions = {
      from: `"Team24Security Angebot" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Angebotsanfrage von ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone}`,
        `Unternehmen: ${company || '–'}`,
        `Gewünschter Service: ${service || '–'}`,
        `Datum: ${date || '–'}`,
        `Uhrzeit: ${time || '–'}`,
        `Standort: ${location || '–'}`,
        '',
        'Beschreibung:',
        description || '–',
      ].join('\n'),
      html: [
        `<p><strong>Name:</strong> ${name}</p>`,
        `<p><strong>E-Mail:</strong> ${email}</p>`,
        `<p><strong>Telefon:</strong> ${phone}</p>`,
        `<p><strong>Unternehmen:</strong> ${company || '–'}</p>`,
        `<p><strong>Service:</strong> ${service || '–'}</p>`,
        `<p><strong>Datum / Uhrzeit:</strong> ${date || '–'} ${time || ''}</p>`,
        `<p><strong>Standort:</strong> ${location || '–'}</p>`,
        `<p><strong>Beschreibung:</strong></p><p>${(description || '–').replace(/\n/g, '<br>')}</p>`,
      ].join(''),
    }

    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Anfrage wurde gesendet.' })
  } catch (err) {
    console.error('Quote email error:', err)
    res.status(500).json({
      success: false,
      error: 'Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen.',
    })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`)
})
