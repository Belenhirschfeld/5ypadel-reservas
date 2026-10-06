import { CLOSE_HOUR, FUTBOL_COURTS, OPEN_HOUR, PADEL_COURTS } from '../brand';

const plural = (n: number, word: string) => `${n === 1 ? 'Cancha' : 'Canchas'} de ${word}`;

const STATS = [
  { value: String(PADEL_COURTS), label: plural(PADEL_COURTS, 'pádel') },
  { value: String(FUTBOL_COURTS), label: plural(FUTBOL_COURTS, 'fútbol 5') },
  { value: '100%', label: 'Pasto sintético' },
  { value: `${OPEN_HOUR}–${CLOSE_HOUR}`, label: 'Todos los días, con luz LED' },
];

export default function StatsBar() {
  return (
    <section aria-label="El complejo en números" className="bg-lime text-black">
      <ul className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <li
            key={s.label}
            className={`py-6 sm:py-8 px-2 text-center border-black/15 ${i % 2 === 0 ? 'border-r' : ''} ${
              i < 2 ? 'border-b lg:border-b-0' : ''
            } lg:border-r lg:last:border-r-0`}
          >
            <p className="font-display font-extrabold text-[44px] sm:text-[56px] leading-none">{s.value}</p>
            <p className="mt-1.5 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em]">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
