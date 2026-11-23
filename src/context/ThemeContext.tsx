import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type PortfolioTheme = 'ink-blue' | 'clean-paper';

export const THEME_STORAGE_KEY = 'anderson_al_theme_v1';
const DEFAULT_THEME: PortfolioTheme = 'ink-blue';

function isPortfolioTheme(value: unknown): value is PortfolioTheme {
  return value === 'ink-blue' || value === 'clean-paper';
}

function readStoredTheme(): PortfolioTheme {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isPortfolioTheme(saved)) return saved;
  } catch {
    // Ignore storage access errors (e.g. private browsing restrictions)
  }
  return DEFAULT_THEME;
}

function applyThemeToDocument(theme: PortfolioTheme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

function writeStoredTheme(theme: PortfolioTheme) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage access errors
  }
}

interface ThemeContextValue {
  theme: PortfolioTheme;
  setTheme: (theme: PortfolioTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>(() => {
    const initial = readStoredTheme();
    applyThemeToDocument(initial);
    return initial;
  });

  useEffect(() => {
    applyThemeToDocument(theme);
    writeStoredTheme(theme);
  }, [theme]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY && isPortfolioTheme(event.newValue)) {
        applyThemeToDocument(event.newValue);
        setThemeState(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setTheme = useCallback((next: PortfolioTheme) => {
    applyThemeToDocument(next);
    writeStoredTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: PortfolioTheme =
        prev === 'ink-blue' ? 'clean-paper' : 'ink-blue';
      applyThemeToDocument(next);
      writeStoredTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
