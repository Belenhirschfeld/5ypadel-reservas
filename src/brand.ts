export const LIME = '#A6CE39';
export const BOOKING_URL = '/reservar';
export const ACUITY_OWNER = '40475357';
export const WHATSAPP_URL = 'https://wa.me/5493433004128';
/** WhatsApp link that opens the chat with a message already typed. */
export const waLink = (text: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
export const WA_CONSULTA = waLink('¡Hola! Quiero hacer una consulta sobre los turnos en 5&PADEL.');
export const WHATSAPP_LABEL = '343 300-4128';
export const ALIAS = 'belenhir';
export const DEPOSIT = 5000;
export const OPEN_HOUR = 9;
export const CLOSE_HOUR = 23;
export const OPENING_HOURS = `${OPEN_HOUR} a ${CLOSE_HOUR} h`;
export const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export const PADEL_COURTS = 2;
export const FUTBOL_COURTS = 2;

export type Sport = 'Pádel' | 'Fútbol 5';

export interface Slot {
  sport: Sport;
  minutes: number;
  name: string;
  price: number;
  acuityId: string;
  double: boolean;
}

export const SLOTS: Slot[] = [
  { sport: 'Pádel', minutes: 90, name: 'Turno 90 min', price: 22000, acuityId: '98671450', double: false },
  { sport: 'Pádel', minutes: 180, name: 'Doble turno 180 min', price: 41000, acuityId: '98674391', double: true },
  { sport: 'Fútbol 5', minutes: 60, name: 'Turno 60 min', price: 30000, acuityId: '98674404', double: false },
  { sport: 'Fútbol 5', minutes: 120, name: 'Doble turno 120 min', price: 56000, acuityId: '98674419', double: true },
];

export const SPORTS: { sport: Sport; players: number; tagline: string }[] = [
  { sport: 'Pádel', players: 4, tagline: 'Pasto sintético · Paredes de blindex · 4 jugadores' },
  { sport: 'Fútbol 5', players: 10, tagline: 'Pasto sintético · 10 jugadores' },
];

export const ars = (n: number) => `$${n.toLocaleString('es-AR')}`;

export const playersFor = (sport: Sport) => SPORTS.find((s) => s.sport === sport)!.players;

/** Price of two single turnos minus the double turno price. */
export function doubleSaving(slot: Slot) {
  const single = SLOTS.find((s) => s.sport === slot.sport && !s.double);
  return slot.double && single ? single.price * 2 - slot.price : 0;
}

export const findSlot = (id: string | null) => SLOTS.find((s) => s.acuityId === id);

export function acuitySrc(acuityId: string) {
  return `https://app.acuityscheduling.com/schedule.php?owner=${ACUITY_OWNER}&appointmentType=${acuityId}&ref=embedded_csp`;
}

export function isOpenNow(now = new Date()) {
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hourCycle: 'h23', timeZone: TIME_ZONE }).format(now),
  );
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}
