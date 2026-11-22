import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { PixelSprite } from './PixelCrew';
import { emitCharacterTrail } from './CharacterParticleTrail';
import { useCharacterConfig } from '../context/CharacterConfigContext';
import { playRetroSound } from '../utils/retroSound';

export type BatmanEdge =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'left-border'
  | 'right-border';

interface BatmanPeekProps {
  lines: string[];
  edge?: BatmanEdge;
  tone?: 'dark' | 'yellow' | 'paper';
  delay?: number;
  className?: string;
}

const EDGE_CLASSES: Record<BatmanEdge, string> = {
  'top-right': '-top-[19px] right-2 sm:right-3 flex-row-reverse',
  'top-left': '-top-[19px] left-2 sm:left-3 flex-row',
  'bottom-right': '-bottom-[13px] right-1 sm:right-2 flex-row-reverse items-end',
  'left-border': '-top-[15px] -left-2 sm:-left-2.5 flex-row',
  'right-border': '-top-[15px] -right-2 sm:-right-2.5 flex-row-reverse',
};

const TONE_CLASSES: Record<'dark' | 'yellow' | 'paper', string> = {
  dark: 'bg-[#121212] text-[#F7F7F4] border-[#F7F7F4] shadow-[2px_2px_0_#2046F0]',
  yellow: 'bg-[#FFC83D] text-[#121212] border-[#121212] shadow-[2px_2px_0_#121212]',
  paper: 'bg-[#F7F7F4] text-[#121212] border-[#121212] shadow-[2px_2px_0_#FFC83D]',
};

export default function BatmanPeek({
  lines,
  edge = 'top-right',
  tone = 'dark',
  delay = 0.08,
  className = '',
}: BatmanPeekProps) {
  const { charactersVisible, soundEnabled } = useCharacterConfig();
  const prefersReduced = Boolean(useReducedMotion());
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.25 });

  const [lineIdx, setLineIdx] = useState(0);
  const [typedLen, setTypedLen] = useState(0);
  const [nudge, setNudge] = useState(false);
  const lastTrailEmitRef = useRef(0);

  const safeLines = lines.length > 0 ? lines : ['Código limpio'];
  const activeLine = safeLines[lineIdx % safeLines.length];

  // Reset typing cleanly if lines array changes (e.g. switching node in Hero)
  useEffect(() => {
    setLineIdx(0);
  }, [lines[0]]);

  useEffect(() => {
    if (!inView) return;

    if (prefersReduced) {
      setTypedLen(activeLine.length);
      return;
    }

    setTypedLen(0);
    let current = 0;
    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        current += 1;
        setTypedLen(current);
        if (current >= activeLine.length && intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
      }, 32);
    }, Math.round((delay + 0.16) * 1000));

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [inView, activeLine, delay, prefersReduced]);

  const handleCycle = (e: React.MouseEvent) => {
    e.stopPropagation();
    emitCharacterTrail(e.clientX, e.clientY, 'batarang', true);
    playRetroSound('quote', soundEnabled);
    if (safeLines.length > 1) {
      setLineIdx((prev) => (prev + 1) % safeLines.length);
    }
    if (!prefersReduced) {
      setNudge(true);
      window.setTimeout(() => setNudge(false), 320);
    }
  };

  const fromLeft = edge === 'left-border' || edge === 'top-left';
  const initialMotion = prefersReduced
    ? { opacity: 1, x: 0, y: 0 }
    : edge === 'bottom-right'
      ? { opacity: 0, y: -6, scale: 0.85 }
      : fromLeft
        ? { opacity: 0, x: -8, y: 6, scale: 0.85 }
        : { opacity: 0, x: 8, y: 6, scale: 0.85 };

  if (!charactersVisible) return null;

  return (
    <div
      ref={containerRef}
      className={`absolute z-30 pointer-events-none select-none ${EDGE_CLASSES[edge]} ${className}`}
    >
      <motion.button
        type="button"
        onClick={handleCycle}
        onPointerMove={(e) => {
          const now = performance.now();
          if (now - lastTrailEmitRef.current < 48) return;
          lastTrailEmitRef.current = now;
          emitCharacterTrail(e.clientX, e.clientY, 'batarang');
        }}
        aria-label={`Nota rápida de Batman: ${activeLine}`}
        title={safeLines.length > 1 ? 'Tocá para cambiar nota' : activeLine}
        initial={initialMotion}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
                y: nudge ? -3 : 0,
                scale: 1,
              }
            : initialMotion
        }
        transition={{
          duration: prefersReduced ? 0 : 0.28,
          delay: prefersReduced ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`pointer-events-auto inline-flex items-center gap-1.5 cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#FFC83D] ${
          edge === 'top-right' || edge === 'right-border' || edge === 'bottom-right'
            ? 'flex-row-reverse'
            : 'flex-row'
        }`}
      >
        <span className="inline-block px-batman-micro drop-shadow-[1px_1px_0_#121212] transition-transform group-hover:-translate-y-0.5">
          <PixelSprite spriteName="batman" scale={1.55} />
        </span>

        <span
          className={`px-1.5 py-0.5 border-2 font-mono text-[9.5px] sm:text-[10px] font-bold leading-none whitespace-nowrap tracking-tight ${TONE_CLASSES[tone]}`}
        >
          {activeLine.slice(0, typedLen)}
          {!prefersReduced && inView && typedLen < activeLine.length && (
            <span
              aria-hidden="true"
              className={`inline-block w-1 h-2.5 ml-0.5 align-middle px-cursor ${
                tone === 'yellow'
                  ? 'bg-[#121212]'
                  : tone === 'paper'
                    ? 'bg-[#2046F0]'
                    : 'bg-[#FFC83D]'
              }`}
            />
          )}
        </span>
      </motion.button>
    </div>
  );
}
