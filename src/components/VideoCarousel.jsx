import { useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function VideoCarousel({ videos }) {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [ref, visible] = useScrollAnimation()

  function scrollTo(index) {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (!card) return
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setCurrent(index)
  }

  function prev() {
    scrollTo(Math.max(0, current - 1))
  }

  function next() {
    scrollTo(Math.min(videos.length - 1, current + 1))
  }

  return (
    <section className="section" id="contenido-redes" ref={ref}>
      <div className="container">
        <div className={`section-heading fade-in ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Instagram</span>
          <div>
            <h2>Contenido y colaboraciones</h2>
          </div>
        </div>

        <div className={`carousel-wrapper fade-in-up ${visible ? 'visible' : ''}`}>
          <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Anterior" disabled={current === 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel-track" ref={trackRef}>
            {videos.map((video) => (
              <div className="carousel-card" key={video.postUrl}>
                <a
                  className={`instagram-post-card ${video.thumbnail ? '' : 'instagram-post-card--fallback'}`}
                  href={video.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver publicación de ${video.category}: ${video.title} en Instagram`}
                >
                  {video.thumbnail ? (
                    <img src={video.thumbnail} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <div className="instagram-post-fallback">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="18" cy="6" r=".8" fill="currentColor" stroke="none" />
                      </svg>
                      <span>{video.category}</span>
                      <strong>{video.title}</strong>
                      <small>Ver publicación</small>
                    </div>
                  )}
                  {video.thumbnail && (
                    <div className="instagram-post-overlay">
                      <span>{video.category}</span>
                      <span className="instagram-post-link-label">Ver en Instagram ↗</span>
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Siguiente" disabled={current === videos.length - 1}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {videos.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Ir a la publicación ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
