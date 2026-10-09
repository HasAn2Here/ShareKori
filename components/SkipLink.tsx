"use client";
import { useApp } from "@/lib/app-context";
export default function SkipLink() {
  const { t } = useApp();
  return <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-cream-50 focus:p-3">{t.skip}</a>;
}
