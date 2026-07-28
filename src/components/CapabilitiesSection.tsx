import { useInView } from '@/hooks/use-in-view'
import { CAPABILITIES } from '@/data/content'
import { Flame, Rocket, Palette, BrainCircuit, Code2, Presentation } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6 text-orange-400" />,
  Rocket: <Rocket className="w-6 h-6 text-[#00f0ff]" />,
  Palette: <Palette className="w-6 h-6 text-pink-400" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-purple-400" />,
  Code2: <Code2 className="w-6 h-6 text-emerald-400" />,
  Presentation: <Presentation className="w-6 h-6 text-amber-400" />,
}

export function CapabilitiesSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="fazemos" ref={ref} className="py-24 bg-[#0a0a12] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
            Competências para transformar{' '}
            <span className="gradient-heading">desafios em resultados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.id}
              className={`glass-card glass-card-hover p-6 rounded-2xl border-white/10 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
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
