import { useState } from 'react'
import heroImage from './assets/nataly-hero.webp'

import ThemeToggle from './components/ThemeToggle'
import TestimonialCarousel from './components/TestimonialCarousel'
import ContactForm from './components/ContactForm'
import Marquee from './components/Marquee'
import FAQ from './components/FAQ'
import VideoCarousel from './components/VideoCarousel'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const profile = {
  name: 'Insight Estrategia Digital',
  headline: 'Estrategias digitales que impulsan el crecimiento de empresas y marcas personales',
  location: 'Chile',
  intro:
    'Combinamos estrategia, contenido y publicidad para atraer clientes, fortalecer el posicionamiento y generar resultados medibles.',
  bio:
    'Periodista especializada en estrategia digital, contenido y crecimiento de negocios. Experiencia en empresas, comunicación corporativa y proyectos de marketing digital.',
  email: 'nathalygomez901@gmail.com',
  instagram: 'https://www.instagram.com/nathaly.gomezm/',
  tiktok: 'https://www.tiktok.com/@nathaly.gomezm?lang=es-419',
  linkedin: 'https://www.linkedin.com/in/nataly-g%C3%B3mez-martinez-6183b4235/',
  company: 'Insight Estrategia Digital',
  education: 'Universidad Finis Terrae',
  mediaKitLabel: 'Estrategia · Contenido · Publicidad'
}

const services = [
  {
    title: 'Estrategia Digital',
    text: 'Diagnóstico y planificación para acelerar el crecimiento. Analizamos el negocio, el mercado y los objetivos para diseñar una estrategia con dirección clara.',
    icon: '📊'
  },
  {
    title: 'Meta Ads',
    text: 'Campañas enfocadas en generar oportunidades comerciales. Segmentación, creatividades y optimización basada en datos para convertir inversión en resultados.',
    icon: '🎯'
  },
  {
    title: 'Contenido UGC',
    text: 'Videos diseñados para captar atención y convertir. Contenido pensado según el objetivo de cada etapa: posicionamiento, captación, confianza o conversión.',
    icon: '🎬'
  },
  {
    title: 'Marca Personal',
    text: 'Posicionamiento para emprendedoras, profesionales y creadoras. Mentorías, auditorías y estrategia de contenido para construir autoridad digital con voz propia.',
    icon: '✨'
  },
  {
    title: 'Capacitaciones',
    text: 'Formación en contenido, marketing y marca personal. Talleres y asesorías para equipos y profesionales que quieren dominar su presencia digital.',
    icon: '📚'
  }
]

const differentials = [
  {
    icon: '📊',
    title: 'Experiencia dentro de empresas',
    text: 'Nuestra visión va más allá del marketing. La experiencia en comunicación corporativa y proyectos empresariales nos permite comprender cómo se toman decisiones dentro de una organización y alinear el marketing con objetivos reales de negocio.'
  },
  {
    icon: '🎯',
    title: 'Contenido con propósito',
    text: 'No todos los videos sirven para vender. Diseñamos contenido según el objetivo de cada etapa: posicionamiento, captación, confianza o conversión.'
  },
  {
    icon: '📈',
    title: 'Decisiones basadas en datos',
    text: 'Cada estrategia se construye a partir de análisis, medición y optimización constante. No actuamos por intuición, actuamos por evidencia.'
  }
]

const clientGroups = [
  {
    category: 'Corporativo / Multinacional',
    clients: ['Electrolux', 'Fensa', 'Mademsa', 'Somela']
  },
  {
    category: 'Empresas',
    clients: ['Clínica Art', 'O2 Aesthetics', 'Bubble & Coffee', 'Lofts Angachilla']
  },
  {
    category: 'UGC / Marca Personal',
    clients: ['Eucerin', 'Gillette Venus', 'Avon', 'Temu', 'Pullman']
  }
]

