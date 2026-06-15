import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqData = [
  {
    question: '¿Qué diferencia a Insight de otras agencias de marketing digital?',
    answer: 'En Insight la estrategia va antes que la ejecución. No creamos contenido por crear contenido ni lanzamos campañas sin una dirección clara. Analizamos el negocio, el mercado y los objetivos para diseñar estrategias enfocadas en crecimiento real. Nuestra experiencia en comunicación corporativa dentro de empresas nos permite alinear el marketing con los objetivos reales del negocio.'
  },
  {
    question: '¿Cómo es el proceso para comenzar a trabajar juntos?',
    answer: 'Comenzamos con una reunión de diagnóstico donde analizamos tu negocio, tu mercado y tus objetivos. A partir de ese análisis diseñamos una estrategia personalizada con acciones concretas. Luego pasamos a la ejecución: contenido, campañas o ambas, con medición y optimización constante.'
  },
  {
    question: '¿Trabajan solo con empresas o también con marcas personales?',
    answer: 'Trabajamos con ambas. Nuestra propuesta está diseñada para vender simultáneamente a empresas (con ticket alto) y a marcas personales y mentorías (ticket medio). El mensaje es siempre el mismo: ayudamos a empresas y marcas personales a crecer mediante estrategia, contenido y publicidad basada en datos.'
  },
  {
    question: '¿Qué incluye el servicio de Meta Ads?',
    answer: 'El servicio incluye diagnóstico de cuenta, definición de objetivos y audiencias, creación de creatividades y copies, configuración y lanzamiento de campañas, optimización semanal y reporte de resultados. Todo está enfocado en generar oportunidades comerciales reales, no solo en métricas de vanidad.'
  },
  {
    question: '¿Qué es el contenido UGC y para qué sirve?',
    answer: 'El contenido UGC (User Generated Content) son videos creados para parecer orgánicos y auténticos, como si fueran recomendaciones reales. Son ideales para Meta Ads porque generan mayor confianza y conversión que los anuncios tradicionales. En Insight los diseñamos según el objetivo de cada etapa: posicionamiento, captación, confianza o conversión.'
  },
  {
    question: '¿Qué incluye el servicio de Marca Personal?',
    answer: 'El servicio incluye auditoría de perfil digital, definición de posicionamiento y diferencial, estrategia de contenido personalizada, mentoría y acompañamiento. Está pensado para emprendedoras, profesionales, creadoras de contenido e influencers que quieren construir autoridad digital, posicionarse y monetizar su marca.'
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
            <h2>Preguntas frecuentes</h2>
            <p>Todo lo que necesitas saber antes de que empecemos a trabajar juntos.</p>
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
