import heroImage from './assets/nataly-hero.jpeg'
import editorialImage from './assets/nataly-editorial.jpeg'

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
    embedUrl: 'https://www.tiktok.com/embed/v2/7623565697842531602',
    postUrl:
      'https://www.tiktok.com/@nathaly.gomezm/video/7623565697842531602?lang=es-419',
    description:
      'Ejemplo de contenido publicado desde su perfil, ideal para mostrar tono, presencia en camara y adaptacion a formatos de marca.'
  }
]

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
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#inicio">
            {profile.name}
          </a>

          <nav className="nav-links" aria-label="Principal">
            <a href="#perfil">Perfil</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#colaboraciones">Colabs</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section hero-section" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
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

            <div className="hero-panel">
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

        <section className="section" id="perfil">
          <div className="container">
            <SectionHeading
              kicker="Perfil"
              title="Una propuesta que cruza periodismo, marketing y construccion de presencia digital."
              text="Aterrice la pagina con la informacion publica que comparte su perfil profesional para que ya se sienta mas cercana a su posicionamiento real."
            />

            <div className="about-grid">
              <article className="story-card">
                <h3>Posicionamiento</h3>
                <p>{profile.bio}</p>
                <p>{profile.audience}</p>
              </article>

              <aside className="media-card">
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

        <section className="section" id="portfolio">
          <div className="container">
            <SectionHeading
              kicker="Portfolio"
              title="Bloques listos para mostrar su propuesta de trabajo sin inventar cifras."
              text="En vez de dejar metricas falsas, lo pase a una presentacion de capacidades y focos de trabajo que si podemos sostener con la informacion disponible."
            />

            <div className="highlights-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.title}>
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

        <section className="section" id="colaboraciones">
          <div className="container">
            <SectionHeading
              kicker="Colaboraciones"
              title="Una mezcla de presencia editorial, video corto y perfiles activos."
              text="Sume su foto principal, redes reales y un video de ejemplo para que el portfolio funcione como una presentacion mas viva y conectada con su trabajo en plataformas."
            />

            <div className="collab-grid">
              {collaborationVideos.map((video) => (
                <article className="video-card" key={video.postUrl}>
                  <div className="video-frame">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      loading="lazy"
                      allow="encrypted-media;"
                      allowFullScreen
                    />
                  </div>

                  <div className="video-copy">
                    <div className="card-topline">
                      <span>{video.subtitle}</span>
                      <a href={video.postUrl} target="_blank" rel="noreferrer">
                        Ver post
                      </a>
                    </div>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </article>
              ))}

              <aside className="social-showcase">
                <img
                  className="showcase-image"
                  src={editorialImage}
                  alt="Retrato editorial para redes y colaboraciones"
                />

                <div className="showcase-copy">
                  <h3>Perfiles reales y contacto directo</h3>
                  <p>
                    Aqui pueden ver su presencia en Instagram, TikTok y LinkedIn,
                    ademas de un correo directo para propuestas y colaboraciones.
                  </p>

                  <div className="social-links">
                    {socialLinks.map((link) => (
                      <a
                        className="social-pill"
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <SectionHeading
              kicker="Servicios"
              title="Una oferta mas clara para marcas, equipos de marketing y perfiles profesionales."
              text="La idea es que quien entre entienda rapido en que la puede contratar y como se traduce eso en contenido y posicionamiento."
            />

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="testimonios">
          <div className="container">
            <SectionHeading
              kicker="Diferencial"
              title="Dos ideas fuerza para explicar por que su perfil no es solo ejecucion, sino tambien criterio."
              text="Mas adelante esto se puede cambiar por testimonios reales, logos, casos o capturas de resultados."
            />

            <div className="quotes-grid">
              {testimonials.map((item) => (
                <article className="quote-card" key={item.author + item.role}>
                  <p className="quote-text">"{item.quote}"</p>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container">
            <div className="contact-banner">
              <div>
                <span className="eyebrow">Contacto</span>
                <h2>Ya se parece mas a una carta de presentacion real.</h2>
                <p>
                  Ya integre sus fotos, redes y correo real para que esta pagina
                  funcione mejor como portfolio y punto de contacto para marcas.
                </p>
              </div>

              <div className="contact-card">
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
                <p className="contact-note">
                  Si luego me pasas mas links de videos o colaboraciones, puedo
                  sumar una galeria mucho mas completa en esta misma seccion.
                </p>
              </div>
            </div>
          </div>
        </section>
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
