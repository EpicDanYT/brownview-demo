import Image from "next/image";

// Renders a real photo when src is set, otherwise a styled placeholder
// labelled with the shot that belongs there.
export default function Photo({
  src, alt, label, className = "", tone = "sage", priority = false, zoom = false, hideLabel = false,
}: {
  src?: string; alt?: string; label: string; className?: string;
  tone?: "sage" | "clay" | "stone"; priority?: boolean; zoom?: boolean; hideLabel?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt ?? label} fill priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${zoom ? "transition-transform duration-700 hover:scale-105" : ""}`} />
      </div>
    );
  }

  const tones = {
    sage: { bg: "#DCE4D5", fg: "#2F5940" },
    clay: { bg: "#EFE2D6", fg: "#8A5A3B" },
    stone: { bg: "#E8E3DA", fg: "#5C574F" },
  }[tone];

  return (
    <div role="img" aria-label={`Photo placeholder: ${label}`}
      className={`relative flex items-end overflow-hidden ${className}`}
      style={{ backgroundColor: tones.bg }}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <radialGradient id={`g-${label.replace(/\W/g, "")}`} cx="32%" cy="24%" r="78%">
            <stop offset="0%" stopColor={tones.fg} stopOpacity="0.26" />
            <stop offset="100%" stopColor={tones.fg} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#g-${label.replace(/\W/g, "")})`} />
        <circle cx="80%" cy="78%" r="24%" fill={tones.fg} opacity="0.1" />
        <circle cx="20%" cy="86%" r="13%" fill={tones.fg} opacity="0.07" />
      </svg>
      {!hideLabel && (
        <span className="relative m-4 rounded-full bg-cream/85 px-3 py-1 text-[11px] font-semibold tracking-wide text-char">
          {label}
        </span>
      )}
    </div>
  );
}
