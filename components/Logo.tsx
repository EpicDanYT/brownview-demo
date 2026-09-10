// Wordmark placeholder. Swap for the real Brownview logo when supplied:
// replace the markup below with <Image src="/logo.svg" ... />.
export default function Logo({ tone = "forest" }: { tone?: "forest" | "cream" }) {
  const main = tone === "cream" ? "text-cream" : "text-forest";
  const mark = tone === "cream" ? "bg-sage" : "bg-clay";
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${mark}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21c0-6 3-11 8-14-1 7-3 11-8 14z" fill="#FBF8F3" />
          <path d="M12 21C12 14 8.5 9.5 4 7c1.5 7 3.5 11 8 14z" fill="#FBF8F3" opacity="0.72" />
        </svg>
      </span>
      <span className={`display text-xl leading-none ${main}`}>
        Brownview
        <span className="block text-[10px] font-sans font-semibold uppercase tracking-[0.22em] opacity-70">
          Landscaping
        </span>
      </span>
    </span>
  );
}
