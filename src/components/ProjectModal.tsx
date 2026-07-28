import { useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Project } from '@/data/content'
import {
  X,
  Trophy,
  Sprout,
  ShieldCheck,
  Globe,
  Activity,
  Sparkles,
  Target,
  Lightbulb,
  Code2,
  TrendingUp,
  BookOpen,
} from 'lucide-react'

const PROJECT_ICON_MAP: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-6 h-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00f0ff]" />,
  Globe: <Globe className="w-6 h-6 text-blue-400" />,
  Activity: <Activity className="w-6 h-6 text-pink-400" />,
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setTimeout(() => closeButtonRef.current?.focus(), 100)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  const sections = project
    ? [
        {
          label: 'O Desafio',
          icon: <Target className="w-4 h-4 text-[#00f0ff]" />,
          content: project.challenge,
        },
        {
          label: 'Nossa Solução',
          icon: <Lightbulb className="w-4 h-4 text-purple-400" />,
          content: project.solution,
        },
        {
          label: 'Resultados',
          icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
          content: project.results,
        },
        {
          label: 'Aprendizados',
          icon: <BookOpen className="w-4 h-4 text-amber-400" />,
          content: project.learnings,
        },
      ]
    : []

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-[#121222] border border-cyan-500/30 text-white max-w-2xl rounded-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              {project
                ? PROJECT_ICON_MAP[project.iconName] || (
                    <Sparkles className="w-6 h-6 text-[#00f0ff]" />
                  )
                : null}
            </div>
            <div>
              <DialogTitle className="text-2xl font-black font-display text-white">
                {project?.title}
              </DialogTitle>
              <DialogDescription className="text-xs font-semibold text-[#00f0ff] uppercase tracking-wider">
                {project?.category}
              </DialogDescription>
            </div>
          </div>

          {project?.award && (
            <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full w-fit">
              <Trophy className="w-3.5 h-3.5" />
              <span>{project.award}</span>
            </div>
          )}
        </DialogHeader>

        <div className="flex flex-col gap-5 mt-4">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                {section.icon}
                {section.label}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{section.content}</p>
            </div>
          ))}

          {project && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-semibold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
