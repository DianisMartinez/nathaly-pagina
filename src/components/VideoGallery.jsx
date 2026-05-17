import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ALL = 'Todas'

export default function VideoGallery({ videos, categories }) {
  const [filter, setFilter] = useState(ALL)
  const [ref, visible] = useScrollAnimation()

  const filtered = filter === ALL ? videos : videos.filter((v) => v.category === filter)

  return (
    <section className="section" id="colaboraciones" ref={ref}>
      <div className="container">
        <div className={`section-heading fade-in ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Colaboraciones</span>
          <div>
            <h2>Contenido en redes</h2>
            <p>
              Ejemplos de videos publicados en TikTok.
            </p>
          </div>
        </div>

        <div className={`filter-bar fade-in-up ${visible ? 'visible' : ''}`}>
          <button
            className={`filter-btn ${filter === ALL ? 'active' : ''}`}
            onClick={() => setFilter(ALL)}
          >
            {ALL}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="video-grid">
          {filtered.map((video) => (
            <article
              className={`video-card fade-in-up ${visible ? 'visible' : ''}`}
              key={video.postUrl}
            >
              <div className="video-frame">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="autoplay; encrypted-media;"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <div className="video-copy">
                <div className="card-topline">
                  <span>{video.subtitle}</span>
                  <a href={video.postUrl} target="_blank" rel="noreferrer">
                    Ver en TikTok
                  </a>
                </div>
                <h3>{video.title}</h3>
                <span className="video-category-tag">{video.category}</span>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
