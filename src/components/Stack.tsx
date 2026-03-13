import React from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  Code2, 
  Database, 
  Zap, 
  Layers, 
  Terminal, 
  Globe,
  Palette,
  Framer,
  Server,
  Layout
} from 'lucide-react';

export default function Stack() {
  const tools = [
    { name: 'React', icon: <Code2 size={24} /> },
    { name: 'Next.js', icon: <Layout size={24} /> },
    { name: 'TypeScript', icon: <Terminal size={24} /> },
    { name: 'Tailwind CSS', icon: <Palette size={24} /> },
    { name: 'Framer Motion', icon: <Framer size={24} /> },
    { name: 'Vite', icon: <Zap size={24} /> },
    { name: 'Supabase', icon: <Server size={24} /> },
    { name: 'Firebase', icon: <Database size={24} /> },
    { name: 'Vercel', icon: <Cloud size={24} /> },
    { name: 'n8n', icon: <Globe size={24} /> },
    { name: 'Claude', icon: <Layers size={24} /> },
  ];

  // Duplicate the tools array to create a seamless loop
  const marqueeTools = [...tools, ...tools];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-premium py-12 rounded-[40px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center tracking-tight px-12">
              Stack <span className="text-white/40">&amp; Herramientas</span>
            </h2>
            
            {/* Marquee Container */}
            <div className="relative flex overflow-x-hidden w-full">
              {/* Gradient Masks for smooth fade in/out at edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />
              
              <motion.div
                className="flex whitespace-nowrap gap-12 px-6"
                animate={{
                  x: [0, -1035], // Adjust based on content width to loop seamlessly
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {marqueeTools.map((tool, i) => (
                  <div
                    key={`${tool.name}-${i}`}
                    className="flex flex-col items-center gap-3 group shrink-0"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
