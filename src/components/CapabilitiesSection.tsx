import { useInView } from '@/hooks/use-in-view'
import { CAPABILITIES } from '@/data/content'
import { Flame, Rocket, Palette, BrainCircuit, Code2, Presentation } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6 text-orange-400" strokeWidth={1.5} />,
  Rocket: <Rocket className="w-6 h-6 text-[#a78bfa]" strokeWidth={1.5} />,
  Palette: <Palette className="w-6 h-6 text-pink-400" strokeWidth={1.5} />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-[#c4b5fd]" strokeWidth={1.5} />,
  Code2: <Code2 className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />,
  Presentation: <Presentation className="w-6 h-6 text-amber-400" strokeWidth={1.5} />,
}

export function CapabilitiesSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="fazemos" ref={ref} className="py-24 bg-[#08090f] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] bg-[#8b5cf6]/10 px-3 py-1 rounded-full border border-[#8b5cf6]/30">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-display tracking-tight">
            Competências para transformar{' '}
            <span className="gradient-heading">desafios em resultados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.id}
              className={`glass-card glass-card-hover p-6 rounded-2xl border-violet-500/8 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-white/5 border border-violet-500/10 w-fit mb-4">
                {ICON_MAP[cap.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
