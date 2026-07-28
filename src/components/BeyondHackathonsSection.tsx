import { useInView } from '@/hooks/use-in-view'
import { Rocket, Lightbulb, TrendingUp } from 'lucide-react'

export function BeyondHackathonsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="alem-hackathons"
      ref={ref}
      className="py-24 bg-[#0f0f1a] relative overflow-hidden border-y border-white/5"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b300ff]/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f0ff]/50" />
            <Rocket className="w-5 h-5 text-[#00f0ff]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00f0ff]/50" />
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-black text-white font-display transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Muito além dos <span className="gradient-heading">hackathons</span>
          </h2>

          <p
            className={`text-slate-300 text-base sm:text-lg leading-relaxed mt-6 transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Os hackathons fazem parte da nossa história, mas representam apenas uma parte da nossa
            trajetória. Eles foram o ambiente onde desenvolvemos a capacidade de aprender
            rapidamente, colaborar sob pressão e transformar ideias em soluções funcionais. Hoje
            aplicamos essa mesma mentalidade no desenvolvimento de produtos digitais, inteligência
            artificial, pesquisa e inovação.
          </p>

          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="glass-card p-5 rounded-2xl text-center">
              <Lightbulb className="w-6 h-6 text-[#00f0ff] mx-auto mb-2" />
              <p className="text-xs font-bold text-white">Aprendizado Rápido</p>
              <p className="text-[11px] text-slate-400 mt-1">Adaptação em qualquer contexto</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <Rocket className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-xs font-bold text-white">Execução Ágil</p>
              <p className="text-[11px] text-slate-400 mt-1">Ideia em código em horas</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center">
              <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-xs font-bold text-white">Impacto Real</p>
              <p className="text-[11px] text-slate-400 mt-1">Soluções que transformam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
