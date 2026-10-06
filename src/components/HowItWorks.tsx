import SectionTitle from './SectionTitle';
import { ALIAS, DEPOSIT, ars } from '../brand';

const STEPS = [
  {
    icon: 'bi-calendar2-week',
    title: 'Elegí tu turno',
    text: 'Deporte, duración, día y horario. Solo ves los horarios que están libres.',
  },
  {
    icon: 'bi-bank',
    title: 'Señá el turno',
    text: `Transferí ${ars(DEPOSIT)} al alias ${ALIAS} y mandá el comprobante por WhatsApp.`,
  },
  {
    icon: 'bi-envelope-check',
    title: 'Te llega la confirmación',
    text: 'Recibís un mail con el turno y un recordatorio el día anterior. Desde ahí podés cancelar o cambiarlo.',
  },
  {
    icon: 'bi-trophy',
    title: 'Vení a jugar',
    text: 'Llegá unos minutos antes. El resto del turno lo pagás en el club.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-ink-2/60 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle eyebrow="Cómo funciona" title="De la web a la cancha" />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-white/10 bg-ink p-6">
              <div className="flex items-center justify-between">
                <i className={`bi ${s.icon} text-lime text-[28px]`} aria-hidden="true" />
                <span className="font-display font-extrabold text-[40px] leading-none text-white/10">{i + 1}</span>
              </div>
              <h3 className="mt-5 font-semibold text-[18px]">{s.title}</h3>
              <p className="mt-2 text-[15px] text-white/65 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
