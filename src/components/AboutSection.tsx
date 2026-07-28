import { useInView } from '@/hooks/use-in-view'
import { InteractiveMap } from '@/components/InteractiveMap'
import { Heart, Globe2, Zap } from 'lucide-react'

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="quem-somos" ref={ref} className="py-24 bg-[#0f0f1a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div
            className={`lg:col-span-6 flex flex-col gap-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              <Globe2 className="w-4 h-4" />
              <span>Quem Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display leading-tight">
              A distância nunca foi uma barreira para{' '}
              <span className="gradient-heading">criar soluções extraordinárias.</span>
            </h2>

            <blockquote className="border-l-2 border-[#00f0ff] pl-4 italic text-slate-300 text-lg leading-relaxed">
              “Não somos apenas três profissionais. Somos três mulheres de regiões completamente
              diferentes do Brasil que decidiram construir soluções juntas. A distância nunca foi
              uma barreira para criar grandes soluções.”
            </blockquote>

            <p className="text-slate-400 text-base leading-relaxed">
              Unimos as particularidades do ecossistema de tecnologia de Pernambuco, a energia
              inovadora do Rio de Janeiro e a visão estratégica institucional do Distrito Federal. O
              resultado é um time de rápida execução, alta sensibilidade humana e excelência
              técnica.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-4 rounded-2xl border-white/5">
                <Heart className="w-5 h-5 text-pink-500 mb-2" />
                <h4 className="text-xs font-bold text-white">100% Feminina</h4>
                <p className="text-[11px] text-slate-400 mt-1">Protagonismo em tecnologia e IA</p>
              </div>

              <div className="glass-card p-4 rounded-2xl border-white/5">
                <Globe2 className="w-5 h-5 text-[#00f0ff] mb-2" />
                <h4 className="text-xs font-bold text-white">Multirregional</h4>
                <p className="text-[11px] text-slate-400 mt-1">Conexão Recife, Rio & Brasília</p>
              </div>

              <div className="glass-card p-4 rounded-2xl border-white/5 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-purple-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Foco em MVP</h4>
                <p className="text-[11px] text-slate-400 mt-1">Ideia para código em horas</p>
              </div>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div
            className={`lg:col-span-6 transition-all duration-700 delay-200 ${
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
