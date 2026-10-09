"use client";
import { useApp } from "@/lib/app-context";

export default function Impact() {
  const { t } = useApp();
  return (
    <section aria-labelledby="impact-title" className="mx-auto max-w-6xl px-4 py-12">
      <h2 id="impact-title" className="font-display text-2xl font-bold text-forest-800">{t.impactTitle}</h2>
      <p className="mt-2 max-w-xl text-forest-800">{t.impactNote}</p>
      <dl className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {(Object.keys(t.impact) as (keyof typeof t.impact)[]).map((k) => (
          <div key={k} className="rounded-xl border border-forest-100 bg-white p-4">
            <dd className="font-display text-3xl font-bold text-forest-700">–</dd>
            <dt className="mt-1 text-sm text-forest-800">{t.impact[k]}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
