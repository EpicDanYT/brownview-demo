import Link from "next/link";
import { site, photos, services, projects, process, stats, serviceAreas, testimonials, faqs } from "@/content/site";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import BeforeAfter from "@/components/BeforeAfter";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden
          fill={i < n ? "#8A5A3B" : "none"} stroke="#8A5A3B" strokeWidth="1.5">
          <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <Photo {...photos.hero} priority hideLabel className="absolute inset-0 h-full w-full" tone="sage" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/95 via-forest/85 to-forest/60" aria-hidden />
        <div className="wrap relative grid min-h-[86vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              Landscaping across Sydney
            </p>
            <h1 className="display mt-5 text-[13vw] sm:text-6xl lg:text-7xl">
              Beautiful outdoor spaces, built to last.
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-cream/85">
              Design, construction and maintenance from one Sydney team. We plan it properly, build it once, and look after it afterwards.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/quote/" className="btn-clay">Get a free quote</Link>
              <Link href="/projects/" className="btn-outline-cream">View our projects</Link>
            </div>
            <p className="mt-8 text-sm text-cream/70">
              Based in Ryde ·{" "}
              <a href={`tel:${site.phoneE164}`} className="font-semibold text-cream underline-offset-4 hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">
              One team, from the first sketch to the final sweep.
            </h2>
            <p className="body-text mt-6">{site.intro}</p>
            <p className="body-text mt-4">
              Most landscaping goes wrong in the parts nobody sees: drainage, levels, base preparation. We spend the time there first, because that is what decides whether the garden still looks right in five years.
            </p>
            <Link href="/about/" className="btn-outline mt-8">More about us</Link>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <Photo {...photos.introA} zoom className="col-span-2 aspect-[16/10] rounded-2xl" tone="sage" />
            <Photo {...photos.introB} zoom className="aspect-square rounded-2xl" tone="clay" />
            <div className="flex flex-col justify-center rounded-2xl bg-forest p-6 text-cream">
              <span className="display text-4xl">
                <Counter value={stats[1].value} suffix={stats[1].suffix} />
              </span>
              <span className="mt-1 text-sm text-cream/70">{stats[1].label}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-stone bg-cream-warm py-20 sm:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display mt-4 max-w-2xl text-4xl text-forest sm:text-5xl">
                Landscaping services for Sydney homes
              </h2>
            </div>
            <Link href="/services/" className="hidden font-semibold text-clay underline-offset-4 hover:underline sm:block">
              All services
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <li className="group h-full overflow-hidden rounded-2xl border border-stone bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(35,33,30,0.4)]">
                  <Photo {...s.image} className="aspect-[16/10] w-full" tone={i % 2 ? "clay" : "sage"} />
                  <div className="p-6">
                    <h3 className="display text-2xl text-forest">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-char-soft">{s.short}</p>
                    <Link href="/services/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay group-hover:gap-2.5 transition-all">
                      Learn more
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Link href="/services/" className="btn-outline mt-10 sm:hidden">All services</Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="wrap py-20 sm:py-28">
        <p className="eyebrow">Why Brownview</p>
        <h2 className="display mt-4 max-w-3xl text-4xl text-forest sm:text-5xl">
          The parts that decide whether a garden lasts
        </h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Design before build", b: "Nothing gets quoted off a guess. We measure, plan and price properly so the number you get is the number you pay." },
            { t: "One crew, start to finish", b: "The people who quoted the job are the ones on site. No handovers between companies where details get lost." },
            { t: "Drainage done first", b: "Water is what kills paving, walls and lawns. We fix where it goes before anything gets laid on top." },
            { t: "Looked after afterwards", b: "We check back after the first season, and offer scheduled maintenance if you want the garden kept sharp." },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 80}>
              <li className="border-t-2 border-clay pt-5">
                <h3 className="display text-xl text-forest">{item.t}</h3>
                <p className="mt-2 leading-relaxed text-char-soft">{item.b}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className="border-y border-stone bg-cream-warm py-20 sm:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Recent work</p>
              <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">Projects around Sydney</h2>
            </div>
            <Link href="/projects/" className="hidden font-semibold text-clay underline-offset-4 hover:underline sm:block">
              All projects
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <li className="group overflow-hidden rounded-2xl border border-stone bg-cream">
                  <Photo {...p.after} zoom className="aspect-[4/3] w-full" tone={i % 2 ? "sage" : "clay"} />
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-clay">{p.category}</p>
                    <h3 className="display mt-2 text-2xl text-forest">{p.name}</h3>
                    <p className="text-sm text-char-soft">{p.suburb}</p>
                    <p className="mt-3 leading-relaxed text-char-soft">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Link href="/projects/" className="btn-outline mt-10 sm:hidden">All projects</Link>
        </div>
      </section>

      {/* Before & after */}
      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Transformations</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">
              Same block. Different life.
            </h2>
            <p className="body-text mt-6 max-w-md">
              Drag the slider to see what changed at {projects[1].name} in {projects[1].suburb}. A steep, unusable slope cut into three terraces you can actually stand on.
            </p>
            <Link href="/projects/" className="btn-forest mt-8">See more transformations</Link>
          </div>
          <Reveal>
            <BeforeAfter before={projects[1].before} after={projects[1].after} className="aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-stone bg-cream-warm py-20 sm:py-28">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-4 max-w-2xl text-4xl text-forest sm:text-5xl">
            Five steps, no surprises in the middle
          </h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 90}>
                <li>
                  <span className="display block text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-3 text-2xl text-forest">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-char-soft">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest py-16 text-cream sm:py-20">
        <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <p className="display text-5xl sm:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-cream/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="wrap py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What clients say</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">Reviews from Sydney homeowners</h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars n={5} />
            <span className="text-sm font-semibold text-char-soft">5.0 average</span>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <li className="flex h-full flex-col rounded-2xl border border-stone bg-cream-warm p-7">
                <Stars n={t.stars} />
                <p className="mt-4 flex-1 leading-relaxed text-char">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-forest">
                  {t.name} <span className="font-normal text-char-soft">· {t.suburb}</span>
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Service areas */}
      <section className="border-y border-stone bg-cream-warm py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">Sydney suburbs we service</h2>
            <p className="body-text mt-5 max-w-sm">
              Based in Ryde, working through the inner north west and lower north shore. Not on the list? Call and we will tell you honestly if we are the right fit.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {serviceAreas.map((area) => (
              <li key={area} className="rounded-full border border-stone bg-cream px-4 py-2 text-sm font-medium text-char-soft">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <Photo {...photos.ctaBand} hideLabel className="absolute inset-0 h-full w-full" tone="sage" />
        <div className="absolute inset-0 bg-forest/90" aria-hidden />
        <div className="wrap relative grid gap-8 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Tell us about your outdoor space.</h2>
            <p className="mt-5 max-w-lg text-lg text-cream/80">
              Send through what you are thinking and any photos of the space. We will come out, walk it with you, and put a real number in front of you. Free, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/quote/" className="btn-clay">Get a free quote</Link>
            <a href={`tel:${site.phoneE164}`} className="btn-outline-cream">{site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-4 text-4xl text-forest sm:text-5xl">Before you get in touch</h2>
            <p className="body-text mt-5 max-w-sm">
              The things people ask most often. Anything else, just call.
            </p>
            <Link href="/contact/" className="btn-outline mt-8">Ask us something</Link>
          </div>
          <Faq items={faqs.slice(0, 5)} />
        </div>
      </section>
    </main>
  );
}
