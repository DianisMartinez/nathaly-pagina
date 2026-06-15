import { useState } from 'react'
import heroImage from './assets/nataly-hero.jpeg'
import editorialImage from './assets/nataly-editorial.jpeg'

import ThemeToggle from './components/ThemeToggle'
import TestimonialCarousel from './components/TestimonialCarousel'
import VideoGallery from './components/VideoGallery'
import ContactForm from './components/ContactForm'
import Marquee from './components/Marquee'
import FAQ from './components/FAQ'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const profile = {
  name: 'Nathaly Gómez',
  headline: 'Periodista especializada en marketing, creadora UGC y consultora en estrategia de contenido digital',
  location: 'Gran Santiago, Chile',
  intro:
    'Una propuesta que mezcla mirada editorial, marketing, UGC y marca personal para marcas y profesionales que necesitan contenido con intencion, presencia visual y una voz clara.',
  bio:
    'Nataly desarrolla narrativas digitales desde una base periodistica, combinando claridad de mensaje, criterio de marca y formatos pensados para redes, posicionamiento y comunicacion estrategica.',
  audience:
    'Este portfolio esta planteado para presentar su trabajo a marcas, founders y equipos de marketing que buscan contenido, UGC, marca personal y comunicacion con una voz consistente.',
  email: 'nathalygomez901@gmail.com',
  instagram: 'https://www.instagram.com/nathaly.gomezm/',
  tiktok: 'https://www.tiktok.com/@nathaly.gomezm?lang=es-419',
  linkedin: 'https://www.linkedin.com/in/nataly-g%C3%B3mez-martinez-6183b4235/',
  company: 'Insight Estrategia Digital',
  education: 'Universidad Finis Terrae',
  mediaKitLabel: 'Disponible para estrategia de contenido, UGC y marca personal'
}

const stats = [
  { value: 'TikTok', label: 'video corto y colaboraciones' },
  { value: 'Instagram', label: 'presencia visual y editorial' },
  { value: 'UGC', label: 'contenido para social y pauta' },
  { value: 'LinkedIn', label: 'marca personal y autoridad' }
]

const brandNotes = [
  'Contenido digital',
  'UGC',
  'Marca personal',
  'Comunicacion corporativa'
]

const highlights = [
  {
    title: 'Estrategia de contenido',
    type: 'Narrativa + plan editorial',
    result: 'Mensajes mas claros y contenido con direccion',
    description:
      'Bajada de tono, pilares de contenido y enfoque de publicacion para marcas o perfiles que necesitan consistencia en su presencia digital.',
    metric: 'Posicionamiento de marca'
  },
  {
    title: 'UGC para marcas',
    type: 'Video corto + piezas sociales',
    result: 'Contenido util para organic y pauta',
    description:
      'Piezas pensadas para mostrar producto o servicio con naturalidad, criterio visual y una voz cercana pero profesional.',
    metric: 'Formato adaptable'
  },
  {
    title: 'Marca personal',
    type: 'Perfil profesional + contenido',
    result: 'Autoridad digital con voz propia',
    description:
      'Trabajo de posicionamiento para especialistas y profesionales que necesitan verse solidos, actuales y coherentes en canales como LinkedIn.',
    metric: 'Perfil profesional'
  }
]

const services = [
  {
    title: 'Estrategia de contenido',
    text: 'Definicion de pilares, tono, enfoques narrativos y estructura editorial para ordenar la presencia digital de una marca o perfil.'
  },
  {
    title: 'UGC',
    text: 'Piezas pensadas para redes y pauta, con enfoque en naturalidad, claridad del mensaje y adaptacion a objetivos de marketing.'
  },
  {
    title: 'Marca personal',
    text: 'Construccion de presencia digital para profesionales, founders o vocerias que necesitan posicionamiento, confianza y consistencia.'
  },
  {
    title: 'Comunicacion corporativa',
    text: 'Apoyo en mensajes y contenido para empresas que buscan ordenar su narrativa interna o externa con criterio estrategico.'
  },
  {
    title: 'Storytelling de marca',
    text: 'Desarrollo de relatos y enfoques que ayudan a traducir productos, servicios o expertise en contenido entendible y atractivo.'
  },
  {
    title: 'Cobertura y adaptacion social',
    text: 'Versiones de contenido para distintos formatos y momentos de campana, manteniendo coherencia visual y de mensaje.'
  }
]

const testimonials = [
  {
    quote:
      'Una mirada periodistica permite que el contenido no solo se vea bien: tambien dice algo claro, ordenado y estrategico.',
    author: 'Diferencial',
    role: 'Narrativa con foco de marca'
  },
  {
    quote:
      'La combinacion entre marketing, UGC y marca personal hace que la propuesta funcione tanto para empresas como para perfiles profesionales.',
    author: 'Enfoque',
    role: 'Contenido adaptable'
  },
  {
    quote:
      'Trabajar con Nataly es tener la seguridad de que el mensaje va a llegar claro, con identidad y con un proposito estrategico detras.',
    author: 'Colaborador',
    role: 'Marketing digital'
  }
]

