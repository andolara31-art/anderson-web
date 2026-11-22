import React, { useState } from 'react';
import { ArrowUpRight, Award, CheckCircle2, Clock, FileCheck2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/certifications';
import type { CertificationItem } from '../types';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { PixelSprite } from './PixelCrew';
import BatmanPeek from './BatmanPeek';

function InstitutionBadge({
  institution,
}: {
  institution: CertificationItem['institution'];
}) {
  const styles: Record<
    CertificationItem['institution'],
    { bg: string; fg: string; mark: string }
  > = {
    IBM: { bg: '#2046F0', fg: '#FFFFFF', mark: 'IBM' },
    Microsoft: { bg: '#121212', fg: '#FFC83D', mark: 'MS' },
    Meta: { bg: '#2046F0', fg: '#FFFFFF', mark: 'META' },
    Google: { bg: '#FFC83D', fg: '#121212', mark: 'G' },
    'Claude Academy': { bg: '#5EDBB0', fg: '#121212', mark: 'CA' },
  };

  const current = styles[institution];

  return (
    <div
      aria-hidden="true"
      className="w-12 h-12 shrink-0 border-3 border-[#121212] shadow-[3px_3px_0_#121212] flex items-center justify-center font-mono text-xs font-extrabold tracking-tight"
      style={{ backgroundColor: current.bg, color: current.fg }}
    >
      {current.mark}
    </div>
  );
}

export default function Certifications() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="relative bg-paper-torn py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="nuvro-kicker text-[#2046F0] mb-4">
                Certificaciones profesionales
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#121212] mb-3 max-w-3xl">
                APRENDIZAJE CONTINUO.{' '}
                <span className="text-[#2046F0]">CONOCIMIENTO APLICADO.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A46] max-w-2xl leading-relaxed">
                Formación técnica estructurada en desarrollo full-stack,
                inteligencia artificial aplicada, ingeniería ML y diseño UX. Los
                enlaces de verificación quedan preparados para adjuntar cada
                credencial oficial.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] text-xs font-mono font-bold text-[#121212] self-start lg:self-end">
              <FileCheck2 size={16} className="text-[#2046F0]" aria-hidden="true" />
              <span>Referencias iniciales · Sin IDs inventados</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const isReserved = cert.status === 'reservado';
            const isExpanded = expandedId === cert.id;

            return (
              <ScrollReveal key={cert.id} delay={index * 0.05}>
                <div className="relative h-full">
                  {index === 0 && (
                    <BatmanPeek
                      edge="top-right"
                      tone="dark"
                      lines={['Sin IDs inventados', 'Base técnica real']}
                      delay={0.14}
                    />
                  )}
                  <article
                    className={`h-full flex flex-col justify-between p-6 border-3 border-[#121212] transition-all ${
                      isReserved
                        ? 'bg-[#ECECE8] border-dashed shadow-[5px_5px_0_#4A4A46]'
                        : 'comic-panel-light bg-[#FFFFFF]'
                    }`}
                  >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <InstitutionBadge institution={cert.institution} />
                        {cert.institution === 'Google' && (
                          <PixelSprite spriteName="google" scale={3} />
                        )}
                        {cert.institution === 'Claude Academy' && (
                          <PixelSprite spriteName="claude" scale={3} />
                        )}
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold border-2 border-[#121212] ${
                          isReserved
                            ? 'bg-[#FFFFFF] text-[#4A4A46]'
                            : 'bg-[#FFC83D] text-[#121212]'
                        }`}
                      >
                        {isReserved ? (
                          <Clock size={12} aria-hidden="true" />
                        ) : (
                          <Award size={12} aria-hidden="true" />
                        )}
                        {isReserved ? 'Espacio reservado' : cert.institution}
                      </span>
                    </div>

                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0] mb-1">
                      {cert.institution}
                    </div>

                    <h3 className="font-display-nuvro text-3xl text-[#121212] mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-[#4A4A46] leading-relaxed mb-5">
                      {cert.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-[#121212]/10 space-y-3">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-btn brand-btn-yellow w-full !min-h-[44px] !py-2 !text-xs"
                      >
                        Ver credencial
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : cert.id)
                        }
                        aria-expanded={isExpanded}
                        className="w-full min-h-[44px] px-4 py-2 border-2 border-[#121212] bg-[#ECECE8] hover:bg-[#FFC83D] text-[#121212] font-bold text-xs uppercase tracking-wider flex items-center justify-between gap-2 transition-colors cursor-pointer"
                      >
                        <span>Ver credencial</span>
                        <span className="font-mono text-[11px] text-[#4A4A46]">
                          {isExpanded ? 'Ocultar' : 'Estado'}
                        </span>
                      </button>
                    )}

                    {isExpanded && !cert.credentialUrl && (
                      <div
                        role="status"
                        className="p-3 bg-[#121212] text-[#F7F7F4] text-xs font-mono leading-relaxed flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-[#5EDBB0] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{cert.note}</span>
                      </div>
                    )}
                  </div>
                </article>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Torn Edge into NUVRO Blue Bridge Section */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#2046F0" fiber="#121212" seed={127} />
      </div>
    </section>
  );
}
