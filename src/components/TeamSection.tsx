import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { TEAM_MEMBERS, TeamMember } from '@/data/content'
import { TeamModal } from '@/components/TeamModal'
import { ForceMetaphor } from '@/components/ForceMetaphor'
import { MapPin, User, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TeamSection() {
  const { ref, isInView } = useInView()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section id="equipe" ref={ref} className="py-24 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
            As três mentes por trás da <span className="gradient-heading">3 Dev.as DemAIs</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Clique no perfil para ver a trajetória técnica completa de cada uma.
          </p>
        </div>

        {/* 3 Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.id}
              className={`glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between border-white/10 group transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div>
                {/* Photo Header */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/40 text-[#00f0ff] text-xs font-bold px-3 py-1 rounded-full">
                    {member.badge}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{member.city}</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-[#00f0ff] mb-4">{member.role}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{member.bio}</p>
              </div>

              <Button
                onClick={() => setSelectedMember(member)}
                className="w-full bg-white/5 hover:bg-[#00f0ff]/20 text-white hover:text-[#00f0ff] border border-white/10 hover:border-[#00f0ff]/50 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Ver Perfil Completo</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Nossa Força Interactive Fusion Metaphor */}
        <ForceMetaphor />
      </div>

      {/* Modal detail */}
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  )
}
