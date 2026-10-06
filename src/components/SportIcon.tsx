import type { Sport } from '../brand';

/** Line icons: a padel racket with ball, or a football. */
export default function SportIcon({ sport, className = 'w-7 h-7' }: { sport: Sport; className?: string }) {
  return sport === 'Pádel' ? (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <ellipse cx="13" cy="12" rx="8.5" ry="9.5" transform="rotate(-35 13 12)" />
      <path d="M18.5 19.5 26 27" strokeLinecap="round" strokeWidth={3} />
      <circle cx="10" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="26" cy="7" r="3" />
    </svg>
  ) : (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="m16 10.5 5.2 3.8-2 6.1h-6.4l-2-6.1z" fill="currentColor" stroke="none" />
      <path d="M16 10.5V4.5M21.2 14.3l5.6-1.8M19.2 20.4l3.4 4.9M12.8 20.4l-3.4 4.9M10.8 14.3l-5.6-1.8" />
    </svg>
  );
}
