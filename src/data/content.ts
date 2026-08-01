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
  tags: string[]
  linkedin: string
  github: string
  portfolio?: string
  photoUrl: string
  badge: string
  gradient: string
  technologyGroups?: { category: string; items: string[] }[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  overview: string
  challenge: string
  solution: string
  features: string[]
  teamRole: string
  contributions: string[]
  results: string
  learnings: string
  award?: string
  awards?: string[]
  technologies?: string[]
  isAwarded: boolean
  tags: string[]
  metric?: string
  category: string
  iconName: string
  casePageRoute?: string
  recognitionBadge?: string
  links?: ProjectLink[]
  validationLine?: string
  externalUrl?: string
  cardFeatures?: string[]
}

export interface ProjectLink {
  title: string
  icon: string
  url: string
}

export interface StatItem {
  id: string
  label: string
  value: number
  suffix?: string
  textValue?: string
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
    role: 'Inteligência Artificial • Produto Digital • UX/UI Design',
    state: 'Pernambuco',
    city: 'Jaboatão dos Guararapes • PE',
    bio: 'Beatriz atua na criação e liderança de projetos tecnológicos, unindo Inteligência Artificial, inovação, design de produtos digitais e experiência do usuário para transformar ideias em soluções de impacto.',
    fullBio:
      'Beatriz atua na criação e liderança de projetos tecnológicos, unindo Inteligência Artificial, inovação, design de produtos digitais e experiência do usuário. Sua experiência multidisciplinar reúne gestão de produtos, UX/UI Design, prototipação, desenvolvimento de jogos e aplicação de Inteligência Artificial, contribuindo para a construção de soluções de impacto centradas nas pessoas e em MVPs desenvolvidos em equipe.',
    specialty: [
      'Inteligência Artificial aplicada',
      'Produto Digital',
      'Gestão de Projetos',
      'Liderança de Equipes',
      'UX/UI Design',
      'Prototipação',
      'Game Design',
    ],
    actuation: [
      'Desenvolvimento de soluções com Inteligência Artificial',
      'Gestão e liderança de projetos',
      'Estruturação de produtos digitais',
      'Pesquisa e experiência do usuário',
      'Prototipação de interfaces',
      'Desenvolvimento de jogos e experiências interativas',
      'Organização de equipes multidisciplinares',
    ],
    technologies: [
      'Ferramentas de Inteligência Artificial',
      'Figma',
      'Prototipação',
      'Metodologias Ágeis',
      'Ferramentas de desenvolvimento de jogos',
    ],
    tags: [
      'Inteligência Artificial',
      'Produto Digital',
      'UX/UI Design',
      'Liderança',
      'Gestão de Projetos',
      'Inovação',
      'Prototipação',
      'Desenvolvimento de Jogos',
    ],
    linkedin: 'https://www.linkedin.com/in/beatrizkcs/',
    github: 'https://github.com/SouBeatrizKaroline',
    portfolio: 'https://soubeatrizkaroline.goskip.app/',
    photoUrl: beatrizImage,
    badge: 'Tecnologia & Inovação',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'monique',
    name: 'Monique Cardoso',
    role: 'Inteligência Artificial • Ciência de Dados • IA Generativa',
    state: 'Rio de Janeiro',
    city: 'Duque de Caxias • RJ',
    bio: 'Monique é Cientista de Dados com foco em Inteligência Artificial Generativa, análise de dados e desenvolvimento de soluções baseadas em LLMs.',
    fullBio:
      'Monique é Cientista de Dados com foco em Inteligência Artificial Generativa, análise de dados e desenvolvimento de soluções baseadas em LLMs. Possui experiência na criação de provas de conceito (POCs), chatbots inteligentes e soluções orientadas por dados para apoiar processos de tomada de decisão. Atua utilizando Python, ferramentas de Inteligência Artificial e tecnologias de dados para desenvolver soluções escaláveis, transformar dados em informações estratégicas e colaborar com equipes multidisciplinares na construção de soluções inovadoras.',
    specialty: [
      'Ciência de Dados',
      'Inteligência Artificial Generativa',
      'Agentes de IA',
      'Análise de Dados',
      'Machine Learning',
    ],
    actuation: [
      'Modelos de IA (LLMs)',
      'Agentes de IA',
      'Análise Preditiva',
      'Pipeline de Dados',
      'Dashboards e Visualização de Dados',
      'Provas de Conceito (POCs)',
    ],
    technologies: [
      'Python',
      'SQL',
      'Jupyter Notebook',
      'AWS',
      'Google Cloud',
      'Microsoft Azure',
      'Docker',
      'Power BI',
      'LlamaIndex',
      'Langflow',
      'IBM watsonx',
      'Git',
      'GitHub',
    ],
    technologyGroups: [
      { category: 'Linguagens e Dados', items: ['Python', 'SQL', 'Jupyter Notebook'] },
      {
        category: 'Cloud e Infraestrutura',
        items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker'],
      },
      { category: 'Dados e Analytics', items: ['Power BI'] },
      { category: 'IA Generativa e LLMs', items: ['LlamaIndex', 'Langflow', 'IBM watsonx'] },
      { category: 'Desenvolvimento e Colaboração', items: ['Git', 'GitHub'] },
    ],
    tags: [
      'Ciência de Dados',
      'Inteligência Artificial Generativa',
      'Agentes de IA',
      'Análise de Dados',
      'Machine Learning',
      'LLMs',
      'Python',
    ],
    linkedin: 'https://www.linkedin.com/in/monique-cardoso21/',
    github: 'https://github.com/moniquecardoso25',
    portfolio: 'https://moniquecardoso.goskip.app/',
    photoUrl: moniqueImage,
    badge: 'IA & Dados',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'sonia',
    name: 'Sonia Janara',
    role: 'Inteligência Artificial • Desenvolvimento • Estratégia de Produto',
    state: 'Distrito Federal',
    city: 'Brasília • DF',
    bio: 'Sonia atua no desenvolvimento de soluções digitais combinando tecnologia, Inteligência Artificial, pesquisa e estratégia para criar produtos inovadores alinhados às necessidades dos usuários e do mercado.',
    fullBio:
      'Sonia atua no desenvolvimento de soluções digitais combinando tecnologia, Inteligência Artificial, pesquisa e estratégia de produto. Sua experiência abrange desde a aplicação de IA e desenvolvimento de software até a pesquisa de mercado e validação de ideias, transformando conceitos em produtos inovadores alinhados às necessidades dos usuários e do mercado através de trabalho colaborativo.',
    specialty: [
      'Inteligência Artificial aplicada',
      'Desenvolvimento de Software',
      'Estratégia de Produto',
      'Pesquisa de Mercado',
      'Pesquisa com Usuários',
      'Inovação',
    ],
    actuation: [
      'Desenvolvimento de soluções digitais',
      'Aplicação de Inteligência Artificial',
      'Pesquisa e análise de mercado',
      'Estratégia de produto',
      'Validação de ideias',
      'Estruturação de projetos tecnológicos',
      'Colaboração em equipes multidisciplinares',
    ],
    technologies: [
      'Ferramentas de Inteligência Artificial',
      'Desenvolvimento Web',
      'Ferramentas de pesquisa',
      'Prototipação',
      'Metodologias de inovação',
    ],
    tags: [
      'Inteligência Artificial',
      'Desenvolvimento',
      'Estratégia',
      'Pesquisa',
      'Produto Digital',
      'Análise de Mercado',
      'Inovação',
    ],
    linkedin: 'https://www.linkedin.com/in/jhaysavi/',
    github: 'https://github.com/Jhaysavi',
    portfolio: 'https://jhay.goskip.app/',
    photoUrl: soniaImage,
    badge: 'Tecnologia & Estratégia',
    gradient: 'from-cyan-400 to-emerald-500',
  },
]

