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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0a0b14]"
    >
      <div className="absolute inset-0 hero-grid-lines opacity-40 pointer-events-none" />
      <ParticleBackground />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#7c3aed]/15 to-[#c4b5fd]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-[#f0a0c0]/8 to-[#8b5cf6]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#8b5cf6]/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-t from-transparent via-[#c4b5fd]/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-violet-500/30 text-xs font-semibold text-[#a78bfa] mb-8 shadow-lg shadow-violet-500/10 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Equipe Multidisciplinar de Inovação & IA</span>
        </div>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-4 font-display drop-shadow-2xl">
          3 Dev.as <span className="gradient-heading">DemAIs</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#a78bfa] font-semibold max-w-3xl leading-relaxed mb-4">
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
            className="w-full sm:w-auto gradient-btn text-sm font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform min-h-[44px]"
          >
            <Users className="w-4 h-4" />
            Conheça a equipe
          </Button>

          <Button
            onClick={() => scrollTo('#projetos')}
            variant="outline"
            aria-label="Ver projetos"
            className="w-full sm:w-auto glass-card hover:bg-white/10 text-white border-white/20 hover:border-[#8b5cf6] text-sm font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 min-h-[44px]"
          >
            <Rocket className="w-4 h-4 text-[#a78bfa]" />
            Projetos
          </Button>

          <Button
            onClick={() => scrollTo('#contato')}
            variant="ghost"
            aria-label="Entre em contato"
            className="w-full sm:w-auto text-slate-300 hover:text-[#a78bfa] hover:bg-white/5 text-sm font-bold px-6 py-6 rounded-full flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform min-h-[44px]"
          >
            <Mail className="w-4 h-4" />
            Entre em contato
          </Button>
        </div>

        <button
          onClick={() => scrollTo('#quem-somos')}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-[#a78bfa] transition-colors cursor-pointer group"
          aria-label="Rolar para baixo"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest group-hover:text-white">
            Descubra Mais
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce text-[#a78bfa]" />
        </button>
      </div>
    </section>
  )
}
