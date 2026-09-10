"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b bg-cream/95 backdrop-blur transition-all duration-300 ${
      scrolled ? "border-stone shadow-[0_2px_20px_-12px_rgba(35,33,30,0.4)]" : "border-transparent"}`}>
      <div className={`wrap flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20 sm:h-24"}`}>
        <Link href="/" onClick={() => setOpen(false)} aria-label="Brownview Landscaping home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href}
                className={`text-[15px] font-medium transition-colors ${active ? "text-clay" : "text-char-soft hover:text-forest"}`}>
                {l.label}
              </Link>
            );
          })}
          <Link href="/quote/" className="btn-clay !px-6 !py-3 text-[15px]">Get a free quote</Link>
        </nav>

        <button className="p-2 text-forest lg:hidden" aria-expanded={open} aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-stone bg-cream lg:hidden">
          <div className="wrap flex flex-col py-3">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="border-b border-stone/60 py-3.5 text-lg font-medium text-char last:border-0">
                {l.label}
              </Link>
            ))}
            <Link href="/quote/" onClick={() => setOpen(false)} className="btn-clay my-4">Get a free quote</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
