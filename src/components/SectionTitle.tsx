export default function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-8 sm:mb-10 max-w-2xl">
      <p className="text-lime text-[13px] font-semibold tracking-[0.14em] uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display font-extrabold uppercase text-[clamp(38px,6vw,56px)] leading-[0.95]">{title}</h2>
      {text && <p className="mt-4 text-[16px] sm:text-[17px] text-white/70 leading-relaxed">{text}</p>}
    </div>
  );
}
