import { OPENING_HOURS, WHATSAPP_LABEL, WA_CONSULTA } from '../brand';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] pb-24 lg:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" width={44} height={44} className="w-11 h-11 rounded-full" />
          <div>
            <p className="font-display font-bold text-[22px] leading-none">5&amp;PADEL</p>
            <p className="text-[13px] text-white/55 mt-1">Jugá distinto · María Grande, Entre Ríos</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[14px] text-white/65">
          <li>
            <a href="#reservar" className="min-h-11 inline-flex items-center hover:text-white">
              Reservar
            </a>
          </li>
          <li>
            <a href={WA_CONSULTA} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center hover:text-white">
              WhatsApp {WHATSAPP_LABEL}
            </a>
          </li>
          <li className="min-h-11 inline-flex items-center">Todos los días de {OPENING_HOURS}</li>
        </ul>
      </div>
      <p className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 text-[12px] text-white/40">© 2026 5&amp;PADEL</p>
    </footer>
  );
}
