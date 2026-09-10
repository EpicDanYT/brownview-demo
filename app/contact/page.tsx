import type { Metadata } from "next";
import Link from "next/link";
import { site, services, serviceAreas } from "@/content/site";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Brownview Landscaping in Ryde, Sydney. Call ${site.phoneDisplay} or send an enquiry about your outdoor space.`,
};

export default function Contact() {
  return (
    <main id="main">
      <section className="bg-forest py-16 text-cream sm:py-24">
        <div className="wrap">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Contact</p>
          <h1 className="display mt-5 text-5xl sm:text-6xl">Talk to our team.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Questions about a job, a timeline, or whether we cover your suburb. Call during work hours or send an enquiry any time.
          </p>
        </div>
      </section>

      <section className="wrap grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h2 className="display text-3xl text-forest sm:text-4xl">Send an enquiry</h2>
          <p className="body-text mt-3 mb-8">
            After a quote instead? The{" "}
            <Link href="/quote/" className="font-semibold text-clay hover:underline">quote form</Link>{" "}
            asks a few more questions so we can come prepared.
          </p>
          <EnquiryForm
            subject="Brownview website enquiry"
            submitLabel="Send enquiry"
            successTitle="Thanks, that's come through."
            successBody="One of the team will get back to you shortly, usually the same working day."
            fields={[
              { name: "name", label: "Name", required: true, half: true },
              { name: "phone", label: "Phone", type: "tel", required: true, half: true },
              { name: "email", label: "Email", type: "email", required: true, half: true },
              { name: "suburb", label: "Suburb", required: true, half: true },
              { name: "service", label: "Service required", required: true, options: [...services.map((s) => s.title), "Not sure yet"] },
              { name: "message", label: "Message", rows: 5, required: true, placeholder: "Tell us a bit about the space and what you are after." },
            ]}
          />
        </div>

        <aside className="space-y-9 rounded-3xl border border-stone bg-cream-warm p-8">
          <div>
            <h2 className="display text-2xl text-forest">Call us</h2>
            <a href={`tel:${site.phoneE164}`} className="mt-2 block text-2xl font-semibold text-clay hover:underline">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-char-soft hover:text-forest">
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="display text-2xl text-forest">Where we are</h2>
            <address className="mt-3 not-italic leading-relaxed text-char-soft">
              {site.address.street}<br />{site.address.suburb}
            </address>
            <a href={site.mapsLink} className="mt-2 inline-block text-sm font-semibold text-clay hover:underline">
              Open in Google Maps
            </a>
          </div>

          <div>
            <h2 className="display text-2xl text-forest">Hours</h2>
            <dl className="mt-3 space-y-1.5 text-sm">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt className="text-char">{h.day}</dt>
                  <dd className="text-char-soft">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="display text-2xl text-forest">Follow</h2>
            <div className="mt-3 flex gap-4 text-sm font-semibold">
              <a href={site.social.instagram} className="text-clay hover:underline">Instagram</a>
              <a href={site.social.facebook} className="text-clay hover:underline">Facebook</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="wrap pb-20">
        <iframe
          title="Map to Brownview Landscaping"
          className="aspect-[21/9] w-full rounded-2xl border border-stone"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street}, ${site.address.suburb}`)}&output=embed`}
        />
        <p className="mt-6 text-sm leading-relaxed text-char-soft">
          <span className="font-semibold text-char">Service area: </span>
          {serviceAreas.join(", ")} and surrounding suburbs.
        </p>
      </section>
    </main>
  );
}
