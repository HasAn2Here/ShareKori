"use client";
import { useApp } from "@/lib/app-context";

export default function Footer() {
  const { t } = useApp();
  const links = [["safety", t.footer.safety], ["contact", t.footer.contact], ["privacy", t.footer.privacy], ["terms", t.footer.terms]];
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2">
        <div><p className="font-display text-lg font-semibold text-cream-50">{t.footer.safety}</p><p className="mt-2 max-w-md">{t.footer.tips}</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map(([slug, label]) => <li key={slug}><a href={`/${slug}`} className="underline hover:text-white">{label}</a></li>)}
        </ul></nav>
      </div>
      <p className="border-t border-forest-800 px-4 py-4 text-center text-sm">{t.footer.rights}</p>
    </footer>
  );
}