const deliverables = [
  'Estrategia de contenido digital',
  'Guiones y storytelling para video corto',
  'Piezas UGC para marca y pauta',
  'Desarrollo de marca personal',
  'Mensajes para comunicacion corporativa'
]

const collaborationVideos = [
  {
    title: 'Colaboracion destacada',
    subtitle: 'TikTok x contenido de marca',
    embedUrl: 'https://www.tiktok.com/embed/v2/7623565697842531602?autoplay=1&mute=1',
    postUrl:
      'https://www.tiktok.com/@nathaly.gomezm/video/7623565697842531602?lang=es-419',
    description:
      'Ejemplo de contenido publicado desde su perfil, ideal para mostrar tono, presencia en camara y adaptacion a formatos de marca.',
    category: 'TikTok'
  },
  {
    title: 'Video colaborativo',
    subtitle: 'TikTok',
    embedUrl: 'https://www.tiktok.com/embed/v2/7606451765197671687?autoplay=1&mute=1',
    postUrl:
      'https://www.tiktok.com/@nathaly.gomezm/video/7606451765197671687?lang=es-419',
    description:
      'Segundo ejemplo de contenido en TikTok mostrando versatilidad y presencia en camara.',
    category: 'TikTok'
  }
]

const videoCategories = ['TikTok', 'Instagram', 'UGC', 'LinkedIn']

