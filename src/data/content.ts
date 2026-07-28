import beatrizImage from '@/assets/image-41af5.png'
import moniqueImage from '@/assets/image-b6bf9.png'
import soniaImage from '@/assets/image-b6425.png'

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
  github: string
  photoUrl: string
  badge: string
  gradient: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  challenge: string
  solution: string
  results: string
  learnings: string
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
  number: string
  title: string
  description: string
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
    city: 'Recife • Pernambuco',
    bio: 'Conecta tecnologia, design e inovação para transformar ideias em soluções digitais centradas nas pessoas.',
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
    github: 'https://github.com/SouBeatrizKaroline',
    photoUrl: beatrizImage,
    badge: 'Produto & UX',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'monique',
    name: 'Monique Cardoso',
    role: 'Inteligência Artificial • Ciência de Dados • Machine Learning',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro • RJ',
    bio: 'Especialista em IA Generativa, Machine Learning e Ciência de Dados, desenvolvendo soluções inteligentes para problemas complexos.',
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
    github: 'https://github.com/moniquecardoso25',
    photoUrl: moniqueImage,
    badge: 'IA & Dados',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'sonia',
    name: 'Sonia Janara',
    role: 'Desenvolvimento Full Stack • Arquitetura de Software',
    state: 'Distrito Federal',
    city: 'Brasília • DF',
    bio: 'Desenvolvedora Full Stack focada em aplicações modernas, APIs escaláveis e arquitetura de software.',
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
    github: 'https://github.com/Jhaysavi',
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
    number: '01',
    title: 'Descobrindo a inovação',
    description:
      'Foi nos hackathons que encontramos um ambiente onde criatividade, colaboração e tecnologia caminham juntas.',
    tag: 'Início',
  },
  {
    number: '02',
    title: 'Construindo conexões',
    description:
      'Mesmo em estados diferentes, aprendemos a transformar distância em proximidade através da colaboração.',
    tag: 'Conexão',
  },
  {
    number: '03',
    title: 'Gerando impacto',
    description:
      'Projetos premiados, soluções desenvolvidas e experiências que fortaleceram nossa forma de construir tecnologia.',
    tag: 'Impacto',
  },
  {
    number: '04',
    title: 'O próximo desafio',
    description:
      'Continuamos evoluindo, aprendendo e criando soluções capazes de gerar impacto real.',
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
      'Desenvolvido durante o Skip Challenge, o DestinAI utiliza inteligência artificial preditiva e integração logística em tempo real para redistribuir excedentes agrícolas antes da deterioração.',
    challenge:
      'O desperdício de hortaliças no Brasil alcança níveis alarmantes, gerando perdas econômicas e ambientais em toda a cadeia de suprimentos agrícola.',
    solution:
      'Sistema inteligente com IA preditiva que conecta produtores, compradores e logística em tempo real, redistribuindo excedentes agrícolas antes da deterioração.',
    results:
      'Redução de até 40% no desperdício agrosocial. 3º lugar no Skip Challenge como única equipe 100% feminina no pódio.',
    learnings:
      'A combinação de IA preditiva com logística em tempo real pode transformar não apenas a eficiência agrícola, mas também o impacto social da tecnologia.',
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
      'Plataforma GovTech com agente de IA conversacional para traduzir termos jurídicos e técnicos complexos sobre regulamentação ambiental.',
    challenge:
      'A legislação do Cadastro Ambiental Rural (CAR) é complexa e técnica, dificultando o acesso de pequenos produtores rurais a informações essenciais sobre regulamentação ambiental.',
    solution:
      'Plataforma GovTech com agente de IA conversacional que traduz termos jurídicos e técnicos complexos em orientação simples e acessível via WhatsApp e Web.',
    results:
      'Atendimento 24/7 a produtores rurais, democratizando o acesso à informação ambiental e reduzindo barreiras burocráticas.',
    learnings:
      'Tecnologia conversacional pode ser uma ponte poderosa entre complexidade regulatória e cidadãos, especialmente em contextos rurais.',
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
      'Aplicação web imersiva com visualizações de dados de satélite da NASA, projetada para engajar escolas e comunidades locais.',
    challenge:
      'Dados climáticos abertos da NASA são ricos em informação, mas difíceis de interpretar para comunidades locais e escolas que precisam agir diante das mudanças climáticas.',
    solution:
      'Aplicação web imersiva com visualizações interativas de dados de satélite da NASA, projetada para engajar escolas e comunidades na identificação de ilhas de calor e riscos climáticos.',
    results:
      'Finalistas globais no NASA Space Apps Challenge, com solução reconhecida por tornar dados climáticos complexos acessíveis e acionáveis.',
    learnings:
      'Visualização de dados eficaz pode transformar conjuntos massivos de informações científicas em ferramentas de conscientização e ação comunitária.',
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
      'Sistema de pré-atendimento com recomendação clínica automatizada baseada em algoritmos de decisão rápida.',
    challenge:
      'O tempo de espera em atendimentos de saúde pública e privada é uma barreira significativa, impactando diretamente a qualidade do atendimento ao paciente.',
    solution:
      'Sistema de pré-atendimento com recomendação clínica automatizada baseada em algoritmos de decisão rápida, agilizando o encaminhamento de pacientes aos centros adequados.',
    results:
      'Redução de 35% no tempo de espera, com triagem primária inteligente otimizando o fluxo de pacientes.',
    learnings:
      'Automação inteligente em saúde pode aliviar pressão sobre sistemas sobrecarregados sem comprometer a qualidade do cuidado.',
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
