import { TECHNOLOGIES } from '@/data/content'
import { Sparkles } from 'lucide-react'

export function TechMarqueeSection() {
  return (
    <section
      id="tecnologias"
      className="py-20 bg-[#08090f] relative overflow-hidden border-y border-violet-500/10"
    >
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
          Tecnologias Dominadas
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-display tracking-tight">
          Nosso ecossistema de desenvolvimento
        </h3>
      </div>

      <div className="flex overflow-hidden space-x-6 select-none group">
        <div className="flex space-x-6 animate-pulse hover:pause">
          {TECHNOLOGIES.concat(TECHNOLOGIES).map((tech, i) => (
            <div
              key={i}
              className="tech-badge glass-card px-6 py-3.5 rounded-2xl flex items-center gap-3 border-violet-500/8 shrink-0 hover:border-[#8b5cf6] hover:bg-white/10 transition-all cursor-default"
            >
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
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
