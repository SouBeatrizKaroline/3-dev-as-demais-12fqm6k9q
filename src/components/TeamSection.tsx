import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { TEAM_MEMBERS, TeamMember } from '@/data/content'
import { TeamModal } from '@/components/TeamModal'
import { ForceMetaphor } from '@/components/ForceMetaphor'
import { MapPin, Linkedin, Github, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MEMBER_SPECIALTIES: Record<string, string[]> = {
  beatriz: ['Produto', 'UX', 'Estratégia', 'IA Aplicada'],
  monique: ['Inteligência Artificial', 'Dados', 'Agentes de IA', 'Machine Learning'],
  sonia: ['Full Stack', 'Front-end', 'Back-end', 'Arquitetura de Software'],
}

export function TeamSection() {
  const { ref, isInView } = useInView()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section id="equipe" ref={ref} className="py-20 sm:py-24 bg-[#0a0b14] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] bg-[#8b5cf6]/10 px-3 py-1 rounded-full border border-[#8b5cf6]/30">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-display tracking-tight">
            As três mentes por trás da <span className="gradient-heading">3 Dev.as DemAIs</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Clique em "Conhecer" para ver a trajetória técnica completa de cada uma.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <article
              key={member.id}
              className={`glass-card glass-card-hover card-3d-hover p-5 sm:p-6 rounded-2xl border-violet-500/8 group flex flex-col transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] photo-ring group-hover:scale-105 transition-transform duration-300 ease-out">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={member.photoUrl}
                        alt={`Foto de ${member.name}, especialista em ${member.role}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-[#0a0b14]/90 backdrop-blur-md border border-violet-500/40 text-[#a78bfa] text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-md">
                    {member.badge}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 justify-center">
                <MapPin className="w-3.5 h-3.5 text-[#c4b5fd] shrink-0" />
                <span>{member.city}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1 text-center">
                {member.name}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-3 justify-center">
                {(MEMBER_SPECIALTIES[member.id] || member.tags.slice(0, 4)).map((spec) => (
                  <span
                    key={spec}
                    className="text-[10px] font-mono font-semibold text-[#a78bfa] bg-[#8b5cf6]/8 border border-[#8b5cf6]/20 px-2.5 py-0.5 rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4 text-center">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.tags.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge text-[10px] font-mono font-semibold text-[#a78bfa] bg-[#8b5cf6]/8 border border-[#8b5cf6]/20 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-auto">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  aria-label={`Abrir perfil no LinkedIn de ${member.name} em nova aba`}
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-[#8b5cf6]/50 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Button>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  aria-label={`Abrir perfil no GitHub de ${member.name} em nova aba`}
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-[#c4b5fd]/50 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </Button>
                </a>
              </div>

              <Button
                onClick={() => setSelectedMember(member)}
                aria-label={`Conhecer perfil completo de ${member.name}`}
                className="w-full mt-2 gradient-btn text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
              >
                <span>Conhecer</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </article>
          ))}
        </div>

        <ForceMetaphor />
      </div>

      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  )
}
