import { useEffect, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/use-in-view'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/data/content'
import { ProjectLinks } from '@/components/ProjectLinks'
import {
  ArrowLeft,
  Trophy,
  Target,
  Lightbulb,
  Sparkles,
  Cpu,
  Workflow,
  TrendingUp,
  Map,
  CheckCircle2,
  Github,
  ExternalLink,
  Youtube,
  Orbit,
  Images,
  Link2,
} from 'lucide-react'

const DIFERENCIAIS = [
  'Inteligência Artificial para identificação de exoplanetas',
  'Ciência Cidadã',
  'Interface acessível',
  'Visualização interativa de curvas de luz',
  'Gamificação',
  'Educação científica',
  'Dados oficiais da NASA',
  'Arquitetura escalável',
]

const TECH_GROUPS = [
  { category: 'Backend', items: ['Python', 'Flask', 'Gunicorn'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Machine Learning', items: ['LightGBM', 'Lightkurve'] },
  { category: 'Dados', items: ['NASA Exoplanet Archive', 'MAST', 'TESS'] },
  { category: 'DevOps', items: ['Docker', 'Docker Compose', 'GitHub'] },
  { category: 'Design', items: ['Figma'] },
]

const AI_FLOW = [
  'Dados NASA',
  'Limpeza e processamento',
  'Normalização das curvas',
  'Extração de características',
  'Modelo LightGBM',
  'Predição de candidatos',
  'Validação humana',
  'Catálogo colaborativo',
]

const IMPACT = [
  'Democratiza a pesquisa espacial',
  'Incentiva educação científica',
  'Aproxima a sociedade da astronomia',
  'Promove Ciência Cidadã',
  'Facilita análise de grandes volumes de dados',
  'Une IA e participação humana',
]

const ROADMAP = [
  'Sistema de votação',
  'Rankings',
  'Conquistas',
  'Perfis de usuários',
  'Assistente inteligente',
  'Mais bases de dados',
  'Aplicativo mobile',
  'Aplicativo desktop',
  'Processamento local',
  'Funcionalidades offline',
]

const TECH_BADGES = [
  'Python',
  'Flask',
  'React',
  'Next.js',
  'Tailwind',
  'LightGBM',
  'Lightkurve',
  'Docker',
  'GitHub',
  'Figma',
  'NASA APIs',
  'Machine Learning',
  'Artificial Intelligence',
  'Citizen Science',
]

const GALLERY = [
  { title: 'Interface inicial', query: 'space app interface' },
  { title: 'Fluxo de identificação', query: 'exoplanet detection' },
  { title: 'Visualização das curvas de luz', query: 'light curve astronomy' },
  { title: 'Tela de votação', query: 'space voting' },
  { title: 'Dashboard', query: 'astronomy dashboard' },
  { title: 'Resultado', query: 'space discovery' },
]

const LINKS = [
  { label: 'Repositório', icon: Github, href: '#' },
  { label: 'Projeto', icon: ExternalLink, href: '#' },
  { label: 'Demonstração (YouTube)', icon: Youtube, href: '#' },
]

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

export default function ProjectLazurus() {
  const { ref, isInView } = useInView()
  const project = PROJECTS.find((p) => p.id === 'lazurus')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-sm font-bold px-4 py-2 rounded-full w-fit mb-6">
            <Trophy className="w-4 h-4" />🏆 Global Nominee — NASA Space Apps Challenge 2025
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Orbit className="w-10 h-10 text-indigo-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display">
              <span className="gradient-heading">Lazurus</span>
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">
            Democratizando a descoberta de exoplanetas através de Inteligência Artificial e Ciência
            Cidadã.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="glass-card border-white/10 text-slate-300 hover:text-white gap-2"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="pb-24 px-4 md:px-8">
        <div
          className={`container mx-auto max-w-4xl space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {project?.links && project.links.length > 0 && (
            <CaseCard
              icon={<Link2 className="w-4 h-4" />}
              title="🔗 Links do Projeto"
              color="text-[#a78bfa]"
            >
              <ProjectLinks links={project.links} />
            </CaseCard>
          )}

          <CaseCard icon={<Target className="w-4 h-4" />} title="O Problema" color="text-[#00f0ff]">
            <p className="text-sm text-slate-300 leading-relaxed">
              A descoberta de exoplanetas normalmente exige conhecimento técnico avançado e análise
              manual de grandes volumes de dados astronômicos, tornando a participação limitada a
              pesquisadores especializados. Mesmo com milhares de observações produzidas pelas
              missões espaciais da NASA, grande parte desse processo ainda é complexa para o público
              geral.
            </p>
          </CaseCard>

          <CaseCard
            icon={<Lightbulb className="w-4 h-4" />}
            title="Nossa Solução"
            color="text-purple-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed">
              Criamos uma plataforma educacional e colaborativa que utiliza Inteligência Artificial
              para filtrar candidatos a exoplanetas e permite que qualquer pessoa participe da
              análise das curvas de luz através de uma interface intuitiva. A proposta une IA,
              gamificação, visualização científica e Ciência Cidadã para ampliar a participação da
              sociedade na exploração espacial.
            </p>
          </CaseCard>

          <CaseCard
            icon={<Sparkles className="w-4 h-4" />}
            title="Diferenciais"
            color="text-cyan-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFERENCIAIS.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard icon={<Cpu className="w-4 h-4" />} title="Tecnologias" color="text-cyan-400">
            <div className="space-y-3">
              {TECH_GROUPS.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-bold text-slate-400 mb-2">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Workflow className="w-4 h-4" />}
            title="Fluxo da IA"
            color="text-purple-400"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {AI_FLOW.map((step, i) => (
                <div
                  key={step}
                  className="glass-card p-3 rounded-xl border-white/10 flex items-center gap-2"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b300ff] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<TrendingUp className="w-4 h-4" />}
            title="Impacto"
            color="text-emerald-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {IMPACT.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard icon={<Map className="w-4 h-4" />} title="Roadmap" color="text-amber-400">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROADMAP.map((item, i) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Sparkles className="w-4 h-4" />}
            title="Tecnologias Utilizadas"
            color="text-cyan-400"
          >
            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                >
                  {badge}
                </span>
              ))}
            </div>
          </CaseCard>

          <CaseCard icon={<Images className="w-4 h-4" />} title="Galeria" color="text-purple-400">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY.map((item) => (
                <div key={item.title} className="relative group overflow-hidden rounded-xl">
                  <img
                    src={`https://img.usecurling.com/p/400/300?q=${encodeURIComponent(item.query)}&color=purple`}
                    alt={item.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </CaseCard>
        </div>
      </section>
    </div>
  )
}