const testimonials = [
  {
    quote:
      'No creamos contenido por crear contenido ni lanzamos campañas sin una dirección clara. Analizamos el negocio, el mercado y los objetivos para diseñar estrategias enfocadas en crecimiento.',
    author: 'Insight',
    role: 'Estrategia antes que ejecución'
  },
  {
    quote:
      'La combinación entre experiencia corporativa, estrategia digital y creación de contenido hace que nuestra propuesta funcione tanto para empresas como para marcas personales.',
    author: 'Insight',
    role: 'Perspectiva única'
  },
  {
    quote:
      'Cada estrategia se construye a partir de análisis, medición y optimización constante. Trabajar con datos reales es lo que diferencia a Insight de una agencia tradicional.',
    author: 'Insight',
    role: 'Datos y resultados'
  }
]

const collaborationVideos = [
  {
    title: 'UGC · Colaboración de marca',
    subtitle: 'Contenido orgánico para redes',
    embedUrl: 'https://www.instagram.com/p/DU_nNzSAckm/embed/',
    postUrl: 'https://www.instagram.com/p/DU_nNzSAckm/',
    description: 'Pieza UGC diseñada para conectar de forma auténtica con la audiencia y generar confianza de marca.',
    category: 'UGC'
  },
  {
    title: 'UGC · Contenido de producto',
    subtitle: 'Video para pauta y orgánico',
    embedUrl: 'https://www.instagram.com/p/DH_8BO4BT3k/embed/',
    postUrl: 'https://www.instagram.com/p/DH_8BO4BT3k/',
    description: 'Contenido UGC con tono natural y cercano, adaptado para usar en campañas de Meta Ads.',
    category: 'UGC'
  },
  {
    title: 'Marca Personal · Estrategia',
    subtitle: 'Posicionamiento digital',
    embedUrl: 'https://www.instagram.com/p/DIck0b0OpLd/embed/',
    postUrl: 'https://www.instagram.com/p/DIck0b0OpLd/',
    description: 'Ejemplo de contenido aplicando pilares de posicionamiento y estrategia de marca personal.',
    category: 'Marca Personal'
  },
  {
    title: 'Marca Personal · Autoridad',
    subtitle: 'Construcción de presencia',
    embedUrl: 'https://www.instagram.com/p/C-5rNjcpnxZ/embed/',
    postUrl: 'https://www.instagram.com/p/C-5rNjcpnxZ/',
    description: 'Video de marca personal enfocado en construir autoridad y confianza con la audiencia.',
    category: 'Marca Personal'
  },
  {
    title: 'Meta Ads · Clínica O2 Aesthetics',
    subtitle: 'Campaña de captación de leads',
    embedUrl: 'https://www.instagram.com/p/DYxrKY4RCvK/embed/',
    postUrl: 'https://www.instagram.com/p/DYxrKY4RCvK/',
    description: 'Creatividad para Meta Ads enfocada en generar consultas y leads para clínica estética.',
    category: 'Meta Ads'
  },
  {
    title: 'Meta Ads · Dental Art Osorno',
    subtitle: 'Campaña de conversión',
    embedUrl: 'https://www.instagram.com/p/DX7g9othUEJ/embed/',
    postUrl: 'https://www.instagram.com/p/DX7g9othUEJ/',
    description: 'Anuncio de Meta Ads optimizado para atraer nuevos pacientes con contenido de alto impacto.',
    category: 'Meta Ads'
  }
]

const videoCategories = ['UGC', 'Marca Personal', 'Meta Ads']

