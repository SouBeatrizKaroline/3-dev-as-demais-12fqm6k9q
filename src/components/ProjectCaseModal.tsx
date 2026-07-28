import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Project } from '@/data/content'
import { Target, Lightbulb, TrendingUp, GraduationCap, Trophy, Cpu } from 'lucide-react'

interface ProjectCaseModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectCaseModal({ project, open, onOpenChange }: ProjectCaseModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#121222] border border-cyan-500/30 text-white max-w-2xl rounded-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black font-display text-white">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-sm">
            {project.category}
          </DialogDescription>
        </DialogHeader>

        {project.award && (
          <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold px-4 py-2 rounded-full w-fit">
            <Trophy className="w-3.5 h-3.5" />
            <span>{project.award}</span>
          </div>
        )}

        <div className="flex flex-col gap-5 mt-2">
          <div className="glass-card p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f0ff] flex items-center gap-2 mb-2">
              <Target className="w-4 h-4" /> O Desafio
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="glass-card p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4" /> Nossa Solução
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
          </div>

          <div className="glass-card p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4" /> Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4" /> Resultados
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.results}</p>
          </div>

          <div className="glass-card p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4" /> Aprendizados
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.learnings}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
