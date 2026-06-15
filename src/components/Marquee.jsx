import React from 'react'

export default function Marquee() {
  const items = [
    'ESTRATEGIA DIGITAL',
    'UGC CREATOR',
    'NARRATIVA EDITORIAL',
    'MARCA PERSONAL',
    'STORYTELLING',
    'MARKETING DE CONTENIDOS',
    'COMUNICACIÓN ESTRATÉGICA'
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
