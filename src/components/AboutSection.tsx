import { useInView } from '@/hooks/use-in-view'
import { InteractiveMap } from '@/components/InteractiveMap'
import { Heart, Globe2, Zap } from 'lucide-react'

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="quem-somos" ref={ref} className="py-24 bg-[#0a0b14] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
              <Globe2 className="w-4 h-4" />
              <span>Quem Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display leading-tight tracking-tight">
              Diferentes trajetórias.{' '}
              <span className="gradient-heading">Um propósito em comum.</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              A 3 Dev.as DemAIs nasceu da conexão entre três profissionais apaixonadas por resolver
              problemas através da tecnologia. Vindas de Pernambuco, Rio de Janeiro e Distrito
              Federal, reunimos experiências complementares em Produto, Inteligência Artificial e
              Engenharia de Software para criar soluções digitais inovadoras. Nossa atuação começou
              em hackathons, mas hoje levamos essa mesma capacidade de execução para projetos,
              pesquisas e iniciativas de inovação.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-4 rounded-2xl border-violet-500/8">
                <Heart className="w-5 h-5 text-pink-500 mb-2" />
                <h4 className="text-xs font-bold text-white">100% Feminina</h4>
                <p className="text-[11px] text-slate-400 mt-1">Protagonismo em tecnologia e IA</p>
              </div>
              <div className="glass-card p-4 rounded-2xl border-violet-500/8">
                <Globe2 className="w-5 h-5 text-[#a78bfa] mb-2" />
                <h4 className="text-xs font-bold text-white">Multirregional</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Conexão Jaboatão, Duque de Caxias & Brasília
                </p>
              </div>
              <div className="glass-card p-4 rounded-2xl border-violet-500/8 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-violet-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Foco em MVP</h4>
                <p className="text-[11px] text-slate-400 mt-1">Ideia para código em horas</p>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-6 transition-all duration-500 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <InteractiveMap />
          </div>
        </div>
      </div>
    </section>
  )
}
