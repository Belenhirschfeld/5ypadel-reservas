import { useEffect, useState } from 'react';
import { CLOSE_HOUR, OPEN_HOUR, isOpenNow } from '../brand';

/** "Abierto ahora" / "Cerrado" pill based on the club's local time. */
export default function OpenStatus({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(isOpenNow);

  useEffect(() => {
    const t = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className={`${className} items-center gap-2 h-8 px-3 rounded-full bg-white/[0.06] text-[13px] text-white/80 whitespace-nowrap`}
    >
      <span className={`w-2 h-2 rounded-full ${open ? 'bg-lime' : 'bg-white/35'}`} aria-hidden="true" />
      {open ? `Abierto · hasta las ${CLOSE_HOUR} h` : `Cerrado · abre a las ${OPEN_HOUR} h`}
    </span>
  );
}
