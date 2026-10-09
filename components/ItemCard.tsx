"use client";
import { MapPin } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { AREAS, type Item, type ShareType } from "@/lib/demo-data";
import { CATEGORY_ICONS } from "./Categories";

const BADGE: Record<ShareType, string> = {
  free: "bg-forest-100 text-forest-800", borrow: "bg-sky-100 text-sky-900", exchange: "bg-marigold-100 text-marigold-700", sale: "bg-stone-200 text-stone-900",
};

export default function ItemCard({ item }: { item: Item }) {
  const { t, lang, notify } = useApp();
  const Icon = CATEGORY_ICONS[item.category];
  const titleId = `item-${item.id}`;
  const price = item.priceBdt ? `৳ ${item.priceBdt.toLocaleString(lang === "bn" ? "bn-BD" : "en-BD")}` : null;
  return (
    <article aria-labelledby={titleId} className="flex flex-col overflow-hidden rounded-xl border border-forest-100 bg-white">
      {item.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.photo} alt={item.title[lang]} className="aspect-[4/3] w-full object-cover" loading="lazy" />
      ) : (
        <div className="relative flex aspect-[4/3] items-center justify-center bg-forest-50 text-forest-500">
          <Icon size={48} aria-hidden />
          <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-xs text-forest-800">{t.demoPhoto}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-sm font-semibold ${BADGE[item.type]}`}>{t.types[item.type]}</span>
          <span className="text-sm text-forest-700">{t.conditions[item.condition]}</span>
          {price && <span className="ml-auto font-semibold">{price}</span>}
        </div>
        <h3 id={titleId} className="font-display text-lg font-semibold leading-snug">{item.title[lang]}</h3>
        <p className="flex items-center gap-1 text-sm text-forest-700"><MapPin size={14} aria-hidden /> {AREAS[item.area][lang]}</p>
        <button type="button" onClick={() => notify(t.toastDemo)} aria-describedby={titleId}
          className="mt-auto h-10 rounded-lg bg-forest-700 text-sm font-semibold text-white hover:bg-forest-800">
          {t.actions[item.type]}
        </button>
      </div>
    </article>
  );
}
