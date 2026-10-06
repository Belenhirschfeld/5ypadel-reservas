import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CopyButton from './CopyButton';
import SportIcon from './SportIcon';
import { ALIAS, DEPOSIT, WHATSAPP_LABEL, waLink, acuitySrc, ars, type Slot } from '../brand';

const EMBED_SCRIPT = 'https://embed.acuityscheduling.com/js/embed.js';

interface CalendarSectionProps {
  slot: Slot;
  onChange: () => void;
}

export default function CalendarSection({ slot, onChange }: CalendarSectionProps) {
  // Acuity's embed script resizes the iframe to fit each step of the flow.
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const s = document.createElement('script');
    s.src = EMBED_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="horarios" className="scroll-mt-16 bg-ink border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6 lg:gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="font-display font-bold uppercase text-[30px] sm:text-[36px] leading-none">
                Elegí día y horario
              </h2>
              <p className="lg:hidden mt-1.5 text-[14px] text-white/65">
                {slot.sport} · {slot.minutes} min · {ars(slot.price)}
              </p>
            </div>
            <button
              type="button"
              onClick={onChange}
              className="lg:hidden shrink-0 h-10 px-4 rounded-full border border-white/15 text-[14px] text-white/85"
            >
              Cambiar turno
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black overflow-hidden">
            <iframe
              key={slot.acuityId}
              src={acuitySrc(slot.acuityId)}
              title={`Horarios libres de ${slot.sport}, ${slot.minutes} minutos`}
              width="100%"
              height="800"
              frameBorder={0}
              className="block w-full min-h-[800px]"
            />
          </div>
        </motion.div>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:mt-[52px]">
          <div className="rounded-3xl bg-ink-2 border border-white/10 p-5">
            <p className="text-[13px] text-white/55 font-semibold uppercase tracking-[0.12em]">Tu turno</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="w-12 h-12 rounded-2xl bg-lime-soft text-lime flex items-center justify-center">
                <SportIcon sport={slot.sport} className="w-7 h-7" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-[17px]">{slot.sport}</p>
                <p className="text-[14px] text-white/65">
                  {slot.minutes} minutos{slot.double ? ' · doble' : ''}
                </p>
              </div>
              <p className="font-semibold text-[18px]">{ars(slot.price)}</p>
            </div>
            <button
              type="button"
              onClick={onChange}
              className="hidden lg:flex mt-4 w-full h-10 rounded-full border border-white/15 hover:border-white/35 text-[14px] text-white/85 items-center justify-center transition-colors"
            >
              Cambiar turno
            </button>
          </div>

          <div className="rounded-3xl bg-ink-2 border border-white/10 p-5">
            <p className="text-[13px] text-white/55 font-semibold uppercase tracking-[0.12em]">Después de reservar</p>
            <ol className="mt-4 flex flex-col gap-4">
              <li className="flex gap-3">
                <Num n={1} />
                <div className="flex-1">
                  <p className="text-[15px]">
                    Transferí la seña de <strong>{ars(DEPOSIT)}</strong> al alias:
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2 rounded-xl bg-black border border-white/10 pl-3.5 pr-1.5 h-11">
                    <span className="font-semibold tracking-wide">{ALIAS}</span>
                    <CopyButton value={ALIAS} />
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <Num n={2} />
                <div className="flex-1">
                  <p className="text-[15px]">Mandá el comprobante por WhatsApp.</p>
                  <a
                    href={waLink(`¡Hola! Reservé un turno de ${slot.sport} (${slot.minutes} min). Te mando el comprobante de la seña de ${ars(DEPOSIT)} a nombre de: `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 h-11 rounded-xl bg-[#25D366] hover:bg-[#2fe072] text-black font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors"
                  >
                    <i className="bi bi-whatsapp" aria-hidden="true" />
                    {WHATSAPP_LABEL}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Num n={3} />
                <p className="flex-1 text-[15px]">
                  El resto, <strong>{ars(slot.price - DEPOSIT)}</strong>, lo pagás en el club.
                </p>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Num({ n }: { n: number }) {
  return (
    <span className="w-6 h-6 shrink-0 mt-0.5 rounded-full bg-lime text-black text-[12px] font-bold flex items-center justify-center">
      {n}
    </span>
  );
}
