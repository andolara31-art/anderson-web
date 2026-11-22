import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Terminal, Volume2, VolumeX, X } from 'lucide-react';
import {
  useCharacterConfig,
  type SummonableCharacter,
} from '../context/CharacterConfigContext';
import { playRetroSound } from '../utils/retroSound';

interface LogEntry {
  id: number;
  tone: 'prompt' | 'info' | 'ok' | 'warn';
  text: string;
}

interface MissionItem {
  code: string;
  title: string;
  requirement: string;
  check: (seen: Set<string>, count: number, total: number) => boolean;
}

const MISSIONS: MissionItem[] = [
  {
    code: 'M01',
    title: 'Primer contacto',
    requirement: 'Descubrir 1 cita única',
    check: (_seen, count) => count >= 1,
  },
  {
    code: 'M02',
    title: 'Patrulla nocturna',
    requirement: '3 citas de Batman',
    check: (seen) =>
      seen.has('batman:LOG-01') &&
      seen.has('batman:LOG-02') &&
      seen.has('batman:LOG-03'),
  },
  {
    code: 'M03',
    title: 'Núcleo de acero',
    requirement: '3 citas de Superman',
    check: (seen) =>
      seen.has('superman:LOG-01') &&
      seen.has('superman:LOG-02') &&
      seen.has('superman:LOG-03'),
  },
  {
    code: 'M04',
    title: 'Velocidad Flash',
    requirement: '3 citas de Flash',
    check: (seen) =>
      seen.has('flash:LOG-01') &&
      seen.has('flash:LOG-02') &&
      seen.has('flash:LOG-03'),
  },
  {
    code: 'M05',
    title: 'Criterio Android UX',
    requirement: '3 citas de Google · Android',
    check: (seen) =>
      seen.has('google:LOG-01') &&
      seen.has('google:LOG-02') &&
      seen.has('google:LOG-03'),
  },
  {
    code: 'M06',
    title: 'Escuadrón completo',
    requirement: '12+ citas únicas descubiertas',
    check: (_seen, count) => count >= 12,
  },
  {
    code: 'M07',
    title: 'Archivo maestro',
    requirement: 'Todas las citas de la crew',
    check: (_seen, count, total) => total > 0 && count >= total,
  },
];

const KONAMI_KEYS = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const WORD_TRIGGERS = ['konami', 'nuvro'];

const INITIAL_LOGS: LogEntry[] = [
  {
    id: 1,
    tone: 'ok',
    text: 'NUVRO / ANDERSON.AL dev-shell activada.',
  },
  {
    id: 2,
    tone: 'info',
    text: 'Escribí "help" para ver comandos disponibles.',
  },
];

