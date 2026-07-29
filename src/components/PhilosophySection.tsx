import { useInView } from '@/hooks/use-in-view'
import { PHILOSOPHY } from '@/data/content'
import { Target, HeartHandshake, BookOpenCheck, Users2 } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target className="w-7 h-7 text-[#a78bfa]" strokeWidth={1.5} />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-pink-400" strokeWidth={1.5} />,
  BookOpenCheck: <BookOpenCheck className="w-7 h-7 text-[#c4b5fd]" strokeWidth={1.5} />,
  Users2: <Users2 className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />,
}

export function PhilosophySection() {
  const { ref, isInView } = useInView()

  return (
    <section id="filosofia" ref={ref} className="py-24 bg-[#08090f] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd] bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/30">
            Nossa Filosofia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-display tracking-tight">
            Como pensamos e <span className="gradient-heading">construímos soluções</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY.map((pillar, i) => (
            <div
              key={pillar.id}
              className={`glass-card glass-card-hover p-8 rounded-2xl border-violet-500/8 relative overflow-hidden transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-white/5 border border-violet-500/10">
                  {ICON_MAP[pillar.icon]}
                </div>
                <span className="text-3xl font-bold text-slate-700 font-mono">{pillar.number}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
