import { TEAM_MEMBERS } from '@/data/content'
import { Linkedin, Github, MapPin, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section id="contato" className="py-28 bg-[#0f0f1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f0ff]/10 via-[#b300ff]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-bold text-[#00f0ff] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Vamos Inovar Juntos</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight mb-6">
            Vamos construir algo <span className="gradient-heading">incrível?</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Estamos abertas a novos desafios, desenvolvimento de produtos, projetos de inteligência
            artificial, pesquisa, inovação, hackathons e parcerias estratégicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border-white/10 flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-[#00f0ff] via-[#b300ff] to-[#00f0ff]">
                  <img
                    src={member.photoUrl}
                    alt={`Foto de ${member.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white font-display">{member.name}</h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 mb-4">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{member.city}</span>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all cursor-pointer"
                  aria-label={`Abrir LinkedIn de ${member.name} em nova aba`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all cursor-pointer"
                  aria-label={`Abrir GitHub de ${member.name} em nova aba`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
