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
    role: 'Produto • UX • Estratégia • Tecnologia',
    state: 'Pernambuco',
    city: 'Jaboatão dos Guararapes • PE',
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
    city: 'Duque de Caxias • RJ',
    bio: 'Atua no desenvolvimento de soluções baseadas em Inteligência Artificial, Ciência de Dados e Machine Learning, utilizando dados e modelos inteligentes para transformar desafios reais em soluções tecnológicas.',
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
    technologies: ['Python', 'Análise de Dados', 'Agentes de IA', 'Machine Learning'],
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
    award: '🏆 1º Lugar – Hack Frost NL 2.0',
    isAwarded: true,
    tags: ['Figma', 'UX/UI', 'Sustentabilidade', 'Gamificação', 'Educação Ambiental'],
    metric: '1º Lugar',
    category: 'GreenTech • Sustainability',
    iconName: 'Recycle',
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
    award: 'Desenvolvido durante o Hackathon GiraLab, iniciativa do Intermuseus.',
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
    award: '🥈 2º Lugar – Hackatour Cataratas (2022)',
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
      'Projeto premiado na categoria UI/UX Design por oferecer uma experiência centrada no usuário e soluções inclusivas.',
    longDescription:
      'Solução de UI/UX Design premiada no Hacka Pride, focada em criar experiências inclusivas e centradas no usuário com design emocional e acessibilidade.',
    overview:
      'ium é um projeto premiado na categoria UI/UX Design que oferece uma experiência centrada no usuário e soluções inclusivas, com foco em design emocional, acessibilidade e jornadas acolhedoras para todos os públicos.',
    challenge:
      'Aplicativos e plataformas frequentemente negligenciam a experiência de usuários de grupos diversos, resultando em interfaces excludentes e pouco intuitivas.',
    solution:
      'Solução de UI/UX Design centrada no usuário, com foco em inclusão, design emocional e acessibilidade, oferecendo uma experiência fluida e acolhedora para todos os públicos.',
    features: [
      'Design system inclusivo e acessível',
      'Pesquisa UX com grupos diversos',
      'Protótipos de alta fidelidade',
      'Testes de usabilidade com usuários reais',
      'Componentes reutilizáveis e documentados',
    ],
    teamRole:
      'Beatriz liderou o design UI/UX e a pesquisa de usuários, Monique contribuiu com análise de dados e personas, e Sonia apoiou na prototipação técnica e validação.',
    contributions: [
      'Design UI/UX e pesquisa de usuários',
      'Design system inclusivo e acessível',
      'Protótipos de alta fidelidade',
      'Análise de dados e personas',
      'Testes de usabilidade com usuários reais',
    ],
    results:
      '2º lugar no Hacka Pride (2023) na categoria UI/UX Design, reconhecido pela excelência em design inclusivo.',
    learnings:
      'Design centrado no usuário não é apenas sobre estética — é sobre criar experiências que acolhem e empoderam todos os públicos.',
    award: '🥈 2º Lugar — Hacka Pride (2023)',
    isAwarded: true,
    tags: ['UX', 'UI', 'Design', 'Inclusão'],
    metric: '2º Lugar',
    category: 'UX/UI Design',
    iconName: 'Palette',
  },
  {
    id: 'potencia-hack',
    title: 'Potência Hack',
    description:
      'Reconhecimento na categoria UI/UX Design pelo desenvolvimento de uma solução focada em acessibilidade, experiência do usuário e impacto social.',
    longDescription:
      'Solução focada em acessibilidade e UX reconhecida no Potência Hack, combinando design de qualidade e impacto social.',
    overview:
      'Potência Hack é uma solução digital reconhecida na categoria UI/UX Design pelo desenvolvimento de uma interface focada em acessibilidade, experiência do usuário e impacto social, demonstrando que design inclusivo gera resultados reais.',
    challenge:
      'Problemas sociais complexos exigem soluções digitais que sejam acessíveis, intuitivas e capazes de gerar impacto real na vida das pessoas.',
    solution:
      'Solução digital com foco em acessibilidade e UX, desenvolvida para maximizar o impacto social através de uma experiência de usuário excepcional.',
    features: [
      'Interface acessível seguindo WCAG',
      'Jornada do usuário otimizada',
      'Design responsivo mobile-first',
      'Componentes de alta usabilidade',
      'Foco em inclusão digital',
    ],
    teamRole:
      'Beatriz liderou o design UI/UX e a estratégia de produto, Monique contribuiu com análise de dados e validação, e Sonia implementou o frontend acessível.',
    contributions: [
      'Design UI/UX e estratégia de produto',
      'Interface acessível seguindo WCAG',
      'Análise de dados e validação',
      'Frontend responsivo mobile-first',
      'Foco em inclusão digital',
    ],
    results:
      '2º lugar no Potência Hack (2023) na categoria UI/UX Design, destacando-se pela acessibilidade e impacto social.',
    learnings:
      'Acessibilidade e boa experiência de usuário não são diferenciais — são requisitos fundamentais para qualquer solução de impacto social.',
    award: '🥈 2º Lugar — Potência Hack (2023)',
    isAwarded: true,
    tags: ['UX', 'Produto', 'Design', 'Acessibilidade'],
    metric: '2º Lugar',
    category: 'UX/UI Design',
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
    award: '🏆 Winner – Most Courageous Hack #1 • TechTogether Miami',
    isAwarded: true,
    tags: ['Figma', 'UX/UI', 'FinTech', 'Educação Financeira', 'Prototipação'],
    metric: 'Most Courageous Hack',
    category: 'FinTech • EdTech',
    iconName: 'TrendingUp',
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
    award: '🎖 Top 10 — iHack2Green (2022)',
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
    award: '🎖 Top 15 — Hackatona ADE Sampa (2022)',
    isAwarded: true,
    tags: ['HealthTech', 'UX', 'Mobile'],
    metric: 'Top 15',
    category: 'HealthTech',
    iconName: 'HeartPulse',
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
    awards: [
      '🏆 Global Nominee – NASA Space Apps Challenge 2024',
      '⭐ Finalista Regional – NASA Space Apps Challenge (Barueri/SP)',
    ],
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
