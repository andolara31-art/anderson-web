import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';
import { PixelSprite } from './PixelCrew';
import { emitCharacterTrail, type TrailVariant } from './CharacterParticleTrail';
import {
  SUMMON_CHARACTER_EVENT,
  useCharacterConfig,
  type SummonableCharacter,
} from '../context/CharacterConfigContext';
import {
  CHARACTER_SECRET_FILES,
  getInsightKey,
} from '../data/characterFiles';
import { playRetroSound } from '../utils/retroSound';

const CHARACTER_TRAIL_MAP: Record<SummonableCharacter, TrailVariant> = {
  batman: 'batarang',
  flash: 'speed-force',
  superman: 'krypton',
  google: 'android',
};

interface QuoteItem {
  key: string;
  text: string;
}

interface CharacterProfile {
  id: SummonableCharacter;
  name: string;
  accent: string;
  quotes: QuoteItem[];
}

interface SpawnSlot {
  id: string;
  containerClass: string;
  enterFrom: { x: number; y: number };
  flipRow: boolean;
}

interface ActiveAppearance {
  key: string;
  character: CharacterProfile;
  quote: string;
  slot: SpawnSlot;
}

const SUMMONABLE_IDS: SummonableCharacter[] = [
  'batman',
  'superman',
  'flash',
  'google',
];

const CHARACTERS: CharacterProfile[] = CHARACTER_SECRET_FILES.filter(
  (file): file is typeof file & { id: SummonableCharacter } =>
    SUMMONABLE_IDS.includes(file.id as SummonableCharacter),
).map((file) => ({
  id: file.id,
  name: file.id === 'google' ? 'Google · Android' : file.codename.charAt(0) + file.codename.slice(1).toLowerCase(),
  accent: file.accent,
  quotes: file.devWisdomHistory.map((entry) => ({
    key: getInsightKey(file.id, entry.code),
    text: entry.quote,
  })),
}));

const SPAWN_SLOTS: SpawnSlot[] = [
  {
    id: 'bottom-left',
    containerClass: 'bottom-3 left-3 sm:bottom-5 sm:left-5',
    enterFrom: { x: -48, y: 20 },
    flipRow: false,
  },
  {
    id: 'bottom-right',
    containerClass: 'bottom-3 right-3 sm:bottom-5 sm:right-5',
    enterFrom: { x: 48, y: 20 },
    flipRow: true,
  },
  {
    id: 'upper-right',
    containerClass: 'top-[86px] right-3 sm:top-[96px] sm:right-6',
    enterFrom: { x: 48, y: -12 },
    flipRow: true,
  },
  {
    id: 'upper-left',
    containerClass: 'top-[86px] left-3 sm:top-[96px] sm:left-6',
    enterFrom: { x: -48, y: -12 },
    flipRow: false,
  },
  {
    id: 'mid-right',
    containerClass: 'bottom-16 right-2 sm:bottom-auto sm:top-[44%] sm:right-5',
    enterFrom: { x: 56, y: 0 },
    flipRow: true,
  },
  {
    id: 'mid-left',
    containerClass: 'bottom-16 left-2 sm:bottom-auto sm:top-[44%] sm:left-5',
    enterFrom: { x: -56, y: 0 },
    flipRow: false,
  },
];

function DevWisdomType({ text, reduced }: { text: string; reduced: boolean }) {
  const [len, setLen] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) {
      setLen(text.length);
      return;
    }

    setLen(0);
    let current = 0;
    const interval = window.setInterval(() => {
      current += 2;
      if (current >= text.length) {
        setLen(text.length);
        window.clearInterval(interval);
      } else {
        setLen(current);
      }
    }, 20);

    return () => window.clearInterval(interval);
  }, [text, reduced]);

  return (
    <span>
      {text.slice(0, len)}
      {!reduced && len < text.length && (
        <span
          aria-hidden="true"
          className="inline-block w-1 h-2.5 bg-[#FFC83D] ml-0.5 align-middle px-cursor"
        />
      )}
    </span>
  );
}

