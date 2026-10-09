"use client";
import { Leaf, Plus } from "lucide-react";
import { useApp } from "@/lib/app-context";
import SearchBar from "./SearchBar";

export default function Header() {
  const { t, lang, setLang, notify } = useApp();
  return (
    <header className="sticky top-0 z-30 border-b border-forest-100 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3">
        <a href="/" className="mr-auto flex items-center gap-2 font-display text-xl font-bold text-forest-800">
          <Leaf size={22} aria-hidden /> {t.brand}
        </a>
        <button type="button" onClick={() => setLang(lang === "en" ? "bn" : "en")} aria-label={t.languageLabel} lang={lang === "en" ? "bn" : "en"} className="h-10 rounded-lg px-3 text-sm font-medium text-forest-800 hover:bg-forest-100">
          {t.language}
        </button>
        <button type="button" onClick={() => notify(t.toastDemo)} className="h-10 rounded-lg border border-forest-200 px-3 text-sm font-medium text-forest-800 hover:bg-forest-100">{t.login}</button>
        <button type="button" onClick={() => notify(t.toastDemo)} className="inline-flex h-10 items-center gap-1 rounded-lg bg-marigold-600 px-3 text-sm font-semibold text-white hover:bg-marigold-700">
          <Plus size={16} aria-hidden /> {t.share}
        </button>
        <div className="order-last w-full lg:order-none lg:w-auto lg:max-w-xl lg:flex-1"><SearchBar idPrefix="hdr" /></div>
      </div>
    </header>
  );
}
