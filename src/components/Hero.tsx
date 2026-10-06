import { motion } from 'framer-motion';
import TurnoSelector from './TurnoSelector';
import { DEPOSIT, OPENING_HOURS, ars, type Sport } from '../brand';

interface HeroProps {
  sport: Sport | null;
  slotId: string | null;
  onPickSport: (s: Sport) => void;
  onPickSlot: (id: string) => void;
  onSubmit: (id: string) => void;
}

const PERKS = [
  { icon: 'bi-person-check', text: 'Sin registrarte' },
  { icon: 'bi-arrow-counterclockwise', text: 'Cancelás gratis hasta 12 h antes' },
  { icon: 'bi-envelope-check', text: 'Confirmación y recordatorio por mail' },
];

export default function Hero(props: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="absolute inset-0" aria-hidden="true">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/fotos/hero-ancho.webp" />
          <img
            src="/fotos/padel-atardecer.webp"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover object-[60%_center]"
          />
        </picture>
        {/* Darkens the photo so the text and the selector stay readable. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink lg:bg-gradient-to-r lg:from-ink/95 lg:via-ink/60 lg:to-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-14 sm:pb-20 grid lg:grid-cols-[1fr_minmax(0,460px)] gap-10 lg:gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-lime text-[13px] font-semibold tracking-[0.14em] uppercase mb-4">
            María Grande · Entre Ríos
          </p>
          <h1 className="font-display font-extrabold uppercase leading-[0.9] text-[clamp(52px,9vw,96px)]">
            Reservá tu cancha
            <br />
            <span className="text-lime">en un minuto</span>
          </h1>
          <p className="mt-5 text-[17px] sm:text-[18px] text-white/75 leading-relaxed max-w-lg">
            Canchas de pádel y fútbol 5 de pasto sintético, al aire libre. Abierto todos los días de {OPENING_HOURS}. Elegí el turno, mirá los
            horarios libres y confirmá con una seña de {ars(DEPOSIT)}.
          </p>

          <ul className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3">
            {PERKS.map((p) => (
              <li key={p.text} className="flex items-center gap-2.5 text-[15px] text-white/85">
                <i className={`bi ${p.icon} text-lime text-[18px]`} aria-hidden="true" />
                {p.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TurnoSelector {...props} />
        </motion.div>
      </div>
    </section>
  );
}
