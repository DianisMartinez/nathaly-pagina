import { useState } from 'react'
import heroImage from './assets/nataly-hero.webp'

import ThemeToggle from './components/ThemeToggle'
import ContactForm from './components/ContactForm'
import VideoCarousel from './components/VideoCarousel'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const profile = {
  name: 'Nathaly Gómez Martínez',
  location: 'Chile',
  intro: 'Trabajo en estrategia digital, contenido y Meta Ads.',
  email: 'nathalygomez901@gmail.com',
  instagram: 'https://www.instagram.com/nathaly.gomezm/',
  tiktok: 'https://www.tiktok.com/@nathaly.gomezm?lang=es-419',
  linkedin: 'https://www.linkedin.com/in/nataly-g%C3%B3mez-martinez-6183b4235/'
}

const services = [
  {
    title: 'Estrategia Digital',
    text: 'Diagnóstico y plan de acción para tu negocio.'
  },
  {
    title: 'Meta Ads',
    text: 'Anuncios en Instagram y Facebook.'
  },
  {
    title: 'Contenido UGC',
    text: 'Videos para marcas.'
  },
  {
    title: 'Marca Personal',
    text: 'Posicionamiento y estrategia de contenido.'
  },
  {
    title: 'Capacitaciones',
    text: 'Talleres de contenido y marketing.'
  }
]

const clientGroups = [
  {
    category: 'Empresas',
    clients: ['Electrolux', 'Fensa', 'Mademsa', 'Somela']
  },
  {
    category: 'Proyectos digitales',
    clients: ['Clínica Art', 'O2 Aesthetics', 'Bubble & Coffee', 'Lofts Angachilla']
  },
  {
    category: 'Contenido y colaboraciones',
    clients: ['Eucerin', 'Gillette Venus', 'Avon', 'Temu', 'Pullman']
  }
]

const collaborationVideos = [
  {
    title: 'Colaboración de marca',
    postUrl: 'https://www.instagram.com/p/DU_nNzSAckm/',
    thumbnail: '/instagram-posts/DU_nNzSAckm.jpg',
    category: 'UGC'
  },
  {
    title: 'Contenido de producto',
    postUrl: 'https://www.instagram.com/p/DH_8BO4BT3k/',
    thumbnail: '/instagram-posts/DH_8BO4BT3k.jpg',
    category: 'UGC'
  },
  {
    title: 'Estrategia de marca personal',
    postUrl: 'https://www.instagram.com/p/DIck0b0OpLd/',
    thumbnail: '/instagram-posts/DIck0b0OpLd.jpg',
    category: 'Marca personal'
  },
  {
    title: 'Contenido de marca personal',
    postUrl: 'https://www.instagram.com/p/C-5rNjcpnxZ/',
    thumbnail: '/instagram-posts/C-5rNjcpnxZ.jpg',
    category: 'Marca personal'
  },
  {
    title: 'O2 Aesthetics',
    postUrl: 'https://www.instagram.com/p/DYxrKY4RCvK/',
    thumbnail: '/instagram-posts/DYxrKY4RCvK.jpg',
    category: 'Meta Ads'
  },
  {
    title: 'Dental Art',
    postUrl: 'https://www.instagram.com/p/DX7g9othUEJ/',
    category: 'Meta Ads'
  }
]

const socialLinks = [
  { label: 'Instagram', href: profile.instagram },
  { label: 'TikTok', href: profile.tiktok },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Correo', href: `mailto:${profile.email}` }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroRef, heroVisible] = useScrollAnimation()
  const [serviciosRef, serviciosVisible] = useScrollAnimation()
  const [clientesRef, clientesVisible] = useScrollAnimation()
  const [sobreRef, sobreVisible] = useScrollAnimation()

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#inicio">
            <img src="/1.webp" alt="Insight Estrategia Digital" />
          </a>

          <div className="nav-right">
            <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Principal">
              <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
              <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#clientes" onClick={() => setMenuOpen(false)}>Experiencia</a>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            </nav>

            <ThemeToggle />

            <button
              className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Sección 1: Hero */}
        <section className="section hero-section" id="inicio" ref={heroRef}>
          <div className="container hero-grid">
            <div className={`hero-copy fade-in ${heroVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Nathaly Gómez · Fundadora de Insight</span>
              <p className="hero-kicker">Periodista · {profile.location}</p>
              <h1>
                Estrategia digital para <span>empresas y marcas personales.</span>
              </h1>
              <p className="hero-text">
                {profile.intro}
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Cuéntame sobre tu proyecto
                </a>
                <a className="button button-secondary" href="#sobre-mi">
                  Conoce mi experiencia
                </a>
              </div>
              </div>

            <div className={`hero-panel fade-in-up ${heroVisible ? 'visible' : ''}`}>
              <div className="hero-card">
                <p className="hero-not-agency">No soy una agencia. Trabajo directamente contigo.</p>

                <div className="hero-services-list">
                  {[
                    { label: 'Estrategia Digital', desc: 'Diagnóstico y plan de acción' },
                    { label: 'Meta Ads', desc: 'Anuncios en Instagram y Facebook' },
                    { label: 'Contenido UGC', desc: 'Videos para marcas' },
                  ].map((item) => (
                    <div key={item.label} className="hero-service-item">
                      <span className="hero-service-marker" aria-hidden="true" />
                      <div>
                        <strong style={{ fontSize: '0.9rem', display: 'block' }}>{item.label}</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="section" id="servicios" ref={serviciosRef}>
          <div className="container">
            <div className={`section-heading fade-in ${serviciosVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Servicios</span>
              <div>
                <h2>Estrategia, contenido y pauta</h2>
              </div>
            </div>

            <div className="services-grid">
              {services.map((service, i) => (
                <article
                  className={`service-card fade-in-up ${serviciosVisible ? 'visible' : ''}`}
                  key={service.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="section" id="clientes" ref={clientesRef}>
          <div className="container">
            <div className={`section-heading fade-in ${clientesVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Experiencia</span>
              <div>
                <h2>Marcas y empresas</h2>
              </div>
            </div>

            <div className={`experience-groups fade-in-up ${clientesVisible ? 'visible' : ''}`}>
              {clientGroups.map((group) => (
                <div className="experience-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="brand-list">
                    {group.clients.map((client) => <span className="brand-pill" key={client}>{client}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sobre-mi" ref={sobreRef}>
          <div className="container">
            <div className={`section-heading fade-in ${sobreVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Sobre mí</span>
              <div>
                <h2>Nathaly Gómez Martínez</h2>
                <p>Periodista · Fundadora de Insight Estrategia Digital</p>
              </div>
            </div>

            <div className={`about-grid fade-in-up ${sobreVisible ? 'visible' : ''}`}>
              <figure className="about-photo">
                <img src={heroImage} alt="Retrato de Nathaly Gómez" />
              </figure>
              <article className="story-card about-story">
                <h3>Formación y experiencia</h3>
                <p>Licenciada en Comunicación Social, mención en Comunicación Digital, por la Universidad Finis Terrae.</p>
                <p>Experiencia en comunicaciones en Electrolux Group Chile y como periodista corporativa en Santiago.</p>
              </article>
            </div>
          </div>
        </section>

        <VideoCarousel videos={collaborationVideos} />

        <ContactForm profile={profile} />
      </main>

      <a className="float-cta" href="#contacto" aria-label="Ir a contacto">
        Cuéntame tu proyecto
      </a>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span>{profile.name}</span>
            <p>Insight · Estrategia digital</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
