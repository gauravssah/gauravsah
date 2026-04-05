type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.4em] text-cyan/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
