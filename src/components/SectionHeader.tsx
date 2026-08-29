export default function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="reveal flex items-center gap-4">
      <span className="text-[11px] font-medium tracking-[0.26em] text-neutral-500 uppercase">
        <span className="font-semibold text-[#2447F4]">{num}</span> — {label}
      </span>
      <span className="h-px w-14 bg-neutral-400/60 lg:w-[52px]" />
    </div>
  );
}
