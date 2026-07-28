import { useInView } from '@/hooks/use-in-view'
import { DIFFERENTIALS } from '@/data/content'
import { Award, Trophy, Star, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'

export function AchievementsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="conquistas" ref={ref} className="py-24 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
            Diferenciais & Reconhecimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
            Por que trabalhar com a <span className="gradient-heading">3 Dev.as DemAIs?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((diff, i) => (
            <div
              key={i}
              className={`glass-card glass-card-hover p-6 rounded-2xl border-white/10 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{diff.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