export default function CharacterInteraction() {
  const { charactersVisible, soundEnabled, seenInsights, markInsightsSeen } =
    useCharacterConfig();
  const prefersReduced = Boolean(useReducedMotion());
  const [active, setActive] = useState<ActiveAppearance | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const lastScrollYRef = useRef(0);
  const accumDeltaRef = useRef(0);
  const lastTriggerAtRef = useRef(0);
  const lastCharIdRef = useRef<SummonableCharacter | null>(null);
  const lastQuoteKeyRef = useRef<string | null>(null);
  const lastSlotIndexRef = useRef(-1);
  const hideTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTrailEmitRef = useRef(0);
  const seenRef = useRef<string[]>(seenInsights);
  const soundRef = useRef<boolean>(soundEnabled);

  useEffect(() => {
    seenRef.current = seenInsights;
  }, [seenInsights]);

  useEffect(() => {
    soundRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    if (disabled || !charactersVisible) {
      setActive(null);
      return;
    }

    lastScrollYRef.current = window.scrollY;

    const triggerRandomReaction = (forcedChar?: SummonableCharacter) => {
      const seenSet = new Set(seenRef.current);

      let candidateChars = CHARACTERS;
      if (forcedChar) {
        candidateChars = CHARACTERS.filter((c) => c.id === forcedChar);
      } else {
        // Prioritize characters with unseen insights
        const withUnseen = CHARACTERS.filter((c) =>
          c.quotes.some((q) => !seenSet.has(q.key)),
        );
        const pool = withUnseen.length > 0 ? withUnseen : CHARACTERS;
        const withoutLast = pool.filter((c) => c.id !== lastCharIdRef.current);
        candidateChars = withoutLast.length > 0 ? withoutLast : pool;
      }

      const character =
        candidateChars[Math.floor(Math.random() * candidateChars.length)] ??
        CHARACTERS[0];
      lastCharIdRef.current = character.id;

      // Prioritize unseen quotes for the chosen character, avoiding immediate repeat
      const unseenQuotes = character.quotes.filter((q) => !seenSet.has(q.key));
      const quotePoolBase =
        unseenQuotes.length > 0 ? unseenQuotes : character.quotes;
      const quotePool = quotePoolBase.filter(
        (q) => q.key !== lastQuoteKeyRef.current,
      );
      const finalQuotePool = quotePool.length > 0 ? quotePool : quotePoolBase;
      const chosenQuote =
        finalQuotePool[Math.floor(Math.random() * finalQuotePool.length)] ??
        character.quotes[0];

      lastQuoteKeyRef.current = chosenQuote.key;
      markInsightsSeen([chosenQuote.key]);
      playRetroSound(character.id, soundRef.current);

      let slotIdx = Math.floor(Math.random() * SPAWN_SLOTS.length);
      if (slotIdx === lastSlotIndexRef.current) {
        slotIdx =
          (slotIdx + 1 + Math.floor(Math.random() * 2)) % SPAWN_SLOTS.length;
      }
      lastSlotIndexRef.current = slotIdx;
      const slot = SPAWN_SLOTS[slotIdx];

      setActive({
        key: `${character.id}-${Date.now()}`,
        character,
        quote: chosenQuote.text,
        slot,
      });
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const currentY = window.scrollY;
        const delta = Math.abs(currentY - lastScrollYRef.current);
        lastScrollYRef.current = currentY;

        if (currentY < 180) {
          accumDeltaRef.current = 0;
          return;
        }

        accumDeltaRef.current += delta;
        const now = Date.now();
        const cooldownElapsed = now - lastTriggerAtRef.current >= 6500;

        if (accumDeltaRef.current >= 360 && cooldownElapsed) {
          accumDeltaRef.current = 0;
          lastTriggerAtRef.current = now;
          triggerRandomReaction();
        }
      });
    };

    const onSummon = (event: Event) => {
      const custom = event as CustomEvent<{ who?: SummonableCharacter }>;
      setDisabled(false);
      lastTriggerAtRef.current = Date.now();
      triggerRandomReaction(custom.detail?.who);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener(SUMMON_CHARACTER_EVENT, onSummon);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener(SUMMON_CHARACTER_EVENT, onSummon);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [disabled, charactersVisible, markInsightsSeen]);

  useEffect(() => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    if (!active || hovered) return;

    hideTimerRef.current = window.setTimeout(() => {
      setActive(null);
    }, 3900);

    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [active, hovered]);

  if (disabled || !charactersVisible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed inset-0 z-40 pointer-events-none overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {active && (
          <motion.aside
            key={active.key}
            aria-label={`Consejo rápido de ${active.character.name}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onPointerMove={(e) => {
              const now = performance.now();
              if (now - lastTrailEmitRef.current < 48) return;
              lastTrailEmitRef.current = now;
              emitCharacterTrail(
                e.clientX,
                e.clientY,
                CHARACTER_TRAIL_MAP[active.character.id],
              );
            }}
            onPointerDown={(e) => {
              emitCharacterTrail(
                e.clientX,
                e.clientY,
                CHARACTER_TRAIL_MAP[active.character.id],
                true,
              );
            }}
            initial={
              prefersReduced
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: active.slot.enterFrom.x,
                    y: active.slot.enterFrom.y,
                    scale: 0.9,
                  }
            }
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={
              prefersReduced
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: active.slot.enterFrom.x,
                    y: active.slot.enterFrom.y,
                    scale: 0.9,
                  }
            }
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed ${active.slot.containerClass} pointer-events-auto max-w-[calc(100vw-24px)] sm:max-w-[300px]`}
          >
            <div
              className={`flex items-center gap-2.5 bg-[#121212] text-[#F7F7F4] border-2 border-[#F7F7F4] shadow-[4px_4px_0_#2046F0] px-2.5 py-2 ${
                active.slot.flipRow ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Animated Character Sprite */}
              <div
                className="shrink-0 p-1 bg-[#1B202C] border-2 border-[#121212] px-batman-micro"
                style={{ boxShadow: `2px 2px 0 ${active.character.accent}` }}
              >
                <PixelSprite spriteName={active.character.id} scale={1.6} />
              </div>

              {/* Dev-Wisdom Speech Bubble */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span
                    className="font-mono text-[9.5px] font-bold uppercase tracking-wider truncate"
                    style={{ color: active.character.accent }}
                  >
                    {active.character.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDisabled(true)}
                    aria-label="Ocultar reacciones de personajes"
                    title="Ocultar reacciones"
                    className="inline-flex items-center justify-center w-4 h-4 text-[#9AA2B4] hover:text-[#FFC83D] cursor-pointer shrink-0"
                  >
                    <X size={12} aria-hidden="true" />
                  </button>
                </div>
                <p className="font-mono text-[10.5px] sm:text-[11px] leading-snug text-[#ECECE8]">
                  <DevWisdomType
                    text={active.quote}
                    reduced={prefersReduced}
                  />
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
