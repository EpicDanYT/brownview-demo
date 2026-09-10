"use client";
import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-stone border-y border-stone">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="display text-lg text-forest sm:text-xl">{item.q}</span>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-stone transition-transform duration-300 ${isOpen ? "rotate-45 border-clay bg-clay text-cream" : "text-forest"}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl pr-10 leading-relaxed text-char-soft">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
