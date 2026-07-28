import soniaImage from '@/assets/image-b6425.png'
import moniqueImage from '@/assets/image-b6bf9.png'
import beatrizImage from '@/assets/image-41af5.png'

export interface TeamMember {
  id: string
  name: string
  role: string
  state: string
  city: string
  bio: string
  fullBio: string
  specialty: string[]
  actuation: string[]
  technologies: string[]
  linkedin: string
  github?: string
  photoUrl: string
  badge: string
  gradient: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  award?: string
  tags: string[]
  metric?: string
  category: string
  iconName: string
}

export interface StatItem {
  id: string
  label: string
  value: number
  suffix?: string
  icon: string
  description: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight?: boolean
  tag: string
}

export interface PhilosophyPillar {
  id: string
  number: string
  title: string
  description: string
  icon: string
}

export interface Capability {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export interface TechItem {
  name: string
  category: string
  icon: string
}

export interface Differential {
  title: string
  description: string
  icon: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'beatriz',
    name: 'Beatriz Karoline',
    role: 'Produto • UX • Estratégia • Tecnologia',
    state: 'Pernambuco',
    city: 'Recife / PE',
    bio: 'Atua conectando diferentes áreas do conhecimento para transformar problemas complexos em soluções digitais centradas no usuário.',
    fullBio:
      'Beatriz atua conectando diferentes áreas do conhecimento para transformar problemas complexos em soluções digitais. Sua experiência multidisciplinar reúne tecnologia, design, engenharia, gestão de projetos e inovação, contribuindo para a construção de produtos centrados no usuário e MVPs desenvolvidos em equipe.',
    specialty: [
      'Prototipação',
      'Product Design (UI/UX)',
      'Pesquisa & Validação',
      'Business Model & Pitch',
    ],
    actuation: [
      'UX/UI Research',
      'Wireframing & Prototyping',
      'Storytelling de Produto',
      'Estratégia de Negócios',
      'Apresentações executivas',
    ],
    technologies: [
      'Figma',
      'UI/UX Design',
      'Product Strategy',
      'Python',
      'React',
      'Pitch Deck',
      'Analytics',
    ],
    linkedin: 'https://www.linkedin.com/in/beatrizkcs/',
    photoUrl: beatrizImage,
    badge: 'Produto & UX',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'monique',
    name: 'Monique Cardoso',
    role: 'Inteligência Artificial • Ciência de Dados • Machine Learning',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro / RJ',
    bio: 'Transforma grandes volumes de dados e modelos de IA em soluções práticas, inteligíveis e automatizadas para desafios reais.',
    fullBio:
      'Monique trabalha com modelos de aprendizado de máquina e processamento de linguagem natural para transformar grandes volumes de dados em soluções inteligíveis e automatizadas. Sua atuação inclui pipelines de dados, análise preditiva e sistemas com IA generativa, sempre em colaboração com a equipe.',
    specialty: [
      'Inteligência Artificial',
      'Processamento de Linguagem Natural',
      'Engenharia de Prompts',
      'Data Science',
    ],
    actuation: [
      'Modelos de IA & LLMs',
      'Pipeline de Dados',
      'Análise Preditiva',
      'Automações Inteligentes',
      'Fine-tuning & RAG',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'OpenAI',
      'LLMs',
      'Scikit-learn',
      'Pandas',
      'Data Viz',
      'FastAPI',
    ],
    linkedin: 'https://www.linkedin.com/in/monique-cardoso21/',
    photoUrl: moniqueImage,
    badge: 'IA & Dados',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'sonia',
    name: 'Sonia Janara',
    role: 'Desenvolvimento Full Stack • Arquitetura de Software',
    state: 'Distrito Federal',
    city: 'Brasília / DF',
    bio: 'Constrói sistemas resilientes, APIs escaláveis e frontends modernos, transformando conceitos em código de alta performance.',
    fullBio:
      'Sonia atua no desenvolvimento de sistemas resilientes, APIs escaláveis e frontends modernos. Sua experiência abrange desde protótipos de alta velocidade até a consolidação de arquiteturas de software, transformando conceitos em código de alta performance através de trabalho colaborativo.',
    specialty: [
      'Frontend React/TS',
      'Backend Node.js & APIs',
      'Arquitetura Cloud',
      'Integração de Sistemas',
    ],
    actuation: [
      'Desenvolvimento Web',
      'Construção de APIs REST/GraphQL',
      'Infraestrutura Cloud',
      'Otimização de Performance',
      'Bancos de Dados',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'TailwindCSS',
      'PostgreSQL',
      'Docker',
      'Git',
      'Cloud APIs',
    ],
    linkedin: 'https://www.linkedin.com/in/jhaysavi/',
    photoUrl: soniaImage,
    badge: 'Full Stack',
    gradient: 'from-cyan-400 to-emerald-500',
  },
]

