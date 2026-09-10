import type { Metadata } from "next";
import { site, services, process } from "@/content/site";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Get a free quote",
  description:
    "Request a free landscaping quote from Brownview. Tell us about your outdoor space and we will come out, walk the site and give you a fixed itemised price.",
};

export default function Quote() {
  return (
    <main id="main">
      <section className="bg-forest py-16 text-cream sm:py-24">
        <div className="wrap">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Free quote</p>
          <h1 className="display mt-5 max-w-3xl text-5xl sm:text-6xl">Tell us about your outdoor space.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            Fill this in and we will review it, then call to talk through your project and book a time to see the site. The visit and the written quote are free, with no obligation.
          </p>
        </div>
      </section>

      <section className="wrap grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <EnquiryForm
          subject="Brownview quote request"
          submitLabel="Request my free quote"
          successTitle="Request received."
          successBody="We'll review what you've sent and call you to talk it through, usually within one working day."
          fields={[
            { name: "name", label: "Name", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", required: true, half: true },
            { name: "email", label: "Email", type: "email", required: true, half: true },
            { name: "postcode", label: "Property suburb or postcode", required: true, half: true },
            { name: "property_type", label: "Property type", required: true, half: true, options: ["Residential", "Commercial"] },
            { name: "service", label: "Type of landscaping", required: true, half: true, options: [...services.map((s) => s.title), "A combination", "Not sure yet"] },
            {
              name: "budget", label: "Approximate budget", required: true, half: true,
              options: ["Under $5,000", "$5,000 – $15,000", "$15,000 – $30,000", "$30,000 – $60,000", "$60,000+", "Not sure yet"],
              note: "A rough range is fine. It helps us scope the job realistically.",
            },
            {
              name: "timeframe", label: "Preferred timeframe", required: true, half: true,
              options: ["As soon as possible", "Within 1–3 months", "3–6 months", "Just planning ahead"],
            },
            {
              name: "description", label: "Tell us about the project", rows: 6, required: true,
              placeholder: "What the space is like now, what you'd like it to become, and anything that's already causing problems (drainage, access, a slope, a failing wall).",
            },
            {
              name: "photos", label: "Photos of the space", type: "file",
              note: "Optional, but genuinely useful. A few phone photos from different angles tells us more than a paragraph.",
            },
          ]}
        />

        <aside className="space-y-9 rounded-3xl border border-stone bg-cream-warm p-8">
          <div>
            <h2 className="display text-2xl text-forest">What happens next</h2>
            <ol className="mt-4 space-y-4">
              {process.slice(0, 3).map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-clay text-sm font-bold text-cream">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-char">{s.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-char-soft">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-stone pt-7">
            <h2 className="display text-2xl text-forest">Rather talk first?</h2>
            <p className="mt-2 text-sm leading-relaxed text-char-soft">
              Some jobs are easier to explain out loud. Call during work hours and we can talk it through.
            </p>
            <a href={`tel:${site.phoneE164}`} className="btn-outline mt-4 w-full">{site.phoneDisplay}</a>
          </div>

          <div className="border-t border-stone pt-7">
            <p className="text-sm leading-relaxed text-char-soft">
              <span className="font-semibold text-char">No obligation.</span> The site visit and written quote cost nothing, and we will tell you honestly if we are not the right fit for the job.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
