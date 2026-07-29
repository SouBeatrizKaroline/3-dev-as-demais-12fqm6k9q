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
        className="relative w-full max-w-4xl bg-[#11122a] border border-violet-500/25 rounded-2xl shadow-2xl shadow-violet-500/10 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#11122a]"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-5 bg-gradient-to-b from-[#181830] to-[#0a0b14] p-8 flex flex-col items-center text-center justify-between border-b md:border-b-0 md:border-r border-violet-500/8 relative">
            <div className="w-full flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden p-[2px] photo-ring">
                  <img
                    src={member.photoUrl}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0a0b14] border border-violet-500/40 text-[#a78bfa] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  {member.badge}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-2 font-display">{member.name}</h3>
              <p className="text-sm font-semibold text-[#a78bfa] mt-1 leading-relaxed px-2">
                {member.role}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-[#c4b5fd]" />
                <span>{member.city}</span>
              </div>
            </div>

            <div className="w-full mt-8 pt-6 border-t border-violet-500/8 flex flex-col gap-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                aria-label={`Abrir perfil no LinkedIn de ${member.name} em nova aba`}
              >
                <Button className="w-full gradient-btn font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer min-h-[44px]">
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
                  className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-[#8b5cf6]/50 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all min-h-[44px]"
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#a78bfa] flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4" />
                Sobre a Integrante
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{member.fullBio}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#c4b5fd] mb-3">
                Especialidades & Competências
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {member.specialty.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-violet-500/8"
                  >
                    <CheckCircle className="w-4 h-4 text-[#a78bfa] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-300 mb-3">
                Áreas de Atuação Prática
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.actuation.map((act, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-200 bg-violet-950/30 border border-violet-500/25 px-3 py-1 rounded-lg"
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
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd] mb-1.5">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((tech, j) => (
                          <span
                            key={j}
                            className="tech-badge text-xs font-mono font-semibold text-[#a78bfa] bg-[#8b5cf6]/8 border border-[#8b5cf6]/20 px-3 py-1 rounded-full"
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
                      className="tech-badge text-xs font-mono font-semibold text-[#a78bfa] bg-[#8b5cf6]/8 border border-[#8b5cf6]/20 px-3 py-1 rounded-full"
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
