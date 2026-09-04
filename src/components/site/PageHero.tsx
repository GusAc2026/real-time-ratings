type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-deep-foreground">
      <img
        src={image}
        alt={title}
        loading="lazy"
        width={1400}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-glow">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base text-deep-foreground/85 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
