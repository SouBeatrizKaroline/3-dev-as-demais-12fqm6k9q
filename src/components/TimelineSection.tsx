import { useInView } from '@/hooks/use-in-view'
import { TIMELINE } from '@/data/content'
import { Calendar, Trophy, Award, Rocket, Sparkles } from 'lucide-react'

export function TimelineSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="historia" ref={ref} className="py-24 bg-[#0a0a12] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
            Nossa Jornada
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
            A história por trás da <span className="gradient-heading">evolução do time</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Do primeiro hackathon à conquista do pódio no Skip Challenge.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#b300ff] to-emerald-400 -translate-x-1/2 opacity-40" />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((event, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#0f0f1a] border-2 border-[#00f0ff] flex items-center justify-center text-[#00f0ff] shadow-lg shadow-cyan-500/30">
                    {event.highlight ? (
                      <Trophy className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Calendar className="w-4 h-4" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 px-0 md:px-8 w-full">
                    <div
                      className={`glass-card p-6 rounded-2xl transition-all hover:border-[#00f0ff]/50 ${
                        event.highlight
                          ? 'border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-[#00f0ff] font-mono">
                          {event.year}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                          {event.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
