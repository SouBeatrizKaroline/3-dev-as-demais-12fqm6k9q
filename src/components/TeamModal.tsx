import { useEffect, useRef } from 'react'
import { X, Linkedin, Github, MapPin, Sparkles, CheckCircle, ExternalLink } from 'lucide-react'
import { TeamMember } from '@/data/content'
import { Button } from '@/components/ui/button'

interface TeamModalProps {
  member: TeamMember | null
  onClose: () => void
}

export function TeamModal({ member, onClose }: TeamModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (member) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setTimeout(() => closeButtonRef.current?.focus(), 100)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Perfil de ${member.name}`}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121222] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:ring-offset-2 focus:ring-offset-[#121222]"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-5 bg-gradient-to-b from-[#181832] to-[#0d0d1a] p-8 flex flex-col items-center text-center justify-between border-b md:border-b-0 md:border-r border-white/10 relative">
            <div className="w-full flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-[#00f0ff] via-[#b300ff] to-[#00f0ff] shadow-xl shadow-cyan-500/20">
                  <img
                    src={member.photoUrl}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0f0f1a] border border-cyan-500/40 text-[#00f0ff] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  {member.badge}
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mt-2 font-display">{member.name}</h3>
              <p className="text-sm font-semibold text-[#00f0ff] mt-1 leading-relaxed px-2">
                {member.role}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{member.city}</span>
              </div>
            </div>

            <div className="w-full mt-8 pt-6 border-t border-white/10 flex flex-col gap-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                aria-label={`Abrir perfil no LinkedIn de ${member.name} em nova aba`}
              >
                <Button className="w-full gradient-btn font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                  <span>Perfil no LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </Button>
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                aria-label={`Abrir perfil no GitHub de ${member.name} em nova aba`}
              >
                <Button
                  variant="outline"
                  className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-[#00f0ff]/50 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </Button>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 p-6 md:p-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f0ff] flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4" />
                Sobre a Integrante
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{member.fullBio}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                Especialidades & Competências
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {member.specialty.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5"
                  >
                    <CheckCircle className="w-4 h-4 text-[#00f0ff] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Áreas de Atuação Prática
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.actuation.map((act, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-200 bg-purple-950/40 border border-purple-500/30 px-3 py-1 rounded-lg"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Tecnologias & Ferramentas
              </h4>
              {member.technologyGroups ? (
                <div className="flex flex-col gap-3">
                  {member.technologyGroups.map((group, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1.5">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs font-mono font-semibold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {member.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-semibold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
