import { Sparkles, Linkedin, Github, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0a0a12] border-t border-white/10 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f0ff] to-[#b300ff] p-[1px]">
                <div className="w-full h-full bg-[#0f0f1a] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#00f0ff]" />
                </div>
              </div>
              <span className="text-2xl font-black text-white font-display">
                3 Dev.as <span className="neon-text-cyan">DemAIs</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Transformando ideias em impacto através da tecnologia, inteligência artificial e
              colaboração sem fronteiras.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/beatrizkaroline/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@3devasdemais.dev"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Regional Connection Map Display */}
          <div className="md:col-span-7 flex flex-col justify-center gap-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00f0ff]" />
              Conexão Interregional sem Barreiras
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 relative">
              <div className="flex items-center gap-2 bg-[#0f0f1a] px-4 py-2 rounded-xl border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
                <span className="text-xs font-bold text-white">Recife / PE</span>
              </div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#b300ff] to-[#00f0ff] opacity-60 animate-pulse" />
              <div className="flex items-center gap-2 bg-[#0f0f1a] px-4 py-2 rounded-xl border border-purple-500/30 shadow-sm shadow-purple-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b300ff] animate-ping" />
                <span className="text-xs font-bold text-white">Rio de Janeiro / RJ</span>
              </div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#b300ff] via-[#00f0ff] to-[#b300ff] opacity-60 animate-pulse" />
              <div className="flex items-center gap-2 bg-[#0f0f1a] px-4 py-2 rounded-xl border border-emerald-500/30 shadow-sm shadow-emerald-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">Brasília / DF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 3 Dev.as DemAIs. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com excelência, IA e tecnologia por{' '}
            <span className="text-slate-300 font-semibold">3 Dev.as DemAIs</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
