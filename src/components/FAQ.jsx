import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqData = [
  {
    question: '¿Insight es una agencia de marketing?',
    answer: 'No. Insight es el proyecto que fundé para trabajar directamente con empresas y marcas personales. Como periodista y estratega digital, analizo cada negocio y sus objetivos antes de proponer contenido o campañas.'
  },
  {
    question: '¿Cómo es el proceso para comenzar a trabajar juntos?',
    answer: 'Comienzo con una conversación para conocer tu negocio, mercado y objetivos. Con ese contexto preparo una propuesta de trabajo; si avanzamos, definimos las acciones, su ejecución y cómo medirlas.'
  },
  {
    question: '¿Trabajas solo con empresas o también con marcas personales?',
    answer: 'Trabajo con empresas y marcas personales. La estrategia, el contenido y la publicidad se ajustan a los objetivos y al contexto de cada proyecto.'
  },
  {
    question: '¿Qué incluye el servicio de Meta Ads?',
    answer: 'El trabajo puede incluir diagnóstico de cuenta, definición de objetivos y audiencias, creatividades, configuración de campañas y revisión de resultados. El alcance se define según las necesidades de cada proyecto.'
  },
  {
    question: '¿Qué es el contenido UGC y para qué sirve?',
    answer: 'El contenido UGC (User Generated Content) usa un estilo cercano y espontáneo para presentar una marca o producto. Creo las piezas según el canal y el objetivo: posicionamiento, captación, confianza o conversión.'
  },
  {
    question: '¿Qué incluye el servicio de Marca Personal?',
    answer: 'Puedo trabajar una auditoría de perfil, el posicionamiento, la estrategia de contenido y mentorías. Está pensado para emprendedoras, profesionales y creadoras que quieren desarrollar su presencia digital.'
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
            <p>Información útil antes de conversar sobre tu proyecto.</p>
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
