"use client";
import { Search, Send, PackageCheck, Recycle } from "lucide-react";
import { useApp } from "@/lib/app-context";

const ICONS = [Search, Send, PackageCheck, Recycle];
export default function HowItWorks() {
  const { t } = useApp();
  return (
    <section aria-labelledby="how-title" className="bg-cream-100 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="how-title" className="font-display text-2xl font-bold text-forest-800">{t.howTitle}</h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.map((s, i) => { const Icon = ICONS[i]; return (
            <li key={s.title} className="flex gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-700 text-white"><Icon size={20} aria-hidden /></span>
              <div><h3 className="font-semibold">{i + 1}. {s.title}</h3><p className="mt-1 text-forest-800">{s.desc}</p></div>
            </li>); })}
        </ol>
      </div>
    </section>
  );
}
