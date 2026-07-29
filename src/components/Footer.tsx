import { Sparkles, Linkedin, Github, MapPin } from 'lucide-react'
import { TEAM_MEMBERS } from '@/data/content'

export function Footer() {
  return (
    <footer className="footer-gradient border-t border-violet-500/10 pt-20 pb-12 text-slate-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7c3aed]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/8">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7c3aed] to-[#c4b5fd] p-[1px]">
                <div className="w-full h-full bg-[#0a0b14] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#a78bfa]" />
                </div>
              </div>
              <span className="text-2xl font-extrabold text-white font-display">
                3 Dev.as <span className="neon-text-cyan">DemAIs</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Transformando ideias em impacto através da tecnologia, inteligência artificial e
              colaboração sem fronteiras.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="flex flex-col gap-2">
                <h4 className="text-xs font-bold text-white">{member.name}</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3 h-3" />
                  <span>{member.city}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#a78bfa] hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all cursor-pointer"
                    aria-label={`Abrir LinkedIn de ${member.name} em nova aba`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#a78bfa] hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all cursor-pointer"
                    aria-label={`Abrir GitHub de ${member.name} em nova aba`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/8">
          <div className="md:col-span-12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-[#a78bfa]" />
              Conexão Interregional sem Barreiras
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 relative">
              <div className="flex items-center gap-2 bg-[#0a0b14] px-4 py-2 rounded-xl border border-violet-500/30 shadow-sm shadow-violet-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6] animate-ping" />
                <span className="text-xs font-bold text-white">Jaboatão dos Guararapes / PE</span>
              </div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#8b5cf6] opacity-50 animate-pulse" />
              <div className="flex items-center gap-2 bg-[#0a0b14] px-4 py-2 rounded-xl border border-[#c4b5fd]/30 shadow-sm shadow-[#c4b5fd]/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c4b5fd] animate-ping" />
                <span className="text-xs font-bold text-white">Duque de Caxias / RJ</span>
              </div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#c4b5fd] via-[#8b5cf6] to-[#c4b5fd] opacity-50 animate-pulse" />
              <div className="flex items-center gap-2 bg-[#0a0b14] px-4 py-2 rounded-xl border border-rose-400/30 shadow-sm shadow-rose-400/10">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
                <span className="text-xs font-bold text-white">Brasília / DF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 3 Dev.as DemAIs. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com excelência, IA e tecnologia por{' '}
            <span className="text-slate-300 font-semibold">3 Dev.as DemAIs</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c4b5fd]/20 to-transparent" />
    </footer>
  )
}
