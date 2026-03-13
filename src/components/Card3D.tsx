import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Card3DProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    accentColor: string;
  };
}

export default function Card3D({ project }: Card3DProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePos({ x, y });
  };

  const isMobile = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

  const transformStyle = isHovered && !isMobile
    ? `perspective(600px) rotateX(${(mousePos.y - 0.5) * -15}deg) rotateY(${(mousePos.x - 0.5) * 15}deg) scale3d(1.03, 1.03, 1.03)`
    : isHovered && isMobile 
    ? `scale3d(1.03, 1.03, 1.03)`
    : `perspective(600px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;

  // Convert hex to rgba for the border
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-2xl overflow-hidden group"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: `1px solid ${hexToRgba(project.accentColor, 0.3)}`,
        transformStyle: 'preserve-3d',
        transform: transformStyle,
        transition: 'transform 0.12s ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Shine effect */}
      {isHovered && !isMobile && (
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
          }}
        />
      )}

      {/* Top Accent Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: project.accentColor }}
      />

      <div className="aspect-[16/9] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-8 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span 
              className="text-[11px] uppercase tracking-[2px] font-bold mb-2 block"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <h3 className="text-[32px] font-[700] text-white leading-tight">{project.title}</h3>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <p className="text-[14px] text-[rgba(255,255,255,0.5)] mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-[11px] text-white/60"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
