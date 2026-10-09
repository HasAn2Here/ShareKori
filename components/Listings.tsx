"use client";
import { useApp } from "@/lib/app-context";
import { ITEMS, type Item } from "@/lib/demo-data";
import ItemCard from "./ItemCard";

export default function Listings() {
  const { t, lang, q, area, category, setQ, setArea, setCategory } = useApp();
  const needle = q.trim().toLowerCase();
  const matches = ITEMS.filter((i) =>
    (!area || i.area === area) && (!category || i.category === category) &&
    (!needle || i.title.en.toLowerCase().includes(needle) || i.title.bn.includes(needle)));
  const groups: { key: keyof typeof t.sections; items: Item[] }[] = [
    { key: "free", items: matches.filter((i) => i.type === "free") },
    { key: "borrow", items: matches.filter((i) => i.type === "borrow") },
    { key: "secondhand", items: matches.filter((i) => i.type === "sale" || i.type === "exchange") },
  ];
  const filtered = Boolean(q || area || category);
  return (
    <section id="listings" aria-labelledby="list-title" className="mx-auto max-w-6xl scroll-mt-32 px-4 pb-10">
      <div className="flex items-center justify-between gap-3">
        <h2 id="list-title" className="font-display text-2xl font-bold text-forest-800">{t.listingsTitle}</h2>
        {filtered && <button type="button" onClick={() => { setQ(""); setArea(""); setCategory(""); }} className="text-sm font-medium text-forest-700 underline">{t.clearFilters}</button>}
      </div>
      {matches.length === 0 && <p className="mt-6 rounded-lg bg-cream-100 p-4" lang={lang}>{t.noResults}</p>}
      {groups.filter((g) => g.items.length).map((g) => (
        <div key={g.key} className="mt-8">
          <h3 className="font-display text-xl font-semibold">{t.sections[g.key]}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{g.items.map((i) => <ItemCard key={i.id} item={i} />)}</div>
        </div>
      ))}
    </section>
  );
}