export const STATS: StatItem[] = [
  {
    id: '1',
    label: 'Hackathons Participados',
    value: 15,
    suffix: '+',
    icon: 'Trophy',
    description: 'Maratona de inovação no Brasil e no exterior',
  },
  {
    id: '2',
    label: 'Projetos Desenvolvidos',
    value: 12,
    suffix: '',
    icon: 'Code',
    description: 'Soluções de impacto prático validadas',
  },
  {
    id: '3',
    label: 'Premiações Conquistadas',
    value: 4,
    suffix: 'x',
    icon: 'Award',
    description: 'Pódios em grandes competições tech',
  },
  {
    id: '4',
    label: 'Projetos Finalistas',
    value: 7,
    suffix: '',
    icon: 'Sparkles',
    description: 'Reconhecimento técnico e executivo',
  },
  {
    id: '5',
    label: 'Protótipos Funcionais',
    value: 20,
    suffix: '+',
    icon: 'Cpu',
    description: 'MVPs construídos em tempo recorde',
  },
  {
    id: '6',
    label: 'Horas de Dev & Ideação',
    value: 5000,
    suffix: '+',
    icon: 'Clock',
    description: 'Dedicadas à resolução de problemas complexos',
  },
  {
    id: '7',
    label: 'Estados Conectados',
    value: 3,
    suffix: '',
    icon: 'MapPin',
    description: 'Pernambuco, Rio de Janeiro e DF',
  },
  {
    id: '8',
    label: 'Tecnologias Dominadas',
    value: 20,
    suffix: '+',
    icon: 'Zap',
    description: 'Ecossistema completo de IA, Web e Cloud',
  },
]

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2022',
    title: 'O Primeiro Passo',
    description:
      'Beatriz participa de seu primeiro hackathon, descobrindo a paixão por prototipação ágil de produtos.',
    tag: 'Início',
  },
  {
    year: '2023',
    title: 'Conexão NASA Space Apps',
    description:
      'A equipe se une para o NASA Space Apps Challenge, conquistando a posição de finalistas globais com solução focada em clima.',
    tag: 'Finalistas NASA',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Maratona Nacional e Internacional',
    description:
      'Participação intensiva em mais de 10 hackathons de inteligência artificial, impacto social e GovTech.',
    tag: 'Consolidação',
  },
  {
    year: '2025',
    title: '3º Lugar no Skip Challenge',
    description:
      'Pódio com o projeto DestinAI — única equipe 100% feminina entre as finalistas da maior competição de inovação.',
    tag: 'Pódio Skip Challenge',
    highlight: true,
  },
  {
    year: '2025+',
    title: 'Expansão & Parcerias Estratégicas',
    description:
      'Aceleração de projetos próprios, serviços de consultoria técnica para startups e criação de novos MVPs.',
    tag: 'Futuro',
  },
]

export const PHILOSOPHY: PhilosophyPillar[] = [
  {
    id: '1',
    number: '01',
    title: 'Resolver antes de complicar',
    description:
      'Priorizamos a essência do problema. Soluções simples e bem executadas superam arquiteturas desnecessariamente complexas.',
    icon: 'Target',
  },
  {
    id: '2',
    number: '02',
    title: 'Tecnologia precisa gerar impacto',
    description:
      'Código e inteligência artificial só têm valor real quando transformam vidas, simplificam processos e geram resultados concretos.',
    icon: 'HeartHandshake',
  },
  {
    id: '3',
    number: '03',
    title: 'Aprender continuamente',
    description:
      'O ecossistema de tecnologia evolui diariamente. O aprendizado rápido e adaptativo é a nossa principal vantagem competitiva.',
    icon: 'BookOpenCheck',
  },
  {
    id: '4',
    number: '04',
    title: 'Construir juntos',
    description:
      'A diversidade regional, de ideias e de habilidades multiplica a qualidade técnica e criativa de cada entrega.',
    icon: 'Users2',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'destinai',
    title: 'DestinAI',
    description:
      'Sistema inteligente com IA para redução do desperdício de hortaliças, conectando produtores, compradores e logística.',
    longDescription:
      'Desenvolvido durante o Skip Challenge, o DestinAI utiliza inteligência artificial preditiva e integração logística em tempo real para redistribuir excedentes agrícolas antes da deterioração. Conquistou o 3º lugar na competição como única equipe 100% feminina no pódio.',
    award: '3º Lugar no Skip Challenge',
    tags: ['IA Preditiva', 'Sustentabilidade', 'AgroTech', 'Logística', 'Full Stack'],
    metric: '-40% Desperdício Agrosocial',
    category: 'Inteligência Artificial',
    iconName: 'Sprout',
  },
  {
    id: 'siscar',
    title: 'SisCAR+',
    description:
      'Assistente inteligente que desmistifica a legislação do Cadastro Ambiental Rural (CAR) com suporte via WhatsApp e Web.',
    longDescription:
      'Plataforma GovTech com agente de IA conversacional para traduzir termos jurídicos e técnicos complexos sobre regulamentação ambiental em orientação simples para pequenos produtores rurais.',
    award: 'Projeto Destaque GovTech',
    tags: ['IA Conversacional', 'GovTech', 'PLN', 'WhatsApp API', 'Sustentabilidade'],
    metric: 'Atendimento 24/7',
    category: 'GovTech & IA',
    iconName: 'ShieldCheck',
  },
  {
    id: 'earth-connections',
    title: 'Earth Connections',
    description:
      'Plataforma interativa baseada em dados abertos da NASA para conscientização e mitigação de mudanças climáticas.',
    longDescription:
      'Aplicação web imersiva com visualizações de dados de satélite da NASA, projetada para engajar escolas e comunidades locais na identificação de ilhas de calor e riscos climáticos.',
    award: 'Finalistas Globais NASA Space Apps',
    tags: ['NASA Open Data', 'Data Viz', 'Clima', 'Educação', 'React'],
    metric: 'Finalista Global',
    category: 'ClimateTech',
    iconName: 'Globe',
  },
  {
    id: 'saude-express',
    title: 'Saúde Express',
    description:
      'API e chatbot para triagem primária inteligente e otimização de filas no atendimento público e privado de saúde.',
    longDescription:
      'Sistema de pré-atendimento com recomendação clínica automatizada baseada em algoritmos de decisão rápida, agilizando o encaminhamento de pacientes aos centros adequados.',
    award: 'Premiação de Inovação em Saúde',
    tags: ['HealthTech', 'APIs REST', 'Triagem Inteligente', 'FastAPI'],
    metric: 'Redução de 35% no tempo de espera',
    category: 'HealthTech',
    iconName: 'Activity',
  },
]

