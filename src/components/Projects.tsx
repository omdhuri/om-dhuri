import SectionHeader from "./SectionHeader";
import { ArrowUpRight } from "./Icons";

const PROJECTS = [
  {
    num: "01",
    title: "CharismaAI",
    tags: ["Python", "FastAPI", "Gemini API", "JavaScript"],
    desc: "An AI interview coaching platform with multimodal video analysis.",
    visual: "bg-ink", // Use 'bg-ink' for dark cards, 'bg-white' for light cards
    link: "https://github.com/omdhuri",
  },
  {
    num: "02",
    title: "SkillSync",
    tags: ["React", "Vite", "Tailwind CSS"],
    desc: "A career guidance web application with roadmap tracking and resume builder features.",
    visual: "bg-white",
    link: "https://skill-sync-ten-ecru.vercel.app",
  },
  {
    num: "03",
    title: "Regional Food E-Commerce",
    tags: ["React", "JavaScript", "WhatsApp API"],
    desc: "A responsive product catalog website featuring WhatsApp Business API integration for orders.",
    visual: "bg-ink",
    link: "https://sahyadri-international.vercel.app",
  },
  {
    num: "04",
    title: "Smart Café System",
    tags: ["Python", "Flask", "SQLite", "React"],
    desc: "A QR-code based ordering system for real-time tracking and order management.",
    visual: "bg-white",
    link: "https://github.com/omdhuri",
  },
  {
    num: "05",
    title: "TripGenie",
    tags: ["React", "FastAPI", "Python", "SQLite"],
    desc: "A smart travel planner generating personalized itineraries based on preferences, mood, and budget constraints.",
    visual: "bg-ink",
    link: "https://github.com/omdhuri",
  }
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
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
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
