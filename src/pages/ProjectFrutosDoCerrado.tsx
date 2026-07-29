import { useEffect, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/use-in-view'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  Trophy,
  Target,
  Lightbulb,
  Sparkles,
  Cpu,
  TrendingUp,
  Map,
  CheckCircle2,
  Calendar,
  MapPin,
  ShoppingCart,
  CloudSun,
  Sprout,
  BookOpen,
  Store,
  Leaf,
  Users,
  Globe,
  Wifi,
  HeartHandshake,
  TreePalm,
  ListChecks,
  Rocket,
} from 'lucide-react'

const PROBLEMAS = [
  'Dificuldade de acesso ao mercado',
  'Baixa visibilidade dos produtores',
  'Falta de informações climáticas acessíveis',
  'Poucas ferramentas digitais adaptadas',
  'Valorização insuficiente dos conhecimentos tradicionais',
  'Barreiras para comercialização',
  'Necessidade de fortalecer a economia local',
  'Preservação do Cerrado',
]

const PESQUISA_DESTAQUES = [
  'Inclusão digital',
  'Fortalecimento comunitário',
  'Desenvolvimento sustentável',
  'Geração de renda',
  'Valorização cultural',
  'Preservação ambiental',
]

const FUNCIONALIDADES = [
  {
    icon: Calendar,
    title: 'Calendário de Safras',
    desc: 'Acompanhamento dos ciclos produtivos do Cerrado',
  },
  { icon: Map, title: 'Mapa Interativo', desc: 'Geolocalização de produtores e comunidades' },
  {
    icon: ShoppingCart,
    title: 'Marketplace Comunitário',
    desc: 'Comercialização direta de produtos locais',
  },
  { icon: CloudSun, title: 'Alertas Climáticos', desc: 'Informações climáticas em tempo real' },
  { icon: Sprout, title: 'Educação Ambiental', desc: 'Conteúdos sobre práticas sustentáveis' },
  { icon: BookOpen, title: 'Cultura Quilombola', desc: 'Valorização dos saberes tradicionais' },
  { icon: Store, title: 'Produtores Locais', desc: 'Conexão direta com consumidores' },
  {
    icon: Leaf,
    title: 'Informações sobre o Cerrado',
    desc: 'Dados sobre o bioma e sua preservação',
  },
]

const TECH_GROUPS = [
  { category: 'Frontend', items: ['React', 'React Router'] },
  { category: 'Build', items: ['Vite'] },
  { category: 'Estilização', items: ['CSS3'] },
  { category: 'Arquitetura', items: ['SPA (Single Page Application)'] },
  { category: 'Design', items: ['UX/UI', 'Figma (protótipos, se aplicável)'] },
]

const DIFERENCIAIS = [
  {
    icon: Wifi,
    title: 'Inclusão Digital',
    desc: 'Tecnologia acessível para comunidades tradicionais',
  },
  {
    icon: HeartHandshake,
    title: 'Valorização Cultural',
    desc: 'Preservação dos saberes quilombolas',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    desc: 'Práticas de uso consciente dos recursos naturais',
  },
  {
    icon: Store,
    title: 'Marketplace Comunitário',
    desc: 'Comercialização direta sem intermediários',
  },
  { icon: Sprout, title: 'Educação Ambiental', desc: 'Conteúdos sobre preservação do Cerrado' },
  {
    icon: TreePalm,
    title: 'Preservação do Cerrado',
    desc: 'Proteção do bioma e sua biodiversidade',
  },
  { icon: Globe, title: 'Interface Responsiva', desc: 'Acessível em diferentes dispositivos' },
  {
    icon: Users,
    title: 'Fortalecimento Comunitário',
    desc: 'Empoderamento de comunidades quilombolas',
  },
]

const PUBLICO_ALVO = [
  'Comunidades quilombolas',
  'Agricultores familiares',
  'Consumidores conscientes',
  'Pesquisadores',
  'Instituições públicas',
  'Organizações ambientais',
  'Apoiadores do Cerrado',
]

const ROADMAP = [
  'MVP',
  'Marketplace completo',
  'Integração com APIs climáticas',
  'Assistente Virtual',
  'Plataforma Educacional',
  'Expansão para outras comunidades',
  'Integração com políticas públicas',
]

const IMPACTO = [
  'Fortalecer comunidades quilombolas',
  'Ampliar geração de renda',
  'Preservar o bioma Cerrado',
  'Incentivar consumo sustentável',
  'Valorizar conhecimentos tradicionais',
  'Democratizar acesso à informação',
  'Promover inclusão digital',
  'Estimular desenvolvimento regional',
]

