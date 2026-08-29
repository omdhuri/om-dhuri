import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const CodeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m9 8-4 4 4 4" />
    <path d="m15 8 4 4-4 4" />
  </svg>
);

export const PaletteIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21a9 9 0 1 1 9-9c0 1.66-1.34 2.5-3 2.5h-1.5a2 2 0 0 0-1.4 3.42A1.9 1.9 0 0 1 12 21Z" />
    <circle cx="7.5" cy="12" r="1" fill="currentColor" />
    <circle cx="9.8" cy="8" r="1" fill="currentColor" />
    <circle cx="14.2" cy="7.6" r="1" fill="currentColor" />
    <circle cx="17.2" cy="10.6" r="1" fill="currentColor" />
  </svg>
);

export const SparkleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M11 3.5 12.7 8.3 17.5 10 12.7 11.7 11 16.5 9.3 11.7 4.5 10 9.3 8.3z" />
    <path d="M17.5 15.5 18.3 17.7 20.5 18.5 18.3 19.3 17.5 21.5 16.7 19.3 14.5 18.5 16.7 17.7z" />
  </svg>
);

export const AsteriskIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
    <path d="M12 3.5v17" />
    <path d="M4.6 7.75l14.8 8.5" />
    <path d="M4.6 16.25l14.8-8.5" />
  </svg>
);

export const GithubIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5l-.01-1.77c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.61 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.09 1.09-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.08a9.96 9.96 0 0 1 5.26 0c2-1.36 2.88-1.08 2.88-1.08.58 1.45.21 2.52.11 2.79.68.73 1.09 1.67 1.09 2.82 0 4.03-2.46 4.92-4.8 5.18.38.33.71.97.71 1.96l-.01 2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
);

export const LinkedinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.66c0-1.35-.03-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4z" />
  </svg>
);

export const GlobeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m12 17-1.5 4.5" />
    <path d="M9 3.5 15.5 10" />
    <path d="M14 2.5 21.5 10l-2.6.9a4 4 0 0 0-2.2 1.9l-1.4 2.7-6.8-6.8 2.7-1.4a4 4 0 0 0 1.9-2.2z" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const Logo = (p: P) => (
  <svg viewBox="0 0 92 34" fill="none" {...p}>
    <path
      d="M17.2 1.6C8.6 1.6 2.4 8.2 2.4 17S8.6 32.4 17.2 32.4 32 25.8 32 17 25.8 1.6 17.2 1.6Zm0 6.1c4.9 0 8.3 3.8 8.3 9.3s-3.4 9.3-8.3 9.3S8.9 22.5 8.9 17s3.4-9.3 8.3-9.3Z"
      fill="currentColor"
    />
    <path
      d="M37.6 2.4h11.6C58.6 2.4 65 8.4 65 17s-6.4 14.6-15.8 14.6H37.6V2.4Zm6.5 6v17.2h4.7c5.5 0 9.4-3.5 9.4-8.6s-3.9-8.6-9.4-8.6h-4.7Z"
      fill="currentColor"
    />
    <circle cx="76" cy="28" r="4.6" fill="#FF7500" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const ArrowUp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);
