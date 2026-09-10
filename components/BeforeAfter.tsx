"use client";
import { useState } from "react";
import Photo from "./Photo";
import type { Img } from "@/content/site";

// Drag-free before/after: a slider input controls the reveal width.
// Works with keyboard and touch, and degrades fine with placeholders.
export default function BeforeAfter({
  before, after, className = "",
}: { before: Img; after: Img; className?: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Photo {...after} className="absolute inset-0 h-full w-full" tone="sage" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="h-full" style={{ width: "100vw", maxWidth: "none" }}>
          <Photo {...before} className="h-full w-full" tone="stone" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-cream" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-forest shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
          </svg>
        </span>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-char/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">Before</span>
      <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-forest/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">After</span>

      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
