import SectionHeader from "./SectionHeader";
import { ArrowUpRight } from "./Icons";

const PROJECTS = [
  {
    num: "01",
    title: "Nova Commerce",
    tags: ["Next.js", "Stripe", "Tailwind"],
    desc: "A headless storefront with sub-second page loads and a checkout that converts.",
    visual: "bg-ink",
  },
  {
    num: "02",
    title: "Pulse Dashboard",
    tags: ["React", "TypeScript", "Charts"],
    desc: "Real-time analytics dashboard with fluid data visualisations and dark mode.",
    visual: "bg-white",
  },
  {
    num: "03",
    title: "Atlas CMS",
    tags: ["Node.js", "Postgres", "Prisma"],
    desc: "A content platform built for editors — structured, quick and painless.",
    visual: "bg-white",
  },
  {
    num: "04",
    title: "Orbit Landing",
    tags: ["GSAP", "Three.js", "Vite"],
    desc: "An award-style marketing site with scroll-driven 3D and buttery motion.",
    visual: "bg-ink",
  },
];

function ProjectVisual({ variant, num }: { variant: string; num: string }) {
  const dark = variant === "bg-ink";
  return (
    <div className={`relative h-52 overflow-hidden rounded-[24px] sm:h-60 ${dark ? "bg-ink" : "bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)]"}`}>
      {dark ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="absolute -right-10 -top-14 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full border border-white/20" />
        </>
      ) : (
        <>
          <div className="dot-grid absolute inset-0" />
          <div className="absolute bottom-6 left-6 flex items-end gap-2">
            {[34, 56, 42, 70, 52].map((h, i) => (
              <span
                key={i}
                className={`w-3 rounded-full ${i === 3 ? "bg-accent" : "bg-ink/15"}`}
                style={{ height: h }}
              />
            ))}
          </div>
        </>
      )}
      <span
        className={`absolute right-6 top-4 text-[88px] font-black leading-none tracking-tighter ${
          dark ? "text-white/10" : "text-ink/5"
        }`}
      >
        {num}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeader num="02" label="Selected Work" />
            <div className="reveal" data-delay="80">
              <h2 className="mt-8 text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-none tracking-[-0.03em] text-ink">
                Projects
              </h2>
            </div>
          </div>
          <div className="reveal" data-delay="140">
            <p className="max-w-[300px] text-[14px] leading-relaxed text-neutral-500">
              A few favourites from the last couple of years — each one shipped, measured and loved.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <div key={p.num} className="reveal" data-delay={i * 100}>
              <a
                href="#contact"
                className="group block rounded-[32px] bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:-translate-y-2"
              >
                <ProjectVisual variant={p.visual} num={p.num} />
                <div className="flex items-center justify-between gap-4 px-4 pb-4 pt-6">
                  <div>
                    <h3 className="text-[22px] font-bold tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-2 max-w-[340px] text-[13.5px] leading-relaxed text-neutral-500">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[#f2f2f2] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f2f2f2] shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:bg-accent">
                    <ArrowUpRight className="h-4.5 w-4.5 text-ink transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
