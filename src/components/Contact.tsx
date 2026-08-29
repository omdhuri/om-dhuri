import SectionHeader from "./SectionHeader";
import { ArrowUp, ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./Icons";

const SOCIAL_CIRCLES = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/omdhuri" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/om-dhuri/" },
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com/omdhuri_" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pb-10 pt-24 lg:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(50%_60%_at_50%_100%,#ffffff_0%,rgba(255,255,255,0)_70%)]"
      />
      <div className="relative mx-auto max-w-[1512px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <SectionHeader num="03" label="Contact" />
          <div className="reveal" data-delay="80">
            <h2 className="mt-10 max-w-[900px] text-[clamp(2.6rem,6.4vw,5.8rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
              Let's build something great together<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="reveal" data-delay="160">
            <p className="mt-7 max-w-[440px] text-[15px] leading-relaxed text-neutral-500">
              Have a project in mind, or just want to say hi? My inbox is always open — I usually reply within a day.
            </p>
          </div>
          <div className="reveal" data-delay="240">
            <a
              href="mailto:omdhuri.dev@gmail.com"
              className="group mt-11 inline-flex items-center gap-4 rounded-full bg-white py-3 pl-4 pr-9 shadow-[0_14px_44px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
                <MailIcon className="h-4.5 w-4.5" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink">
                omdhuri.dev@gmail.com
              </span>
              <ArrowUpRight className="h-4.5 w-4.5 text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </div>
          <div className="reveal mt-10 flex items-center gap-4" data-delay="320">
            {SOCIAL_CIRCLES.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex h-13 w-13 items-center justify-center rounded-full bg-white p-3 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-ink group"
              >
                <s.icon className="h-[18px] w-[18px] text-ink transition-colors duration-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-black/5 py-8 sm:flex-row">
          <span className="text-lg font-extrabold tracking-[-0.05em] text-ink">
            OD<span className="text-accent">.</span>
          </span>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            © {new Date().getFullYear()} Om Dhuri — Based in India
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-ink"
          >
            <ArrowUp className="h-4 w-4 text-ink transition-colors duration-300 group-hover:text-white" />
          </a>
        </footer>
      </div>
    </section>
  );
}
