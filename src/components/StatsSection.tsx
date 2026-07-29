import { useInView } from '@/hooks/use-in-view'
import { useAnimatedCounter } from '@/hooks/use-animated-counter'
import { STATS, StatItem } from '@/data/content'
import { Trophy, Code, Award, Sparkles, Cpu, Clock, MapPin, Zap } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  Code: <Code className="w-6 h-6 text-[#00f0ff]" />,
  Award: <Award className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  Clock: <Clock className="w-6 h-6 text-blue-400" />,
  MapPin: <MapPin className="w-6 h-6 text-cyan-400" />,
  Zap: <Zap className="w-6 h-6 text-yellow-400" />,
}

function StatCard({ stat, trigger }: { stat: StatItem; trigger: boolean }) {
  const count = useAnimatedCounter(stat.value, trigger, 2200)
  const isTextValue = !!stat.textValue

  return (
    <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border-white/10 group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
          {ICON_MAP[stat.icon] || <Zap className="w-6 h-6 text-[#00f0ff]" />}
        </div>
      </div>

      <div>
        <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight font-display">
          {isTextValue ? (
            stat.textValue
          ) : (
            <>
              {count}
              <span className="text-[#00f0ff]">{stat.suffix}</span>
            </>
          )}
        </div>
        <h3 className="text-sm font-bold text-slate-200 mt-2">{stat.label}</h3>
        <p className="text-xs text-slate-400 mt-1 leading-snug">{stat.description}</p>
      </div>
    </div>
  )
}

export function StatsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="estatisticas" ref={ref} className="py-20 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
            Nossos Números
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 font-display">
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
