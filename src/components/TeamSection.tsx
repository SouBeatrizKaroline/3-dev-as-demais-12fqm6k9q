import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { TEAM_MEMBERS, TeamMember } from '@/data/content'
import { TeamModal } from '@/components/TeamModal'
import { ForceMetaphor } from '@/components/ForceMetaphor'
import { MapPin, Linkedin, Github, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TeamSection() {
  const { ref, isInView } = useInView()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section id="equipe" ref={ref} className="py-20 sm:py-24 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
            As três mentes por trás da <span className="gradient-heading">3 Dev.as DemAIs</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Clique em "Conhecer" para ver a trajetória técnica completa de cada uma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <article
              key={member.id}
              className={`glass-card glass-card-hover card-3d-hover p-5 sm:p-6 rounded-3xl flex flex-col border-white/10 group transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl mx-auto w-full max-w-[240px] aspect-square">
                <img
                  src={member.photoUrl}
                  alt={`Foto de ${member.name}, especialista em ${member.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />
                <div className="absolute top-3 right-3 bg-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/40 text-[#00f0ff] text-xs font-bold px-3 py-1 rounded-full">
                  {member.badge}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{member.city}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-[#00f0ff] mb-3 leading-relaxed">
                {member.role}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{member.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.tags.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-semibold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2.5 py-1 rounded-full"
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
                    className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-[#00f0ff]/50 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
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
                    className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-purple-500/50 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </Button>
                </a>
              </div>

              <Button
                onClick={() => setSelectedMember(member)}
                aria-label={`Conhecer perfil completo de ${member.name}`}
                className="w-full mt-2 gradient-btn text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
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