export const STATS: StatItem[] = [
  {
    id: '1',
    label: 'Hackathons Participados',
    value: 50,
    suffix: '+',
    icon: 'Trophy',
    description:
      'Participação em mais de 50 hackathons nacionais e internacionais, desenvolvendo soluções em tecnologia, inovação e impacto social.',
  },
  {
    id: '2',
    label: 'Projetos Desenvolvidos',
    value: 12,
    suffix: '+',
    icon: 'Code',
    description:
      'Mais de 12 projetos desenvolvidos, envolvendo tecnologia, inteligência artificial, produtos digitais e soluções para desafios reais.',
  },
  {
    id: '3',
    label: 'Premiações Conquistadas',
    value: 10,
    suffix: '+',
    icon: 'Award',
    description:
      'Reconhecimento nacional e internacional em competições de tecnologia, inovação e desenvolvimento de soluções.',
  },
  {
    id: '4',
    label: 'Projetos Internacionais',
    value: 7,
    suffix: '+',
    icon: 'MapPin',
    description: 'Participação em desafios globais de inovação com soluções tecnológicas.',
  },
  {
    id: '5',
    label: 'Protótipos Funcionais',
    value: 20,
    suffix: '+',
    icon: 'Cpu',
    description:
      'MVPs, protótipos e experiências digitais construídas durante hackathons e projetos de inovação.',
  },
  {
    id: '6',
    label: 'Horas de Dev & Ideação',
    value: 5000,
    suffix: '+',
    icon: 'Clock',
    description:
      'Horas dedicadas ao desenvolvimento, pesquisa, prototipação e construção colaborativa de soluções tecnológicas.',
  },
  {
    id: '7',
    label: 'Estados Conectados',
    value: 3,
    suffix: '',
    icon: 'MapPin',
    description:
      'Equipe conectada entre diferentes regiões do Brasil, incluindo Pernambuco, Rio de Janeiro e Distrito Federal.',
  },
  {
    id: '8',
    label: 'Tecnologias Dominadas',
    value: 20,
    suffix: '+',
    icon: 'Zap',
    description:
      'Ecossistema de tecnologias envolvendo Inteligência Artificial, Desenvolvimento Web, Cloud, Dados, UX/UI e ferramentas de inovação.',
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
    id: 'nortia',
    title: 'North AI',
    description: 'Process Intelligence Platform',
    longDescription:
      'A plataforma mapeia por você. Você decide o que automatizar. Identifique gargalos operacionais, calcule impactos financeiros e horas perdidas e gere aplicativos e agentes de IA com um roadmap estratégico completo — sem precisar de processos já mapeados ou integração complexa.',
    overview:
      'A plataforma mapeia por você. Você decide o que automatizar. Identifique gargalos operacionais, calcule impactos financeiros e horas perdidas e gere aplicativos e agentes de IA com um roadmap estratégico completo — sem precisar de processos já mapeados ou integração complexa.',
    challenge:
      'Identificar gargalos operacionais e calcular impactos financeiros sem processos já mapeados ou integração complexa.',
    solution:
      'Plataforma de inteligência de processos que mapeia automaticamente, calcula impactos financeiros e horas perdidas, e gera aplicativos e agentes de IA com roadmap estratégico completo.',
    features: [
      'Análise inteligente em segundos',
      'Estimativas de ROI e roadmap dinâmico de execução',
      'Plataforma segura para diagnóstico empresarial.',
    ],
    teamRole:
      'A equipe 3 Dev.as DemAIs desenvolveu a plataforma North AI para diagnóstico empresarial automatizado.',
    contributions: [
      'Mapeamento automático de processos',
      'Cálculo de impactos financeiros e horas perdidas',
      'Geração de aplicativos e agentes de IA',
      'Roadmap estratégico dinâmico de execução',
    ],
    results: 'Validado com 14 empresários no Adapta Summit · 12/14 resolveriam a dor.',
    learnings:
      'A combinação de inteligência de processos com IA generativa pode transformar a forma como empresas diagnosticam e resolvem gargalos operacionais.',
    isAwarded: false,
    tags: ['F', 'T', 'L', 'V'],
    category: 'Process Intelligence Platform',
    iconName: 'BrainCircuit',
    validationLine: 'Validado com 14 empresários no Adapta Summit · 12/14 resolveriam a dor',
    cardFeatures: [
      'Análise inteligente em segundos',
      'Estimativas de ROI e roadmap dinâmico de execução',
      'Plataforma segura para diagnóstico empresarial.',
    ],
    links: [
      {
        title: 'Acessar Plataforma',
        icon: 'globe',
        url: 'https://nortia.goskip.app/app/dashboard',
      },
    ],
  },
  {
    id: 'destinai',
    title: 'DestinAI',
    description:
      'Sistema inteligente com IA para redução do desperdício de hortaliças, conectando produtores, compradores e logística em tempo real.',
    longDescription:
      "Desenvolvido durante o Don't Skip Challenge, o DestinAI utiliza inteligência artificial preditiva e integração logística em tempo real para redistribuir excedentes agrícolas antes da deterioração.",
    overview:
      'DestinAI é um sistema inteligente que combina IA preditiva e logística em tempo real para reduzir o desperdício de hortaliças no Brasil, conectando produtores rurais, compradores e transportadoras em uma plataforma unificada.',
    challenge:
      'O desperdício de hortaliças no Brasil alcança níveis alarmantes, gerando perdas econômicas e ambientais em toda a cadeia de suprimentos agrícola. Produtores enfrentam dificuldades para escoar excedentes antes da deterioração.',
    solution:
      'Sistema inteligente com IA preditiva que conecta produtores, compradores e logística em tempo real, redistribuindo excedentes agrícolas antes da deterioração. A plataforma prevê demanda, otimiza rotas e facilita a conexão direta entre produtores e compradores.',
    features: [
      'IA preditiva para previsão de excedentes agrícolas',
      'Matching inteligente entre produtores e compradores',
      'Otimização de rotas logísticas em tempo real',
      'Dashboard de monitoramento de desperdício',
      'Notificações automatizadas de disponibilidade',
    ],
    teamRole:
      'A equipe 3 Dev.as DemAIs atuou em todas as frentes do projeto: Beatriz liderou o design de produto e estratégia, Monique desenvolveu os modelos de IA preditiva e pipelines de dados, e Sonia implementou a arquitetura full stack e integrações logísticas.',
    contributions: [
      'Pesquisa e validação de problema com produtores rurais',
      'Design de produto e estratégia de UX',
      'Modelos de IA preditiva para previsão de excedentes',
      'Pipelines de dados e análise preditiva',
      'Arquitetura full stack e integrações logísticas',
    ],
    results:
      "Redução de até 40% no desperdício agrosocial. 3º lugar no Don't Skip Challenge como única equipe 100% feminina no pódio.",
    learnings:
      'A combinação de IA preditiva com logística em tempo real pode transformar não apenas a eficiência agrícola, mas também o impacto social da tecnologia. A colaboração multidisciplinar foi essencial para entregar uma solução completa em tempo recorde.',
    award: "🥉 3º Lugar — Don't Skip Challenge",
    isAwarded: true,
    tags: ['IA Preditiva', 'Sustentabilidade', 'AgroTech', 'Logística', 'Full Stack'],
    metric: '-40% Desperdício Agrosocial',
    category: 'Inteligência Artificial',
    iconName: 'Sprout',
    links: [
      { title: 'Pitch', icon: 'youtube', url: 'https://www.youtube.com/watch?v=3e69Hha1HJI' },
      { title: 'Protótipo', icon: 'youtube', url: 'https://www.youtube.com/watch?v=ZQvmKHnbrgU' },
      { title: 'Site', icon: 'globe', url: 'https://destinai.goskip.app/?v=ebe1efb' },
    ],
  },
  {
    id: 'reclapp',
    title: 'ReClapp',
    description: 'MVP gamificado para incentivar reciclagem e educação ambiental',
    longDescription:
      'Aplicativo gamificado criado para incentivar reciclagem, educação ambiental e compartilhamento de práticas sustentáveis por meio de desafios e colaboração entre usuários. MVP desenvolvido durante o Hack Frost NL 2.0 com foco em sustentabilidade, economia circular e experiência do usuário.',
    overview:
      'ReClapp é um MVP de aplicativo desenvolvido para incentivar práticas sustentáveis através de gamificação, educação ambiental e compartilhamento de conhecimento entre usuários. O protótipo foi criado durante o Hack Frost NL 2.0 com foco em simplicidade, engajamento e experiência do usuário, promovendo economia circular de forma acessível e colaborativa.',
    challenge:
      'A falta de conscientização sobre reciclagem e a ausência de ferramentas práticas que incentivem o compartilhamento de práticas sustentáveis dificultam a transição para uma economia circular. Muitas pessoas não sabem por onde começar ou sentem que suas ações individuais não geram impacto.',
    solution:
      'Um protótipo de aplicativo gamificado que combina desafios sustentáveis, sistema de EcoPoints e compartilhamento de dicas de reciclagem e reutilização. O MVP foi desenvolvido com foco em design de alta fidelidade, sem integrações com serviços públicos ou sistemas de reciclagem, atuando como uma ferramenta educacional e motivacional para práticas sustentáveis.',
    features: [
      'Compartilhamento de dicas sobre reciclagem',
      'Publicação de ideias de reutilização (DIY)',
      'Desafios sustentáveis com gamificação',
      'Sistema de EcoPoints',
      'Busca por materiais e conteúdos relacionados',
    ],
    teamRole:
      'O protótipo foi desenvolvido em equipe durante o Hack Frost NL 2.0, com foco em pesquisa, design de produto e experiência do usuário.',
    contributions: [
      'UX/UI focada em simplicidade e engajamento',
      'Gamificação aplicada à sustentabilidade',
      'Incentivo ao compartilhamento de conhecimento',
      'Design colaborativo centrado no usuário',
      'Protótipo de alta fidelidade',
    ],
    results:
      '1º lugar no Hack Frost NL 2.0, com solução reconhecida por unir educação ambiental, gamificação e experiência do usuário em um MVP acessível e engajador.',
    learnings:
      'Gamificação pode ser uma ferramenta poderosa para transformar hábitos sustentáveis em ações cotidianas, especialmente quando combinada com educação e design centrado no usuário. A simplicidade do protótipo demonstrou que pequenos desafios podem gerar grande engajamento.',
    award: '🥇 1º Lugar — Hack Frost NL 2.0',
    isAwarded: true,
    tags: ['Figma', 'UX/UI', 'Sustentabilidade', 'Gamificação', 'Educação Ambiental'],
    metric: '1º Lugar',
    category: 'GreenTech • Sustainability',
    iconName: 'Recycle',
    links: [
      {
        title: 'Devpost',
        icon: 'globe',
        url: 'https://devpost.com/software/reclapp/updates/318345',
      },
    ],
  },
  {
    id: 'giro',
    title: 'Girô',
    description:
      'Plataforma digital colaborativa criada para reunir e divulgar práticas de aprendizagem antirracistas e decoloniais, conectando educação, cultura e participação comunitária. Projeto desenvolvido durante o Hackathon GiraLab para ampliar o acesso a materiais educativos, incentivar o compartilhamento de conhecimento e fortalecer uma comunidade voltada às práticas decoloniais.',
    longDescription:
      'Plataforma digital colaborativa que reúne e divulga práticas de aprendizagem antirracistas e decoloniais, conectando educação, cultura e participação comunitária.',
    overview:
      'Girô é uma plataforma digital colaborativa criada para reunir, organizar e divulgar práticas de aprendizagem antirracistas e decoloniais. O projeto conecta educação, cultura e participação comunitária por meio de um acervo virtual acessível e de um espaço para troca de experiências entre educadores, estudantes e pessoas interessadas no tema.',
    challenge:
      'Embora exista uma ampla produção de materiais relacionados às perspectivas antirracistas e decoloniais, muitos desses conteúdos permanecem dispersos, dificultando o acesso por educadores e demais interessados. O desafio consistia em criar um ambiente capaz de centralizar esses materiais e incentivar o compartilhamento de experiências de aprendizagem.',
    solution:
      'Desenvolvemos uma plataforma web que reúne um acervo colaborativo de atividades, referências e práticas educativas voltadas às perspectivas decoloniais e antirracistas. Como complemento, foi proposta uma comunidade no Discord para estimular discussões, colaboração e continuidade das experiências iniciadas no acervo.',
    features: [
      'Acervo digital de práticas de aprendizagem',
      'Organização de conteúdos por temáticas',
      'Espaço para divulgação de atividades educativas',
      'Comunidade integrada para troca de experiências',
      'Plataforma voltada para educadores e comunidade',
    ],
    teamRole:
      'Beatriz conduziu a pesquisa UX e design da plataforma, Monique contribuiu com a organização de conteúdos e curadoria, e Sonia implementou a plataforma web.',
    contributions: [
      'Plataforma publicada e disponível para acesso',
      'Curadoria de conteúdos antirracistas e decoloniais',
      'Design centrado na experiência do usuário',
      'Incentivo à aprendizagem colaborativa',
      'Integração entre acervo digital e comunidade online',
    ],
    results:
      'O Girô foi desenvolvido durante o Hackathon GiraLab e evoluiu para uma plataforma publicada, disponibilizando um acervo digital voltado à educação antirracista e decolonial. O projeto demonstrou como tecnologia, cultura e colaboração podem ampliar o acesso ao conhecimento e fortalecer comunidades de aprendizagem.',
    learnings:
      'O desenvolvimento do Girô evidenciou a importância do design centrado no usuário em projetos de impacto social e cultural. A experiência reforçou o valor da construção colaborativa, da acessibilidade à informação e do uso da tecnologia como ferramenta para democratizar o conhecimento e promover espaços de diálogo e aprendizagem contínua.',
    award: 'Ganhador do Hackathon GiraLab.',
    isAwarded: true,
    tags: ['Educação', 'UX/UI', 'Comunidade', 'Cultura', 'Web Platform'],
    technologies: [
      'Desenvolvimento Web',
      'UX/UI Design',
      'Design Responsivo',
      'Discord',
      'Ferramentas colaborativas de prototipação e planejamento',
    ],
    metric: 'Plataforma Publicada',
    category: 'EdTech • Impacto Social',
    iconName: 'Heart',
    recognitionBadge: '💰 Projeto contemplado com investimento',
    links: [{ title: 'Site', icon: 'globe', url: 'https://giralab.org.br/giro/' }],
  },
  {
    id: 'infinitour',
    title: 'Infinitour',
    description:
      'Plataforma de turismo acessível desenvolvida para tornar informações históricas e culturais compreensíveis para visitantes de diferentes faixas etárias por meio de experiências multimodais. Protótipo criado durante o Hackatour Cataratas que adapta conteúdos turísticos utilizando linguagem adequada para crianças, jovens e adultos, oferecendo informações em texto e áudio.',
    longDescription:
      'Plataforma de turismo acessível desenvolvida para tornar informações históricas e culturais compreensíveis para visitantes de diferentes faixas etárias por meio de experiências multimodais. Protótipo criado durante o Hackatour Cataratas que adapta conteúdos turísticos utilizando linguagem adequada para crianças, jovens e adultos, oferecendo informações em texto e áudio.',
    overview:
      'Infinitour é um protótipo desenvolvido durante o Hackatour Cataratas com o objetivo de tornar a experiência turística mais acessível por meio da adaptação da comunicação para diferentes públicos. A solução apresenta informações e histórias dos pontos turísticos utilizando linguagem adequada para crianças, adolescentes e adultos, oferecendo conteúdos em texto e áudio para ampliar o acesso ao conhecimento.',
    challenge:
      'Muitas informações disponíveis em pontos turísticos utilizam uma linguagem única, que nem sempre atende visitantes de diferentes idades ou perfis. O desafio era criar uma experiência capaz de tornar conteúdos históricos e culturais mais acessíveis, compreensíveis e envolventes para públicos diversos.',
    solution:
      'Desenvolvemos um protótipo de plataforma que adapta conteúdos turísticos para diferentes faixas etárias, disponibilizando informações em múltiplos formatos, como texto e áudio, para proporcionar uma experiência mais inclusiva e educativa durante as visitas.',
    features: [
      'Conteúdos adaptados para crianças, adolescentes e adultos',
      'Informações em texto e áudio',
      'Experiência de navegação intuitiva',
      'Apresentação de histórias e curiosidades sobre os destinos',
      'Protótipo de alta fidelidade',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI com foco em acessibilidade, Monique desenvolveu o sistema de personalização de roteiros, e Sonia implementou a plataforma web e APIs.',
    contributions: [
      'Comunicação adaptada para diferentes faixas etárias',
      'Experiência multimodal com texto e áudio',
      'Design centrado na acessibilidade da informação',
      'Interface intuitiva para diferentes perfis de usuários',
      'Protótipo de alta fidelidade desenvolvido em Figma',
    ],
    results:
      'O Infinitour conquistou o 2º lugar no Hackatour Cataratas 2022, destacando-se pela proposta de tornar a comunicação turística mais acessível por meio da adaptação de conteúdos para diferentes públicos e faixas etárias.',
    learnings:
      'O projeto demonstrou que acessibilidade também significa adaptar a comunicação e a forma como o conhecimento é apresentado. Desenvolver experiências inclusivas envolve considerar diferentes idades, níveis de compreensão e formas de consumir informação, tornando o turismo mais acolhedor para todos os visitantes.',
    award: '🥈 2º Lugar — Hackatour Cataratas (2022)',
    isAwarded: true,
    tags: ['Turismo', 'UX/UI', 'Acessibilidade', 'Figma', 'Educação'],
    technologies: ['Figma', 'UX/UI Design', 'Prototipação'],
    metric: '2º Lugar',
    category: 'Tourism • Accessibility • EdTech',
    iconName: 'Plane',
  },
  {
    id: 'ium',
    title: 'ium',
    description:
      'Aplicativo de acompanhamento desenvolvido para apoiar principalmente a população trans em sua jornada de afirmação de gênero, oferecendo uma experiência organizada, acolhedora e centrada no usuário. Projeto premiado na categoria UI/UX Design do Hacka Pride, com foco em inclusão, acessibilidade e criação de experiências digitais humanizadas.',
    longDescription:
      'Aplicativo de acompanhamento desenvolvido para apoiar principalmente a população trans em sua jornada de afirmação de gênero, oferecendo uma experiência organizada, acolhedora e centrada no usuário. Projeto premiado na categoria UI/UX Design do Hacka Pride, com foco em inclusão, acessibilidade e criação de experiências digitais humanizadas.',
    overview:
      'ium é um conceito de aplicativo desenvolvido durante o Hacka Pride 2023 para apoiar principalmente pessoas trans durante suas jornadas de afirmação de gênero. A solução foi pensada para oferecer uma experiência digital acolhedora, permitindo o acompanhamento organizado de informações relacionadas ao processo hormonal e aspectos individuais de cada usuário.',
    challenge:
      'Pessoas trans podem enfrentar desafios relacionados ao acesso à informação, organização do acompanhamento pessoal e construção de uma jornada de afirmação de gênero mais segura e consciente. Muitas vezes, informações importantes ficam dispersas, dificultando o acompanhamento individual.',
    solution:
      'Desenvolvemos uma proposta de aplicativo com foco em experiência do usuário, criando um ambiente digital inclusivo para organização e acompanhamento de informações pessoais relacionadas à jornada de afirmação de gênero. A solução busca unir tecnologia, empatia e design para criar uma experiência mais acolhedora e personalizada.',
    features: [
      'Acompanhamento de informações relacionadas ao processo hormonal',
      'Organização de registros pessoais',
      'Experiência personalizada para diferentes usuários',
      'Interface inclusiva e humanizada',
      'Design pensado para segurança e conforto do usuário',
    ],
    teamRole:
      'Beatriz liderou o design UI/UX e a pesquisa de usuários, Monique contribuiu com análise de dados e personas, e Sonia apoiou na prototipação técnica e validação.',
    contributions: [
      'Experiência digital criada com foco na população trans',
      'Design emocional e humanizado',
      'Interface inclusiva e acessível',
      'Pesquisa e compreensão das necessidades dos usuários',
      'Solução centrada em autonomia e organização pessoal',
    ],
    results:
      'O ium conquistou o 2º lugar na categoria UI/UX Design do Hacka Pride 2023, sendo reconhecido pela criação de uma experiência digital inclusiva, empática e centrada nas necessidades da comunidade trans.',
    learnings:
      'O desenvolvimento do ium reforçou a importância do design centrado nas pessoas, principalmente na criação de soluções para públicos historicamente pouco representados na tecnologia. O projeto demonstrou como UX pode ser uma ferramenta de inclusão, acolhimento e transformação social.',
    award: '🥈 2º Lugar — Hacka Pride (2023)',
    isAwarded: true,
    tags: ['UX', 'UI', 'Design', 'Saúde Digital', 'HealthTech', 'Inclusão', 'Design Social'],
    technologies: ['UX Design', 'UI Design', 'Prototipação', 'Design Centrado no Usuário'],
    metric: '2º Lugar',
    category: 'UX/UI Design',
    iconName: 'Palette',
  },
  {
    id: 'potencia-hack',
    title: 'Equipa Tech',
    description:
      'Plataforma de inclusão digital criada para ampliar o acesso à educação tecnológica por meio do empréstimo de equipamentos para estudantes em situação de vulnerabilidade.',
    longDescription:
      'Projeto premiado no Potência Hack 2023, desenvolvido para reduzir barreiras de acesso a computadores, dispositivos móveis e conectividade para pessoas em busca de qualificação.',
    overview:
      'Equipa Tech é uma proposta de plataforma de inclusão digital idealizada para ampliar o acesso à educação tecnológica por meio do empréstimo de equipamentos — como computadores e dispositivos móveis — para estudantes em situação de vulnerabilidade social. A solução foi concebida durante o Potência Hack 2023 com o objetivo de reduzir barreiras que impedem pessoas em busca de qualificação de participar plenamente do ecossistema digital e educacional.',
    challenge:
      'A exclusão digital permanece um obstáculo significativo para estudantes em situação de vulnerabilidade social. Muitas pessoas que buscam qualificação tecnológica e educacional não possuem computadores ou dispositivos móveis adequados, nem acesso estável à conectividade, o que limita suas oportunidades de aprendizado, desenvolvimento profissional e inserção no mercado de trabalho. O desafio consistia em idealizar uma solução que aproximasse equipamentos ociosos de quem deles necessita para estudar e se qualificar.',
    solution:
      'A solução idealizada consiste em uma plataforma conceitual de inclusão digital que conecta doadores, instituições parceiras e estudantes em situação de vulnerabilidade por meio de um sistema de empréstimo de equipamentos. A proposta prevê o cadastro de dispositivos disponíveis, a gestão de empréstimos e devoluções, e o acompanhamento do impacto social gerado pelo uso dos equipamentos em trajetórias educacionais e de qualificação.',
    features: [
      'Cadastro e gestão de equipamentos disponíveis para empréstimo',
      'Sistema de solicitação e devolução de dispositivos',
      'Matching entre estudantes e equipamentos compatíveis com suas necessidades',
      'Acompanhamento do impacto social e educacional gerado pelos empréstimos',
      'Painel de gestão para instituições e mediadores da iniciativa',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI e a estratégia de produto da plataforma, Monique contribuiu com a análise de dados e a estruturação do modelo de impacto social, e Sonia implementou o protótipo da plataforma web e a arquitetura técnica da proposta.',
    contributions: [
      'Design UX/UI e estratégia de produto centrada em inclusão digital',
      'Estruturação do modelo de empréstimo e gestão de equipamentos',
      'Análise de dados e mapeamento de impacto social',
      'Protótipo de plataforma web para conexão entre doadores e estudantes',
      'Proposta de jornada do usuário voltada à qualificação educacional',
    ],
    results:
      '2º lugar no Potência Hack (2023), reconhecido pela proposta de utilizar tecnologia como instrumento de inclusão digital e impacto social, ampliando o acesso à educação tecnológica para pessoas em situação de vulnerabilidade.',
    learnings:
      'A inclusão digital vai muito além do acesso à internet — ela exige que pessoas tenham dispositivos adequados para estudar, se qualificar e participar ativamente da sociedade. Projetos que conectam recursos ociosos a quem deles necessita demonstram como a tecnologia pode ser uma ferramenta poderosa de transformação social e educacional quando orientada por empatia e propósito.',
    award: '🥈 2º Lugar — Potência Hack (2023)',
    isAwarded: true,
    tags: ['UX', 'Produto', 'Impacto Social', 'Educação', 'Inclusão Digital'],
    metric: '2º Lugar',
    category: 'SocialTech • EdTech • Inclusão Digital • Impacto Social',
    iconName: 'Zap',
  },
  {
    id: 'viga',
    title: 'VIGA',
    description: 'Projeto voltado à comunicação inclusiva e fortalecimento da comunidade LGBTQIA+.',
    longDescription:
      'Plataforma de comunicação inclusiva voltada ao fortalecimento da comunidade LGBTQIA+, combinando estratégia de marketing social e ferramentas digitais.',
    overview:
      'VIGA é um projeto voltado à comunicação inclusiva e ao fortalecimento da comunidade LGBTQIA+ através de estratégias de marketing social, ferramentas digitais e conteúdo educativo que promovem visibilidade e representatividade.',
    challenge:
      'A comunicação sobre diversidade e inclusão frequentemente carece de representatividade autêntica e ferramentas práticas para fortalecer a comunidade LGBTQIA+.',
    solution:
      'Plataforma de comunicação inclusiva que combina estratégia de marketing social com ferramentas digitais para fortalecer a voz e a visibilidade da comunidade LGBTQIA+.',
    features: [
      'Guia de comunicação inclusiva',
      'Diretório de iniciativas LGBTQIA+',
      'Ferramentas de marketing social',
      'Feed de conteúdo educativo',
      'Sistema de denúncia de discursos de ódio',
    ],
    teamRole:
      'Beatriz liderou a estratégia de comunicação e design, Monique desenvolveu o sistema de análise de conteúdo, e Sonia implementou a plataforma web.',
    contributions: [
      'Estratégia de comunicação inclusiva',
      'Design e identidade visual',
      'Sistema de análise de conteúdo',
      'Plataforma web e ferramentas digitais',
      'Diretório de iniciativas LGBTQIA+',
    ],
    results:
      '3º lugar no Hacka Pride (2022), reconhecido por sua contribuição à comunicação inclusiva e ao fortalecimento da comunidade LGBTQIA+.',
    learnings:
      'Comunicação inclusiva vai além de palavras certas — exige ferramentas, estratégia e empatia para criar impacto real na comunidade.',
    award: '🥉 3º Lugar — Hacka Pride (2022)',
    isAwarded: true,
    tags: ['Inclusão', 'Marketing', 'Comunicação'],
    metric: '3º Lugar',
    category: 'Comunicação & Inclusão',
    iconName: 'Users',
  },
  {
    id: 'greenhat',
    title: 'GreenHat',
    description: 'Protótipo educacional para inclusão feminina no universo das criptomoedas',
    longDescription:
      'Protótipo de aplicativo educacional criado para incentivar mulheres a aprender sobre criptomoedas e desenvolver confiança antes de realizar seus primeiros investimentos. MVP desenvolvido durante o TechTogether Miami, focado em educação financeira, experiência do usuário e inclusão feminina no universo das criptomoedas.',
    overview:
      'GreenHat é um MVP de aplicativo educacional criado durante o TechTogether Miami, com o objetivo de incentivar mulheres a aprender sobre criptomoedas e desenvolver confiança antes de realizar seus primeiros investimentos. O protótipo foca em educação financeira, experiência do usuário e inclusão feminina no universo das criptomoedas, oferecendo uma jornada de aprendizagem acessível e intuitiva para iniciantes.',
    challenge:
      'Mulheres enfrentam barreiras culturais, educacionais e de confiança para entrar no universo das criptomoedas e dos investimentos. A falta de ferramentas educacionais acessíveis e de ambientes acolhedores dificulta o primeiro passo, perpetuando a exclusão financeira e limitando a participação feminina nesse mercado.',
    solution:
      'Um protótipo de aplicativo educacional que combina conteúdo introdutório sobre criptomoedas, uma jornada de aprendizagem estruturada para iniciantes e uma interface intuitiva projetada para a experiência da usuária. O MVP foi desenvolvido com foco em design de alta fidelidade, sem funcionalidades de investimento reais, atuando como uma ponte educacional entre a curiosidade e a confiança para agir.',
    features: [
      'Conteúdo introdutório sobre criptomoedas',
      'Jornada educacional para iniciantes',
      'Interface intuitiva para aprendizagem',
      'Protótipo mobile de alta fidelidade',
      'Fluxo de navegação focado na experiência da usuária',
    ],
    teamRole:
      'O protótipo foi desenvolvido em equipe durante o TechTogether Miami, com foco em pesquisa, design de produto e experiência do usuário.',
    contributions: [
      'UX/UI voltada para inclusão financeira',
      'Pesquisa sobre educação em investimentos',
      'Protótipo de alta fidelidade',
      'Design inspirado em plataformas de investimento',
      'Experiência simplificada para iniciantes',
    ],
    results:
      'Reconhecido como Most Courageous Hack #1 no TechTogether Miami, destacando-se pela coragem de abordar a inclusão financeira feminina no universo das criptomoedas através de um MVP educacional centrado na experiência do usuário.',
    learnings:
      'Educação financeira combinada com design centrado no usuário pode ser uma ferramenta poderosa para quebrar barreiras culturais e democratizar o acesso a investimentos. O desenvolvimento de um MVP focado em aprendizagem demonstrou que a confiança é o primeiro passo antes da ação.',
    award: 'Winner – Most Courageous Hack #1 • TechTogether Miami',
    isAwarded: true,
    tags: ['Figma', 'UX/UI', 'FinTech', 'Educação Financeira', 'Prototipação'],
    metric: 'Most Courageous Hack',
    category: 'FinTech • EdTech',
    iconName: 'TrendingUp',
    links: [
      {
        title: 'Devpost',
        icon: 'globe',
        url: 'https://devpost.com/software/greenhat?_gl=1*a7ff9p*_gcl_au*NzA1MTc5MTM1LjE3ODUyOTM1ODE.*_ga*OTM2NTI3MDI2LjE3ODUyOTM1ODE.*_ga_0YHJK3Y10M*czE3ODUyOTM1ODEkbzEkZzEkdDE3ODUyOTM2NTkkajU2JGwwJGgw',
      },
    ],
  },
  {
    id: 'connectgreen',
    title: 'ConnectGreen',
    description:
      'Plataforma para conectar empresas interessadas em investimentos em Hidrogênio Verde.',
    longDescription:
      'Plataforma premiada no iHack2Green que conecta empresas e investidores interessados em Hidrogênio Verde, facilitando a transição energética.',
    overview:
      'ConnectGreen é uma plataforma que conecta empresas, investidores e fornecedores de Hidrogênio Verde, facilitando negócios, fornecendo métricas de sustentabilidade e acelerando a transição para fontes de energia limpa.',
    challenge:
      'A falta de uma plataforma centralizada que conecte empresas interessadas em Hidrogênio Verde dificulta investimentos e a transição para fontes de energia limpa.',
    solution:
      'Plataforma que conecta empresas, investidores e fornecedores de Hidrogênio Verde, facilitando negócios e acelerando a transição energética.',
    features: [
      'Marketplace de projetos de Hidrogênio Verde',
      'Sistema de matching entre empresas e fornecedores',
      'Dashboard de métricas de sustentabilidade',
      'Relatórios de impacto ambiental',
      'Portal educativo sobre energia limpa',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI e a estratégia, Monique desenvolveu o sistema de matching e análise de dados, e Sonia implementou a plataforma web e APIs.',
    contributions: [
      'Design UX/UI e estratégia',
      'Sistema de matching entre empresas e fornecedores',
      'Análise de dados de sustentabilidade',
      'Plataforma web e APIs',
      'Portal educativo sobre energia limpa',
    ],
    results:
      'Top 10 no iHack2Green (2022), destacando-se por conectar tecnologia e sustentabilidade na transição energética.',
    learnings:
      'Plataformas de conexão podem acelerar a transição para energias limpas quando combinam dados, transparência e facilitação de negócios.',
    award: 'Top 10 — iHack2Green (2022)',
    isAwarded: true,
    tags: ['GreenTech', 'Energia', 'Sustentabilidade'],
    metric: 'Top 10',
    category: 'GreenTech',
    iconName: 'Leaf',
  },
  {
    id: 'pegabot-extension',
    title: 'Pegabot Extension',
    description:
      'Extensão para navegador capaz de identificar automaticamente a probabilidade de perfis serem bots durante a navegação.',
    longDescription:
      'Extensão de navegador premiada no Hackathon Pegabot que identifica automaticamente a probabilidade de perfis serem bots em redes sociais.',
    overview:
      'Pegabot Extension é uma extensão para navegador que analisa perfis em redes sociais e indica a probabilidade de serem bots, usando heurísticas e análise de comportamento para combater desinformação em tempo real durante a navegação.',
    challenge:
      'A proliferação de bots em redes sociais espalha desinformação e manipula opiniões públicas, sem ferramentas acessíveis para identificação em tempo real.',
    solution:
      'Extensão de navegador que analisa perfis em redes sociais e indica a probabilidade de serem bots, usando heurísticas e análise de comportamento.',
    features: [
      'Análise em tempo real de perfis',
      'Indicador de probabilidade de bot',
      'Detecção de padrões de comportamento suspeitos',
      'Histórico de análises',
      'Alertas de desinformação',
    ],
    teamRole:
      'Beatriz conduziu o design da extensão e UX, Monique desenvolveu o modelo de detecção e heurísticas, e Sonia implementou a extensão de navegador e integrações.',
    contributions: [
      'Design da extensão e UX',
      'Modelo de detecção e heurísticas',
      'Análise de padrões de comportamento suspeitos',
      'Implementação de extensão de navegador',
      'Sistema de alertas de desinformação',
    ],
    results:
      'Menção Honrosa no Hackathon Pegabot (2022), reconhecido por combater desinformação com tecnologia acessível.',
    learnings:
      'Ferramentas de detecção de bots precisam equilibrar precisão técnica com usabilidade para ter impacto real no combate à desinformação.',
    award: '🎖 Menção Honrosa — Hackathon Pegabot (2022)',
    isAwarded: true,
    tags: ['Segurança', 'IA', 'Extensão'],
    metric: 'Menção Honrosa',
    category: 'Segurança & IA',
    iconName: 'Bot',
  },
  {
    id: 'dionisa',
    title: 'Dionisa',
    description: 'Aplicativo voltado ao bem-estar e à saúde sexual da mulher acima de 60 anos.',
    longDescription:
      'Aplicativo premiado na Hackatona ADE Sampa voltado ao bem-estar e saúde sexual da mulher acima de 60 anos, quebrando tabus através de tecnologia.',
    overview:
      'Dionisa é um aplicativo voltado ao bem-estar e à saúde sexual da mulher acima de 60 anos, abordando tabus e promovendo autonomia através de informação acessível, comunidade de suporte e interface adaptada para a terceira idade.',
    challenge:
      'A saúde sexual da mulher acima de 60 anos é cercada de tabus e negligenciada por aplicativos de saúde, criando uma lacuna de informação e suporte.',
    solution:
      'Aplicativo mobile que oferece informação acessível sobre saúde sexual, bem-estar e comunidade para mulheres acima de 60 anos, quebrando tabus e promovendo autonomia.',
    features: [
      'Conteúdo educativo sobre saúde sexual',
      'Fórum comunitário moderado',
      'Lembretes de autocuidado',
      'Acesso a profissionais de saúde',
      'Interface acessível para terceira idade',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI com foco em acessibilidade, Monique desenvolveu o sistema de conteúdo e recomendações, e Sonia implementou o aplicativo mobile.',
    contributions: [
      'Design UX/UI com foco em acessibilidade',
      'Sistema de conteúdo e recomendações',
      'Conteúdo educativo sobre saúde',
      'Desenvolvimento de aplicativo mobile',
      'Interface adaptada para terceira idade',
    ],
    results:
      'Top 15 na Hackatona ADE Sampa (2022), reconhecido por abordar um tema negligenciado com empatia e tecnologia.',
    learnings:
      'Tecnologia para a terceira idade exige acessibilidade, empatia e coragem para abordar temas tabu — o impacto social compensa o desafio.',
    award: 'Top 15 — Hackatona ADE Sampa (2022)',
    isAwarded: true,
    tags: ['HealthTech', 'UX', 'Mobile'],
    metric: 'Top 15',
    category: 'HealthTech',
    iconName: 'HeartPulse',
  },
  {
    id: 'os-greens',
    title: '🎮 Os Greens e o Resgate do Sábado Animado',
    description:
      'Jogo desenvolvido durante a GameJamPlus 24/25 onde o jogador assume o controle de Lilo, um corajoso Green em uma missão para resgatar seus amigos e restaurar a magia do Sábado Animado.',
    longDescription:
      'Os Greens e o Resgate do Sábado Animado é um jogo desenvolvido durante a GameJamPlus 24/25. O jogador assume o controle de Lilo, um corajoso Green em uma missão para resgatar seus amigos, criaturas mágicas responsáveis por manter o Sábado Animado no ar. Durante a aventura, o jogador explora uma ilha cheia de desafios, enfrenta jacarés perigosos, supera armadilhas e desbloqueia novas fases ao resgatar cada Green. O objetivo é restaurar a magia do Sábado Animado e devolver a alegria das manhãs de sábado para todas as crianças.',
    overview:
      'Os Greens e o Resgate do Sábado Animado é um jogo de aventura desenvolvido durante a GameJamPlus 24/25. O jogador controla Lilo, um Green corajoso que precisa explorar uma ilha cheia de desafios, enfrentar jacarés perigosos, superar armadilhas e resgatar seus amigos — criaturas mágicas que mantêm o Sábado Animado no ar — para restaurar a magia e devolver a alegria das manhãs de sábado para todas as crianças.',
    challenge:
      'Criar um jogo completo, com narrativa envolvente, mecânicas de gameplay divertidas e design de fases desafiador, dentro do tempo limitado de uma game jam, garantindo uma experiência lúdica e imersiva para o público infantojuvenil.',
    solution:
      'Desenvolvemos um jogo de aventura em que o jogador controla Lilo em uma ilha repleta de desafios. A cada Green resgatado, novas fases são desbloqueadas, criando uma jornada progressiva de exploração, combate e superação de armadilhas, com o objetivo final de restaurar a magia do Sábado Animado.',
    features: [
      'Desenvolvimento de jogo para GameJamPlus 24/25',
      'Criação de narrativa e experiência interativa',
      'Desenvolvimento de mecânicas de gameplay',
      'Design de fases e desafios',
      'Construção de uma experiência lúdica e imersiva',
    ],
    teamRole:
      'A equipe 3 Dev.as DemAIs atuou no desenvolvimento do jogo durante a GameJamPlus 24/25, com Beatriz liderando o design de produto e narrativa, Monique contribuindo com a lógica de gameplay, e Sonia implementando mecânicas e integrações técnicas.',
    contributions: [
      'Desenvolvimento de jogo para GameJamPlus 24/25',
      'Criação de narrativa e experiência interativa',
      'Desenvolvimento de mecânicas de gameplay',
      'Design de fases e desafios',
      'Construção de uma experiência lúdica e imersiva',
    ],
    results:
      'Semifinalista Continental Brasil na categoria SBT da GameJamPlus 24/25, reconhecido pela criatividade, narrativa envolvente e experiência lúdica construída durante a competição.',
    learnings:
      'O desenvolvimento de jogos em game jams exige equilíbrio entre criatividade, escopo viável e execução técnica. A experiência demonstrou como narrativa, design de fases e mecânicas de gameplay podem se unir para criar uma experiência memorável em tempo recorde.',
    award: 'Top 3 — GameJamPlus 24/25',
    isAwarded: true,
    tags: ['Game Development', 'GameJamPlus', 'Jogos', 'Game Design', 'Narrativa Interativa'],
    technologies: ['Game Development', 'Game Design', 'Prototipação', 'Narrativa Interativa'],
    metric: 'Semifinalista',
    category: 'Game Development / GameJamPlus 24/25',
    iconName: 'Gamepad2',
    links: [
      {
        title: '🎮 Jogue o jogo',
        icon: 'globe',
        url: 'https://soubeatrizkaroline.itch.io/greens',
      },
      { title: '🎤 Pitch', icon: 'youtube', url: 'https://www.youtube.com/watch?v=a_whtO1U2s4' },
      {
        title: '▶️ Demonstração',
        icon: 'youtube',
        url: 'https://www.youtube.com/watch?v=wLFgBpOJBKA',
      },
    ],
  },
  {
    id: 'siscar',
    title: 'SisCAR+',
    description:
      'Assistente inteligente que desmistifica a legislação do Cadastro Ambiental Rural (CAR) com suporte via WhatsApp e Web.',
    longDescription:
      'Plataforma GovTech com agente de IA conversacional para traduzir termos jurídicos e técnicos complexos sobre regulamentação ambiental.',
    overview:
      'SisCAR+ é uma plataforma GovTech com agente de IA conversacional que desmistifica a legislação do Cadastro Ambiental Rural (CAR), traduzindo termos jurídicos e técnicos em orientação simples e acessível via WhatsApp e Web.',
    challenge:
      'A legislação do Cadastro Ambiental Rural (CAR) é complexa e técnica, dificultando o acesso de pequenos produtores rurais a informações essenciais sobre regulamentação ambiental.',
    solution:
      'Plataforma GovTech com agente de IA conversacional que traduz termos jurídicos e técnicos complexos em orientação simples e acessível via WhatsApp e Web.',
    features: [
      'Agente de IA conversacional via WhatsApp',
      'Tradução de termos jurídicos e técnicos',
      'Consultas sobre legislação ambiental',
      'Orientações passo a passo para CAR',
      'Interface web acessível',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI e a estratégia de produto, Monique desenvolveu o agente de IA e processamento de linguagem natural, e Sonia implementou a plataforma web e integração com WhatsApp.',
    contributions: [
      'Design UX/UI e estratégia de produto',
      'Agente de IA conversacional e PLN',
      'Tradução de termos jurídicos e técnicos',
      'Plataforma web e integração com WhatsApp',
      'Orientações passo a passo para CAR',
    ],
    results:
      'Atendimento 24/7 a produtores rurais, democratizando o acesso à informação ambiental e reduzindo barreiras burocráticas.',
    learnings:
      'Tecnologia conversacional pode ser uma ponte poderosa entre complexidade regulatória e cidadãos, especialmente em contextos rurais.',
    isAwarded: false,
    tags: ['IA Conversacional', 'GovTech', 'PLN', 'WhatsApp API', 'Sustentabilidade'],
    metric: 'Atendimento 24/7',
    category: 'GovTech & IA',
    iconName: 'ShieldCheck',
  },
  {
    id: 'earth-connections',
    title: 'Earth Connections',
    description:
      'Plataforma educacional interativa inspirada em dados e conteúdos científicos da NASA para tornar as mudanças climáticas mais acessíveis ao público jovem.',
    longDescription:
      'MVP desenvolvido durante o NASA Space Apps Challenge 2024 que utiliza experiências interativas, simulações e recursos educativos para explicar como diferentes sistemas da Terra estão conectados.',
    overview:
      'Earth Connections é uma plataforma educacional interativa inspirada em dados e conteúdos científicos da NASA, desenvolvida para tornar as mudanças climáticas mais acessíveis ao público jovem. O MVP utiliza experiências interativas, simulações e recursos educativos para explicar como diferentes sistemas da Terra estão conectados.',
    challenge:
      'Dados climáticos e científicos da NASA são ricos em informação, mas difíceis de interpretar para crianças e adolescentes. A falta de ferramentas educacionais engajadoras dificulta a conscientização sobre mudanças climáticas entre o público jovem.',
    solution:
      'Plataforma educacional interativa que utiliza experiências interativas, simulações e recursos educativos para explicar como diferentes sistemas da Terra estão conectados, tornando as mudanças climáticas mais acessíveis e compreensíveis para crianças e adolescentes.',
    features: [
      'Exploração interativa dos sistemas da Terra',
      'Conteúdo sobre incêndios florestais, desmatamento e degelo polar',
      'Simulador do impacto do CO₂ na temperatura global',
      'Quiz educativo',
      'Interface desenvolvida para crianças e adolescentes',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI e as visualizações, Monique desenvolveu o processamento de conteúdo educativo, e Sonia implementou a aplicação web em React e Vite.',
    contributions: [
      'Experiência educacional baseada em interatividade',
      'UX/UI desenvolvida para o público infantojuvenil',
      'Protótipo navegável de alta fidelidade',
      'Comunicação científica simplificada',
      'Arquitetura preparada para futura integração com dados da NASA',
    ],
    results:
      'Reconhecida como Global Nominee no NASA Space Apps Challenge 2024 e finalista regional em Barueri/SP, destacando-se por tornar conteúdos científicos complexos acessíveis ao público jovem.',
    learnings:
      'A comunicação científica pode ser transformada em experiências educacionais engajadoras quando combinada com design centrado no público infantojuvenil e interatividade. A arquitetura preparada para futura integração com dados da NASA mostra o caminho para a evolução do MVP.',
    awards: ['Global Nominee – NASA Space Apps Challenge 2024 — Finalista Regional Barueri/SP'],
    isAwarded: true,
    tags: ['NASA Science', 'React', 'Vite', 'Figma', 'Educação Ambiental'],
    technologies: [
      'React.js',
      'Vite',
      'Figma',
      'GitHub',
      'NASA Science',
      'NASA Earth Observatory',
      'NASA My NASA Data',
    ],
    metric: 'Global Nominee',
    category: 'ClimateTech • EdTech',
    iconName: 'Globe',
    links: [
      {
        title: 'Página NASA Space Apps',
        icon: 'globe',
        url: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/space6/?tab=project',
      },
      {
        title: 'Demonstração',
        icon: 'video',
        url: 'https://www.youtube.com/watch?v=qtBHqOawj3A&feature=youtu.be',
      },
      {
        title: 'Protótipo (Figma)',
        icon: 'figma',
        url: 'https://www.figma.com/proto/O0tmEgdtLDcPDi3cEEtTin/NASA-SPACE-APPS?node-id=155-107412&starting-point-node-id=155%3A111432',
      },
    ],
  },
  {
    id: 'saude-express',
    title: 'Saúde Express',
    description:
      'API e chatbot para triagem primária inteligente e otimização de filas no atendimento público e privado de saúde.',
    longDescription:
      'Sistema de pré-atendimento com recomendação clínica automatizada baseada em algoritmos de decisão rápida.',
    overview:
      'Saúde Express é um sistema de pré-atendimento com triagem primária inteligente e recomendação clínica automatizada baseada em algoritmos de decisão rápida, otimizando filas e agilizando o encaminhamento de pacientes no atendimento público e privado de saúde.',
    challenge:
      'O tempo de espera em atendimentos de saúde pública e privada é uma barreira significativa, impactando diretamente a qualidade do atendimento ao paciente.',
    solution:
      'Sistema de pré-atendimento com recomendação clínica automatizada baseada em algoritmos de decisão rápida, agilizando o encaminhamento de pacientes aos centros adequados.',
    features: [
      'Triagem inteligente automatizada',
      'Recomendação clínica baseada em algoritmos',
      'Otimização de filas de atendimento',
      'Encaminhamento para centros adequados',
      'Dashboard de gestão de fluxo',
    ],
    teamRole:
      'Beatriz liderou o design UX/UI e a jornada do paciente, Monique desenvolveu os algoritmos de triagem e análise clínica, e Sonia implementou a API e o sistema backend.',
    contributions: [
      'Design UX/UI e jornada do paciente',
      'Algoritmos de triagem e análise clínica',
      'API e sistema backend',
      'Dashboard de gestão de fluxo',
      'Otimização de filas de atendimento',
    ],
    results:
      'Redução de 35% no tempo de espera, com triagem primária inteligente otimizando o fluxo de pacientes.',
    learnings:
      'Automação inteligente em saúde pode aliviar pressão sobre sistemas sobrecarregados sem comprometer a qualidade do cuidado.',
    isAwarded: false,
    tags: ['HealthTech', 'APIs REST', 'Triagem Inteligente', 'FastAPI'],
    metric: 'Redução de 35% no tempo de espera',
    category: 'HealthTech',
    iconName: 'Activity',
    links: [{ title: 'GitHub', icon: 'github', url: 'https://github.com/Jhaysavi/Saude-Express' }],
  },
  {
    id: 'lazurus',
    title: 'Lazurus',
    description:
      'Plataforma educacional com Inteligência Artificial e Ciência Cidadã para democratizar a identificação de exoplanetas utilizando dados oficiais da NASA.',
    longDescription:
      'O Lazurus transforma um processo científico complexo em uma experiência acessível e interativa. A plataforma utiliza um modelo de IA baseado em LightGBM para pré-classificar candidatos a exoplanetas a partir de dados públicos da NASA e permite que qualquer pessoa participe da análise das curvas de luz, contribuindo com feedback em uma abordagem de Ciência Cidadã. A solução combina Inteligência Artificial, gamificação e visualização de dados astronômicos para tornar a exploração espacial mais acessível, incentivando educação científica e participação colaborativa na pesquisa de exoplanetas.',
    overview:
      'Lazurus é uma plataforma educacional e colaborativa que utiliza Inteligência Artificial para filtrar candidatos a exoplanetas e permite que qualquer pessoa participe da análise das curvas de luz através de uma interface intuitiva, unindo IA, gamificação, visualização científica e Ciência Cidadã.',
    challenge:
      'A descoberta de exoplanetas normalmente exige conhecimento técnico avançado e análise manual de grandes volumes de dados astronômicos, tornando a participação limitada a pesquisadores especializados. Mesmo com milhares de observações produzidas pelas missões espaciais da NASA, grande parte desse processo ainda é complexa para o público geral.',
    solution:
      'Criamos uma plataforma educacional e colaborativa que utiliza Inteligência Artificial para filtrar candidatos a exoplanetas e permite que qualquer pessoa participe da análise das curvas de luz através de uma interface intuitiva. A proposta une IA, gamificação, visualização científica e Ciência Cidadã para ampliar a participação da sociedade na exploração espacial.',
    features: [
      'IA baseada em LightGBM para pré-classificação de exoplanetas',
      'Análise colaborativa de curvas de luz',
      'Gamificação e educação científica',
      'Visualização interativa de dados astronômicos da NASA',
      'Arquitetura escalável com Docker',
    ],
    teamRole:
      'A equipe 3 Dev.as DemAIs atuou em todas as frentes do projeto: design de produto, desenvolvimento frontend e backend, modelagem de IA e integração com APIs da NASA.',
    contributions: [
      'Inteligência Artificial para identificação de exoplanetas',
      'Ciência Cidadã',
      'Interface acessível',
      'Visualização interativa de curvas de luz',
      'Gamificação',
      'Educação científica',
      'Dados oficiais da NASA',
      'Arquitetura escalável',
    ],
    results:
      'Reconhecida como Global Nominee no NASA Space Apps Challenge 2025, democratizando o acesso à pesquisa de exoplanetas através de IA e Ciência Cidadã.',
    learnings:
      'A combinação de Inteligência Artificial e participação humana pode transformar processos científicos complexos em experiências acessíveis, ampliando significativamente a participação da sociedade na pesquisa científica.',
    award: 'Global Nominee — NASA Space Apps Challenge 2025',
    isAwarded: true,
    tags: [
      'IA',
      'Machine Learning',
      'Python',
      'Flask',
      'React',
      'Next.js',
      'LightGBM',
      'NASA APIs',
      'Tailwind',
      'Docker',
    ],
    technologies: [
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
    ],
    metric: 'Global Nominee',
    category: 'SpaceTech • AI • Citizen Science',
    iconName: 'Orbit',
    casePageRoute: '/projetos/lazurus',
    links: [
      {
        title: 'Página NASA Space Apps',
        icon: 'globe',
        url: 'https://www.spaceappschallenge.org/2025/find-a-team/lazaro/?tab=project',
      },
      { title: 'Demonstração', icon: 'video', url: 'https://www.youtube.com/watch?v=7KDECxJHwcE' },
      { title: 'Site', icon: 'globe', url: 'https://lazurus.vercel.app/' },
    ],
  },
  {
    id: 'raizesgo',
    title: 'RaízesGo',
    description:
      'Plataforma digital que conecta produtores rurais, compradores institucionais e logística para fortalecer cadeias produtivas e ampliar as compras públicas no Centro-Oeste.',
    longDescription:
      'RaízesGo é uma plataforma digital que conecta produtores rurais, compradores institucionais e logística para fortalecer cadeias produtivas e ampliar as compras públicas no Centro-Oeste. Desenvolvida durante o Hackathon Impulso Regional, a solução conquistou o 1º lugar no Desafio 2 – Rotas de Integração – Centro-Oeste, unindo tecnologia, pesquisa de campo e inovação para transformar a economia regional.',
    overview:
      'RaízesGo é uma plataforma digital que conecta produtores rurais, compradores institucionais e logística em um ecossistema integrado. A solução combina marketplace rural, chatbot inteligente no WhatsApp, logística otimizada, pagamentos seguros e painéis analíticos para fortalecer cadeias produtivas e ampliar as compras públicas no Centro-Oeste.',
    challenge:
      'Produtores rurais do Centro-Oeste enfrentam desafios como dependência de distribuidores, dificuldade de contato direto com compradores, problemas logísticos, oscilação de preços, falta de rastreabilidade, pouca transparência nas negociações e limitação de acesso a programas de compra pública.',
    solution:
      'RaízesGo é uma plataforma digital que conecta produtores rurais, compradores institucionais e logística em um ecossistema integrado. A solução combina marketplace rural, chatbot inteligente no WhatsApp, logística otimizada, pagamentos seguros e painéis analíticos para fortalecer cadeias produtivas e ampliar as compras públicas no Centro-Oeste.',
    features: [
      'Marketplace Rural para conexão direta entre produtores e compradores',
      'Chatbot ManGo no WhatsApp para atendimento e suporte automatizado',
      'Logística Inteligente com otimização de rotas e entregas',
      'Sistema de Pagamentos seguro e integrado',
      'Gestão de Pedidos centralizada e intuitiva',
      'Geolocalização para mapeamento de produtores e compradores',
      'Painéis Analíticos com métricas e indicadores em tempo real',
      'Módulo de Compras Públicas para acesso a programas institucionais',
    ],
    teamRole:
      'O RaízesGo foi idealizado por um time 100% feminino durante o Hackathon Impulso Regional, conquistando o 1º lugar no Desafio 2 – Rotas de Integração – Centro-Oeste. Posteriormente, o projeto evoluiu com novos integrantes para continuidade do desenvolvimento e participação em edital de inovação.',
    contributions: [
      'Pesquisa de campo em três estados do Centro-Oeste',
      'Entrevistas com restaurantes, mercados, compradores institucionais e produtores rurais',
      'Marketplace rural para comercialização direta',
      'Chatbot inteligente para automação de atendimento',
      'Logística integrada com otimização de rotas',
      'Módulo de compras públicas para acesso institucional',
      'Painéis analíticos para tomada de decisão',
      'Plataforma escalável com arquitetura preparada para expansão nacional',
    ],
    results:
      '🏆 1º Lugar — Impulso Regional • Rotas de Integração – Centro-Oeste (2024). O RaízesGo foi reconhecido como a melhor solução do desafio, destacando-se pela pesquisa de campo, inovação tecnológica e impacto potencial no fortalecimento da economia regional.',
    learnings:
      'A combinação de pesquisa de campo profunda com tecnologia acessível pode transformar cadeias produtivas inteiras. O contato direto com produtores, compradores e instituições revelou que a tecnologia deve ser simples, acessível e adaptada à realidade local para gerar adoção e impacto real.',
    award: '🥇 1º Lugar — Impulso Regional • Rotas de Integração – Centro-Oeste (2024)',
    isAwarded: true,
    tags: [
      'React',
      'TypeScript',
      'Python',
      'PostgreSQL',
      'Docker',
      'Chatbot',
      'WhatsApp',
      'UX/UI',
      'Figma',
      'GovTech',
      'AgroTech',
    ],
    technologies: [
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
    ],
    metric: '1º Lugar',
    category: 'GovTech • AgroTech • Marketplace',
    iconName: 'Trees',
    casePageRoute: '/projetos/raizesgo',
    links: [{ title: 'Demonstração', icon: 'video', url: 'https://youtu.be/F920sSaajuY' }],
  },
  {
    id: 'frutos-do-cerrado',
    title: 'Frutos do Cerrado',
    description:
      'Plataforma digital para fortalecer comunidades quilombolas por meio da valorização do Cerrado, sustentabilidade, comercialização e acesso à informação.',
    longDescription:
      'Projeto vencedor do Hackathon Desafio Governo de Goiás, desenvolvido para promover a gestão sustentável dos recursos naturais, fortalecer comunidades quilombolas e ampliar o acesso ao mercado por meio de uma plataforma digital integrada. A solução reúne marketplace comunitário, calendário de safras, mapa interativo, alertas climáticos e conteúdos educativos, incentivando o desenvolvimento sustentável, a preservação do bioma Cerrado e a valorização dos conhecimentos tradicionais.',
    overview:
      'Frutos do Cerrado é uma plataforma digital que conecta comunidades quilombolas, consumidores, pesquisadores e apoiadores do Cerrado em um único ecossistema. A solução facilita a comercialização de produtos locais, promove educação ambiental, disponibiliza informações sobre safras, oferece alertas climáticos e incentiva práticas sustentáveis, fortalecendo a economia local e preservando os saberes tradicionais.',
    challenge:
      'Desenvolver uma solução tecnológica capaz de fortalecer comunidades quilombolas por meio da valorização da cultura local, preservação ambiental e ampliação das oportunidades de comercialização, utilizando ferramentas digitais acessíveis e sustentáveis.',
    solution:
      'O Frutos do Cerrado é uma plataforma digital criada para conectar comunidades quilombolas, consumidores, pesquisadores e apoiadores do Cerrado em um único ecossistema. A solução facilita a comercialização de produtos locais, promove educação ambiental, disponibiliza informações sobre safras, oferece alertas climáticos e incentiva práticas sustentáveis, fortalecendo a economia local e preservando os saberes tradicionais.',
    features: [
      'Calendário de Safras',
      'Mapa Interativo',
      'Marketplace Comunitário',
      'Alertas Climáticos',
      'Educação Ambiental',
      'Cultura Quilombola',
      'Produtores Locais',
      'Informações sobre o Cerrado',
    ],
    teamRole:
      'A equipe 3 Dev.as DemAIs atuou em todas as frentes do projeto: design de produto, pesquisa, desenvolvimento frontend e integração de conteúdos educativos.',
    contributions: [
      'Plataforma digital para fortalecer comunidades quilombolas',
      'Marketplace comunitário para comercialização de produtos locais',
      'Calendário de safras e mapa interativo',
      'Alertas climáticos e educação ambiental',
      'Valorização dos conhecimentos tradicionais',
    ],
    results:
      'Projeto vencedor desenvolvido para fortalecer comunidades quilombolas, promover o uso sustentável dos recursos naturais, preservar o Cerrado e ampliar oportunidades de comercialização por meio de uma plataforma digital integrada.',
    learnings:
      'A tecnologia pode ser uma ferramenta poderosa para fortalecer comunidades tradicionais, preservar biomas e conectar produtores a novas oportunidades de mercado quando aliada à valorização cultural e ao desenvolvimento sustentável.',
    award: '🥇 1º Lugar — Hackathon Desafio Governo de Goiás (2024)',
    isAwarded: true,
    tags: [
      'React',
      'Vite',
      'CSS3',
      'React Router',
      'UX/UI',
      'Marketplace',
      'Sustentabilidade',
      'Cartografia',
      'Web Platform',
    ],
    technologies: ['React', 'React Router', 'Vite', 'CSS3', 'UX/UI', 'Figma'],
    metric: '1º Lugar',
    category: 'SocialTech • Sustentabilidade • Cultura',
    iconName: 'TreePalm',
    casePageRoute: '/projetos/frutos-do-cerrado',
    links: [
      { title: 'GitHub', icon: 'github', url: 'https://github.com/Jhaysavi/frutos-do-cerrado' },
    ],
  },
]

PROJECTS.forEach((p) => {
  if (!p.casePageRoute && !p.externalUrl) p.casePageRoute = `/projetos/${p.id}`
})

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
