import React from 'react';
import {
  Bug,
  Database,
  FileText,
  Film,
  Image as ImageIcon,
  Lock,
  MapPin,
  Scissors,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { Language, ProjectPreviewId } from '../types';

interface ProjectPreviewProps {
  previewId: ProjectPreviewId;
  lang: Language;
  compact?: boolean;
}

export default function ProjectPreview({
  previewId,
  lang,
  compact = true,
}: ProjectPreviewProps) {
  const pad = compact ? 'p-4' : 'p-6 sm:p-8';

  switch (previewId) {
    case 'nuvro-crm-hacienda':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[var(--preview-bg)] text-[var(--preview-text)] tech-grid-dark`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[var(--preview-accent)]">
              <ShieldCheck size={13} aria-hidden="true" />
              SALES OS · 13,300+ LOC
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#2046F0] text-[#FFFFFF] font-mono text-[9px] font-extrabold uppercase">
              <Lock size={10} aria-hidden="true" />
              XAdES-EPES
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2.5 font-mono text-[9px]">
            <div className="bg-[var(--preview-surface)] border border-[#2046F0] p-2">
              <div className="flex items-center gap-1 text-[var(--preview-accent-mint)] font-bold mb-1">
                <MapPin size={10} aria-hidden="true" />
                GMaps
              </div>
              <div className="text-[var(--preview-muted)] leading-tight">
                {lang === 'es' ? 'Scoring & Dolor' : 'Lead Scoring'}
              </div>
            </div>
            <div className="bg-[var(--preview-surface)] border border-[var(--preview-accent)] p-2">
              <div className="flex items-center gap-1 text-[var(--preview-accent)] font-bold mb-1">
                <FileText size={10} aria-hidden="true" />
                PDF Gen
              </div>
              <div className="text-[var(--preview-muted)] leading-tight">
                jsPDF / pdfjs
              </div>
            </div>
            <div className="bg-[var(--preview-surface)] border border-[var(--preview-accent-mint)] p-2">
              <div className="text-[var(--preview-accent-mint)] font-bold mb-1">
                Hacienda CR
              </div>
              <div className="text-[var(--preview-muted)] leading-tight">
                XML + node-forge
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[var(--preview-subtle)] border-t border-[var(--preview-border)] pt-2">
            <span>React 19 · Supabase · Serverless</span>
            <span className="text-[var(--preview-accent)] font-bold">
              {lang === 'es' ? 'Acceso privado' : 'Private Access'}
            </span>
          </div>
        </div>
      );

    case 'nuvro-asset-studio':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[var(--preview-bg)] text-[var(--preview-text)] tech-grid-dark`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[var(--preview-accent)]">
              <Film size={13} aria-hidden="true" />
              VIDEO ENGINE 3.0 · IMAGE STUDIO
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#5EDBB0] text-[#121212] border border-[#121212] font-mono text-[9px] font-extrabold uppercase">
              <ShieldCheck size={11} aria-hidden="true" />
              SSRF GUARD
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-2.5">
            <div className="bg-[var(--preview-surface)] border-2 border-[#2046F0] p-2.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[var(--preview-accent)] mb-1">
                <Film size={12} aria-hidden="true" />
                iPhone MP4
              </div>
              <p className="font-mono text-[10px] text-[var(--preview-muted)] leading-tight">
                yt-dlp + FFmpeg / ffprobe
              </p>
              <div className="mt-2 h-1.5 w-full bg-[#2046F0]" />
            </div>

            <div className="bg-[var(--preview-surface)] border border-[var(--preview-border)] p-2.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[var(--preview-accent-mint)] mb-1">
                <ImageIcon size={12} aria-hidden="true" />
                Image Studio
              </div>
              <p className="font-mono text-[10px] text-[var(--preview-muted)] leading-tight">
                {lang === 'es'
                  ? 'Preparación rápida de producto'
                  : 'Product asset preparation'}
              </p>
              <div className="mt-2 flex gap-1">
                <span className="h-1.5 flex-1 bg-[#5EDBB0]" />
                <span className="h-1.5 flex-1 bg-[#5EDBB0]/70" />
                <span className="h-1.5 flex-1 bg-[#5EDBB0]/40" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[var(--preview-subtle)] border-t border-[var(--preview-border)] pt-2">
            <span>FastAPI · Docker · Serverless</span>
            <span className="text-[var(--preview-accent)] font-bold">
              nuvro-asset-studio.vercel.app
            </span>
          </div>
        </div>
      );

    case 'nuvro-clips-ia':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[var(--preview-bg-clips)] text-[var(--preview-text)]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[var(--preview-accent-coral)]">
              <Scissors size={13} aria-hidden="true" />
              NUVRO CLIPS IA · 9:16 STUDIO
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFC83D] text-[#121212] border border-[#121212] font-mono text-[9px] font-extrabold uppercase">
              <Lock size={10} aria-hidden="true" />
              PWA · $0 GPU
            </span>
          </div>

          <div className="grid grid-cols-12 gap-2.5 my-2 items-stretch">
            <div className="col-span-4 bg-[var(--preview-surface-clips)] border-2 border-[#FF5A4E] p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[8px] font-bold text-[var(--preview-accent)]">
                <span>9:16</span>
                <span>CANVAS</span>
              </div>
              <div className="my-1.5 space-y-1">
                <div className="h-1.5 w-4/5 bg-[var(--preview-bar)]" />
                <div className="px-1 py-0.5 bg-[#FFC83D] text-[#121212] font-mono text-[8px] font-extrabold text-center">
                  VIRAL CLIP
                </div>
              </div>
              <div className="h-1 w-full bg-[#FF5A4E]" />
            </div>

            <div className="col-span-8 flex flex-col justify-between gap-1.5 font-mono text-[9px]">
              <div className="bg-[var(--preview-surface-clips)] border border-[var(--preview-border)] px-2.5 py-1.5 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-[var(--preview-accent-mint)] font-bold">
                  <Sparkles size={11} aria-hidden="true" />
                  Gemini Files API
                </span>
                <span className="text-[var(--preview-subtle)]">
                  &gt;4.5MB Direct
                </span>
              </div>
              <div className="bg-[var(--preview-surface-clips)] border border-[var(--preview-border)] px-2.5 py-1.5 flex items-center justify-between gap-2">
                <span className="text-[var(--preview-accent)] font-bold">
                  MediaRecorder
                </span>
                <span className="text-[var(--preview-subtle)]">
                  Browser Render
                </span>
              </div>
              <div className="bg-[var(--preview-surface-clips)] border border-[var(--preview-border)] px-2.5 py-1.5 flex items-center justify-between gap-2">
                <span className="text-[var(--preview-accent-coral)] font-bold">
                  Vercel Blob
                </span>
                <span className="text-[var(--preview-subtle)]">
                  Multi-API Publish
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[var(--preview-subtle)] border-t border-[var(--preview-border)] pt-2">
            <span>Next.js 16 · React 19 · TS</span>
            <span className="text-[var(--preview-accent-coral)] font-bold">
              {lang === 'es' ? 'Demo protegida' : 'Protected Live App'}
            </span>
          </div>
        </div>
      );

    case 'leadpilot-crm':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[var(--preview-bg-alt)] text-[var(--preview-text)]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[var(--preview-accent-mint)]">
              <Database size={13} aria-hidden="true" />
              LEADPILOT SAAS CRM
            </span>
            <span className="px-2 py-0.5 bg-[#5EDBB0] text-[#121212] border border-[#121212] font-mono text-[9px] font-extrabold uppercase">
              {lang === 'es' ? 'EN VIVO' : 'LIVE'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2.5">
            <div className="bg-[var(--preview-surface-alt)] border border-[var(--preview-border)] p-2">
              <div className="font-mono text-[9px] text-[var(--preview-accent-mint)] font-bold mb-1.5">
                {lang === 'es' ? 'Entrantes' : 'Inbound'}
              </div>
              <div className="h-2 w-4/5 bg-[var(--preview-bar)] mb-1" />
              <div className="h-2 w-3/5 bg-[var(--preview-bar-soft)] mb-2" />
              <span className="inline-block px-1.5 py-0.5 bg-[#5EDBB0]/25 text-[var(--preview-accent-mint)] font-mono text-[8px] font-bold">
                WEB
              </span>
            </div>
            <div className="bg-[var(--preview-surface-alt)] border-2 border-[#2046F0] p-2">
              <div className="font-mono text-[9px] text-[var(--preview-accent)] font-bold mb-1.5">
                {lang === 'es' ? 'Seguimiento' : 'Follow-up'}
              </div>
              <div className="h-2 w-5/6 bg-[var(--preview-bar)] mb-1" />
              <div className="h-2 w-2/3 bg-[var(--preview-bar-soft)] mb-2" />
              <span className="inline-block px-1.5 py-0.5 bg-[#FFC83D] text-[#121212] font-mono text-[8px] font-bold">
                CRM
              </span>
            </div>
            <div className="bg-[var(--preview-surface-alt)] border border-[var(--preview-border)] p-2">
              <div className="font-mono text-[9px] text-[var(--preview-accent-coral)] font-bold mb-1.5">
                {lang === 'es' ? 'Cierre' : 'Closing'}
              </div>
              <div className="h-2 w-3/4 bg-[var(--preview-bar)] mb-1" />
              <div className="h-2 w-1/2 bg-[var(--preview-bar-soft)] mb-2" />
              <span className="inline-block px-1.5 py-0.5 bg-[#2046F0] text-[#FFFFFF] font-mono text-[8px] font-bold">
                SQL
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[var(--preview-subtle)] border-t border-[var(--preview-border)] pt-2">
            <span>Next.js · TypeScript · Supabase</span>
            <span className="text-[var(--preview-accent-mint)] font-bold">
              leadpilot-pi.vercel.app
            </span>
          </div>
        </div>
      );

    case 'fumigadora-dds':
    default:
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[var(--preview-bg-dds)] text-[var(--preview-text)]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[var(--preview-accent-coral)]">
              <Bug size={13} aria-hidden="true" />
              FUMIGADORA DDS · CR
            </span>
            <span className="px-2 py-0.5 bg-[#FF5A4E] text-[#121212] border border-[#121212] font-mono text-[9px] font-extrabold uppercase">
              {lang === 'es' ? 'EN PRODUCCIÓN' : 'PRODUCTION'}
            </span>
          </div>

          <div className="my-2.5 bg-[var(--preview-surface-dds)] border-2 border-[#FF5A4E] p-3 flex items-center justify-between gap-3">
            <div>
              <div className="font-display-nuvro text-2xl text-[var(--preview-text)] leading-none mb-1">
                {lang === 'es'
                  ? 'CONTROL DE PLAGAS 24/7'
                  : '24/7 PEST CONTROL'}
              </div>
              <p className="font-mono text-[10px] text-[var(--preview-muted)]">
                {lang === 'es'
                  ? '7 provincias de Costa Rica · Sitio comercial real'
                  : 'All 7 Costa Rica provinces · Real client deployment'}
              </p>
            </div>
            <span className="px-2 py-1 border-2 border-[var(--preview-accent)] text-[var(--preview-accent)] font-mono text-[9px] font-bold shrink-0">
              7 PROV
            </span>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[var(--preview-subtle)] border-t border-[var(--preview-border)] pt-2">
            <span>fumigadoradds.com</span>
            <span className="text-[var(--preview-accent)] font-bold">
              {lang === 'es' ? 'Dominio propio' : 'Custom Domain'}
            </span>
          </div>
        </div>
      );
  }
}
