import { useEffect, ReactNode } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useInView } from '@/hooks/use-in-view'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/data/content'
import {
  ArrowLeft,
  Trophy,
  Target,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Cpu,
  Eye,
  ListChecks,
  Sparkles,
  CheckCircle2,
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
  Leaf,
  Bot,
  HeartPulse,
  Orbit,
  Trees,
} from 'lucide-react'

const ICON_MAP: Record<string, ReactNode> = {
  Sprout: <Sprout className="w-8 h-8 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#00f0ff]" />,
  Globe: <Globe className="w-8 h-8 text-blue-400" />,
  Activity: <Activity className="w-8 h-8 text-pink-400" />,
  Recycle: <Recycle className="w-8 h-8 text-green-400" />,
  Heart: <Heart className="w-8 h-8 text-rose-400" />,
  Plane: <Plane className="w-8 h-8 text-sky-400" />,
  Palette: <Palette className="w-8 h-8 text-purple-400" />,
  Zap: <Zap className="w-8 h-8 text-amber-400" />,
  Users: <Users className="w-8 h-8 text-indigo-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-emerald-400" />,
  Leaf: <Leaf className="w-8 h-8 text-lime-400" />,
  Bot: <Bot className="w-8 h-8 text-cyan-400" />,
  HeartPulse: <HeartPulse className="w-8 h-8 text-red-400" />,
  Orbit: <Orbit className="w-8 h-8 text-indigo-400" />,
  Trees: <Trees className="w-8 h-8 text-green-500" />,
}

function CaseCard({
  icon,
  title,
  color,
  children,
}: {
  icon: ReactNode
  title: string
  color: string
  children: ReactNode
}) {
  return (
    <div className="glass-card glass-card-hover p-6 rounded-2xl">
      <h3
        className={`text-xs font-bold uppercase tracking-wider ${color} flex items-center gap-2 mb-4`}
      >
        {icon}
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const { ref, isInView } = useInView()
  const project = PROJECTS.find((p) => p.id === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Projeto não encontrado.</p>
          <Link to="/">
            <Button className="gradient-btn font-bold px-6 py-3 rounded-xl">
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const awards = project.awards ?? (project.award ? [project.award] : [])

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-slate-100">
      <section className="pt-32 pb-12 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00f0ff] opacity-10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#b300ff] opacity-10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link to="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Portfólio
            </Button>
          </Link>
          {awards.length > 0 && (
            <div className="flex flex-col gap-2 mb-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-sm font-bold px-4 py-2 rounded-full w-fit"
                >
                  <Trophy className="w-4 h-4" />
                  {award}
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              {ICON_MAP[project.iconName] || <Sparkles className="w-8 h-8 text-[#00f0ff]" />}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display">
              <span className="gradient-heading">{project.title}</span>
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mt-6">
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
      </section>

      <section ref={ref} className="pb-24 px-4 md:px-8">
        <div
          className={`container mx-auto max-w-4xl space-y-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <CaseCard icon={<Eye className="w-4 h-4" />} title="Visão Geral" color="text-[#00f0ff]">
            <p className="text-sm text-slate-300 leading-relaxed">{project.overview}</p>
          </CaseCard>

          <CaseCard icon={<Target className="w-4 h-4" />} title="O Desafio" color="text-[#00f0ff]">
            <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
          </CaseCard>

          <CaseCard
            icon={<Lightbulb className="w-4 h-4" />}
            title="Nossa Solução"
            color="text-purple-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
          </CaseCard>

          <CaseCard
            icon={<ListChecks className="w-4 h-4" />}
            title="Funcionalidades"
            color="text-cyan-400"
          >
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CaseCard>

          <CaseCard icon={<Cpu className="w-4 h-4" />} title="Tecnologias" color="text-cyan-400">
            <div className="flex flex-wrap gap-2">
              {(project.technologies ?? project.tags).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Sparkles className="w-4 h-4" />}
            title="Destaques da Solução"
            color="text-cyan-400"
          >
            <ul className="space-y-2">
              {project.contributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  {contribution}
                </li>
              ))}
            </ul>
          </CaseCard>

          <CaseCard
            icon={<TrendingUp className="w-4 h-4" />}
            title="Resultado"
            color="text-emerald-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed">{project.results}</p>
          </CaseCard>

          <CaseCard
            icon={<GraduationCap className="w-4 h-4" />}
            title="Aprendizados"
            color="text-amber-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed">{project.learnings}</p>
          </CaseCard>
        </div>
      </section>
    </div>
  )
}
