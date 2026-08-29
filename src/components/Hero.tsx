import {
  ArrowUpRight,
  AsteriskIcon,
  CodeIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  PaletteIcon,
  SparkleIcon,
  XIcon,
} from "./Icons";

const portrait = "/images/portrait2.png";

const FOCUS = [
  {
    n: "01",
    title: "Web Development",
    copy: ["Building modern, responsive", "and high performance websites."],
    Icon: CodeIcon,
  },
  {
    n: "02",
    title: "Creative Development",
    copy: ["Bringing ideas to life with", "clean code & design."],
    Icon: PaletteIcon,
  },
  {
    n: "03",
    title: "Side Projects",
    copy: ["Experimenting, learning,", "and building in public."],
    Icon: SparkleIcon,
  },
];

const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/omdhuri", Icon: GithubIcon },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/om-dhuri/", Icon: LinkedinIcon },
  { label: "X/TWITTER", href: "https://x.com/omdhuri_", Icon: XIcon },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex w-full flex-col overflow-hidden bg-canvas pb-10 lg:min-h-[calc(100svh-102px)] lg:pb-0"
    >
      {/* ------------ ambient background ------------ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-18%] left-1/2 h-[70vw] w-[70vw] max-w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#ffffff_0%,rgba(255,255,255,0)_68%)]" />
        <div className="absolute bottom-0 left-0 h-[40%] w-full bg-[linear-gradient(to_top,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      {/* ------------ middle row: copy + focus list ------------ */}
      <div className="mx-auto w-full max-w-[1512px] max-lg:contents lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-10 lg:px-12">
        {/* ---- left copy ---- */}
        <div className="relative z-20 px-5 pt-10 max-lg:order-1 sm:px-8 lg:w-[360px] lg:shrink-0 lg:px-0 lg:pt-0 xl:w-[420px]">
          <p
            className="reveal text-[12px] font-medium tracking-[0.3em] text-neutral-500 uppercase"
            data-delay="60"
          >
            I Build
          </p>

          <h1
            className="reveal mt-4 text-[clamp(2.75rem,9vw,4.7rem)] leading-[0.95] font-extrabold tracking-[-0.035em] text-ink"
            data-delay="120"
          >
            Digital
            <br />
            Experiences
          </h1>

          <p
            className="reveal mt-6 max-w-[300px] text-[12.5px] leading-[1.9] font-medium tracking-[0.14em] text-neutral-500 uppercase"
            data-delay="200"
          >
            That are fast, accessible
            <br className="hidden sm:block" /> and built to scale.
          </p>

          <a
            href="#projects"
            className="reveal group mt-9 inline-flex items-center gap-5 rounded-full bg-white/70 py-[11px] pr-10 pl-[11px] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.04] backdrop-blur transition-all duration-400 hover:bg-white hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.45)] lg:mt-11"
            data-delay="280"
          >
            <span className="grid h-[50px] w-[50px] place-items-center rounded-full bg-white shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-transform duration-400 group-hover:rotate-45">
              <ArrowUpRight className="h-[19px] w-[19px] text-ink" />
            </span>
            <span className="text-[12.5px] font-semibold tracking-[0.18em] text-ink uppercase">
              View my work
            </span>
          </a>
        </div>

        {/* ---- right: focused on ---- */}
        <div
          className="relative z-20 mt-14 px-5 max-lg:order-4 sm:px-8 lg:mt-0 lg:w-[290px] lg:shrink-0 lg:px-0 xl:w-[320px]"
        >
          <div className="reveal flex items-center gap-4">
            <span className="text-[11px] font-medium tracking-[0.26em] text-neutral-500 uppercase">
              Focused on
            </span>
            <span className="h-px w-14 bg-neutral-400/60 lg:w-[52px]" />
          </div>

          <ul className="mt-8 space-y-7 lg:mt-9 lg:space-y-[30px]">
            {FOCUS.map(({ n, title, copy, Icon }, i) => (
              <li
                key={n}
                className="reveal group flex items-start gap-5"
                data-delay={`${150 + i * 110}`}
              >
                <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full bg-white shadow-[0_10px_26px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.04] transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.4)]">
                  <Icon className="h-[22px] w-[22px] text-ink" />
                </span>
                <div className="pt-0.5">
                  <span className="block text-[11px] font-medium tracking-[0.1em] text-neutral-400">
                    {n}
                  </span>
                  <h3 className="mt-1 text-[13px] font-bold tracking-[0.06em] text-ink uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-neutral-500">
                    {copy[0]}
                    <br className="hidden sm:block" /> {copy[1]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------ portrait ------------ */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-[420px] px-6 max-lg:order-2 lg:absolute lg:bottom-[23%] lg:left-1/2 lg:mt-0 lg:h-[70%] lg:w-auto lg:max-w-none lg:-translate-x-1/2 lg:px-0">
        {/* soft disc */}
        <div
          aria-hidden
          className="soft-ring absolute top-[-4%] left-1/2 aspect-square h-auto w-[118%] -translate-x-1/2 rounded-full lg:h-[112%] lg:w-auto"
        />
        <div
          aria-hidden
          className="absolute top-[2%] left-1/2 aspect-square h-auto w-[100%] -translate-x-1/2 rounded-full bg-white/80 shadow-[inset_0_10px_40px_rgba(255,255,255,0.9)] lg:h-[98%] lg:w-auto"
        />
        <div
          aria-hidden
          className="dot-grid absolute top-[6%] left-1/2 aspect-square h-auto w-[86%] -translate-x-1/2 rounded-full opacity-70 lg:h-[84%] lg:w-auto"
        />

        {/* Orbiting spheres — track matches soft-ring disc, sphere sits on rim */}
        <div
          aria-hidden
          className="orbit-track orbit-track-1 absolute top-[-4%] left-1/2 aspect-square h-auto w-[118%] -translate-x-1/2 lg:h-[112%] lg:w-auto"
        >
          <div className="orbit-sphere orbit-sphere-1">
            <div className="orb orb-counter-1 h-full w-full rounded-full" />
          </div>
        </div>
        <div
          aria-hidden
          className="orbit-track orbit-track-2 absolute top-[-4%] left-1/2 aspect-square h-auto w-[118%] -translate-x-1/2 lg:h-[112%] lg:w-auto"
        >
          <div className="orbit-sphere orbit-sphere-2">
            <div className="orb orb-counter-2 h-full w-full rounded-full" />
          </div>
        </div>

        <img
          src={portrait}
          alt="Om Dhuri, creative developer, wearing a black hoodie"
          className="portrait-fade reveal relative z-10 mx-auto h-full w-full object-contain object-bottom lg:w-auto"
          data-delay="80"
          width={900}
          height={1100}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ------------ name block ------------ */}
      <div className="relative z-20 flex w-full flex-col items-center px-4 max-lg:order-3 lg:px-6 lg:pb-9">
        {/* creative developer pill */}
        <span className="reveal glass-pill inline-flex items-center gap-4 rounded-full border border-white/70 px-8 py-[15px] shadow-[0_14px_44px_-20px_rgba(0,0,0,0.45)] lg:px-[38px] lg:py-[17px]">
          <AsteriskIcon className="h-4 w-4 text-accent" />
          <span className="text-[12px] font-semibold tracking-[0.24em] text-ink uppercase lg:text-[14px]">
            Creative Developer
          </span>
        </span>

        <h2
          className="reveal mt-4 w-full text-center text-[clamp(2.9rem,12.4vw,12.6rem)] leading-[0.82] font-extrabold tracking-[-0.025em] text-ink lg:mt-3"
          data-delay="90"
        >
          <span className="sr-only">Om Dhuri</span>
          <span aria-hidden className="inline-block whitespace-nowrap">
            OM&nbsp;&nbsp;DHURI
          </span>
        </h2>

        <p
          className="reveal mt-4 text-center text-[11px] font-medium tracking-[0.22em] text-neutral-600 uppercase lg:mt-[18px] lg:text-[15px]"
          data-delay="150"
        >
          Code. Design. Solve. Repeat.
        </p>

        {/* social bar */}
        <div
          className="reveal glass-pill mt-7 flex w-full max-w-[690px] items-center justify-between gap-2 rounded-[38px] border border-white/70 p-2.5 shadow-[0_20px_50px_-26px_rgba(0,0,0,0.5)] sm:rounded-full sm:pl-4 lg:mt-8"
          data-delay="210"
        >
          <ul className="flex flex-1 items-center justify-around gap-1 sm:gap-2">
            {SOCIALS.map(({ label, href, Icon }, i) => (
              <li key={label} className="flex flex-1 items-center justify-center">
                {i > 0 && <span className="mr-1 hidden h-7 w-px bg-black/10 sm:mr-3 sm:block" />}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2.5 rounded-full px-2 py-2.5 transition-colors sm:gap-3.5 sm:px-4"
                >
                  <Icon className="h-[19px] w-[19px] shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[21px] sm:w-[21px]" />
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-ink/85 uppercase transition-colors group-hover:text-ink sm:text-[12.5px]">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            aria-label="Get in touch"
            className="group grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-ink hover:text-white sm:h-[52px] sm:w-[52px]"
          >
            <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ------------ scroll to explore ------------ */}
      <div
        aria-hidden
        className="absolute bottom-[52px] left-[46px] z-20 hidden flex-col items-center gap-6 xl:flex"
      >
        <span className="text-[11px] font-medium tracking-[0.28em] text-neutral-500 uppercase [writing-mode:vertical-rl] rotate-180">
          Scroll to explore
        </span>
        <span className="scroll-line relative h-[62px] w-px overflow-hidden bg-neutral-300" />
        <span className="h-[11px] w-[11px] rounded-full bg-ink" />
      </div>

      {/* ------------ based in india badge ------------ */}
      <div className="absolute right-[42px] bottom-[122px] z-20 hidden xl:block">
        <div className="group relative grid h-[146px] w-[146px] place-items-center rounded-full bg-white shadow-[0_22px_50px_-24px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.03]">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-out group-hover:rotate-[360deg]"
          >
            <defs>
              <path id="arc-top" d="M 16 50 A 34 34 0 0 1 84 50" fill="none" />
              <path id="arc-bottom" d="M 19 50 A 31 31 0 0 0 81 50" fill="none" />
            </defs>
            <text
              fill="#0a0a0a"
              fontSize="9"
              fontWeight="700"
              letterSpacing="1.9"
              fontFamily="Inter, sans-serif"
            >
              <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
                BASED IN
              </textPath>
            </text>
            <text
              fill="#0a0a0a"
              fontSize="9"
              fontWeight="700"
              letterSpacing="1.9"
              fontFamily="Inter, sans-serif"
            >
              <textPath href="#arc-bottom" startOffset="50%" textAnchor="middle">
                INDIA
              </textPath>
            </text>
            <circle cx="19" cy="52" r="1.4" fill="#FF7500" />
            <circle cx="81" cy="52" r="1.4" fill="#FF7500" />
          </svg>
          <GlobeIcon className="h-[26px] w-[26px] text-ink" />
        </div>
      </div>
    </section>
  );
}
