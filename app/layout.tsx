import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileQuoteBar from "@/components/MobileQuoteBar";

const bricolage = localFont({
  src: [
    { path: "../public/fonts/bricolage-grotesque-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/bricolage-grotesque-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/bricolage-grotesque-latin-600-normal.woff2", weight: "600" },
    { path: "../public/fonts/bricolage-grotesque-latin-700-normal.woff2", weight: "700" },
    { path: "../public/fonts/bricolage-grotesque-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-bricolage",
  display: "swap",
});

const karla = localFont({
  src: [
    { path: "../public/fonts/karla-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/karla-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/karla-latin-600-normal.woff2", weight: "600" },
    { path: "../public/fonts/karla-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-karla",
  display: "swap",
});

const title = `${site.name} — Landscaping Sydney`;
const description =
  "Brownview Landscaping designs, builds and maintains outdoor spaces across Sydney. Landscape design, paving, retaining walls, turf and outdoor living. Free quotes.";

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${site.name}` },
  description,
  openGraph: { title, description, type: "website", locale: "en_AU" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: site.name,
  description,
  telephone: site.phoneE164,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: "Ryde",
    addressRegion: "NSW",
    postalCode: "2112",
    addressCountry: "AU",
  },
  areaServed: { "@type": "City", name: "Sydney" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${bricolage.variable} ${karla.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-clay focus:px-4 focus:py-2 focus:text-cream">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <MobileQuoteBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
