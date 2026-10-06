import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpenStatus from './OpenStatus';

const LINKS = [
  { label: 'Precios', href: '#precios' },
  { label: 'El complejo', href: '#complejo' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/90 backdrop-blur-md border-b border-white/[0.08]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center gap-4">
        <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="5&PADEL, inicio">
          <img src="/logo.png" alt="" width={34} height={34} className="w-[34px] h-[34px] rounded-full" />
          <span className="font-display font-bold text-[22px] tracking-wide leading-none">5&amp;PADEL</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 ml-6" aria-label="Secciones">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 h-10 flex items-center rounded-lg text-[14px] text-white/75 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <OpenStatus className="hidden md:flex" />
          <a
            href="#reservar"
            onClick={() => setOpen(false)}
            className="h-10 px-4 sm:px-5 rounded-full bg-lime hover:bg-lime-hover text-black font-semibold text-[14px] flex items-center gap-2 transition-colors"
          >
            <i className="bi bi-calendar-check" aria-hidden="true" />
            Reservar
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[20px]"
          >
            <i className={`bi ${open ? 'bi-x-lg text-[16px]' : 'bi-list'}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Secciones"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/[0.08]"
          >
            <div className="px-4 py-3 flex flex-col">
              <OpenStatus className="flex md:hidden mb-2 self-start" />
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="h-12 flex items-center justify-between text-[16px] text-white/85 border-b border-white/[0.06] last:border-0"
                >
                  {l.label}
                  <i className="bi bi-chevron-right text-white/40 text-[14px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
