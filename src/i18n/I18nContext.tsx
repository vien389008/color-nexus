import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

type Language = "vi" | "en";

type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.vi;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
