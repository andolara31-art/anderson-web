import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Cloud, 
  Code2, 
  Database, 
  Zap, 
  Layers, 
  Terminal, 
  Globe 
} from 'lucide-react';

export default function Stack() {
  const tools = [
    { name: 'React', icon: <Code2 size={24} /> },
    { name: 'Vite', icon: <Zap size={24} /> },
    { name: 'TypeScript', icon: <Terminal size={24} /> },
    { name: 'Firebase', icon: <Database size={24} /> },
    { name: 'AI Studio', icon: <Cpu size={24} /> },
    { name: 'Vercel', icon: <Cloud size={24} /> },
    { name: 'Claude', icon: <Layers size={24} /> },
    { name: 'n8n', icon: <Globe size={24} /> },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-premium p-12 rounded-[40px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">
              Stack <span className="text-white/40">&amp; Herramientas</span>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
