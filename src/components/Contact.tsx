import CopyButton from './CopyButton';
import SectionTitle from './SectionTitle';
import { ALIAS, DEPOSIT, OPENING_HOURS, WHATSAPP_LABEL, WA_CONSULTA, ars } from '../brand';

const MAP_SRC = 'https://www.google.com/maps?q=Mar%C3%ADa+Grande,+Entre+R%C3%ADos,+Argentina&z=14&output=embed';

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-ink-2/60 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle eyebrow="Contacto" title="Dónde estamos" />

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-4 sm:gap-6">
          <div className="flex flex-col gap-4">
            <a
              href={WA_CONSULTA}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-ink border border-white/10 hover:border-[#25D366] p-5 sm:p-6 flex items-center gap-4 transition-colors"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#25D366] text-black text-[22px] flex items-center justify-center">
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-[13px] text-white/55">WhatsApp</span>
                <span className="block font-semibold text-[18px]">{WHATSAPP_LABEL}</span>
              </span>
              <span className="text-[14px] text-white/70 group-hover:text-white flex items-center gap-1.5">
                Escribinos <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </span>
            </a>

            <div className="rounded-3xl bg-ink border border-white/10 p-5 sm:p-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-lime-soft text-lime text-[22px] flex items-center justify-center">
                <i className="bi bi-bank" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-[13px] text-white/55">Alias para la seña de {ars(DEPOSIT)}</span>
                <span className="block font-semibold text-[18px]">{ALIAS}</span>
              </span>
              <CopyButton value={ALIAS} />
            </div>

            <div className="rounded-3xl bg-ink border border-white/10 p-5 sm:p-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-lime-soft text-lime text-[22px] flex items-center justify-center">
                <i className="bi bi-clock" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-[13px] text-white/55">Horario</span>
                <span className="block font-semibold text-[18px]">Todos los días de {OPENING_HOURS}</span>
              </span>
            </div>

            <div className="rounded-3xl bg-ink border border-white/10 p-5 sm:p-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-lime-soft text-lime text-[22px] flex items-center justify-center">
                <i className="bi bi-geo-alt" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-[13px] text-white/55">Ubicación</span>
                <span className="block font-semibold text-[18px]">María Grande, Entre Ríos</span>
                <span className="block text-[13px] text-white/55">Dirección exacta próximamente</span>
              </span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 min-h-[320px] bg-ink">
            <iframe
              src={MAP_SRC}
              title="Mapa de María Grande, Entre Ríos"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[320px] block grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
