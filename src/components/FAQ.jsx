import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqData = [
  {
    question: '¿Qué es el contenido UGC y por qué lo necesita mi marca?',
    answer: 'El contenido generado por el usuario (UGC) es material visual creado de forma orgánica y auténtica que emula la recomendación de un amigo. A diferencia de la publicidad corporativa tradicional, el UGC conecta mejor con las audiencias en TikTok e Instagram, aumentando la confianza y la tasa de conversión.'
  },
  {
    question: '¿Cómo se desarrolla una estrategia de contenido digital?',
    answer: 'El proceso inicia con una sesión de diagnóstico. Analizo la propuesta de valor de tu negocio, tu cliente ideal y la competencia. A partir de ahí, defino los pilares de contenido, la estructura de guiones, el tono de voz y una pauta de publicación realista y enfocada a resultados.'
  },
  {
    question: '¿Cuál es el flujo de trabajo para la creación de videos?',
    answer: 'Es un flujo colaborativo y transparente: 1) Definimos el objetivo y el gancho del video. 2) Redacto el guion detallado (incluyendo ganchos y llamados a la acción) para tu aprobación. 3) Realizo la grabación y edición profesional. 4) Te entrego la pieza final lista para su publicación.'
  },
  {
    question: '¿Trabajas por proyectos únicos o bajo modalidad mensual?',
    answer: 'De ambas formas. Para marcas que necesitan un empuje inicial o tienen campañas específicas, realizamos proyectos puntuales. Para marcas que buscan consistencia y crecimiento sostenido en el tiempo, recomiendo la suscripción o fee mensual (retainer) con entregables definidos.'
  },
  {
    question: '¿Cuál es el tiempo promedio de entrega?',
    answer: 'Las piezas UGC individuales o packs iniciales de video se entregan entre 5 y 7 días hábiles tras la aprobación del guion. Los planes editoriales y de estrategia de marca personal requieren entre 10 y 15 días hábiles debido a la fase previa de análisis en profundidad.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, visible] = useScrollAnimation()

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section faq-section" id="faq" ref={ref}>
      <div className="container">
        <div className={`section-heading fade-in ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Preguntas Frecuentes</span>
          <div>
            <h2>Respuestas rápidas</h2>
            <p>Todo lo que necesitas saber antes de que empecemos a trabajar en tu estrategia digital y contenido.</p>
          </div>
        </div>

        <div className={`faq-list fade-in-up ${visible ? 'visible' : ''}`}>
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <article 
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} 
                key={idx}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon-wrapper">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="faq-icon"
                    >
                      <path 
                        d="M2 5L8 11L14 5" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div 
                  className="faq-answer-container"
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
