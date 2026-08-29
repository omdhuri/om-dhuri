import SectionHeader from "./SectionHeader";

const STATS = [
  { value: "03", label: "Years Coding" },
  { value: "05+", label: "Side Projects" },
  { value: "01", label: "Focus: Web Dev" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 lg:px-12">
        <SectionHeader num="01" label="About" />
        <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="reveal" data-delay="80">
            <h2 className="text-[clamp(1.9rem,3.4vw,3.3rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink">
              A student developer with an eye for <span className="text-accent">design</span>, obsessed with clean,
              performant code and interfaces that feel effortless.
            </h2>
          </div>
          <div>
            <div className="reveal" data-delay="160">
              <p className="text-[15.5px] leading-relaxed text-neutral-500">
                I'm Om — a 3rd-year computer engineering student from India who lives at the intersection of engineering and design.
                I spend my time building personal projects, exploring modern web technologies, and turning ambitious ideas into fast,
                accessible web products.
              </p>
              <p className="mt-5 text-[15.5px] leading-relaxed text-neutral-500">
                My approach is simple: sweat the details, keep the code honest, and never ship anything that
                doesn't feel great to use. From pixel-perfect landing pages to full-stack platforms, I care about
                the whole craft.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {STATS.map((s, i) => (
                <div key={s.label} className="reveal" data-delay={220 + i * 90}>
                  <div className="rounded-[22px] bg-white px-4 py-6 text-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-extrabold tracking-tight text-ink">{s.value}</div>
                    <div className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
