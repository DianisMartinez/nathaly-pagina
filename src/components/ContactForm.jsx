import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactForm({ profile }) {
  const [result, setResult] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [ref, visible] = useScrollAnimation()

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setResult('')

    const formData = new FormData(e.target)
    formData.append('access_key', '841c5e66-2937-4f6b-8a56-39d99d933375')
    formData.append('subject', 'Contacto desde portfolio Nathaly')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        e.target.reset()
      } else {
        setResult('Error al enviar. Escribime directamente a ' + profile.email)
      }
    } catch {
      setResult('Error al enviar. Escribime directamente a ' + profile.email)
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
            <h2>Hablemos</h2>
            <p>
              Cuéntame brevemente sobre tu proyecto.
            </p>
            <figure className="contact-brand-photo">
              <img src="/1.webp" alt="Insight Estrategia Digital" loading="lazy" />
            </figure>
          </div>

          <div className={`contact-form-card fade-in-up ${visible ? 'visible' : ''}`}>
            {sent ? (
              <div className="form-success">
                <h3>Mensaje enviado</h3>
                <p>Gracias por escribirme. Te responderé pronto.</p>
                <button className="button button-primary" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Enviar consulta</h3>

                  <label>
                    <span>Nombre</span>
                    <input name="name" placeholder="Tu nombre" required />
                  </label>

                  <label>
                    <span>Email</span>
                    <input name="email" type="email" placeholder="tu@email.com" required />
                  </label>

                  <label>
                    <span>Mensaje</span>
                    <textarea name="message" placeholder="¿Qué necesitas?" rows={4} required />
                  </label>

                  {result && <p className="form-error">{result}</p>}

                  <button className="button button-primary" type="submit" disabled={sending}>
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
