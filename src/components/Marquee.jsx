import React from 'react'

export default function Marquee() {
  const items = [
    'ESTRATEGIA DIGITAL',
    'META ADS',
    'CONTENIDO UGC',
    'MARCA PERSONAL',
    'CAPACITACIONES',
    'DECISIONES BASADAS EN DATOS',
    'CRECIMIENTO DE NEGOCIOS'
  ]

  // Duplicamos los elementos para asegurar una transición sin saltos
  const list = [...items, ...items, ...items]

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {list.map((item, idx) => (
          <div className="marquee-item" key={idx}>
            <span className="marquee-dot">•</span>
            <span className="marquee-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
