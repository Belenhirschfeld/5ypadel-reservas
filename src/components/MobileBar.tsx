import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WA_CONSULTA } from '../brand';

const onScreen = (id: string) => {
  const r = document.getElementById(id)?.getBoundingClientRect();
  return Boolean(r && r.bottom > 80 && r.top < window.innerHeight - 80);
};

/** Phone-only bottom bar; hides while the selector or the calendar is on screen. */
export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(!onScreen('reservar') && !onScreen('horarios'));
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] flex gap-3"
        >
          <a
            href={WA_CONSULTA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribinos por WhatsApp"
            className="w-14 h-14 shrink-0 rounded-2xl bg-[#25D366] text-black text-[24px] flex items-center justify-center"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
          </a>
          <a
            href="#reservar"
            className="flex-1 h-14 rounded-2xl bg-lime text-black font-semibold text-[17px] flex items-center justify-center gap-2"
          >
            <i className="bi bi-calendar-check" aria-hidden="true" />
            Reservar cancha
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
