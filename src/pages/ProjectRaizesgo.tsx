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
  TrendingUp,
  Map,
  CheckCircle2,
  Store,
  MessageCircle,
  Truck,
  CreditCard,
  ClipboardList,
  MapPin,
  BarChart3,
  Building2,
  ClipboardCheck,
  Globe,
  Leaf,
  Smartphone,
  Users,
  Trees,
  DollarSign,
  ListChecks,
  Cpu,
  Sparkles,
  GraduationCap,
  Link2,
} from 'lucide-react'

const PROBLEMAS = [
  'Dependência de distribuidores intermediários',
  'Dificuldade de contato direto com compradores',
  'Desafios logísticos para escoamento da produção',
  'Oscilação de preços e falta de previsibilidade',
  'Falta de rastreabilidade dos produtos',
  'Pouca transparência nas negociações',
  'Dificuldade de acesso a programas de compra pública',
  'Limitação de mercado e canais de comercialização',
]

const PESQUISA_CONCLUSOES = [
  'Produtores buscam autonomia na comercialização',
  'Compradores institucionais necessitam de canais diretos',
  'Logística é um gargalo em toda a cadeia produtiva',
  'WhatsApp é o canal de comunicação mais utilizado',
  'Transparência de preços é uma demanda unânime',
  'Compras públicas são pouco acessíveis para pequenos produtores',
  'Tecnologia precisa ser simples e acessível',
]

const FUNCIONALIDADES = [
  {
    icon: Store,
    title: 'Marketplace Rural',
    desc: 'Conexão direta entre produtores e compradores',
  },
  {
    icon: MessageCircle,
    title: 'Chatbot ManGo',
    desc: 'Atendimento e suporte automatizado via WhatsApp',
  },
  { icon: Truck, title: 'Logística Inteligente', desc: 'Otimização de rotas e entregas' },
  { icon: CreditCard, title: 'Pagamentos', desc: 'Sistema de pagamentos seguro e integrado' },
  { icon: ClipboardList, title: 'Gestão de Pedidos', desc: 'Centralização e controle de pedidos' },
  { icon: MapPin, title: 'Geolocalização', desc: 'Mapeamento de produtores e compradores' },
  { icon: BarChart3, title: 'Painéis Analíticos', desc: 'Métricas e indicadores em tempo real' },
  { icon: Building2, title: 'Compras Públicas', desc: 'Acesso a programas institucionais' },
]

const CLIENTES = [
  'Produtores rurais',
  'Restaurantes e mercados',
  'Compradores institucionais',
  'Cooperativas',
  'Prefeituras e órgãos públicos',
  'Distribuidores regionais',
  'Consumidores finais',
]

const RECEITAS = [
  'Taxa por transação no marketplace',
  'Assinatura premium para produtores',
  'Taxa de logística integrada',
  'Licenciamento para instituições públicas',
]

const TECH_GROUPS = [
  { category: 'Backend', items: ['Python'] },
  { category: 'Frontend', items: ['React', 'TypeScript'] },
  { category: 'Banco de Dados', items: ['PostgreSQL'] },
  { category: 'Infraestrutura', items: ['Docker'] },
  { category: 'Design', items: ['Figma'] },
  { category: 'Comunicação', items: ['WhatsApp', 'Chatbot ManGo'] },
]

const ROADMAP = [
  'MVP',
  'Expansão do chatbot',
  'Plataforma completa',
  'Integração logística',
  'Crescimento da base de usuários',
  'Expansão nacional',
]

const OKRS = [
  'Validação do MVP com produtores e compradores',
  'Expansão do chatbot para novas funcionalidades',
  'Crescimento da plataforma em usuários ativos',
  'Integração logística com transportadoras parceiras',
  'Expansão regional para novos estados do Centro-Oeste',
  'Expansão nacional da plataforma',
]

const IMPACTO = [
  'Fortalecer cadeias produtivas regionais',
  'Aumentar as compras públicas de produtos locais',
  'Reduzir intermediários na comercialização',
  'Ampliar a renda dos produtores rurais',
  'Incentivar a agricultura familiar',
  'Melhorar a logística de distribuição',
  'Promover o desenvolvimento regional',
  'Estimular o consumo sustentável',
]

