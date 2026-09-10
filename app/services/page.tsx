import type { Metadata } from "next";
import Link from "next/link";
import { services, process, faqs } from "@/content/site";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Landscaping services",
  description:
    "Landscape design, construction, garden makeovers, paving, retaining walls, turf, outdoor living and maintenance across Sydney.",
};

export default function Services() {
  return (
    <main id="main">
      <section className="bg-forest py-16 text-cream sm:py-24">
        <div className="wrap">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Services</p>
          <h1 className="display mt-5 max-w-3xl text-5xl sm:text-6xl">
            Everything from the drawing to the last plant in the ground.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Whether it is a full build or a garden that just needs bringing back, here is what we do and what is included.
          </p>
        </div>
      </section>

      <section className="wrap py-16 sm:py-24">
        <ul className="space-y-16 sm:space-y-24">
          {services.map((s, i) => (
            <li key={s.slug} id={s.slug} className="scroll-mt-28">
              <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <Photo {...s.image} zoom className="aspect-[4/3] w-full rounded-2xl" tone={i % 2 ? "clay" : "sage"} />
                </Reveal>
                <Reveal delay={100}>
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="display mt-3 text-4xl text-forest sm:text-5xl">{s.title}</h2>
                  <p className="body-text mt-5">{s.body}</p>
                  <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.14em] text-char">What&apos;s included</h3>
                  <ul className="mt-3 space-y-2">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3 text-char-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote/" className="btn-clay mt-8">Get a quote for this</Link>
                </Reveal>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-stone bg-cream-warm py-20">
        <div className="wrap">
          <p className="eyebrow">Our process</p>
          <h2 className="display mt-4 max-w-2xl text-4xl text-forest sm:text-5xl">How a Brownview job runs</h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 80}>
                <li className="border-t-2 border-clay pt-5">
                  <span className="display block text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-2 text-xl text-forest">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-char-soft">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">Common questions</h2>
          </div>
          <Faq items={faqs} />
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/quote/" className="btn-clay">Get a free quote</Link>
          <Link href="/projects/" className="btn-outline">See the work</Link>
        </div>
      </section>
    </main>
  );
}
