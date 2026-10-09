"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { dict, type Dict, type Lang } from "./i18n";
import type { Category } from "./demo-data";

type Ctx = {
  lang: Lang; setLang: (l: Lang) => void; t: Dict;
  q: string; setQ: (v: string) => void;
  area: string; setArea: (v: string) => void;
  category: Category | ""; setCategory: (c: Category | "") => void;
  notify: (message: string) => void;
};
const AppContext = createContext<Ctx | null>(null);
export const useApp = () => {
  const c = useContext(AppContext);
  if (!c) throw new Error("useApp must be used inside AppProvider");
  return c;
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [q, setQ] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    try { const s = localStorage.getItem("sk-lang"); if (s === "bn" || s === "en") setLangState(s); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("sk-lang", l); } catch {}
  }, []);
  const notify = useCallback((m: string) => {
    setToast(m); clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 4000);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: dict[lang], q, setQ, area, setArea, category, setCategory, notify }),
    [lang, setLang, q, area, category, notify],
  );
  return (
    <AppContext.Provider value={value}>
      {children}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
        {toast && <p className="max-w-md rounded-lg bg-forest-900 px-4 py-3 text-sm text-cream-50 shadow-lg">{toast}</p>}
      </div>
    </AppContext.Provider>
  );
}
