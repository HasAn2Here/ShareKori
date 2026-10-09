"use client";
import { useApp } from "@/lib/app-context";
import SearchBar from "./SearchBar";

export default function Hero() {
  const { t } = useApp();
  return (
    <section className="bg-forest-800 text-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">{t.tagline}</h1>
        <p className="mt-4 max-w-xl text-lg text-forest-100">{t.heroSub}</p>
        <div className="mt-8 max-w-3xl rounded-xl bg-cream-100 p-3 text-forest-900"><SearchBar idPrefix="hero" large /></div>
        <p className="mt-4 inline-block rounded-md bg-marigold-100 px-3 py-1 text-sm text-marigold-700">{t.demoNotice}</p>
      </div>
    </section>
  );
}
