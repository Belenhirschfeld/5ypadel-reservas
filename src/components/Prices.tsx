import SectionTitle from './SectionTitle';
import SportIcon from './SportIcon';
import { DEPOSIT, SLOTS, SPORTS, ars, doubleSaving, playersFor } from '../brand';

export default function Prices({ onBook }: { onBook: (id: string) => void }) {
  return (
    <section id="precios" className="scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle
          eyebrow="Canchas y precios"
          title="Precio por cancha, no por persona"
          text={`El precio es por el turno completo. Reservás con una seña de ${ars(DEPOSIT)} y el resto lo pagan en el club.`}
        />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {SPORTS.map((s) => (
            <article key={s.sport} className="rounded-3xl bg-ink-2 border border-white/10 overflow-hidden">
              <img
                src={`/fotos/${s.sport === 'Pádel' ? 'padel-noche' : 'futbol-atardecer'}.webp`}
                alt={`Cancha de ${s.sport.toLowerCase()} de 5&PADEL`}
                loading="lazy"
                className="w-full h-44 sm:h-52 object-cover"
              />
              <div className="p-5 sm:p-7 flex items-center gap-4 border-b border-white/[0.08]">
                <span className="w-14 h-14 rounded-2xl bg-lime-soft text-lime flex items-center justify-center">
                  <SportIcon sport={s.sport} className="w-8 h-8" />
                </span>
                <div>
                  <h3 className="font-display font-bold uppercase text-[30px] leading-none">{s.sport}</h3>
                  <p className="text-[14px] text-white/60 mt-1">{s.tagline} · Al aire libre</p>
                </div>
              </div>

              <ul>
                {SLOTS.filter((x) => x.sport === s.sport).map((x) => {
                  const saving = doubleSaving(x);
                  return (
                    <li key={x.acuityId} className="border-b border-white/[0.06] last:border-0">
                      <div className="px-5 sm:px-7 py-4 flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[16px]">
                            {x.minutes} minutos
                            {saving > 0 && (
                              <span className="ml-2 inline-block whitespace-nowrap align-middle text-[12px] font-semibold text-black bg-lime rounded-full px-2 py-0.5">
                                Ahorrás {ars(saving)}
                              </span>
                            )}
                          </p>
                          <p className="text-[14px] text-white/60">
                            {ars(x.price)} · {ars(Math.round(x.price / playersFor(x.sport)))} c/u entre{' '}
                            {playersFor(x.sport)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onBook(x.acuityId)}
                          className="shrink-0 h-11 px-4 sm:px-5 rounded-full border border-white/20 hover:bg-lime hover:border-lime hover:text-black text-[14px] font-semibold flex items-center gap-2 transition-colors"
                          aria-label={`Reservar ${s.sport} ${x.minutes} minutos`}
                        >
                          Reservar
                          <i className="bi bi-arrow-right" aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
