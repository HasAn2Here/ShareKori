"use client";
import { Search } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { AREAS } from "@/lib/demo-data";

export default function SearchBar({ idPrefix, large = false }: { idPrefix: string; large?: boolean }) {
  const { t, lang, q, setQ, area, setArea } = useApp();
  const field = `rounded-lg border border-forest-200 bg-white px-3 text-forest-900 ${large ? "h-12 text-base" : "h-10 text-sm"}`;
  return (
    <form
      role="search"
      className="flex w-full flex-col gap-2 sm:flex-row"
      onSubmit={(e) => { e.preventDefault(); document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" }); }}
    >
      <label htmlFor={`${idPrefix}-q`} className="sr-only">{t.searchLabel}</label>
      <input id={`${idPrefix}-q`} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.searchPlaceholder} className={`${field} min-w-0 flex-1`} />
      <label htmlFor={`${idPrefix}-area`} className="sr-only">{t.areaLabel}</label>
      <select id={`${idPrefix}-area`} value={area} onChange={(e) => setArea(e.target.value)} className={`${field} sm:w-56`}>
        <option value="">{t.allAreas}</option>
        {Object.entries(AREAS).map(([id, name]) => <option key={id} value={id}>{name[lang]}</option>)}
      </select>
      <button type="submit" className={`inline-flex items-center justify-center gap-2 rounded-lg bg-forest-700 px-5 font-medium text-white hover:bg-forest-800 ${large ? "h-12" : "h-10"}`}>
        <Search size={18} aria-hidden /> {t.search}
      </button>
    </form>
  );
}
