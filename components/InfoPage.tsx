"use client";
import { useApp } from "@/lib/app-context";

export type InfoSlug = "safety" | "contact" | "privacy" | "terms";

export default function InfoPage({ slug }: { slug: InfoSlug }) {
  const { t } = useApp();
  const p = t.pages[slug];
  return (
    <article className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-forest-800">{p.title}</h1>
      <p className="mt-4 text-lg leading-relaxed">{p.body}</p>
    </article>
  );
}
