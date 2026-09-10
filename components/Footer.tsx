import Link from "next/link";
import { site, services, serviceAreas } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-4 bg-forest text-cream">
      <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="cream" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Landscape design, construction and maintenance across Sydney. Based in Ryde, working through the inner north west and lower north shore.
          </p>
          <div className="mt-6 flex gap-4 text-sm font-medium">
            <a href={site.social.instagram} className="text-cream/80 underline-offset-4 hover:text-cream hover:underline">Instagram</a>
            <a href={site.social.facebook} className="text-cream/80 underline-offset-4 hover:text-cream hover:underline">Facebook</a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-sage">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/" className="text-cream/80 hover:text-cream">Home</Link></li>
            <li><Link href="/services/" className="text-cream/80 hover:text-cream">Services</Link></li>
            <li><Link href="/projects/" className="text-cream/80 hover:text-cream">Projects</Link></li>
            <li><Link href="/about/" className="text-cream/80 hover:text-cream">About us</Link></li>
            <li><Link href="/contact/" className="text-cream/80 hover:text-cream">Contact</Link></li>
            <li><Link href="/quote/" className="text-cream/80 hover:text-cream">Get a quote</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-sage">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/services/" className="text-cream/80 hover:text-cream">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-sage">Get in touch</h2>
          <div className="mt-4 space-y-2 text-sm">
            <p><a href={`tel:${site.phoneE164}`} className="font-semibold text-cream hover:underline">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="text-cream/80 hover:text-cream">{site.email}</a></p>
            <address className="not-italic text-cream/70">
              {site.address.street}<br />{site.address.suburb}
            </address>
          </div>
          <Link href="/quote/" className="btn bg-clay text-cream hover:bg-clay-deep mt-6 !px-6 !py-3 text-sm">
            Get a free quote
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="wrap py-6">
          <p className="text-xs leading-relaxed text-cream/55">
            <span className="font-semibold text-cream/75">Service areas: </span>
            {serviceAreas.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="wrap flex flex-col gap-3 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Demonstration website.</p>
          <nav className="flex gap-5">
            <Link href="/contact/" className="hover:text-cream">Privacy policy</Link>
            <Link href="/contact/" className="hover:text-cream">Terms &amp; conditions</Link>
          </nav>
        </div>
      </div>
      <div className="h-16 lg:hidden" aria-hidden />
    </footer>
  );
}
