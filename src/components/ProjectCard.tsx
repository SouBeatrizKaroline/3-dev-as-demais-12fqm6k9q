import { Link } from 'react-router-dom'
import { Project } from '@/data/content'
import { Button } from '@/components/ui/button'
import {
  Trophy,
  ExternalLink,
  Sparkles,
  Sprout,
  ShieldCheck,
  Globe,
  Activity,
  Recycle,
  Heart,
  Plane,
  Palette,
  Zap,
  Users,
  TrendingUp,
  Leaf,
  Bot,
  HeartPulse,
  Orbit,
  Trees,
  TreePalm,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-7 h-7 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#00f0ff]" />,
  Globe: <Globe className="w-7 h-7 text-blue-400" />,
  Activity: <Activity className="w-7 h-7 text-pink-400" />,
  Recycle: <Recycle className="w-7 h-7 text-green-400" />,
  Heart: <Heart className="w-7 h-7 text-rose-400" />,
  Plane: <Plane className="w-7 h-7 text-sky-400" />,
  Palette: <Palette className="w-7 h-7 text-purple-400" />,
  Zap: <Zap className="w-7 h-7 text-amber-400" />,
  Users: <Users className="w-7 h-7 text-indigo-400" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-400" />,
  Leaf: <Leaf className="w-7 h-7 text-lime-400" />,
  Bot: <Bot className="w-7 h-7 text-cyan-400" />,
  HeartPulse: <HeartPulse className="w-7 h-7 text-red-400" />,
  Orbit: <Orbit className="w-7 h-7 text-indigo-400" />,
  Trees: <Trees className="w-7 h-7 text-green-500" />,
  TreePalm: <TreePalm className="w-7 h-7 text-amber-500" />,
}

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  onOpenModal: (project: Project) => void
}

export function ProjectCard({ project, index, isInView, onOpenModal }: ProjectCardProps) {
  return (
    <div
      className={`glass-card glass-card-hover p-8 rounded-3xl border-white/10 flex flex-col justify-between transition-all duration-700 relative overflow-hidden group ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div>
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            {ICON_MAP[project.iconName] || <Sparkles className="w-7 h-7 text-[#00f0ff]" />}
          </div>
          {(project.awards?.length ?? (project.award ? 1 : 0)) > 0 && (
            <div className="flex flex-col gap-1.5 items-end max-w-[60%]">
              {(project.awards ?? (project.award ? [project.award] : [])).map((award, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full"
                >
                  <Trophy className="w-3.5 h-3.5 shrink-0" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <h3 className="text-2xl font-black text-white mb-2 font-display">{project.title}</h3>
        <p className="text-sm font-semibold text-[#00f0ff] mb-3">{project.description}</p>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">{project.longDescription}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.casePageRoute ? (
          <Button
            asChild
            aria-label={`Ver case completo do projeto ${project.title}`}
            className="w-full gradient-btn text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link to={project.casePageRoute}>
              <ExternalLink className="w-4 h-4" />
              Ver Case Completo
            </Link>
          </Button>
        ) : (
          <Button
            onClick={() => onOpenModal(project)}
            aria-label={`Ver case completo do projeto ${project.title}`}
            className="w-full gradient-btn text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Ver Case Completo
          </Button>
        )}
      </div>
    </div>
  )
}