export const CAPABILITIES: Capability[] = [
  {
    id: '1',
    title: 'Hackathons & Maratonas',
    description: 'Resolução ultra-rápida de desafios em ambientes de alta pressão.',
    icon: 'Flame',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: '2',
    title: 'Desenvolvimento de MVPs',
    description: 'Construção acelerada de produtos mínimos viáveis e funcionais.',
    icon: 'Rocket',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: '3',
    title: 'Prototipação & UX/UI',
    description: 'Interfaces intuitivas, design systems e jornadas do usuário.',
    icon: 'Palette',
    color: 'from-pink-500 to-purple-500',
  },
  {
    id: '4',
    title: 'Inteligência Artificial',
    description: 'Modelos preditivos, PLN, agentes autônomos e IA Generativa.',
    icon: 'BrainCircuit',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: '5',
    title: 'Desenvolvimento Full Stack',
    description: 'Sistemas escaláveis com tecnologias de ponta em web e backend.',
    icon: 'Code2',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: '6',
    title: 'Storytelling & Pitch',
    description: 'Comunicação persuasiva e apresentações executivas para bancas.',
    icon: 'Presentation',
    color: 'from-amber-500 to-red-500',
  },
]

export const TECHNOLOGIES: TechItem[] = [
  { name: 'React', category: 'Frontend', icon: 'Atom' },
  { name: 'TypeScript', category: 'Language', icon: 'FileCode' },
  { name: 'Python', category: 'Language/AI', icon: 'Terminal' },
  { name: 'Node.js', category: 'Backend', icon: 'Server' },
  { name: 'OpenAI API', category: 'AI', icon: 'Sparkles' },
  { name: 'PyTorch', category: 'AI/ML', icon: 'Cpu' },
  { name: 'TailwindCSS', category: 'Frontend', icon: 'Layers' },
  { name: 'PostgreSQL', category: 'Database', icon: 'Database' },
  { name: 'Docker', category: 'DevOps', icon: 'Box' },
  { name: 'Figma', category: 'Design', icon: 'Figma' },
  { name: 'FastAPI', category: 'Backend', icon: 'Zap' },
  { name: 'Git & GitHub', category: 'DevOps', icon: 'GitBranch' },
]

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Multidisciplinaridade Integrada',
    description:
      'Domínio de estratégia de produto, inteligência artificial e engenharia em um único grupo sinérgico.',
    icon: 'Shapes',
  },
  {
    title: 'Velocidade Extrema de Entrega',
    description:
      'Metodologia testada em dezenas de hackathons para transformar ideias em protótipos rodando em poucas horas.',
    icon: 'Zap',
  },
  {
    title: 'Visão de Negócio & Pitch',
    description:
      'Não entregamos apenas código: apresentamos a proposta de valor, viabilidade econômica e modelo de negócios.',
    icon: 'TrendingUp',
  },
  {
    title: 'Diversidade Geográfica & Cultural',
    description:
      'Conexão direta entre o ecossistema de Recife, a energia do Rio de Janeiro e a visão institucional de Brasília.',
    icon: 'Compass',
  },
  {
    title: 'Trabalho Remoto Nativo',
    description:
      'Processos otimizados para colaboração à distância com alto alinhamento e produtividade.',
    icon: 'Wifi',
  },
  {
    title: 'Obsessão por Qualidade',
    description:
      'Atenção aos detalhes estéticos, usabilidade e robustez do código em todas as fases da solução.',
    icon: 'CheckCircle2',
  },
]
