import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import CalendarSection from './components/CalendarSection';
import Prices from './components/Prices';
import StatsBar from './components/StatsBar';
import Complejo from './components/Complejo';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import { BOOKING_URL, SLOTS, findSlot, type Sport } from './brand';

const initialSlot = findSlot(new URLSearchParams(window.location.search).get('turno'));

function scrollToId(id: string) {
  // Wait a frame so a section that just mounted is in the layout.
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
}

export default function App() {
  const [sport, setSport] = useState<Sport | null>(initialSlot?.sport ?? null);
  const [slotId, setSlotId] = useState<string | null>(initialSlot?.acuityId ?? null);
  const [showCalendar, setShowCalendar] = useState(Boolean(initialSlot));

  // Deep links: /reservar opens the selector, /reservar?turno=ID the calendar.
  useEffect(() => {
    if (initialSlot) scrollToId('horarios');
    else if (window.location.pathname.replace(/\/$/, '') === BOOKING_URL) scrollToId('reservar');
  }, []);

  const pickSport = (next: Sport) => {
    setSport(next);
    // Keep the chosen duration when it belongs to this sport; otherwise preselect the single turno.
    setSlotId((cur) =>
      findSlot(cur)?.sport === next ? cur : SLOTS.find((s) => s.sport === next && !s.double)!.acuityId,
    );
  };

  const openCalendar = (id: string) => {
    const slot = findSlot(id)!;
    setSport(slot.sport);
    setSlotId(id);
    setShowCalendar(true);
    window.history.replaceState(null, '', `${BOOKING_URL}?turno=${id}`);
    scrollToId('horarios');
  };

  const changeTurno = () => scrollToId('reservar');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink text-white font-sans">
        <Header />
        <main>
          <Hero
            sport={sport}
            slotId={slotId}
            onPickSport={pickSport}
            onPickSlot={setSlotId}
            onSubmit={openCalendar}
          />
          <StatsBar />
          {showCalendar && slotId && <CalendarSection slot={findSlot(slotId)!} onChange={changeTurno} />}
          <Prices onBook={openCalendar} />
          <Complejo />
          <HowItWorks />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <MobileBar />
      </div>
    </MotionConfig>
  );
}
