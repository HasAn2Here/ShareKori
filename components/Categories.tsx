"use client";
import { BookOpen, Wrench, Armchair, Shirt, PencilRuler, Home, type LucideIcon } from "lucide-react";
import { useApp } from "@/lib/app-context";
import type { Category } from "@/lib/demo-data";

export const CATEGORY_ICONS: Record<Category, LucideIcon> = { books: BookOpen, tools: Wrench, furniture: Armchair, clothing: Shirt, study: PencilRuler, household: Home };

export default function Categories() {
  const { t, category, setCategory } = useApp();
  return (
    <section aria-labelledby="cat-title" className="mx-auto max-w-6xl px-4 py-10">
      <h2 id="cat-title" className="font-display text-2xl font-bold text-forest-800">{t.categoriesTitle}</h2>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {(Object.keys(CATEGORY_ICONS) as Category[]).map((c) => {
          const Icon = CATEGORY_ICONS[c]; const active = category === c;
          return (
            <li key={c}>
              <button type="button" aria-pressed={active}
                onClick={() => { setCategory(active ? "" : c); document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`flex h-full w-full flex-col items-center gap-2 rounded-xl border p-4 text-center font-medium ${active ? "border-forest-700 bg-forest-700 text-white" : "border-forest-200 bg-white text-forest-800 hover:bg-forest-50"}`}>
                <Icon size={26} aria-hidden /> {t.categories[c]}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
