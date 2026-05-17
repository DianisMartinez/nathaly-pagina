import heroImage from './assets/nataly-hero.jpeg'
import editorialImage from './assets/nataly-editorial.jpeg'

import ThemeToggle from './components/ThemeToggle'
import TestimonialCarousel from './components/TestimonialCarousel'
import VideoGallery from './components/VideoGallery'
import ContactForm from './components/ContactForm'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const profile = {
  name: 'Nataly Gomez Martinez',
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
  company: 'Insigth Estrategia Digital',
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
            <nav className="nav-links" aria-label="Principal">
              <a href="#perfil">Perfil</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#colaboraciones">Colabs</a>
              <a href="#servicios">Servicios</a>
              <a href="#contacto">Contacto</a>
            </nav>

            <ThemeToggle />
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
                Contenido, imagen y estrategia para marcas con <span>voz propia.</span>
              </h1>
              <p className="hero-text">
                {profile.headline}. {profile.intro}
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Quiero colaborar
                </a>
                <a className="button button-secondary" href="#portfolio">
                  Ver propuesta visual
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

        <section className="section" id="perfil" ref={perfilRef}>
          <div className="container">
            <div className={`section-heading fade-in ${perfilVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Perfil</span>
              <div>
                <h2>Una propuesta que cruza periodismo, marketing y construccion de presencia digital.</h2>
                <p>
                  Aterrice la pagina con la informacion publica que comparte su perfil profesional
                  para que ya se sienta mas cercana a su posicionamiento real.
                </p>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-text-col">
                <article className={`story-card fade-in-up ${perfilVisible ? 'visible' : ''}`}>
                  <h3>Posicionamiento</h3>
                  <p>{profile.bio}</p>
                  <p>{profile.audience}</p>
                </article>

                <article className={`story-card fade-in-up ${perfilVisible ? 'visible' : ''}`}>
                  <h3>Mi historia</h3>
                  <p>
                    Soy Nathaly Gómez, periodista con mención en comunicación digital y experta en
                    marketing estratégico. He trabajado en áreas de comunicaciones de empresas
                    globales como Electrolux Group, y como creadora de contenido he alcanzado
                    millones de reproducciones y miles de seguidores aplicando una metodología
                    propia, diseñada para vender sin depender de publicidad pagada.
                  </p>
                  <p>
                    Tuve un emprendimiento que fracasó porque solo vendía cuando invertía en
                    publicidad. Cuando dejaba de pagar, las ventas desaparecían. Esa experiencia me
                    hizo entender lo que muchas marcas viven hoy: la dependencia de estrategias
                    poco sostenibles y el uso poco efectivo del UGC.
                  </p>
                </article>

                <article className={`story-card fade-in-up ${perfilVisible ? 'visible' : ''}`}>
                  <h3>Cómo te puedo ayudar</h3>
                  <p>
                    Te acompaño a construir una presencia digital sólida, con contenido que conecta
                    y convierte. Mi enfoque une marketing real, estrategia y propósito, con una
                    mentalidad orientada a la constancia, para que tu presencia online sea sostenible
                    en el tiempo.
                  </p>
                  <p>
                    No se trata solo de tener likes o seguidores: se trata de construir comunidad y
                    confianza para convertir visibilidad en ventas.
                  </p>
                </article>
              </div>

              <aside className={`media-card fade-in ${perfilVisible ? 'visible' : ''}`}>
                <img
                  className="media-card-image"
                  src={editorialImage}
                  alt="Fotografia editorial de Nataly Gomez Martinez"
                />
                <h3>Que deja claro esta pagina</h3>
                <ul className="detail-list">
                  {deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio" ref={portfolioRef}>
          <div className="container">
            <div className={`section-heading fade-in ${portfolioVisible ? 'visible' : ''}`}>
              <span className="eyebrow">Portfolio</span>
              <div>
                <h2>Bloques listos para mostrar su propuesta de trabajo sin inventar cifras.</h2>
                <p>
                  En vez de dejar metricas falsas, lo pase a una presentacion de capacidades y focos
                  de trabajo que si podemos sostener con la informacion disponible.
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
                  La idea es que quien entre entienda rapido en que la puede contratar y como se
                  traduce eso en contenido y posicionamiento.
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

        <TestimonialCarousel items={testimonials} />

        <ContactForm profile={profile} />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <span>{profile.name}</span>
          <p>Portafolio digital para contenido, marca personal y comunicacion estrategica.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
