const ITEMS = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "Three.js",
  "Figma",
  "PostgreSQL",
];

export default function Marquee() {
  return (
    <section
      aria-label="Tech stack"
      className="relative overflow-hidden border-y border-black/[0.06] bg-canvas py-7"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f2f2f2] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f2f2f2] to-transparent" />
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-14">
                <span className="text-[13px] font-semibold tracking-[0.22em] whitespace-nowrap text-neutral-500 uppercase transition-colors hover:text-ink">
                  {item}
                </span>
                <span className="h-[5px] w-[5px] rounded-full bg-accent/70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
