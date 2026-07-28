import { TECHNOLOGIES } from '@/data/content'
import {
  Cpu,
  Terminal,
  Database,
  Layers,
  Sparkles,
  Server,
  Zap,
  Box,
  GitBranch,
} from 'lucide-react'

export function TechMarqueeSection() {
  return (
    <section
      id="tecnologias"
      className="py-20 bg-[#0a0a12] relative overflow-hidden border-y border-white/10"
    >
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
          Tecnologias Dominadas
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-display">
          Nosso ecossistema de desenvolvimento
        </h3>
      </div>

      <div className="flex overflow-hidden space-x-6 select-none group">
        <div className="flex space-x-6 animate-pulse hover:pause">
          {TECHNOLOGIES.concat(TECHNOLOGIES).map((tech, i) => (
            <div
              key={i}
              className="glass-card px-6 py-3.5 rounded-2xl flex items-center gap-3 border-white/10 shrink-0 hover:border-[#00f0ff] hover:bg-white/10 transition-all cursor-default"
            >
              <Sparkles className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm font-bold text-white font-mono">{tech.name}</span>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
