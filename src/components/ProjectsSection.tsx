import { useInView } from '@/hooks/use-in-view'
import { PROJECTS } from '@/data/content'
import { Trophy, Sprout, ShieldCheck, Globe, Activity, ExternalLink, Sparkles } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-7 h-7 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#00f0ff]" />,
  Globe: <Globe className="w-7 h-7 text-blue-400" />,
  Activity: <Activity className="w-7 h-7 text-pink-400" />,
}

export function ProjectsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="projetos" ref={ref} className="py-24 bg-[#0f0f1a] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Principais Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-display">
            Soluções premiadas que <span className="gradient-heading">geram impacto real</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover p-8 rounded-3xl border-white/10 flex flex-col justify-between transition-all duration-700 relative overflow-hidden group ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    {ICON_MAP[project.iconName] || <Sparkles className="w-7 h-7 text-[#00f0ff]" />}
                  </div>

                  {project.award && (
                    <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{project.award}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-[#00f0ff] mb-3">{project.description}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
