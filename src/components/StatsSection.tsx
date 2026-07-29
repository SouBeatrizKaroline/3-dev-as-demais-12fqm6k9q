import { useInView } from '@/hooks/use-in-view'
import { useAnimatedCounter } from '@/hooks/use-animated-counter'
import { STATS, StatItem } from '@/data/content'
import { Trophy, Code, Award, Sparkles, Cpu, Clock, MapPin, Zap } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-amber-400" strokeWidth={1.5} />,
  Code: <Code className="w-6 h-6 text-[#a78bfa]" strokeWidth={1.5} />,
  Award: <Award className="w-6 h-6 text-violet-400" strokeWidth={1.5} />,
  Sparkles: <Sparkles className="w-6 h-6 text-pink-400" strokeWidth={1.5} />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />,
  Clock: <Clock className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
  MapPin: <MapPin className="w-6 h-6 text-[#c4b5fd]" strokeWidth={1.5} />,
  Zap: <Zap className="w-6 h-6 text-violet-400" strokeWidth={1.5} />,
}

function StatCard({ stat, trigger }: { stat: StatItem; trigger: boolean }) {
  const count = useAnimatedCounter(stat.value, trigger, 2200)
  const isTextValue = !!stat.textValue

  return (
    <div className="glass-card glass-card-hover p-6 rounded-2xl border-violet-500/8 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8b5cf6]/40 to-transparent" />
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 group-hover:bg-violet-500/10 transition-colors">
          {ICON_MAP[stat.icon] || <Zap className="w-6 h-6 text-[#a78bfa]" strokeWidth={1.5} />}
        </div>
      </div>

      <div>
        <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight font-display">
          {isTextValue ? (
            stat.textValue
          ) : (
            <>
              {count}
              <span className="text-[#a78bfa]">{stat.suffix}</span>
            </>
          )}
        </div>
        <h3 className="text-sm font-semibold text-slate-200 mt-2">{stat.label}</h3>
        <p className="text-xs text-slate-400 mt-1 leading-snug">{stat.description}</p>
      </div>
    </div>
  )
}

export function StatsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="estatisticas" ref={ref} className="py-20 bg-[#0a0b14] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] bg-[#8b5cf6]/10 px-3 py-1 rounded-full border border-[#8b5cf6]/30">
            Nossos Números
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 font-display tracking-tight">
            Métricas que comprovam nossa <span className="gradient-heading">dedicação técnica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} trigger={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