export default function DeveloperTerminal() {
  const prefersReduced = Boolean(useReducedMotion());
  const {
    charactersVisible,
    setCharactersVisible,
    particlesEnabled,
    setParticlesEnabled,
    soundEnabled,
    setSoundEnabled,
    summonCharacter,
    seenInsights,
    totalInsights,
    resetSeenInsights,
  } = useCharacterConfig();

  const [isOpen, setIsOpen] = useState(false);
  const [missionsExpanded, setMissionsExpanded] = useState(true);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const seenSet = new Set<string>(seenInsights);
  const missionStatuses = MISSIONS.map((m) => ({
    ...m,
    completed: m.check(seenSet, seenInsights.length, totalInsights),
  }));
  const completedMissionsCount = missionStatuses.filter((m) => m.completed).length;
  const missionsUnlocked = seenInsights.length >= 1;

  const keyBufferRef = useRef<string[]>([]);
  const wordBufferRef = useRef<string>('');
  const nextLogIdRef = useRef(10);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const appendLogs = (entries: Omit<LogEntry, 'id'>[]) => {
    setLogs((prev) =>
      [
        ...prev,
        ...entries.map((entry) => ({
          ...entry,
          id: nextLogIdRef.current++,
        })),
      ].slice(-60),
    );
  };

  // Global konami-style sequence listener (active only outside text inputs)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        return;
      }

      const target = e.target as HTMLElement | null;
      const isTypingInField =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);

      if (isTypingInField) return;

      // 1) Classic Konami key buffer
      const normalizedKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      keyBufferRef.current = [...keyBufferRef.current, normalizedKey].slice(
        -KONAMI_KEYS.length,
      );

      const konamiMatched =
        keyBufferRef.current.length === KONAMI_KEYS.length &&
        KONAMI_KEYS.every((k, idx) => keyBufferRef.current[idx] === k);

      // 2) Typed word sequence buffer ("konami" or "nuvro")
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        wordBufferRef.current = (
          wordBufferRef.current + e.key.toLowerCase()
        ).slice(-12);
      }
      const wordMatched = WORD_TRIGGERS.some((word) =>
        wordBufferRef.current.endsWith(word),
      );

      if (konamiMatched || wordMatched) {
        keyBufferRef.current = [];
        wordBufferRef.current = '';
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs, isOpen]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const parts = trimmed.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts[1];

    appendLogs([{ tone: 'prompt', text: `$ ${trimmed}` }]);
    setHistory((prev) => [trimmed, ...prev].slice(0, 20));
    setHistoryIdx(-1);

    if (cmd === 'help' || cmd === '?') {
      appendLogs([
        { tone: 'ok', text: 'Comandos disponibles:' },
        { tone: 'info', text: '  chars [on|off]   -> alternar visibilidad de personajes' },
        { tone: 'info', text: '  trails [on|off]  -> alternar partículas batarang / speed' },
        { tone: 'info', text: '  sound [on|off]   -> alternar sonido retro 8-bit' },
        { tone: 'info', text: '  missions         -> ver log de Misiones Cumplidas' },
        { tone: 'info', text: '  insights         -> ver progreso de dev-wisdom descubiertos' },
        { tone: 'info', text: '  reset-wisdom     -> reiniciar historial localStorage' },
        { tone: 'info', text: '  check            -> diagnóstico rápido local (simulado)' },
        { tone: 'info', text: '  summon [nombre]  -> invocar batman | superman | flash | google' },
        { tone: 'info', text: '  clear            -> limpiar consola' },
        { tone: 'info', text: '  exit             -> cerrar terminal' },
      ]);
      return;
    }

    if (cmd === 'sound' || cmd === 'audio' || cmd === 'sfx') {
      const next =
        arg === 'on' ? true : arg === 'off' ? false : !soundEnabled;
      setSoundEnabled(next);
      if (next) playRetroSound('unlock', true);
      appendLogs([
        {
          tone: next ? 'ok' : 'warn',
          text: next
            ? 'Audio retro 8-bit: ACTIVO (volumen sutil).'
            : 'Audio retro 8-bit: SILENCIADO.',
        },
      ]);
      return;
    }

    if (cmd === 'missions' || cmd === 'misiones') {
      if (!missionsUnlocked) {
        appendLogs([
          {
            tone: 'warn',
            text: '[LOCKED] Misiones Cumplidas: descubrí al menos 1 cita única para desbloquear.',
          },
        ]);
        return;
      }
      appendLogs([
        {
          tone: 'ok',
          text: `[MISIONES CUMPLIDAS · ${completedMissionsCount}/${MISSIONS.length}]`,
        },
        ...missionStatuses.map((m) => ({
          tone: (m.completed ? 'ok' : 'info') as LogEntry['tone'],
          text: `  ${m.completed ? '[✓]' : '[ ]'} [${m.code}] ${m.title} — ${m.requirement}`,
        })),
      ]);
      return;
    }

    if (cmd === 'insights' || cmd === 'wisdom') {
      appendLogs([
        {
          tone: 'ok',
          text: `Insights únicos descubiertos: ${seenInsights.length} / ${totalInsights}`,
        },
        {
          tone: 'info',
          text:
            seenInsights.length > 0
              ? `  registrados: ${seenInsights.join(', ')}`
              : '  aún no hay insights registrados; hacé scroll o abrí Secret Files.',
        },
      ]);
      return;
    }

    if (cmd === 'reset-wisdom' || cmd === 'reset') {
      resetSeenInsights();
      appendLogs([
        {
          tone: 'warn',
          text: 'Historial de insights en localStorage reiniciado a 0.',
        },
      ]);
      return;
    }

    if (cmd === 'chars' || cmd === 'characters' || cmd === 'toggle') {
      const next =
        arg === 'on' ? true : arg === 'off' ? false : !charactersVisible;
      setCharactersVisible(next);
      appendLogs([
        {
          tone: next ? 'ok' : 'warn',
          text: next
            ? 'Personajes pixelados: VISIBLES en el sitio.'
            : 'Personajes pixelados: OCULTOS.',
        },
      ]);
      return;
    }

    if (cmd === 'trails' || cmd === 'particles') {
      const next =
        arg === 'on' ? true : arg === 'off' ? false : !particlesEnabled;
      setParticlesEnabled(next);
      appendLogs([
        {
          tone: next ? 'ok' : 'warn',
          text: next
            ? 'Rastro de partículas (batarang / speed-force): ACTIVO.'
            : 'Rastro de partículas: DESACTIVADO.',
        },
      ]);
      return;
    }

    if (cmd === 'check' || cmd === 'diag' || cmd === 'status') {
      const viewport = `${window.innerWidth}x${window.innerHeight}`;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const sections = document.querySelectorAll('main section[id]').length;
      appendLogs([
        { tone: 'ok', text: '[DIAGNÓSTICO LOCAL SIMULADO]' },
        { tone: 'info', text: `  viewport ....... ${viewport}` },
        { tone: 'info', text: `  secciones ...... ${sections} módulos activos` },
        {
          tone: 'info',
          text: `  personajes ..... ${charactersVisible ? 'on' : 'off'} | trazos: ${particlesEnabled ? 'on' : 'off'} | audio: ${soundEnabled ? 'on' : 'off'}`,
        },
        {
          tone: 'info',
          text: `  insights ....... ${seenInsights.length}/${totalInsights} | misiones: ${completedMissionsCount}/${MISSIONS.length}`,
        },
        {
          tone: 'info',
          text: `  reduced-motion . ${reduced ? 'activo' : 'no activo'}`,
        },
        { tone: 'ok', text: '  estado ......... OK · listo para probar.' },
      ]);
      return;
    }

    if (cmd === 'summon') {
      const valid: SummonableCharacter[] = [
        'batman',
        'superman',
        'flash',
        'google',
      ];
      const chosen = valid.includes(arg as SummonableCharacter)
        ? (arg as SummonableCharacter)
        : undefined;
      if (!charactersVisible) setCharactersVisible(true);
      summonCharacter(chosen);
      appendLogs([
        {
          tone: 'ok',
          text: `Invocando reacción de ${chosen ?? 'personaje aleatorio'}...`,
        },
      ]);
      return;
    }

    if (cmd === 'clear' || cmd === 'cls') {
      setLogs([]);
      return;
    }

    if (cmd === 'exit' || cmd === 'close' || cmd === 'quit') {
      setIsOpen(false);
      return;
    }

    appendLogs([
      {
        tone: 'warn',
        text: `Comando no reconocido: "${cmd}". Escribí "help".`,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput('');
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' && history.length > 0) {
      e.preventDefault();
      const nextIdx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(nextIdx);
      setInput(history[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx <= 0) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    }
  };

  const toneColor: Record<LogEntry['tone'], string> = {
    prompt: 'text-[#FFC83D]',
    info: 'text-[#C9CDD8]',
    ok: 'text-[#5EDBB0]',
    warn: 'text-[#FF5A4E]',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          aria-label="Terminal oculta de desarrollador"
          initial={prefersReduced ? false : { opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-[70] w-[min(420px,calc(100vw-24px))] max-h-[82vh] flex flex-col overflow-hidden bg-[#0B0E14] text-[#F7F7F4] border-3 border-[#F7F7F4] shadow-[8px_8px_0_#2046F0]"
        >
          {/* Header Bar */}
          <div className="bg-[#141822] border-b-2 border-white/15 px-3 py-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Terminal size={14} className="text-[#5EDBB0] shrink-0" aria-hidden="true" />
              <span className="font-mono text-[11px] font-bold text-[#FFC83D] truncate">
                anderson@nuvro:~/dev-shell
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span
                title="Insights únicos dev-wisdom descubiertos"
                className="px-2 py-0.5 bg-[#0B0E14] border border-[#5EDBB0]/50 font-mono text-[10px] font-bold text-[#5EDBB0]"
              >
                Insights: {seenInsights.length}/{totalInsights}
              </span>
              <button
                type="button"
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playRetroSound('quote', true);
                }}
                aria-label={soundEnabled ? 'Silenciar audio 8-bit' : 'Activar audio 8-bit'}
                title={soundEnabled ? 'Audio 8-bit activo' : 'Audio 8-bit silenciado'}
                className="inline-flex items-center justify-center w-6 h-6 text-[#C9CDD8] hover:text-[#FFC83D] cursor-pointer"
              >
                {soundEnabled ? (
                  <Volume2 size={14} aria-hidden="true" />
                ) : (
                  <VolumeX size={14} aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar terminal de desarrollador"
                className="inline-flex items-center justify-center w-6 h-6 text-[#C9CDD8] hover:text-[#FFC83D] cursor-pointer"
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Output Area */}
          <div
            ref={scrollRef}
            className="h-36 overflow-y-auto px-3 py-2.5 font-mono text-[11px] leading-relaxed space-y-1 bg-[#0B0E14]"
          >
            {logs.map((entry) => (
              <div
                key={entry.id}
                className={`whitespace-pre-wrap break-words ${toneColor[entry.tone]}`}
              >
                {entry.text}
              </div>
            ))}
          </div>

          {/* Misiones Cumplidas Console-Log Panel */}
          <div className="border-t border-white/15 bg-[#0F141F] px-3 py-2 font-mono">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider ${
                  missionsUnlocked ? 'text-[#FFC83D]' : 'text-[#9AA2B4]'
                }`}
              >
                {missionsUnlocked
                  ? `[UNLOCKED] Misiones Cumplidas (${completedMissionsCount}/${MISSIONS.length})`
                  : '[LOCKED] Misiones Cumplidas'}
              </span>
              {missionsUnlocked && (
                <button
                  type="button"
                  onClick={() => setMissionsExpanded((prev) => !prev)}
                  className="text-[10px] text-[#5EDBB0] hover:underline cursor-pointer"
                >
                  {missionsExpanded ? 'Ocultar' : 'Mostrar'}
                </button>
              )}
            </div>

            {!missionsUnlocked ? (
              <p className="text-[10.5px] text-[#9AA2B4] leading-snug">
                &gt; Descubrí al menos 1 cita única en el recorrido o en Secret
                Files para desbloquear este log.
              </p>
            ) : (
              missionsExpanded && (
                <ul
                  aria-label="Lista de misiones cumplidas"
                  className="max-h-28 overflow-y-auto space-y-1 text-[10.5px] leading-snug pr-1"
                >
                  {missionStatuses.map((m) => (
                    <li
                      key={m.code}
                      className={`flex items-start gap-1.5 ${
                        m.completed ? 'text-[#5EDBB0]' : 'text-[#9AA2B4]'
                      }`}
                    >
                      <span className="shrink-0 font-bold">
                        {m.completed ? '[✓]' : '[ ]'}
                      </span>
                      <span className="min-w-0">
                        <span className="font-bold">[{m.code}]</span> {m.title}{' '}
                        <span className="text-[#7D8597]">
                          — {m.requirement}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>

          {/* Quick Command Pills */}
          <div className="px-3 py-1.5 bg-[#111520] border-t border-white/10 flex flex-wrap gap-1.5">
            {(
              ['chars', 'trails', 'sound', 'missions', 'insights', 'check', 'summon', 'help'] as const
            ).map(
              (cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => runCommand(cmd)}
                  className="px-2 py-0.5 font-mono text-[10px] font-bold bg-[#1B202C] hover:bg-[#2046F0] text-[#ECECE8] border border-white/20 cursor-pointer transition-colors"
                >
                  {cmd}
                </button>
              ),
            )}
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={handleSubmit}
            className="px-3 py-2 bg-[#0B0E14] border-t-2 border-white/15 flex items-center gap-2"
          >
            <label htmlFor="dev-terminal-input" className="font-mono text-xs font-bold text-[#5EDBB0] shrink-0">
              $&gt;
            </label>
            <input
              ref={inputRef}
              id="dev-terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="help, chars, check, summon..."
              autoComplete="off"
              spellCheck={false}
              className="flex-1 min-w-0 bg-transparent font-mono text-xs text-[#F7F7F4] placeholder-[#6B7280] focus:outline-none"
            />
          </form>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
