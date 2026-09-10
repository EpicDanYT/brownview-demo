import type { Metadata } from "next";
import Link from "next/link";
import { projects, projectCategories } from "@/content/site";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed landscaping projects across Sydney: garden makeovers, paving, retaining walls, turf and outdoor living areas, with before and after comparisons.",
};

export default function Projects() {
  return (
    <main id="main">
      <section className="bg-forest py-16 text-cream sm:py-24">
        <div className="wrap">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Projects</p>
          <h1 className="display mt-5 max-w-3xl text-5xl sm:text-6xl">
            Sydney gardens we have designed and built.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Filter by the kind of work you are after, and drag the slider on any project to see what the space looked like before.
          </p>
        </div>
      </section>

      <section className="wrap py-14 sm:py-20">
        <ProjectGrid projects={projects} categories={projectCategories} />
      </section>

      <section className="border-t border-stone bg-cream-warm py-20">
        <div className="wrap text-center">
          <h2 className="display mx-auto max-w-2xl text-4xl text-forest sm:text-5xl">
            Like what you see? Get a free quote.
          </h2>
          <p className="body-text mx-auto mt-5 max-w-lg">
            Send through photos of your space and we will come out, walk it with you and put a real number in front of you.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/quote/" className="btn-clay">Get a free quote</Link>
            <Link href="/services/" className="btn-outline">See all services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
