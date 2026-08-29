import { useEffect, useState } from "react";
import { ArrowUpRight, CloseIcon, Logo, MenuIcon } from "./Icons";

const LINKS = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#f2f2f2]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[76px] w-full max-w-[1512px] items-center justify-between px-5 sm:px-8 lg:h-[102px] lg:px-12"
      >
        {/* Left cluster */}
        <div className="flex items-center gap-6 xl:gap-[28px]">
          <a href="#top" aria-label="Om Dhuri — home" className="group shrink-0">
            <Logo className="h-[26px] w-[70px] text-ink transition-transform duration-300 group-hover:-translate-y-0.5 lg:h-[30px] lg:w-[80px]" />
          </a>

          <span className="hidden items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/70 py-[11px] pr-6 pl-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur md:inline-flex">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.13em] text-ink/85">
              AVAILABLE FOR FREELANCE
            </span>
          </span>
        </div>

        {/* Center links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 xl:flex xl:gap-[52px]">
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="group relative text-[12px] font-semibold tracking-[0.13em] text-ink/80 uppercase transition-colors hover:text-ink"
              >
                {l}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-3 rounded-full bg-ink py-[15px] pr-[14px] pl-[26px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_14px_38px_rgba(0,0,0,0.28)] sm:inline-flex"
          >
            {/* <PinIcon className="h-[15px] w-[15px] -rotate-12" /> */}
            <span className="text-[12px] font-semibold tracking-[0.14em]">LET'S CONNECT</span>
            <span className="ml-2 grid h-[26px] w-[26px] place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-[15px] w-[15px]" />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-ink backdrop-blur transition hover:bg-white xl:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-b border-black/5 bg-[#f2f2f2]/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-[1512px] flex-col gap-1 px-5 pt-2 pb-7 sm:px-8">
          {LINKS.map((l, i) => (
            <li key={l} style={{ transitionDelay: `${i * 40}ms` }}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block border-b border-black/5 py-4 text-[13px] font-semibold tracking-[0.18em] text-ink uppercase"
              >
                {l}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-[12px] font-semibold tracking-[0.14em] text-white"
            >
              LET'S CONNECT <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
