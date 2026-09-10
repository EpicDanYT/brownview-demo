"use client";
import { useEffect, useRef, useState } from "react";

// Counts up once, the first time it scrolls into view.
export default function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return;
      setStarted(true);
      io.disconnect();

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { setN(value); return; }

      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, started]);

  return <span ref={ref}>{n}{suffix}</span>;
}
