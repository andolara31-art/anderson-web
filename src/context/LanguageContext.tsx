import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language, LocalizedList, LocalizedText } from '../types';

const STORAGE_KEY = 'anderson_al_lang_v1';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  pick: (value: LocalizedText) => string;
  pickList: (value: LocalizedList) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
    } catch {
      // Ignore storage access issues
    }
    return 'es';
  });

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-CR' : 'en';
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage access issues
    }
  }, [lang]);

  const setLang = (next: Language) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === 'es' ? 'en' : 'es'));
  const pick = (value: LocalizedText) => value[lang];
  const pickList = (value: LocalizedList) => value[lang];

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, pick, pickList }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