const socialLinks = [
  { label: 'Instagram', href: profile.instagram },
  { label: 'TikTok', href: profile.tiktok },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Correo', href: `mailto:${profile.email}` }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroRef, heroVisible] = useScrollAnimation()
  const [problemaRef, problemaVisible] = useScrollAnimation()
  const [serviciosRef, serviciosVisible] = useScrollAnimation()
  const [porqueRef, porqueVisible] = useScrollAnimation()
  const [clientesRef, clientesVisible] = useScrollAnimation()
  const [sobreRef, sobreVisible] = useScrollAnimation()

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#inicio">
            <img src="/1.webp" alt="Insight Estrategia Digital" />
          </a>

          <div className="nav-right">
            <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Principal">
              <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
              <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#clientes" onClick={() => setMenuOpen(false)}>Casos de éxito</a>
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
        {/* Sección 1: Hero */}
        <section className="section hero-section" id="inicio" ref={heroRef}>
          <div className="container hero-grid">
            <div className={`hero-copy fade-in ${heroVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Insight Estrategia Digital</span>
              <p className="hero-kicker">{profile.location}</p>
              <h1>
                Estrategias digitales que impulsan el crecimiento de <span>empresas y marcas personales.</span>
              </h1>
              <p className="hero-text">
                {profile.intro}
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Agenda una reunión
                </a>
                <a className="button button-secondary" href="#clientes">
                  Ver casos de éxito
                </a>
              </div>
            </div>

            <div className={`hero-panel fade-in-up ${heroVisible ? 'visible' : ''}`}>
              <div className="hero-card">
                <div style={{ textAlign: 'center', padding: '1rem 1rem 0.5rem' }}>
                  <img
                    src="/1.webp"
                    alt="Insight Estrategia Digital"
                    style={{ width: '100%', maxWidth: '260px', height: 'auto' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '0.5rem 0' }}>
                  {[
                    { icon: '📊', label: 'Estrategia Digital', desc: 'Diagnóstico y planificación enfocada en crecimiento' },
                    { icon: '🎯', label: 'Meta Ads', desc: 'Campañas que generan oportunidades comerciales' },
                    { icon: '🎬', label: 'Contenido UGC', desc: 'Videos que captan atención y convierten' },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'rgba(255,255,255,0.35)',
                      borderRadius: '12px'
                    }}>
                      <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{item.icon}</span>
                      <div>
                        <strong style={{ fontSize: '0.9rem', display: 'block' }}>{item.label}</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>
                    Han confiado en nosotros
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['Electrolux', 'Eucerin', 'Gillette Venus', 'Avon', 'Pullman', 'Clínica Art'].map((c) => (
                      <span key={c} style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.6rem',
                        background: 'rgba(0,0,0,0.06)',
                        borderRadius: '999px'
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* Sección 2: El problema */}
        <section className="section" id="problema" ref={problemaRef}>
          <div className="container">
            <div className={`section-heading fade-in ${problemaVisible ? 'visible' : ''}`}>
              <span className="eyebrow">El problema</span>
              <div>
                <h2>El problema no es publicar más. Es tener una estrategia.</h2>
                <p>
                  Muchas empresas invierten en contenido y publicidad sin una dirección clara.
                </p>
              </div>
            </div>

            <div className={`bento-container fade-in-up ${problemaVisible ? 'visible' : ''}`} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <article className="bento-card bento-card--large" style={{ gridColumn: 'span 2' }}>
                <div className="bento-card-header">
                  <span className="bento-card-icon">⚠️</span>
                  <h3>¿Te suena familiar?</h3>
                </div>
                <ul className="detail-list" style={{ fontSize: '1.05rem', lineHeight: '2' }}>
                  <li>No todos los videos generan resultados.</li>
                  <li>No todas las campañas convierten.</li>
                  <li>Más publicaciones no siempre significan más clientes.</li>
                </ul>
                <p style={{ marginTop: '1.2rem', fontStyle: 'italic', color: 'var(--accent-deep)' }}>
                  En Insight analizamos el negocio completo para diseñar estrategias enfocadas en crecimiento.
                </p>
              </article>

              <article className="bento-card bento-card--medium">
                <div className="bento-card-header">
                  <span className="bento-card-icon">💡</span>
                  <h3>Nuestra solución</h3>
                </div>
                <p>
                  Antes de ejecutar, analizamos. Antes de publicar, estrategizamos. Cada acción parte de un diagnóstico real de tu negocio, mercado y objetivos.
                </p>
                <ul className="detail-list" style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
                  <li>Diagnóstico de negocio y mercado</li>
                  <li>Estrategia con dirección clara</li>
                  <li>Contenido con propósito definido</li>
                  <li>Publicidad orientada a conversión</li>
                  <li>Medición y optimización constante</li>
                </ul>
              </article>

              <article className="bento-card bento-card--socials">
                <div>
                  <div className="bento-card-header">
                    <span className="bento-card-icon">📲</span>
                    <h3>Síguenos</h3>
                  </div>
                  <p>Conecta con Insight en redes sociales y conoce nuestra estrategia en acción.</p>
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
                    <span className="bento-social-handle">Nathaly Gómez</span>
                  </a>
                  <a href={`mailto:${profile.email}`} className="bento-social-item">
                    <span className="bento-social-name">Email</span>
                    <span className="bento-social-handle">Escríbenos</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Sección 3: Qué hacemos / Servicios */}
        <section className="section" id="servicios" ref={serviciosRef}>
          <div className="container">
            <div className={`section-heading fade-in ${serviciosVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Servicios</span>
              <div>
                <h2>Qué hacemos</h2>
                <p>
                  Una oferta integrada de estrategia, contenido y publicidad para hacer crecer tu negocio o marca personal.
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
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 4: Por qué Insight */}
        <section className="section" id="por-que" ref={porqueRef}>
          <div className="container">
            <div className={`section-heading fade-in ${porqueVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Nuestro diferencial</span>
              <div>
                <h2>¿Por qué Insight?</h2>
                <p>
                  Estrategia antes que ejecución. No creamos contenido por crear contenido ni lanzamos campañas sin una dirección clara.
                </p>
              </div>
            </div>

            <div className="highlights-grid">
              {differentials.map((item, i) => (
                <article
                  className={`highlight-card fade-in-up ${porqueVisible ? 'visible' : ''}`}
                  key={item.title}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="card-topline">
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 5: Casos de éxito / Clientes */}
        <section className="section" id="clientes" ref={clientesRef}>
          <div className="container">
            <div className={`section-heading fade-in ${clientesVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Casos de éxito</span>
              <div>
                <h2>Empresas y marcas que han confiado en mi trabajo</h2>
                <p>
                  Experiencia real trabajando con empresas multinacionales, pymes y marcas personales en distintos rubros.
                </p>
              </div>
            </div>

            <div className={`fade-in-up ${clientesVisible ? 'visible' : ''}`}>
              {clientGroups.map((group, gi) => (
                <div key={group.category} style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '1rem'
                  }}>
                    {group.category}
                  </h4>
                  <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
                    {group.clients.map((client, ci) => (
                      <div
                        key={client}
                        className={`service-card fade-in-up ${clientesVisible ? 'visible' : ''}`}
                        style={{
                          transitionDelay: `${(gi * 4 + ci) * 60}ms`,
                          textAlign: 'center',
                          padding: '1.2rem',
                          fontWeight: 700,
                          fontSize: '0.95rem'
                        }}
                      >
                        {client}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <TestimonialCarousel items={testimonials} />

        {/* Sección 6: Sobre Nathaly */}
        <section className="section" id="sobre-mi" ref={sobreRef}>
          <div className="container">
            <div className={`section-heading fade-in ${sobreVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Sobre mí</span>
              <div>
                <h2>Soy Nathaly Gómez</h2>
                <p>
                  Periodista de la Universidad Finis Terrae especializada en comunicación digital, estrategia de contenido y crecimiento de negocios.
                </p>
              </div>
            </div>

            <div className={`bento-container fade-in-up ${sobreVisible ? 'visible' : ''}`}>
              <article className="bento-card bento-card--large">
                <div className="bento-card-header">
                  <span className="bento-card-icon">👩‍💼</span>
                  <h3>Mi trayectoria</h3>
                </div>
                <p>
                  Mi experiencia combina tres perspectivas poco comunes en una misma profesional: <strong>comunicación corporativa, estrategia digital y creación de contenido.</strong>
                </p>
                <p>
                  He trabajado en empresas multinacionales como Electrolux Group Chile en el área de comunicaciones, además de desempeñarme como periodista corporativa para un holding de nueve empresas en Santiago.
                </p>
                <p>
                  Paralelamente, he desarrollado proyectos de estrategia digital para empresas de distintos rubros y colaborado como creadora de contenido con marcas nacionales e internacionales como Eucerin, Gillette Venus, Avon, Temu, Pullman Vitacura, Adolfo Domínguez y Bigbox, entre otras.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--accent-deep)', marginTop: '0.5rem' }}>
                  Hoy lidero Insight Estrategia Digital, donde ayudo a empresas y marcas personales a crecer mediante estrategia, contenido y publicidad basada en datos.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a className="button button-primary" href="#contacto">
                    Conoce mi trayectoria
                  </a>
                </div>
              </article>

              <div className="bento-card bento-card--portrait">
                <div className="bento-portrait-frame">
                  <img
                    className="bento-portrait-img"
                    src={heroImage}
                    alt="Nathaly Gómez - Insight Estrategia Digital"
                  />
                  <div className="bento-portrait-overlay">
                    <h4>Nathaly Gómez</h4>
                    <p>Fundadora · Insight</p>
                  </div>
                </div>
              </div>

              <article className="bento-card bento-card--medium" id="marca-personal">
                <div className="bento-card-header">
                  <span className="bento-card-icon">✨</span>
                  <h3>Marca Personal</h3>
                </div>
                <p>Para emprendedoras, creadoras de contenido, influencers y profesionales que quieren posicionarse con estrategia.</p>
                <ul className="detail-list" style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
                  <li>Mentorías personalizadas</li>
                  <li>Auditorías de perfil digital</li>
                  <li>Estrategia de posicionamiento</li>
                  <li>Monetización de contenido</li>
                  <li>Estrategia de contenido</li>
                </ul>
              </article>

              <article className="bento-card bento-card--socials">
                <div>
                  <div className="bento-card-header">
                    <span className="bento-card-icon">🎓</span>
                    <h3>Formación</h3>
                  </div>
                  <p>Base académica y certificaciones que respaldan cada estrategia.</p>
                </div>
                <div className="bento-social-grid">
                  <div className="bento-social-item">
                    <span className="bento-social-name">Universidad</span>
                    <span className="bento-social-handle">Finis Terrae</span>
                  </div>
                  <div className="bento-social-item">
                    <span className="bento-social-name">Especialización</span>
                    <span className="bento-social-handle">Comunicación Digital</span>
                  </div>
                  <div className="bento-social-item">
                    <span className="bento-social-name">Experiencia</span>
                    <span className="bento-social-handle">Empresas + Agencia</span>
                  </div>
                  <div className="bento-social-item">
                    <span className="bento-social-name">Foco</span>
                    <span className="bento-social-handle">Estrategia & Datos</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <FAQ />

        <VideoCarousel videos={collaborationVideos} />

        {/* Sección 7: CTA Final + Contacto */}
        <section className="section" id="cta-final" style={{ textAlign: 'center', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <span className="eyebrow">¿Listo para crecer?</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.5rem' }}>
              ¿Listo para potenciar tu crecimiento digital?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', margin: '1rem 0 2rem' }}>
              Agenda una reunión y diseñemos juntos la estrategia que tu negocio necesita.
            </p>
            <a className="button button-primary" href="#contacto" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Agenda una reunión
            </a>
          </div>
        </section>

        <ContactForm profile={profile} />
      </main>

      <a className="float-cta" href="#contacto" aria-label="Ir a contacto">
        Agenda reunión
      </a>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span>{profile.name}</span>
            <p>Estrategia, contenido y publicidad para empresas y marcas personales.</p>
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
