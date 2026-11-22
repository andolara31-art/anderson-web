import React, { useState } from 'react';
import {
  Bot,
  Code2,
  Cpu,
  Database,
  FileLock2,
  FolderOpen,
  Sparkles,
  Webhook,
} from 'lucide-react';
import { BUILD_LAB_MODULES } from '../data/stackAndLab';
import {
  CHARACTER_SECRET_FILES,
  getInsightKey,
} from '../data/characterFiles';
import type { LabModule } from '../types';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { PixelSprite } from './PixelCrew';
import BatmanPeek from './BatmanPeek';
import { emitCharacterTrail } from './CharacterParticleTrail';
import { useCharacterConfig } from '../context/CharacterConfigContext';
import { playRetroSound } from '../utils/retroSound';

const ACCENT_COLOR: Record<LabModule['accent'], string> = {
  blue: '#2046F0',
  yellow: '#FFC83D',
  mint: '#5EDBB0',
  coral: '#FF5A4E',
};

function getModuleIcon(id: string) {
  switch (id) {
    case 'python-automation':
      return <Code2 size={18} aria-hidden="true" />;
    case 'api-integrations':
      return <Webhook size={18} aria-hidden="true" />;
    case 'ai-agents':
      return <Bot size={18} aria-hidden="true" />;
    case 'commercial-tools':
      return <Cpu size={18} aria-hidden="true" />;
    case 'data-processing':
      return <Database size={18} aria-hidden="true" />;
    default:
      return <Sparkles size={18} aria-hidden="true" />;
  }
}

