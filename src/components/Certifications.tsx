import React from 'react';
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Languages,
} from 'lucide-react';
import {
  ANTHROPIC_COURSES,
  ANTHROPIC_EDUCATION_META,
  EF_SET_CERT,
} from '../data/certifications';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';

export default function Certifications() {
  const { lang, pick } = useLanguage();

  return (
    <section
      id="certifications"
      className="relative scroll-mt-20 bg-paper-torn py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="nuvro-kicker text-[#2046F0] mb-4">
                {lang === 'es'
                  ? 'Certificaciones verificadas'
                  : 'Verified Credentials'}
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#121212] mb-3 max-w-3xl">
                {lang === 'es' ? (
                  <>
                    INGLÉS C1 &amp;{' '}
                    <span className="text-[#2046F0]">
                      ANTHROPIC EDUCATION.
                    </span>
                  </>
                ) : (
                  <>
                    C1 ENGLISH &amp;{' '}
                    <span className="text-[#2046F0]">
                      ANTHROPIC EDUCATION.
                    </span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A46] max-w-2xl leading-relaxed">
                {lang === 'es'
                  ? 'Certificación internacional de inglés EF SET C1 Avanzado y los 6 cursos oficiales completados en Anthropic Education (Jun 2026).'
                  : 'Official EF SET C1 Advanced English certification and 6 verified technical courses completed via Anthropic Education (Jun 2026).'}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: EF SET C1 Verified Certificate */}
          <ScrollReveal className="lg:col-span-5">
            <article className="comic-panel-light bg-[#FFFFFF] h-full flex flex-col justify-between p-6 border-3 border-[#121212]">
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 shrink-0 border-3 border-[#121212] shadow-[3px_3px_0_#121212] bg-[#2046F0] text-[#FFFFFF] flex items-center justify-center"
                  >
                    <Languages size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold border-2 border-[#121212] bg-[#FFC83D] text-[#121212]">
                    <Award size={12} aria-hidden="true" />
                    {EF_SET_CERT.level} · {EF_SET_CERT.score}
                  </span>
                </div>

                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0] mb-1">
                  {EF_SET_CERT.provider} · {EF_SET_CERT.date}
                </div>

                <h3 className="font-display-nuvro text-3xl text-[#121212] mb-3">
                  {pick(EF_SET_CERT.title)}
                </h3>

                <p className="text-sm text-[#4A4A46] leading-relaxed mb-5">
                  {pick(EF_SET_CERT.readingNote)}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#121212]/10">
                <a
                  href={EF_SET_CERT.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-btn brand-btn-yellow w-full !min-h-[44px] !py-2 !text-xs"
                >
                  {lang === 'es'
                    ? 'Ver certificado EF SET'
                    : 'Verify EF SET Certificate'}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          </ScrollReveal>

          {/* Card 2: Compact 6-Course Anthropic Education Card */}
          <ScrollReveal delay={0.08} className="lg:col-span-7">
            <article className="comic-panel-light bg-[#FFFFFF] h-full flex flex-col justify-between p-6 border-3 border-[#121212]">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 shrink-0 border-3 border-[#121212] shadow-[3px_3px_0_#121212] bg-[#121212] text-[#FFC83D] flex items-center justify-center font-mono text-xs font-extrabold"
                    >
                      <BookOpenCheck size={21} />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0]">
                        {ANTHROPIC_EDUCATION_META.provider}
                      </div>
                      <h3 className="font-display-nuvro text-3xl text-[#121212] leading-none">
                        {lang === 'es'
                          ? '6 Cursos Verificados · IA & Agentes'
                          : '6 Verified Courses · AI & Agents'}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold border-2 border-[#121212] bg-[#5EDBB0] text-[#121212]">
                    {ANTHROPIC_EDUCATION_META.date}
                  </span>
                </div>

                {/* Compact 2-Column 6-Course Grid */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {ANTHROPIC_COURSES.map((course, idx) => (
                    <div
                      key={course.id}
                      className="p-3 bg-[#F7F7F4] border-2 border-[#121212]/20 flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#2046F0] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-[#121212] leading-snug">
                          <span className="font-mono text-[11px] text-[#2046F0] mr-1">
                            0{idx + 1}.
                          </span>
                          {course.title}
                        </div>
                        <p className="text-[11px] text-[#4A4A46] leading-snug mt-0.5">
                          {pick(course.focus)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t-2 border-[#121212]/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#4A4A46]">
                <span>
                  {lang === 'es'
                    ? 'Currículo completado: Claude API, MCP, Claude Code & Agent Skills'
                    : 'Completed curriculum: Claude API, MCP, Claude Code & Agent Skills'}
                </span>
                <span className="font-bold text-[#121212]">
                  {ANTHROPIC_EDUCATION_META.courseCount}/6 · {ANTHROPIC_EDUCATION_META.date}
                </span>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>

      {/* Torn Edge into NUVRO Blue Bridge Section */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#2046F0" fiber="#121212" seed={127} />
      </div>
    </section>
  );
}
