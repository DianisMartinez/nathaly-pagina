import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactForm({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [ref, visible] = useScrollAnimation()

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.message) {
      setError('Completa todos los campos')
      return
    }

    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/mbdbrvgk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Contacto portfolio - ${form.name}`,
        }),
      })
      if (!res.ok) throw new Error('Formspree error')
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Error al enviar. Intenta directamente a ' + profile.email)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section" id="contacto" ref={ref}>
      <div className="container">
        <div className={`contact-banner fade-in ${visible ? 'visible' : ''}`}>
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>Trabajemos juntos</h2>
            <p>
              Si te interesa mi propuesta, completa el formulario y te responderé a la brevedad.
            </p>

            <div className="contact-card" style={{ marginTop: '1.5rem' }}>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={profile.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Linkedin profesional
              </a>
              <span>{profile.company}</span>
              <span>{profile.education}</span>
            </div>
          </div>

          <div className={`contact-form-card fade-in-up ${visible ? 'visible' : ''}`}>
            {sent ? (
              <div className="form-success">
                <h3>Mensaje enviado</h3>
                <p>
                  Gracias por escribirme. Te responderé pronto a {form.email || profile.email}.
                </p>
                <button
                  className="button button-primary"
                  onClick={() => setSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Enviame un mensaje</h3>

                  <label>
                    <span>Nombre</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </label>

                  <label>
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </label>

                  <label>
                    <span>Mensaje</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Cuentame sobre tu proyecto..."
                      rows={4}
                      required
                    />
                  </label>

                  {error && <p className="form-error">{error}</p>}

                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>

                <p className="contact-direct-link">
                  O escríbeme directamente a{' '}
                  <a href={`mailto:${profile.email}?subject=Contacto desde portfolio`}>
                    {profile.email}
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