export default function BuildLab() {
  const [selectedId, setSelectedId] = useState<string>(BUILD_LAB_MODULES[0].id);
  const [selectedFileId, setSelectedFileId] = useState<string>(
    CHARACTER_SECRET_FILES[0].id,
  );
  const [revealedWisdomMap, setRevealedWisdomMap] = useState<
    Record<string, boolean>
  >({});
  const { summonCharacter, setCharactersVisible, soundEnabled, markInsightsSeen } =
    useCharacterConfig();

  const selectedModule =
    BUILD_LAB_MODULES.find((m) => m.id === selectedId) ?? BUILD_LAB_MODULES[0];
  const selectedFile =
    CHARACTER_SECRET_FILES.find((f) => f.id === selectedFileId) ??
    CHARACTER_SECRET_FILES[0];
  const isWisdomRevealed = Boolean(revealedWisdomMap[selectedFile.id]);

  const markFileWisdomSeen = (fileId: string) => {
    const file = CHARACTER_SECRET_FILES.find((f) => f.id === fileId);
    if (!file) return;
    markInsightsSeen(
      file.devWisdomHistory.map((entry) => getInsightKey(file.id, entry.code)),
    );
    playRetroSound(file.summonKey ?? 'unlock', soundEnabled);
  };

  const toggleWisdomFor = (id: string) => {
    setRevealedWisdomMap((prev) => {
      const nextOpen = !prev[id];
      if (nextOpen) {
        markFileWisdomSeen(id);
      }
      return { ...prev, [id]: nextOpen };
    });
  };

  return (
    <section
      id="build-lab"
      className="relative bg-ink-canvas tech-grid-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="nuvro-kicker text-[#FFC83D] mb-4">
                Laboratorio de Ingeniería
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.8rem,6vw,5.2rem)] text-[#F7F7F4] mb-3">
                THE BUILD <span className="text-[#2046F0]">LAB.</span>
              </h2>
              <p className="text-lg text-[#C9CDD8] max-w-xl">
                Código, experimentos e ideas en construcción.
              </p>
            </div>
            <p className="font-mono text-xs text-[#AEB5C4] max-w-sm border-2 border-white/15 bg-[#141822] px-4 py-3">
              Cada módulo distingue explícitamente entre trabajo implementado,
              dominio técnico y áreas de experimentación actual.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Connected Lab Modules */}
          <div className="lg:col-span-7 min-w-0 grid sm:grid-cols-2 gap-4">
            {BUILD_LAB_MODULES.map((mod) => {
              const isSelected = mod.id === selectedModule.id;
              const accent = ACCENT_COLOR[mod.accent];

              return (
                <div key={mod.id} className="relative flex flex-col">
                  {mod.id === 'api-integrations' && (
                    <BatmanPeek
                      edge="top-right"
                      tone="yellow"
                      lines={['Flujos sin fricción', 'REST + Webhooks']}
                      delay={0.14}
                    />
                  )}
                  {mod.id === 'data-processing' && (
                    <BatmanPeek
                      edge="left-border"
                      tone="dark"
                      lines={['Datos estructurados', 'En uso real']}
                      delay={0.18}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedId(mod.id)}
                    aria-pressed={isSelected}
                    className={`flex-1 text-left p-5 border-3 transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#F7F7F4] text-[#121212] border-[#121212] shadow-[6px_6px_0_#2046F0] -translate-x-0.5 -translate-y-0.5'
                        : 'bg-[#141822] text-[#F7F7F4] border-[#2A3142] hover:border-[#FFC83D]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className="inline-flex items-center gap-2 font-mono text-xs font-bold"
                          style={{ color: isSelected ? '#2046F0' : accent }}
                        >
                          {getModuleIcon(mod.id)}
                          {mod.code}
                        </span>
                        <span
                          className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 border ${
                            isSelected
                              ? 'bg-[#FFC83D] text-[#121212] border-[#121212]'
                              : 'bg-[#1B202C] text-[#C9CDD8] border-white/15'
                          }`}
                        >
                          {mod.status}
                        </span>
                      </div>

                      <h3 className="font-display-nuvro text-2xl mb-2">
                        {mod.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isSelected ? 'text-[#2C2C28]' : 'text-[#AEB5C4]'
                        }`}
                      >
                        {mod.summary}
                      </p>
                    </div>

                    <div
                      className={`font-mono text-[11px] pt-3 border-t flex flex-wrap gap-x-2 gap-y-1 ${
                        isSelected
                          ? 'border-[#121212]/15 text-[#2046F0] font-bold'
                          : 'border-white/10 text-[#9AA2B4]'
                      }`}
                    >
                      {mod.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {idx < mod.technologies.length - 1 && (
                            <span aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Connected Architecture Inspector */}
          <div className="lg:col-span-5 min-w-0 lg:sticky lg:top-24 relative mt-6 lg:mt-0">
            <div
              aria-hidden="true"
              className="flex items-end justify-between px-4 -mb-1 lg:mb-0 lg:absolute lg:-top-[39px] lg:left-0 lg:right-0 relative z-20 pointer-events-none"
            >
              <span className="font-hand-nuvro text-lg text-[#FFC83D] -rotate-1">
                Claude · Lab IA
              </span>
              <PixelSprite spriteName="claude" scale={3} className="px-float" />
            </div>
            <div className="bg-[#141822] border-4 border-[#121212] shadow-[8px_8px_0_#FFC83D] overflow-hidden">
              <div className="bg-[#2046F0] text-[#FFFFFF] px-5 py-3.5 border-b-3 border-[#121212] flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Módulo conectado · {selectedModule.code}
                </span>
                <span className="font-mono text-xs bg-[#121212] text-[#FFC83D] px-2 py-0.5 font-bold">
                  {selectedModule.status}
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h3 className="font-display-nuvro text-3xl text-[#F7F7F4] mb-2">
                    {selectedModule.title}
                  </h3>
                  <p className="text-sm text-[#D6D8DF] leading-relaxed">
                    {selectedModule.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#5EDBB0] mb-3">
                    Capacidades y alcance real
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedModule.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-sm text-[#E5E7EB]"
                      >
                        <span
                          aria-hidden="true"
                          className="w-2 h-2 mt-2 bg-[#FFC83D] border border-[#121212] shrink-0"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#FFC83D] font-bold mb-1">
                    Nota técnica
                  </div>
                  <p className="text-xs sm:text-sm text-[#C9CDD8] leading-relaxed">
                    {selectedModule.architectureNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secret Files: Character Crew Lore & Dev-Wisdom History */}
        <div
          id="secret-files"
          className="mt-16 pt-14 border-t-2 border-white/15"
        >
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="nuvro-kicker text-[#5EDBB0] mb-3">
                  Secret Files · Expedientes Pixel
                </p>
                <h3 className="font-display-nuvro text-[clamp(2.2rem,4.5vw,3.6rem)] text-[#F7F7F4] mb-2">
                  ARCHIVO DE LA{' '}
                  <span className="text-[#FFC83D]">CREW PIXEL.</span>
                </h3>
                <p className="text-sm sm:text-base text-[#C9CDD8] max-w-2xl leading-relaxed">
                  Biografías, decisiones de diseño en grilla{' '}
                  <span className="font-mono text-[#5EDBB0]">crispEdges</span> y
                  registros <span className="font-mono text-[#FFC83D]">dev-wisdom</span>{' '}
                  de cada personaje del ecosistema. Tocá un expediente para
                  inspeccionarlo y revelar su historial.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase px-3.5 py-2 bg-[#141822] text-[#FFC83D] border-2 border-[#FFC83D]/50 self-start md:self-end">
                <FileLock2 size={14} aria-hidden="true" />
                {CHARACTER_SECRET_FILES.length} expedientes clasificados
              </span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Crew Roster */}
            <div className="lg:col-span-5 min-w-0 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CHARACTER_SECRET_FILES.map((file) => {
                const isActive = file.id === selectedFile.id;
                const unlocked = Boolean(revealedWisdomMap[file.id]);
                return (
                  <button
                    key={file.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={(e) => {
                      if (file.trailVariant) {
                        emitCharacterTrail(
                          e.clientX,
                          e.clientY,
                          file.trailVariant,
                          true,
                        );
                      }
                      if (isActive) {
                        toggleWisdomFor(file.id);
                      } else {
                        setSelectedFileId(file.id);
                        setRevealedWisdomMap((prev) => ({
                          ...prev,
                          [file.id]: true,
                        }));
                        markFileWisdomSeen(file.id);
                      }
                    }}
                    className={`p-3.5 border-3 text-left transition-all cursor-pointer flex flex-col items-start justify-between gap-3 min-h-[116px] ${
                      isActive
                        ? 'bg-[#F7F7F4] text-[#121212] border-[#121212] shadow-[5px_5px_0_#FFC83D] -translate-y-0.5'
                        : 'bg-[#141822] text-[#F7F7F4] border-[#2A3142] hover:border-[#FFC83D]'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between gap-2">
                      <span
                        className="p-1.5 bg-[#0B0E14] border-2 border-[#121212]"
                        style={{ boxShadow: `2px 2px 0 ${file.accent}` }}
                      >
                        <PixelSprite
                          spriteName={file.id}
                          scale={2}
                          alwaysVisible
                        />
                      </span>
                      <span
                        className={`font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 border ${
                          unlocked
                            ? 'bg-[#5EDBB0] text-[#121212] border-[#121212]'
                            : isActive
                              ? 'bg-[#FFC83D] text-[#121212] border-[#121212]'
                              : 'bg-[#1B202C] text-[#AEB5C4] border-white/15'
                        }`}
                      >
                        {unlocked ? 'Abierto' : 'Archivo'}
                      </span>
                    </div>

                    <div className="min-w-0 w-full">
                      <div className="font-mono text-xs font-bold truncate">
                        {file.codename}
                      </div>
                      <div
                        className={`text-[11px] leading-tight line-clamp-1 mt-0.5 ${
                          isActive ? 'text-[#4A4A46]' : 'text-[#9AA2B4]'
                        }`}
                      >
                        {file.origin}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Character Dossier & Dev-Wisdom History */}
            <div className="lg:col-span-7 min-w-0 bg-[#141822] border-4 border-[#121212] shadow-[8px_8px_0_#2046F0] overflow-hidden">
              <div className="bg-[#0B0E14] border-b-3 border-[#121212] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 border border-[#F7F7F4]"
                    style={{ backgroundColor: selectedFile.accent }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFC83D]">
                    Expediente · {selectedFile.codename}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#5EDBB0]">
                  {selectedFile.origin}
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                {/* Bio Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-5 border-b border-white/10">
                  <button
                    type="button"
                    onClick={(e) => {
                      if (selectedFile.trailVariant) {
                        emitCharacterTrail(
                          e.clientX,
                          e.clientY,
                          selectedFile.trailVariant,
                          true,
                        );
                      }
                      toggleWisdomFor(selectedFile.id);
                    }}
                    aria-label={`Alternar historial dev-wisdom de ${selectedFile.codename}`}
                    title="Tocá el sprite para revelar u ocultar dev-wisdom"
                    className="self-start shrink-0 p-3 bg-[#0B0E14] border-3 border-[#121212] hover:-translate-y-0.5 transition-transform cursor-pointer"
                    style={{ boxShadow: `4px 4px 0 ${selectedFile.accent}` }}
                  >
                    <PixelSprite
                      spriteName={selectedFile.id}
                      scale={3.5}
                      alwaysVisible
                    />
                  </button>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-display-nuvro text-3xl sm:text-4xl text-[#F7F7F4]">
                      {selectedFile.codename}
                    </h4>
                    <p
                      className="font-mono text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: selectedFile.accent }}
                    >
                      {selectedFile.role}
                    </p>
                    <p className="text-sm text-[#D6D8DF] leading-relaxed">
                      {selectedFile.bio}
                    </p>
                  </div>
                </div>

                {/* Design Lore Grid */}
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-3">
                    <div className="font-mono text-[10px] font-bold uppercase text-[#5EDBB0] mb-1">
                      Especificación
                    </div>
                    <p className="font-mono text-xs text-[#ECECE8]">
                      {selectedFile.designLore.gridSpec}
                    </p>
                  </div>
                  <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-3">
                    <div className="font-mono text-[10px] font-bold uppercase text-[#FFC83D] mb-1">
                      Paleta
                    </div>
                    <p className="text-xs text-[#C9CDD8] leading-snug">
                      {selectedFile.designLore.paletteNotes}
                    </p>
                  </div>
                  <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-3">
                    <div className="font-mono text-[10px] font-bold uppercase text-[#FF5A4E] mb-1">
                      Rasgo visual
                    </div>
                    <p className="text-xs text-[#C9CDD8] leading-snug">
                      {selectedFile.designLore.visualTrait}
                    </p>
                  </div>
                </div>

                {/* Interactive Dev-Wisdom History */}
                <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        if (selectedFile.trailVariant) {
                          emitCharacterTrail(
                            e.clientX,
                            e.clientY,
                            selectedFile.trailVariant,
                            true,
                          );
                        }
                        toggleWisdomFor(selectedFile.id);
                      }}
                      aria-expanded={isWisdomRevealed}
                      className="inline-flex items-center gap-2 px-3 py-2 min-h-[40px] bg-[#FFC83D] text-[#121212] border-2 border-[#121212] font-mono text-xs font-bold uppercase hover:bg-[#F7F7F4] transition-colors cursor-pointer"
                    >
                      <FolderOpen size={14} aria-hidden="true" />
                      {isWisdomRevealed
                        ? 'Ocultar historial dev-wisdom'
                        : `Revelar historial dev-wisdom (${selectedFile.devWisdomHistory.length})`}
                    </button>

                    {selectedFile.summonKey && (
                      <button
                        type="button"
                        onClick={() => {
                          setCharactersVisible(true);
                          summonCharacter(selectedFile.summonKey);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] bg-[#1B202C] hover:bg-[#2046F0] text-[#F7F7F4] border-2 border-white/20 font-mono text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        Invocar en pantalla
                      </button>
                    )}
                  </div>

                  {isWisdomRevealed ? (
                    <ul className="space-y-2.5 pt-2 border-t border-white/10">
                      {selectedFile.devWisdomHistory.map((entry) => (
                        <li
                          key={entry.code}
                          className="p-3 bg-[#141822] border-l-3 border-[#FFC83D] space-y-1"
                        >
                          <div className="flex items-center justify-between gap-2 font-mono text-[10px]">
                            <span className="font-bold text-[#5EDBB0]">
                              {entry.code}
                            </span>
                            <span className="text-[#9AA2B4] uppercase">
                              {entry.context}
                            </span>
                          </div>
                          <p className="font-mono text-xs text-[#F7F7F4] leading-relaxed">
                            «{entry.quote}»
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-mono text-xs text-[#9AA2B4]">
                      Tocá el sprite o «Revelar historial dev-wisdom» para
                      desbloquear las notas registradas de {selectedFile.codename}.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Torn Edge into Stack Paper Section */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#ECECE8" fiber="#F7F7F4" seed={89} />
      </div>
    </section>
  );
}
