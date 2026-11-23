import React from 'react';
import {
  Bug,
  Database,
  Dumbbell,
  Film,
  Image as ImageIcon,
  Lock,
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
    case 'nuvro-asset-studio':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[#0E121B] text-[#F7F7F4] tech-grid-dark`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[#FFC83D]">
              <Film size={13} aria-hidden="true" />
              VIDEO ENGINE 3.0 · ASSET PREP
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#5EDBB0] text-[#121212] font-mono text-[9px] font-extrabold uppercase">
              <ShieldCheck size={11} aria-hidden="true" />
              SSRF GUARD
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-2.5">
            <div className="bg-[#171D2B] border-2 border-[#FFC83D] p-2.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#FFC83D] mb-1">
                <Film size={12} aria-hidden="true" />
                iPhone MP4
              </div>
              <p className="font-mono text-[10px] text-[#D6D8DF] leading-tight">
                yt-dlp + FFmpeg / ffprobe
              </p>
              <div className="mt-2 h-1.5 w-full bg-[#2046F0]" />
            </div>

            <div className="bg-[#171D2B] border border-white/20 p-2.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#5EDBB0] mb-1">
                <ImageIcon size={12} aria-hidden="true" />
                {lang === 'es' ? 'Imágenes por lote' : 'Batch Image Prep'}
              </div>
              <p className="font-mono text-[10px] text-[#D6D8DF] leading-tight">
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

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[#AEB5C4] border-t border-white/10 pt-2">
            <span>FastAPI · Docker · Serverless</span>
            <span className="text-[#FFC83D] font-bold">
              nuvro-asset-studio.vercel.app
            </span>
          </div>
        </div>
      );

    case 'nuvro-clips-ia':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[#140E1A] text-[#F7F7F4]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[#FF5A4E]">
              <Scissors size={13} aria-hidden="true" />
              NUVRO CLIPS IA · 9:16 STUDIO
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFC83D] text-[#121212] font-mono text-[9px] font-extrabold uppercase">
              <Lock size={10} aria-hidden="true" />
              PWA · $0 GPU
            </span>
          </div>

          <div className="grid grid-cols-12 gap-2.5 my-2 items-stretch">
            {/* 9:16 Vertical Render Frame */}
            <div className="col-span-4 bg-[#1F1729] border-2 border-[#FF5A4E] p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[8px] text-[#FFC83D]">
                <span>9:16</span>
                <span>CANVAS</span>
              </div>
              <div className="my-1.5 space-y-1">
                <div className="h-1.5 w-4/5 bg-white/30" />
                <div className="px-1 py-0.5 bg-[#FFC83D] text-[#121212] font-mono text-[8px] font-extrabold text-center">
                  VIRAL CLIP
                </div>
              </div>
              <div className="h-1 w-full bg-[#FF5A4E]" />
            </div>

            {/* Pipeline Nodes */}
            <div className="col-span-8 flex flex-col justify-between gap-1.5 font-mono text-[9px]">
              <div className="bg-[#1E1928] border border-white/15 px-2.5 py-1.5 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-[#5EDBB0] font-bold">
                  <Sparkles size={11} aria-hidden="true" />
                  Gemini Files API
                </span>
                <span className="text-[#AEB5C4]">&gt;4.5MB Direct</span>
              </div>
              <div className="bg-[#1E1928] border border-white/15 px-2.5 py-1.5 flex items-center justify-between gap-2">
                <span className="text-[#FFC83D] font-bold">MediaRecorder</span>
                <span className="text-[#AEB5C4]">Browser Render</span>
              </div>
              <div className="bg-[#1E1928] border border-white/15 px-2.5 py-1.5 flex items-center justify-between gap-2">
                <span className="text-[#FF5A4E] font-bold">Vercel Blob</span>
                <span className="text-[#AEB5C4]">Multi-API Publish</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[#AEB5C4] border-t border-white/10 pt-2">
            <span>Next.js 16 · React 19 · TS</span>
            <span className="text-[#FF5A4E] font-bold">
              {lang === 'es' ? 'Demo protegida' : 'Protected Live App'}
            </span>
          </div>
        </div>
      );

    case 'leadpilot-crm':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[#131823] text-[#F7F7F4]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[#5EDBB0]">
              <Database size={13} aria-hidden="true" />
              LEADPILOT SAAS CRM
            </span>
            <span className="px-2 py-0.5 bg-[#5EDBB0] text-[#121212] font-mono text-[9px] font-extrabold uppercase">
              {lang === 'es' ? 'EN VIVO' : 'LIVE'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2.5">
            <div className="bg-[#1B2231] border border-white/15 p-2">
              <div className="font-mono text-[9px] text-[#5EDBB0] font-bold mb-1.5">
                {lang === 'es' ? 'Entrantes' : 'Inbound'}
              </div>
              <div className="h-2 w-4/5 bg-white/30 mb-1" />
              <div className="h-2 w-3/5 bg-white/15 mb-2" />
              <span className="inline-block px-1.5 py-0.5 bg-[#5EDBB0]/20 text-[#5EDBB0] font-mono text-[8px]">
                WEB
              </span>
            </div>
            <div className="bg-[#1B2231] border-2 border-[#2046F0] p-2">
              <div className="font-mono text-[9px] text-[#FFC83D] font-bold mb-1.5">
                {lang === 'es' ? 'Seguimiento' : 'Follow-up'}
              </div>
              <div className="h-2 w-5/6 bg-white/35 mb-1" />
              <div className="h-2 w-2/3 bg-white/20 mb-2" />
              <span className="inline-block px-1.5 py-0.5 bg-[#FFC83D]/20 text-[#FFC83D] font-mono text-[8px]">
                CRM
              </span>
            </div>
            <div className="bg-[#1B2231] border border-white/15 p-2">
              <div className="font-mono text-[9px] text-[#FF5A4E] font-bold mb-1.5">
                {lang === 'es' ? 'Cierre' : 'Closing'}
              </div>
              <div className="h-2 w-3/4 bg-white/30 mb-1" />
              <div className="h-2 w-1/2 bg-white/15 mb-2" />
              <span className="inline-block px-1.5 py-0.5 bg-[#2046F0]/30 text-[#D6D8DF] font-mono text-[8px]">
                SQL
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-[#AEB5C4] border-t border-white/10 pt-2">
            <span>Next.js · TypeScript · Supabase</span>
            <span className="text-[#5EDBB0] font-bold">
              leadpilot-pi.vercel.app
            </span>
          </div>
        </div>
      );

    case 'nuvro-fit':
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[#0F1412] text-[#F7F7F4]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[#5EDBB0]">
              <Dumbbell size={13} aria-hidden="true" />
              NUVRO FIT · E-COMMERCE
            </span>
            <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-[#5EDBB0] text-[#121212] font-extrabold">
              nuvro.shop
            </span>
          </div>

          <div className="my-2.5 bg-[#17211C] border-2 border-[#5EDBB0]/40 p-3 flex items-center justify-between gap-3">
            <div>
              <div className="font-display-nuvro text-2xl sm:text-3xl text-[#F7F7F4] leading-none mb-1">
                PERFORMANCE &amp; GEAR
              </div>
              <div className="font-mono text-[10px] text-[#5EDBB0]">
                {lang === 'es'
                  ? 'Suplementos · Ropa fitness · Dominio propio'
                  : 'Supplements · Apparel · Custom Domain'}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 shrink-0">
              <div className="w-7 h-7 bg-[#5EDBB0] text-[#121212] flex items-center justify-center font-mono text-[10px] font-bold">
                01
              </div>
              <div className="w-7 h-7 bg-[#121212] border border-[#5EDBB0] text-[#5EDBB0] flex items-center justify-center font-mono text-[10px] font-bold">
                02
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#AEB5C4] border-t border-white/10 pt-2">
            <span>React · TypeScript · Tailwind</span>
            <span className="text-[#5EDBB0] font-bold">
              {lang === 'es' ? 'Tienda activa' : 'Live Storefront'}
            </span>
          </div>
        </div>
      );

    case 'fumigadora-dds':
    default:
      return (
        <div
          className={`w-full h-full ${pad} flex flex-col justify-between bg-[#161514] text-[#F7F7F4]`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-[#FF5A4E]">
              <Bug size={13} aria-hidden="true" />
              FUMIGADORA DDS · CR
            </span>
            <span className="px-2 py-0.5 bg-[#FF5A4E] text-[#121212] font-mono text-[9px] font-extrabold uppercase">
              {lang === 'es' ? 'EN PRODUCCIÓN' : 'PRODUCTION'}
            </span>
          </div>

          <div className="my-2.5 bg-[#221F1D] border-2 border-[#FF5A4E]/50 p-3 flex items-center justify-between gap-3">
            <div>
              <div className="font-display-nuvro text-2xl text-[#F7F7F4] leading-none mb-1">
                {lang === 'es'
                  ? 'CONTROL DE PLAGAS 24/7'
                  : '24/7 PEST CONTROL'}
              </div>
              <p className="font-mono text-[10px] text-[#D6D8DF]">
                {lang === 'es'
                  ? '7 provincias de Costa Rica · Sitio comercial real'
                  : 'All 7 Costa Rica provinces · Real client deployment'}
              </p>
            </div>
            <span className="px-2 py-1 border border-[#FFC83D] text-[#FFC83D] font-mono text-[9px] font-bold shrink-0">
              7 PROV
            </span>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#AEB5C4] border-t border-white/10 pt-2">
            <span>fumigadoradds.com</span>
            <span className="text-[#FFC83D] font-bold">
              {lang === 'es' ? 'Dominio propio' : 'Custom Domain'}
            </span>
          </div>
        </div>
      );
  }
}
