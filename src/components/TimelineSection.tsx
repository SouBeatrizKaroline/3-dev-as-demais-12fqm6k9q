import { useInView } from '@/hooks/use-in-view'
import { TIMELINE } from '@/data/content'
import { Compass, Users, Trophy, Rocket } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  '01': <Compass className="w-4 h-4" />,
  '02': <Users className="w-4 h-4" />,
  '03': <Trophy className="w-4 h-4 text-amber-400" />,
  '04': <Rocket className="w-4 h-4" />,
}

export function TimelineSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="historia" ref={ref} className="py-24 bg-[#08090f] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] bg-[#8b5cf6]/10 px-3 py-1 rounded-full border border-[#8b5cf6]/30">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-display tracking-tight">
            A jornada que nos <span className="gradient-heading">trouxe até aqui</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8b5cf6] via-[#c4b5fd] to-rose-400 -translate-x-1/2 opacity-40" />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((event, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#0a0b14] border-2 border-[#8b5cf6] flex items-center justify-center text-[#a78bfa] shadow-lg shadow-violet-500/30">
                    {ICON_MAP[event.number]}
                  </div>

                  <div className="ml-12 md:ml-0 md:w-1/2 px-0 md:px-8 w-full">
                    <div className="glass-card glass-card-hover p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-[#a78bfa] font-mono">
                          {event.number}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd] bg-violet-950/50 px-2.5 py-0.5 rounded-full border border-violet-500/25">
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
