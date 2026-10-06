import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { ALIAS, DEPOSIT, OPENING_HOURS, WHATSAPP_LABEL, ars } from '../brand';

const QUESTIONS = [
  {
    q: '¿Tengo que crear una cuenta para reservar?',
    a: 'No. Elegís el turno, dejás tu nombre y tu mail, y listo. La confirmación te llega por mail.',
  },
  {
    q: '¿Cómo confirmo el turno?',
    a: `Con una seña de ${ars(DEPOSIT)} por transferencia al alias ${ALIAS}. Mandá el comprobante por WhatsApp al ${WHATSAPP_LABEL}. El resto lo pagás en el club.`,
  },
  {
    q: '¿Puedo cancelar o cambiar el turno?',
    a: 'Sí, sin cargo hasta 12 horas antes, desde el link del mail de confirmación. Con menos de 12 horas ya no se puede cancelar online.',
  },
  {
    q: '¿Qué pasa con la seña si cancelo?',
    a: 'Si cancelás con más de 12 horas, te la devolvemos o la usás para otro turno. Con menos de 12 horas o si no vienen, no se devuelve. Si conseguís quien ocupe tu lugar, no la perdés.',
  },
  {
    q: '¿Y si llueve?',
    a: 'Las canchas son al aire libre. Si llueve y no están en condiciones, reprogramamos el turno sin cargo.',
  },
  {
    q: '¿Qué pasa si llegamos tarde?',
    a: 'Hay 10 minutos de tolerancia. El turno termina a la hora pactada para no atrasar al siguiente.',
  },
  {
    q: '¿Hasta cuándo puedo reservar?',
    a: `Online las 24 horas, hasta 1 hora antes del turno. Las canchas funcionan todos los días de ${OPENING_HOURS}.`,
  },
  {
    q: '¿Qué pasa si falto sin avisar?',
    a: 'A quien falte dos veces sin avisar, el club le puede pedir el pago completo por adelantado.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle eyebrow="Preguntas y políticas" title="Todo claro antes de jugar" />
        <ul className="flex flex-col gap-3">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="rounded-2xl bg-ink-2 border border-white/10">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full min-h-[60px] px-5 py-4 flex items-center justify-between gap-4 text-left font-semibold text-[16px]"
                  >
                    {item.q}
                    <i
                      className={`bi bi-plus-lg text-lime text-[18px] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 -mt-1 text-[15px] text-white/70 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
