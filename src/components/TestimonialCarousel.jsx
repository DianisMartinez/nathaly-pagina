import { useState, useEffect, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function TestimonialCarousel({ items }) {
  const [current, setCurrent] = useState(0)
  const [animDir, setAnimDir] = useState('next')
  const [containerRef, visible] = useScrollAnimation()

  const goTo = useCallback((index) => {
    setAnimDir(index > current ? 'next' : 'prev')
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setAnimDir('next')
    setCurrent((c) => (c + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setAnimDir('prev')
    setCurrent((c) => (c - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  if (!items || items.length === 0) return null

  const item = items[current]

  return (
    <section className="section" id="testimonios" ref={containerRef}>
      <div className="container">
        <div className={`section-heading fade-in ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Testimonios</span>
          <div>
            <h2>Lo que dicen de mi trabajo</h2>
            <p>Opiniones de clientes y colaboradores sobre mi propuesta de valor.</p>
          </div>
        </div>

        <div className={`carousel-wrapper fade-in-up ${visible ? 'visible' : ''}`}>
          <div className="carousel-track">
            <button
              className="carousel-arrow carousel-arrow--prev"
              onClick={prev}
              aria-label="Anterior"
            >
              ←
            </button>

            <div className={`carousel-slide ${animDir}`} key={current}>
              <article className="quote-card carousel-quote">
                <p className="quote-text">"{item.quote}"</p>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </article>
            </div>

            <button
              className="carousel-arrow carousel-arrow--next"
              onClick={next}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>

          <div className="carousel-dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
