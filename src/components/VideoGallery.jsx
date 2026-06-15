import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ALL = 'Todas'

export default function VideoGallery({ videos, categories }) {
  const [filter, setFilter] = useState(ALL)
  const [activeVideo, setActiveVideo] = useState(null)
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
              Ejemplos de videos publicados en TikTok. Haz clic para reproducir en pantalla completa.
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
              className={`video-card video-card-interactive fade-in-up ${visible ? 'visible' : ''}`}
              key={video.postUrl}
              onClick={() => setActiveVideo(video)}
            >
              <div className="video-thumbnail-wrapper">
                {/* Visual placeholder with dynamic visual styling */}
                <div className="video-placeholder-bg">
                  <div className="video-glow-effect" />
                  <div className="video-placeholder-info">
                    <span className="video-placeholder-tag">{video.category}</span>
                    <h4 className="video-placeholder-title">{video.title}</h4>
                    <p className="video-placeholder-desc">{video.subtitle}</p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="video-play-overlay">
                  <div className="play-button-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="play-text">Ver Video</span>
                </div>
              </div>

              <div className="video-copy">
                <div className="card-topline">
                  <span>{video.subtitle}</span>
                  <span className="video-card-link" onClick={(e) => e.stopPropagation()}>
                    <a href={video.postUrl} target="_blank" rel="noreferrer">
                      Abrir original ↗
                    </a>
                  </span>
                </div>
                <h3>{video.title}</h3>
                <span className="video-category-tag">{video.category}</span>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Video Modal */}
      {activeVideo && (
        <div className="video-lightbox" onClick={() => setActiveVideo(null)} aria-modal="true" role="dialog">
          <div className="lightbox-backdrop" />
          <button 
            className="lightbox-close" 
            onClick={() => setActiveVideo(null)}
            aria-label="Cerrar reproductor"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Phone Mockup Frame for Vertically Oriented UGC/TikTok/Instagram Reels Content */}
            <div className="phone-mockup">
              <div className="phone-screen">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  allow="autoplay; encrypted-media;"
                  allowFullScreen
                  scrolling="no"
                  className="lightbox-iframe"
                />
              </div>
              <div className="phone-notch" />
            </div>
            
            <div className="lightbox-details">
              <span className="lightbox-subtitle">{activeVideo.subtitle}</span>
              <h3 className="lightbox-title">{activeVideo.title}</h3>
              <p className="lightbox-desc">{activeVideo.description}</p>
              <div className="lightbox-actions">
                <a 
                  href={activeVideo.postUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="button button-primary"
                >
                  Ver en {activeVideo.category} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