const socialLinks = [
  { label: 'Instagram', href: profile.instagram },
  { label: 'TikTok', href: profile.tiktok },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Correo', href: `mailto:${profile.email}` }
]

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{kicker}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroRef, heroVisible] = useScrollAnimation()
  const [perfilRef, perfilVisible] = useScrollAnimation()
  const [portfolioRef, portfolioVisible] = useScrollAnimation()
  const [serviciosRef, serviciosVisible] = useScrollAnimation()

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#inicio">
            {profile.name}
          </a>

          <div className="nav-right">
            <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Principal">
              <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre mí</a>
              <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#casos" onClick={() => setMenuOpen(false)}>Casos de éxito</a>
              <a href="#marca-personal" onClick={() => setMenuOpen(false)}>Marca Personal</a>
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
        <section className="section hero-section" id="inicio" ref={heroRef}>
          <div className="container hero-grid">
            <div className={`hero-copy fade-in ${heroVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Portfolio / contenido y estrategia</span>
              <p className="hero-kicker">{profile.location}</p>
              <h1>
                Estrategias digitales que impulsan el crecimiento de empresas y marcas personales.
              </h1>
              <p className="hero-text">
                Combinamos estrategia, contenido y publicidad para atraer clientes, fortalecer el
                posicionamiento y generar resultados medibles.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contacto" aria-label="Agenda una reunión">
                  📅 Agenda una reunión
                </a>
                <a className="button button-secondary" href="#casos" aria-label="Ver casos de éxito">
                  📊 Ver casos de éxito
                </a>
              </div>

              <ul className="tag-list" aria-label="Formatos destacados">
                {brandNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className={`hero-panel fade-in-up ${heroVisible ? 'visible' : ''}`}>
              <div className="hero-card">
                <div className="availability-pill">{profile.mediaKitLabel}</div>

                <div className="portrait-card" aria-hidden="true">
                  <div className="portrait-frame">
                    <img
                      className="portrait-image"
                      src={heroImage}
                      alt="Retrato principal de Nataly Gomez Martinez"
                    />
                  </div>
                </div>

                <div className="hero-card-copy">
                  <strong>{profile.name}</strong>
                  <p>{profile.bio}</p>
                </div>

                <div className="stats-grid">
                  {stats.map((stat) => (
                    <article className="stat-card" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        <section className="section" id="sobre" ref={perfilRef}>
          <div className="container">
            <div className={`section-heading fade-in ${perfilVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Perfil</span>
              <div>
                <h2>Una propuesta que cruza periodismo, marketing y construcción de presencia digital.</h2>
                <p>
                  Con base periodística y visión estratégica, una propuesta que une marketing, UGC
                  y posicionamiento digital en una oferta coherente y adaptable.
                </p>
              </div>
            </div>

            <div className={`bento-container fade-in-up ${perfilVisible ? 'visible' : ''}`}>
              {/* Card 1: Mi Historia (Large - spans 2 columns) */}
              <article className="bento-card bento-card--large">
                <div className="bento-card-header">
                  <span className="bento-card-icon">✍️</span>
                  <h3>Mi historia y trayectoria</h3>
                </div>
                <p>
                  Soy Nathaly Gómez, periodista especializada en comunicación digital, estrategia de contenido y crecimiento de negocios.
                  Mi experiencia combina comunicación corporativa, estrategia digital y creación de contenido, trabajando dentro de empresas y con marcas.
                </p>
                <p>
                  He sido parte de equipos de comunicaciones en multinacionales como Electrolux Group Chile y trabajé como periodista corporativa para un holding de nueve empresas en Santiago.
                  Además, desarrollé proyectos de estrategia digital y colaboré como creadora con marcas nacionales e internacionales como Eucerin, Gillette Venus, Avon, Temu, Pullman y Bigbox.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--accent-deep)', marginTop: '0.5rem' }}>
                  Mi enfoque combina rigor editorial y resultados comerciales: estrategia, contenido y publicidad basada en datos.
                </p>
              </article>

              {/* Card 2: Editorial Portrait (Portrait - spans 2 rows) */}
              <div className="bento-card bento-card--portrait">
                <div className="bento-portrait-frame">
                  <img
                    className="bento-portrait-img"
                    src={editorialImage}
                    alt="Fotografía editorial de Nataly Gomez Martinez"
                  />
                  <div className="bento-portrait-overlay">
                    <h4>Nataly Gómez M.</h4>
                    <p>Consultora & Creadora UGC</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Cómo te ayudo (Medium) */}
              <article className="bento-card bento-card--medium">
                <div className="bento-card-header">
                  <span className="bento-card-icon">🚀</span>
                  <h3>Cómo te puedo ayudar</h3>
                </div>
                <p>
                  Te acompaño a construir una presencia digital sólida, con contenido que conecta y convierte.
                </p>
                <ul className="detail-list" style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
                  {deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              {/* Card 4: Redes y Social Quicklinks (Socials) */}
              <article className="bento-card bento-card--socials">
                <div>
                  <div className="bento-card-header">
                    <span className="bento-card-icon">📲</span>
                    <h3>Presencia Digital</h3>
                  </div>
                  <p>Canales de contenido y redes donde puedes contactarme o ver mi propuesta visual.</p>
                </div>
                <div className="bento-social-grid">
                  <a href={profile.instagram} target="_blank" rel="noreferrer" className="bento-social-item">
                    <span className="bento-social-name">Instagram</span>
                    <span className="bento-social-handle">@nathaly.gomezm</span>
                  </a>
                  <a href={profile.tiktok} target="_blank" rel="noreferrer" className="bento-social-item">
                    <span className="bento-social-name">TikTok</span>
                    <span className="bento-social-handle">@nathaly.gomezm</span>
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="bento-social-item">
                    <span className="bento-social-name">LinkedIn</span>
                    <span className="bento-social-handle">Nataly Gómez</span>
                  </a>
                  <a href={`mailto:${profile.email}`} className="bento-social-item">
                    <span className="bento-social-name">Email</span>
                    <span className="bento-social-handle">Escríbeme</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio" ref={portfolioRef}>
          <div className="container">
            <div className={`section-heading fade-in ${portfolioVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Portfolio</span>
              <div>
                <h2>Tres focos de trabajo que definen como puede acompañar a marcas y perfiles digitales.</h2>
                <p>
                  Cada área de trabajo traduce su experiencia en resultados concretos para marcas,
                  founders y equipos de marketing.
                </p>
              </div>
            </div>

            <div className="highlights-grid">
              {highlights.map((item, i) => (
                <article
                  className={`highlight-card fade-in-up ${portfolioVisible ? 'visible' : ''}`}
                  key={item.title}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="card-topline">
                    <span>{item.type}</span>
                    <span>{item.metric}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <strong className="highlight-result">{item.result}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <VideoGallery videos={collaborationVideos} categories={videoCategories} />

        <section className="section" id="servicios" ref={serviciosRef}>
          <div className="container">
            <div className={`section-heading fade-in ${serviciosVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Servicios</span>
              <div>
                <h2>Una oferta mas clara para marcas, equipos de marketing y perfiles profesionales.</h2>
                <p>
                  Servicios diseñados para marcas, founders y equipos de marketing que quieren
                  contenido con dirección, coherencia y propósito.
                </p>
              </div>
            </div>

            <div className="services-grid">
              {services.map((service, i) => (
                <article
                  className={`service-card fade-in-up ${serviciosVisible ? 'visible' : ''}`}
                  key={service.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="casos">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Casos de éxito</span>
              <div>
                <h2>Empresas y marcas que han confiado en mi trabajo</h2>
                <p>Casos con diagnóstico, estrategia aplicada y resultados medibles.</p>
              </div>
            </div>

            <TestimonialCarousel items={testimonials} />
          </div>
        </section>

        <FAQ />

        <ContactForm profile={profile} />
      </main>

      <a className="float-cta" href="#contacto" aria-label="Ir a contacto">
        Contáctame
      </a>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span>{profile.name}</span>
            <p>Portafolio digital para contenido, marca personal y comunicacion estrategica.</p>
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
