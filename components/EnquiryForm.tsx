"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  options?: string[];
  half?: boolean;
  note?: string;
};

const input =
  "w-full rounded-xl border border-stone bg-cream px-4 py-3.5 text-char placeholder:text-char-soft/50 transition-colors focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20";

export default function EnquiryForm({
  fields,
  subject,
  submitLabel,
  successTitle,
  successBody,
}: {
  fields: Field[];
  subject: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // No form service configured: hand the message to the visitor's mail app.
    if (!site.formAccessKey) {
      const body = fields
        .filter((f) => f.type !== "file")
        .map((f) => `${f.label}: ${data[f.name] || "-"}`)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-stone bg-cream-warm p-10 text-center sm:p-14">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest/10">
          <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="display mt-6 text-3xl text-forest">{successTitle}</h2>
        <p className="body-text mx-auto mt-3 max-w-md">{successBody}</p>
        <p className="mt-6 text-sm text-char-soft">
          Need us sooner? Call{" "}
          <a href={`tel:${site.phoneE164}`} className="font-semibold text-clay hover:underline">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {site.formAccessKey && <input type="hidden" name="access_key" value={site.formAccessKey} />}
      <input type="hidden" name="subject" value={subject} />

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <label htmlFor={f.name} className="mb-2 block text-sm font-semibold text-char">
              {f.label}
              {!f.required && <span className="font-normal text-char-soft/70"> (optional)</span>}
            </label>

            {f.options ? (
              <select id={f.name} name={f.name} required={f.required} defaultValue="" className={input}>
                <option value="" disabled>Please choose</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : f.rows ? (
              <textarea id={f.name} name={f.name} rows={f.rows} required={f.required} placeholder={f.placeholder} className={input} />
            ) : (
              <input id={f.name} name={f.name} type={f.type ?? "text"} required={f.required}
                placeholder={f.placeholder} className={input}
                multiple={f.type === "file" ? true : undefined}
                accept={f.type === "file" ? "image/*" : undefined} />
            )}

            {f.note && <p className="mt-1.5 text-xs text-char-soft/80">{f.note}</p>}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button type="submit" disabled={status === "sending"} className="btn-clay disabled:opacity-60">
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        <p className="text-sm text-char-soft">
          Or call <a href={`tel:${site.phoneE164}`} className="font-semibold text-clay hover:underline">{site.phoneDisplay}</a>
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-clay-deep">
          That didn&apos;t send. Please email {site.email} or call {site.phoneDisplay} instead.
        </p>
      )}
    </form>
  );
}
