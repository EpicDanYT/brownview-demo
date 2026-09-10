import type { Metadata } from "next";
import Link from "next/link";
import { site, photos, stats, serviceAreas } from "@/content/site";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Brownview Landscaping is a Sydney landscaping team based in Ryde, designing, building and maintaining outdoor spaces across the inner north west.",
};

const values = [
  { t: "Do the invisible work properly", b: "Drainage, base preparation and levels are where jobs are won or lost. We would rather spend an extra day underground than come back in two years." },
  { t: "Quote what we will charge", b: "The itemised quote you sign is the invoice you get. If something genuinely changes on site, you hear about it before it is done, not after." },
  { t: "Keep the same crew on site", b: "You should not have to re-explain your job to a new face every week. The people who start your build are the ones who finish it." },
  { t: "Build for the site, not the catalogue", b: "Sydney soil, slope and aspect vary block to block. What worked two streets over might be the wrong answer for yours." },
];

export default function About() {
  return (
    <main id="main">
      <section className="bg-forest py-16 text-cream sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">About us</p>
            <h1 className="display mt-5 max-w-2xl text-5xl sm:text-6xl">
              A Sydney landscaping team that answers the phone.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Brownview started in Ryde and still works the same patch of Sydney. Small enough that you deal with the people doing the work, established enough to handle a full design and construction job properly.
            </p>
          </div>
          <Photo {...photos.aboutTeam} className="aspect-[4/3] w-full rounded-2xl" tone="sage" />
        </div>
      </section>

      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">Started on the tools, still on them.</h2>
            <div className="mt-6 space-y-5">
              <p className="body-text">
                Brownview began with one ute, a trailer and a lot of small garden jobs around Ryde. The work grew because clients kept recommending us to neighbours, which is still where most of our jobs come from.
              </p>
              <p className="body-text">
                Over time we brought design in-house, because too many builds were arriving with plans that could not actually be built on the site they were drawn for. Doing both means what gets drawn is what gets built.
              </p>
              <p className="body-text">
                We have deliberately stayed at a size where the person who quotes your job is on site during it. That limits how many projects we take at once, and we think that is the right trade.
              </p>
            </div>
            <Link href="/quote/" className="btn-clay mt-8">Get a free quote</Link>
          </Reveal>

          <Reveal delay={120}>
            <Photo {...photos.aboutFounder} className="aspect-[4/5] w-full rounded-2xl" tone="clay" />
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-16 text-cream sm:py-20">
        <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <p className="display text-5xl sm:text-6xl"><Counter value={s.value} suffix={s.suffix} /></p>
                <p className="mt-2 text-cream/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap py-20 sm:py-28">
        <p className="eyebrow">How we work</p>
        <h2 className="display mt-4 max-w-2xl text-4xl text-forest sm:text-5xl">Four things we hold to</h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={(i % 2) * 90}>
              <li className="border-t-2 border-clay pt-5">
                <h3 className="display text-2xl text-forest">{v.t}</h3>
                <p className="mt-2 leading-relaxed text-char-soft">{v.b}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-stone bg-cream-warm py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Local</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">We work where we live</h2>
            <p className="body-text mt-5 max-w-sm">
              Staying local means we can get back quickly if something needs attention after handover, and we know how the soil and drainage behave street to street.
            </p>
            <Link href="/contact/" className="btn-outline mt-8">Get in touch</Link>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {serviceAreas.map((a) => (
              <li key={a} className="rounded-full border border-stone bg-cream px-4 py-2 text-sm font-medium text-char-soft">{a}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
