"use client";
import { useState } from "react";
import Photo from "./Photo";
import BeforeAfter from "./BeforeAfter";
import type { Project } from "@/content/site";

export default function ProjectGrid({
  projects, categories,
}: { projects: Project[]; categories: readonly string[] | string[] }) {
  const [active, setActive] = useState("All");
  const [compare, setCompare] = useState<string | null>(null);

  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === c
                ? "border-forest bg-forest text-cream"
                : "border-stone bg-cream text-char-soft hover:border-forest"}`}>
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-7 sm:grid-cols-2">
        {shown.map((p) => {
          const showing = compare === p.slug;
          return (
            <li key={p.slug} className="overflow-hidden rounded-2xl border border-stone bg-cream">
              {showing ? (
                <BeforeAfter before={p.before} after={p.after} className="aspect-[4/3] rounded-none" />
              ) : (
                <Photo {...p.after} zoom className="aspect-[4/3] w-full" tone="sage" />
              )}

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-clay">{p.category}</p>
                <h3 className="display mt-2 text-2xl text-forest">{p.name}</h3>
                <p className="text-sm text-char-soft">{p.suburb}, Sydney</p>
                <p className="mt-3 leading-relaxed text-char-soft">{p.body}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.scope.map((s) => (
                    <li key={s} className="rounded-full bg-sage-pale px-3 py-1 text-xs font-semibold text-forest">{s}</li>
                  ))}
                </ul>

                <button onClick={() => setCompare(showing ? null : p.slug)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clay hover:underline">
                  {showing ? "Hide comparison" : "Compare before & after"}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                    <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {shown.length === 0 && (
        <p className="mt-10 rounded-2xl border border-dashed border-stone p-10 text-center text-char-soft">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
