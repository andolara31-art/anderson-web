import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useCharacterConfig } from '../context/CharacterConfigContext';

export type TrailVariant = 'batarang' | 'speed-force' | 'krypton' | 'android';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  variant: TrailVariant;
  colorIndex: number;
}

const TRAIL_EVENT = 'nuvro:character-trail';

export function emitCharacterTrail(
  x: number,
  y: number,
  variant: TrailVariant,
  burst = false,
) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(TRAIL_EVENT, {
      detail: { x, y, variant, burst },
    }),
  );
}

const ANDROID_COLORS = ['#34A853', '#4285F4', '#FBBC05', '#EA4335'];

function PixelParticleGlyph({
  variant,
  colorIndex,
}: {
  variant: TrailVariant;
  colorIndex: number;
}) {
  if (variant === 'batarang') {
    return (
      <svg
        width={14}
        height={8}
        viewBox="0 0 7 4"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect x="0" y="0" width="2" height="1" fill="#121212" />
        <rect x="5" y="0" width="2" height="1" fill="#121212" />
        <rect x="1" y="1" width="5" height="1" fill="#2A303C" />
        <rect x="3" y="0" width="1" height="2" fill="#FFC83D" />
        <rect x="2" y="2" width="3" height="1" fill="#121212" />
        <rect x="3" y="3" width="1" height="1" fill="#121212" />
      </svg>
    );
  }

  if (variant === 'speed-force') {
    return (
      <svg
        width={10}
        height={12}
        viewBox="0 0 5 6"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect x="2" y="0" width="2" height="1" fill="#FFC83D" />
        <rect x="1" y="1" width="2" height="1" fill="#FFC83D" />
        <rect x="0" y="2" width="4" height="1" fill="#FF5A4E" />
        <rect x="2" y="3" width="2" height="1" fill="#FFC83D" />
        <rect x="1" y="4" width="2" height="1" fill="#FFC83D" />
        <rect x="1" y="5" width="1" height="1" fill="#FF5A4E" />
      </svg>
    );
  }

  if (variant === 'krypton') {
    return (
      <svg
        width={10}
        height={10}
        viewBox="0 0 5 5"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect x="2" y="0" width="1" height="1" fill="#2046F0" />
        <rect x="1" y="1" width="3" height="1" fill="#2046F0" />
        <rect x="0" y="2" width="5" height="1" fill="#FFC83D" />
        <rect x="1" y="3" width="3" height="1" fill="#E63946" />
        <rect x="2" y="4" width="1" height="1" fill="#E63946" />
      </svg>
    );
  }

  const color = ANDROID_COLORS[colorIndex % ANDROID_COLORS.length];
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 4 4"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="1" y="0" width="2" height="4" fill={color} />
      <rect x="0" y="1" width="4" height="2" fill={color} />
      <rect x="1" y="1" width="2" height="2" fill="#F7F7F4" />
    </svg>
  );
}

export default function CharacterParticleTrail() {
  const { charactersVisible, particlesEnabled } = useCharacterConfig();
  const prefersReduced = Boolean(useReducedMotion());
  const activeEnabled = !prefersReduced && charactersVisible && particlesEnabled;
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextIdRef = useRef(1);
  const timersRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!activeEnabled) {
      setParticles([]);
      return;
    }

    const handleTrailEvent = (event: Event) => {
      const custom = event as CustomEvent<{
        x: number;
        y: number;
        variant: TrailVariant;
        burst?: boolean;
      }>;

      if (!custom.detail) return;
      const { x, y, variant, burst } = custom.detail;
      const count = burst ? 3 : 1;

      const created: Particle[] = Array.from({ length: count }, (_, idx) => {
        const id = nextIdRef.current++;
        const angle = burst
          ? (Math.PI * 2 * idx) / count + (Math.random() - 0.5) * 0.6
          : Math.random() * Math.PI * 2;
        const speed = burst ? 18 + Math.random() * 14 : 10 + Math.random() * 12;

        return {
          id,
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 8,
          rot: (Math.random() - 0.5) * 140,
          variant,
          colorIndex: id,
        };
      });

      setParticles((prev) => [...prev, ...created].slice(-18));

      created.forEach((p) => {
        const t = window.setTimeout(() => {
          timersRef.current.delete(t);
          setParticles((prev) => prev.filter((item) => item.id !== p.id));
        }, 520);
        timersRef.current.add(t);
      });
    };

    window.addEventListener(TRAIL_EVENT, handleTrailEvent);

    return () => {
      window.removeEventListener(TRAIL_EVENT, handleTrailEvent);
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current.clear();
    };
  }, [activeEnabled]);

  if (!activeEnabled || particles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[55] pointer-events-none overflow-hidden"
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{
              opacity: 0.92,
              x: p.x - 6,
              y: p.y - 6,
              scale: 0.9,
              rotate: 0,
            }}
            animate={{
              opacity: 0,
              x: p.x - 6 + p.vx,
              y: p.y - 6 + p.vy,
              scale: 0.55,
              rotate: p.rot,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 will-change-transform drop-shadow-[1px_1px_0_rgba(18,18,18,0.65)]"
          >
            <PixelParticleGlyph
              variant={p.variant}
              colorIndex={p.colorIndex}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
