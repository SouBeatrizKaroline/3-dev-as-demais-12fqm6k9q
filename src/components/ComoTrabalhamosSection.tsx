import { useInView } from '@/hooks/use-in-view'
import { Layers, GitMerge, Sparkles } from 'lucide-react'

export function ComoTrabalhamosSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="como-construimos"
      ref={ref}
      className="py-20 sm:py-24 bg-[#08090f] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4b5fd]/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`flex items-center justify-center gap-4 mb-8 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8b5cf6]/50" />
            <Layers className="w-5 h-5 text-[#a78bfa]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8b5cf6]/50" />
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 font-display transition-all duration-500 tracking-tight ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Como construímos <span className="gradient-heading">soluções</span>
          </h2>

          <p
            className={`text-slate-300 text-base sm:text-lg leading-relaxed mt-6 transition-all duration-500 delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Cada projeto nasce da combinação entre diferentes perspectivas. Enquanto produto,
            inteligência artificial e engenharia evoluem simultaneamente, as decisões são tomadas
            pensando na experiência das pessoas, na viabilidade técnica e no impacto da solução.
            Essa integração é o que torna nossas entregas mais completas.
          </p>

          <div
            className={`flex flex-wrap items-center justify-center gap-3 mt-10 transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-xs font-bold text-white">Produto</span>
            </div>
            <GitMerge className="w-4 h-4 text-slate-500" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-[#c4b5fd]" />
              <span className="text-xs font-bold text-white">Inteligência Artificial</span>
            </div>
            <GitMerge className="w-4 h-4 text-slate-500" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white">Engenharia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