const MELHORIAS_FUTURAS = [
  'Integração com APIs meteorológicas',
  'Dados climáticos em tempo real',
  'Assistente Virtual',
  'Conteúdo educacional',
  'Recomendações inteligentes',
  'Novas funcionalidades para produtores',
  'Ampliação nacional',
]

const TECH_BADGES = [
  'React',
  'React Router',
  'Vite',
  'CSS3',
  'UX/UI',
  'Marketplace',
  'Sustentabilidade',
  'Cerrado',
  'Comunidades Quilombolas',
  'Educação Ambiental',
  'Cartografia',
  'Web Platform',
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

export default function ProjectFrutosDoCerrado() {
  const { ref, isInView } = useInView()

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
            <Trophy className="w-4 h-4" />🏆 1º Lugar — Hackathon Desafio Governo de Goiás (2024)
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <TreePalm className="w-10 h-10 text-amber-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display">
              <span className="gradient-heading">Frutos do Cerrado</span>
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">
            Tecnologia para fortalecer comunidades quilombolas, preservar o Cerrado e conectar
            produtores a novas oportunidades.
          </p>
        </div>
      </section>

      <section ref={ref} className="pb-24 px-4 md:px-8">
        <div
          className={`container mx-auto max-w-4xl space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <CaseCard icon={<Target className="w-4 h-4" />} title="O Desafio" color="text-[#00f0ff]">
            <p className="text-sm text-slate-300 leading-relaxed">
              Desenvolver uma solução tecnológica capaz de fortalecer comunidades quilombolas por
              meio da valorização da cultura local, preservação ambiental e ampliação das
              oportunidades de comercialização, utilizando ferramentas digitais acessíveis e
              sustentáveis.
            </p>
          </CaseCard>

          <CaseCard
            icon={<Lightbulb className="w-4 h-4" />}
            title="Nossa Solução"
            color="text-purple-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed">
              O Frutos do Cerrado é uma plataforma digital criada para conectar comunidades
              quilombolas, consumidores, pesquisadores e apoiadores do Cerrado em um único
              ecossistema. A solução facilita a comercialização de produtos locais, promove educação
              ambiental, disponibiliza informações sobre safras, oferece alertas climáticos e
              incentiva práticas sustentáveis, fortalecendo a economia local e preservando os
              saberes tradicionais.
            </p>
          </CaseCard>

          <CaseCard
            icon={<ListChecks className="w-4 h-4" />}
            title="Problemas Identificados"
            color="text-red-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROBLEMAS.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Users className="w-4 h-4" />}
            title="Nossa Pesquisa"
            color="text-cyan-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              O projeto foi construído considerando as necessidades reais das comunidades
              quilombolas e a conservação do Cerrado, promovendo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PESQUISA_DESTAQUES.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Sparkles className="w-4 h-4" />}
            title="Principais Funcionalidades"
            color="text-cyan-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FUNCIONALIDADES.map((f) => (
                <div
                  key={f.title}
                  className="glass-card p-4 rounded-xl border-white/10 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <f.icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{f.title}</p>
                    <p className="text-xs text-slate-400">{f.desc}</p>
                  </div>
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
            icon={<Sparkles className="w-4 h-4" />}
            title="Diferenciais"
            color="text-cyan-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIFERENCIAIS.map((d) => (
                <div
                  key={d.title}
                  className="glass-card p-4 rounded-xl border-white/10 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <d.icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{d.title}</p>
                    <p className="text-xs text-slate-400">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Users className="w-4 h-4" />}
            title="Público-alvo"
            color="text-purple-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PUBLICO_ALVO.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard icon={<Map className="w-4 h-4" />} title="Roadmap" color="text-amber-400">
            <div className="space-y-3">
              {ROADMAP.map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b300ff] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-300">{item}</span>
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
              {IMPACTO.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CaseCard>

          <CaseCard
            icon={<Rocket className="w-4 h-4" />}
            title="Melhorias Futuras"
            color="text-purple-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MELHORIAS_FUTURAS.map((item, i) => (
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
            icon={<Cpu className="w-4 h-4" />}
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

          <CaseCard icon={<Trophy className="w-4 h-4" />} title="Resultado" color="text-amber-400">
            <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-sm font-bold px-4 py-2 rounded-full w-fit mb-4">
              <Trophy className="w-4 h-4" />🏆 1º Lugar — Hackathon Desafio Governo de Goiás (2024)
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Projeto vencedor desenvolvido para fortalecer comunidades quilombolas, promover o uso
              sustentável dos recursos naturais, preservar o Cerrado e ampliar oportunidades de
              comercialização por meio de uma plataforma digital integrada.
            </p>
          </CaseCard>
        </div>
      </section>
    </div>
  )
}
