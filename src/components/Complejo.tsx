import SectionTitle from './SectionTitle';

const PHOTOS = [
  { name: 'padel-atardecer', alt: 'Canchas de pádel con paredes de blindex al atardecer', caption: 'Pádel con paredes de blindex' },
  { name: 'futbol-atardecer', alt: 'Cancha de fútbol 5 de pasto sintético con las luces encendidas', caption: 'Fútbol 5 iluminado' },
  { name: 'padel-noche', alt: 'Red de la cancha de pádel con la luz LED encendida', caption: 'Luz LED para jugar de noche' },
  { name: 'futbol-cesped', alt: 'Primer plano del pasto sintético de la cancha de fútbol 5', caption: 'Pasto sintético nuevo' },
];

const FEATURES = [
  { icon: 'bi-lightbulb', title: 'Luz LED', text: 'Todas las canchas iluminadas para jugar hasta las 23 h.' },
  { icon: 'bi-grid-3x3', title: 'Pasto sintético', text: 'Superficie nueva en pádel y en fútbol 5.' },
  { icon: 'bi-bounding-box', title: 'Paredes de blindex', text: 'Canchas de pádel con vidrio templado, como en los torneos.' },
  { icon: 'bi-sun', title: 'Al aire libre', text: 'Si llueve y no se puede jugar, reprogramamos sin cargo.' },
];

export default function Complejo() {
  return (
    <section id="complejo" className="scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle
          eyebrow="El complejo"
          title="Canchas nuevas, listas para jugar"
          text="Un complejo nuevo en María Grande, con canchas de pasto sintético e iluminación para jugar de día o de noche."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:h-[560px] gap-3 sm:gap-4">
          {PHOTOS.map((p, i) => (
            <figure
              key={p.name}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 ${
                i === 0 ? 'col-span-2 lg:row-span-2' : i === 1 ? 'col-span-2' : ''
              }`}
            >
              <img
                src={`/fotos/${p.name}.webp`}
                alt={p.alt}
                loading="lazy"
                className={`w-full h-full object-cover lg:aspect-auto ${
                  i === 0 ? 'aspect-square' : i === 1 ? 'aspect-[2/1] object-[center_75%]' : 'aspect-[4/5]'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-10 bg-gradient-to-t from-black/85 to-transparent text-[13px] sm:text-[14px] font-semibold">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {FEATURES.map((f) => (
            <li key={f.title} className="rounded-3xl bg-ink-2 border border-white/10 p-5 flex gap-4">
              <span className="w-11 h-11 shrink-0 rounded-2xl bg-lime-soft text-lime text-[20px] flex items-center justify-center">
                <i className={`bi ${f.icon}`} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-[16px]">{f.title}</h3>
                <p className="mt-1 text-[14px] text-white/65 leading-relaxed">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
