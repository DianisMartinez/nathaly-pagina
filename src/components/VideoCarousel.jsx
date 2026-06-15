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
          <span className="eyebrow">Contenido en redes</span>
          <div>
            <h2>Trabajo real en acción</h2>
            <p>UGC, Marca Personal y Meta Ads. Desliza para ver más.</p>
          </div>
        </div>

        <div className={`carousel-wrapper fade-in-up ${visible ? 'visible' : ''}`}>
          <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Anterior" disabled={current === 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel-track" ref={trackRef}>
            {videos.map((video, i) => (
              <div className="carousel-card" key={video.postUrl}>
                <div className="carousel-embed-wrapper">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                    frameBorder="0"
                    loading="lazy"
                    className="carousel-iframe"
                  />
                </div>
                <div className="carousel-card-footer">
                  <span className="video-placeholder-tag">{video.category}</span>
                  <a href={video.postUrl} target="_blank" rel="noreferrer" className="video-open-link-inline">
                    Ver en Instagram ↗
                  </a>
                </div>
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
              aria-label={`Ir al video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
