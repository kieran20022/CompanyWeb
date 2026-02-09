import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type Language = "nl" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Dynamically import translations to keep this file clean
import { translations } from "./translations";

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // fallback to key
    }
  }
  return typeof current === "string" ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem("brightweb-lang");
    return (stored === "en" || stored === "nl") ? stored : "nl";
  });

  function setLang(newLang: Language) {
    setLangState(newLang);
    localStorage.setItem("brightweb-lang", newLang);
  }

  function t(key: string): string {
    return getNestedValue(translations[lang] as unknown as Record<string, unknown>, key);
  }

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
