import { AnimatePresence, motion } from 'framer-motion';
import SportIcon from './SportIcon';
import { SLOTS, SPORTS, ars, doubleSaving, findSlot, playersFor, type Sport } from '../brand';

interface TurnoSelectorProps {
  sport: Sport | null;
  slotId: string | null;
  onPickSport: (s: Sport) => void;
  onPickSlot: (id: string) => void;
  onSubmit: (id: string) => void;
}

export default function TurnoSelector({ sport, slotId, onPickSport, onPickSlot, onSubmit }: TurnoSelectorProps) {
  const selected = findSlot(slotId);
  const options = SLOTS.filter((s) => s.sport === sport);

  return (
    <div
      id="reservar"
      className="scroll-mt-20 rounded-3xl bg-ink-2 border border-white/10 p-5 sm:p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
    >
      <h2 className="font-display font-bold uppercase text-[30px] leading-none">Reservá tu turno</h2>
      <p className="text-white/60 text-[14px] mt-2">Tres pasos. Sin cuentas ni contraseñas.</p>

      <Step n={1} label="¿Qué querés jugar?" />
      <div role="radiogroup" aria-label="Deporte" className="grid grid-cols-2 gap-3">
        {SPORTS.map((s) => {
          const active = sport === s.sport;
          const from = Math.min(...SLOTS.filter((x) => x.sport === s.sport).map((x) => x.price));
          return (
            <button
              key={s.sport}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onPickSport(s.sport)}
              className={`relative rounded-2xl border-2 p-4 text-left transition-colors ${
                active ? 'border-lime bg-lime-soft' : 'border-white/10 hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              <SportIcon sport={s.sport} className={`w-8 h-8 ${active ? 'text-lime' : 'text-white/80'}`} />
              <span className="block mt-3 font-semibold text-[17px]">{s.sport}</span>
              <span className="block text-[13px] text-white/60 mt-0.5">Desde {ars(from)}</span>
              {active && (
                <i className="bi bi-check-circle-fill text-lime absolute top-3 right-3 text-[18px]" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      <Step n={2} label="¿Cuánto tiempo?" dim={!sport} />
      <AnimatePresence mode="wait" initial={false}>
        {sport ? (
          <motion.div
            key={sport}
            role="radiogroup"
            aria-label="Duración del turno"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {options.map((o) => {
              const active = slotId === o.acuityId;
              const saving = doubleSaving(o);
              return (
                <button
                  key={o.acuityId}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => onPickSlot(o.acuityId)}
                  className={`min-h-[64px] rounded-2xl border-2 px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                    active ? 'border-lime bg-lime-soft' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <span
                    className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                      active ? 'border-lime' : 'border-white/35'
                    }`}
                    aria-hidden="true"
                  >
                    {active && <span className="w-2.5 h-2.5 rounded-full bg-lime" />}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-[16px]">
                      {o.minutes} minutos{o.double && <span className="text-white/60 font-normal"> · doble</span>}
                    </span>
                    <span className="block text-[13px] text-white/60">
                      {saving > 0
                        ? `Ahorrás ${ars(saving)}`
                        : `${ars(Math.round(o.price / playersFor(o.sport)))} por jugador`}
                    </span>
                  </span>
                  <span className="font-semibold text-[17px] whitespace-nowrap">{ars(o.price)}</span>
                </button>
              );
            })}
          </motion.div>
        ) : (
          <p key="empty" className="rounded-2xl border-2 border-dashed border-white/10 px-4 py-5 text-[14px] text-white/45">
            Primero elegí el deporte.
          </p>
        )}
      </AnimatePresence>

      <Step n={3} label="Elegí día y horario" dim={!selected} />
      <button
        type="button"
        disabled={!selected}
        onClick={() => selected && onSubmit(selected.acuityId)}
        className="w-full h-14 rounded-2xl bg-lime hover:bg-lime-hover disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-black font-semibold text-[17px] flex items-center justify-center gap-2 transition-colors"
      >
        Ver horarios libres
        <i className="bi bi-arrow-right" aria-hidden="true" />
      </button>
      <p className="text-center text-[13px] text-white/50 mt-3">
        {selected
          ? `${selected.sport} · ${selected.minutes} min · ${ars(selected.price)}`
          : 'Te mostramos solo los horarios disponibles.'}
      </p>
    </div>
  );
}

function Step({ n, label, dim = false }: { n: number; label: string; dim?: boolean }) {
  return (
    <p className={`mt-6 mb-3 flex items-center gap-2.5 text-[15px] font-semibold ${dim ? 'text-white/40' : ''}`}>
      <span
        className={`w-6 h-6 rounded-full text-[12px] font-bold flex items-center justify-center ${
          dim ? 'bg-white/10 text-white/50' : 'bg-lime text-black'
        }`}
      >
        {n}
      </span>
      {label}
    </p>
  );
}
