import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { PixelSpriteName } from '../components/PixelCrew';
import {
  ALL_INSIGHT_KEYS,
  TOTAL_UNIQUE_INSIGHTS,
} from '../data/characterFiles';

export type SummonableCharacter = Extract<
  PixelSpriteName,
  'batman' | 'superman' | 'flash' | 'google'
>;

export const SUMMON_CHARACTER_EVENT = 'nuvro:summon-character';
const SEEN_INSIGHTS_STORAGE_KEY = 'anderson_al_seen_wisdom_v1';

function loadSeenInsightsFromStorage(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(SEEN_INSIGHTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const validSet = new Set(ALL_INSIGHT_KEYS);
    return Array.from(
      new Set(
        parsed.filter(
          (item): item is string =>
            typeof item === 'string' && validSet.has(item),
        ),
      ),
    );
  } catch {
    return [];
  }
}

interface CharacterConfigContextValue {
  charactersVisible: boolean;
  setCharactersVisible: React.Dispatch<React.SetStateAction<boolean>>;
  particlesEnabled: boolean;
  setParticlesEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  summonCharacter: (who?: SummonableCharacter) => void;
  seenInsights: string[];
  totalInsights: number;
  markInsightsSeen: (keys: string[]) => void;
  resetSeenInsights: () => void;
}

const CharacterConfigContext = createContext<CharacterConfigContextValue>({
  charactersVisible: true,
  setCharactersVisible: () => {},
  particlesEnabled: true,
  setParticlesEnabled: () => {},
  soundEnabled: true,
  setSoundEnabled: () => {},
  summonCharacter: () => {},
  seenInsights: [],
  totalInsights: TOTAL_UNIQUE_INSIGHTS,
  markInsightsSeen: () => {},
  resetSeenInsights: () => {},
});

export function CharacterConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [charactersVisible, setCharactersVisible] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [seenInsights, setSeenInsights] = useState<string[]>(() =>
    loadSeenInsightsFromStorage(),
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(
        SEEN_INSIGHTS_STORAGE_KEY,
        JSON.stringify(seenInsights),
      );
    } catch {
      // Ignore storage quota or private mode restrictions
    }
  }, [seenInsights]);

  const markInsightsSeen = useCallback((keys: string[]) => {
    if (!keys.length) return;
    const validSet = new Set(ALL_INSIGHT_KEYS);
    setSeenInsights((prev) => {
      const merged = new Set(prev);
      let changed = false;
      for (const k of keys) {
        if (validSet.has(k) && !merged.has(k)) {
          merged.add(k);
          changed = true;
        }
      }
      return changed ? Array.from(merged) : prev;
    });
  }, []);

  const resetSeenInsights = useCallback(() => {
    setSeenInsights([]);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(SEEN_INSIGHTS_STORAGE_KEY);
      } catch {
        // Ignore storage restrictions
      }
    }
  }, []);

  const summonCharacter = useCallback((who?: SummonableCharacter) => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(
      new CustomEvent(SUMMON_CHARACTER_EVENT, { detail: { who } }),
    );
  }, []);

  return (
    <CharacterConfigContext.Provider
      value={{
        charactersVisible,
        setCharactersVisible,
        particlesEnabled,
        setParticlesEnabled,
        soundEnabled,
        setSoundEnabled,
        summonCharacter,
        seenInsights,
        totalInsights: TOTAL_UNIQUE_INSIGHTS,
        markInsightsSeen,
        resetSeenInsights,
      }}
    >
      {children}
    </CharacterConfigContext.Provider>
  );
}

export function useCharacterConfig() {
  return useContext(CharacterConfigContext);
}