const DIFERENCIAIS = [
  {
    icon: ClipboardCheck,
    title: 'Pesquisa de Campo',
    desc: 'Validação com produtores e compradores em três estados',
  },
  {
    icon: MessageCircle,
    title: 'Chatbot Inteligente',
    desc: 'Atendimento automatizado via WhatsApp',
  },
  { icon: Store, title: 'Marketplace Rural', desc: 'Comercialização direta sem intermediários' },
  { icon: Building2, title: 'Compras Públicas', desc: 'Acesso a programas institucionais' },
  { icon: Truck, title: 'Logística Integrada', desc: 'Otimização de rotas e entregas' },
  { icon: Globe, title: 'Escalabilidade Nacional', desc: 'Arquitetura preparada para expansão' },
  {
    icon: Leaf,
    title: 'Desenvolvimento Sustentável',
    desc: 'Fortalecimento da agricultura familiar',
  },
  { icon: Smartphone, title: 'Inclusão Digital', desc: 'Tecnologia acessível e simples' },
]

const TECH_BADGES = [
  'React',
  'TypeScript',
  'Python',
  'PostgreSQL',
  'Docker',
  'Figma',
  'WhatsApp',
  'Chatbot',
  'GovTech',
  'AgroTech',
  'UX/UI',
  'Marketplace',
  'Logística',
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

export default function ProjectRaizesgo() {
  const { ref, isInView } = useInView()
  const project = PROJECTS.find((p) => p.id === 'raizesgo')
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
            <Trophy className="w-4 h-4" />🏆 1º Lugar — Impulso Regional • Rotas de Integração –
            Centro-Oeste (2024)
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Trees className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display">
              <span className="gradient-heading">RaízesGo</span>
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">
            Conectando produtores, compradores e logística para fortalecer a economia regional.
          </p>
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

          <CaseCard icon={<Target className="w-4 h-4" />} title="O Desafio" color="text-[#00f0ff]">
            <p className="text-sm text-slate-300 leading-relaxed">
              Produtores rurais do Centro-Oeste enfrentam desafios como dependência de
              distribuidores, dificuldade de contato direto com compradores, problemas logísticos,
              oscilação de preços, falta de rastreabilidade, pouca transparência nas negociações e
              limitação de acesso a programas de compra pública.
            </p>
          </CaseCard>

          <CaseCard
            icon={<Lightbulb className="w-4 h-4" />}
            title="Nossa Solução"
            color="text-purple-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed">
              RaízesGo é uma plataforma digital que conecta produtores rurais, compradores
              institucionais e logística em um ecossistema integrado. A solução combina marketplace
              rural, chatbot inteligente no WhatsApp, logística otimizada, pagamentos seguros e
              painéis analíticos para fortalecer cadeias produtivas e ampliar as compras públicas no
              Centro-Oeste.
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
            title="Pesquisa e Validação"
            color="text-cyan-400"
          >
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Foram realizadas entrevistas em três estados do Centro-Oeste com restaurantes,
              mercados, compradores institucionais e produtores rurais para validar a necessidade da
              plataforma e compreender as dores reais de cada elo da cadeia produtiva.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PESQUISA_CONCLUSOES.map((item) => (
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

          <CaseCard
            icon={<DollarSign className="w-4 h-4" />}
            title="Modelo de Negócio"
            color="text-emerald-400"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-slate-400 mb-3">Clientes</p>
                <ul className="space-y-2">
                  {CLIENTES.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 mb-3">Fontes de Receita</p>
                <ul className="space-y-2">
                  {RECEITAS.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

          <CaseCard icon={<Target className="w-4 h-4" />} title="OKRs" color="text-purple-400">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OKRS.map((item, i) => (
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

          <CaseCard icon={<Users className="w-4 h-4" />} title="Equipe" color="text-purple-400">
            <p className="text-sm text-slate-300 leading-relaxed">
              O RaízesGo foi idealizado por um time 100% feminino durante o Hackathon Impulso
              Regional, conquistando o 1º lugar no Desafio 2 – Rotas de Integração – Centro-Oeste.
              Posteriormente, o projeto evoluiu com novos integrantes para continuidade do
              desenvolvimento e participação em edital de inovação.
            </p>
          </CaseCard>

          <CaseCard icon={<Trophy className="w-4 h-4" />} title="Resultado" color="text-amber-400">
            <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-sm font-bold px-4 py-2 rounded-full w-fit mb-4">
              <Trophy className="w-4 h-4" />🏆 1º Lugar — Impulso Regional • Rotas de Integração –
              Centro-Oeste (2024)
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              O RaízesGo foi reconhecido como a melhor solução do desafio, destacando-se pela
              pesquisa de campo, inovação tecnológica e impacto potencial no fortalecimento da
              economia regional.
            </p>
          </CaseCard>
        </div>
      </section>
    </div>
  )
}
