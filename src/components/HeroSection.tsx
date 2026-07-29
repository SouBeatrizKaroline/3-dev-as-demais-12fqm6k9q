import { ArrowDown, Sparkles, Users, Rocket, Mail } from 'lucide-react'
import { ParticleBackground } from '@/components/ParticleBackground'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0f0f1a]"
    >
      <ParticleBackground />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00f0ff]/15 to-[#b300ff]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-xs font-semibold text-[#00f0ff] mb-8 shadow-lg shadow-cyan-500/10 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Equipe Multidisciplinar de Inovação & IA</span>
        </div>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-4 font-display drop-shadow-2xl">
          3 Dev.as <span className="gradient-heading">DemAIs</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#00f0ff] font-semibold max-w-3xl leading-relaxed mb-4">
          Tecnologia, Inteligência Artificial e inovação para transformar desafios em soluções
          digitais.
        </p>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
          Somos três profissionais de diferentes regiões do Brasil unidas pela mesma missão: criar
          soluções digitais que combinam estratégia, tecnologia e impacto.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Button
            onClick={() => scrollTo('#equipe')}
            aria-label="Conheça a equipe"
            className="w-full sm:w-auto gradient-btn text-sm font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
          >
            <Users className="w-4 h-4" />
            Conheça a equipe
          </Button>

          <Button
            onClick={() => scrollTo('#projetos')}
            variant="outline"
            aria-label="Ver projetos"
            className="w-full sm:w-auto glass-card hover:bg-white/10 text-white border-white/20 hover:border-[#00f0ff] text-sm font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <Rocket className="w-4 h-4 text-[#00f0ff]" />
            Projetos
          </Button>

          <Button
            onClick={() => scrollTo('#contato')}
            variant="ghost"
            aria-label="Entre em contato"
            className="w-full sm:w-auto text-slate-300 hover:text-[#00f0ff] hover:bg-white/5 text-sm font-bold px-6 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
          >
            <Mail className="w-4 h-4" />
            Entre em contato
          </Button>
        </div>

        <button
          onClick={() => scrollTo('#quem-somos')}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-[#00f0ff] transition-colors cursor-pointer group"
          aria-label="Rolar para baixo"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest group-hover:text-white">
            Descubra Mais
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce text-[#00f0ff]" />
        </button>
      </div>
    </section>
  )
}
