"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

// Floating quote + call bar, mobile only. Hidden on the quote page itself.
export default function MobileQuoteBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/quote")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-stone bg-cream/95 p-3 backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <a href={`tel:${site.phoneE164}`} className="btn-outline flex-1 !px-4 !py-3 text-[15px]">Call us</a>
        <Link href="/quote/" className="btn-clay flex-1 !px-4 !py-3 text-[15px]">Get a free quote</Link>
      </div>
    </div>
  );
}
