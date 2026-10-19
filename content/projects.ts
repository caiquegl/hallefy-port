export type ProjectSection = {
  title: string;
  subtitle?: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  images?: string[];
  sections: ProjectSection[];
  /** Content partially recovered; review recommended */
  recoveredPartial?: boolean;
};

/** Home “destaques” grid — order from Elementor `_elementor_data` (post 8) */
export const homeFeatured = [
  {
    title: "Caito Maia",
    image: "/images/projects/caito-maia.png",
    href: undefined as string | undefined,
  },
  {
    title: "Soulphia",
    image: "/images/projects/soulphia.png",
    href: "/soulphia",
  },
  {
    title: "Fernandinho",
    image: "/images/projects/fernandinho.png",
    href: "/fernandinho",
  },
  {
    title: "Manchester City",
    image: "/images/projects/manchester-city.png",
    href: "/manchester-city",
  },
] as const;

/** Home “Outros Projetos” — Elementor section */
export const otherProjectCovers = [
  {
    title: "Escola do Criador",
    image: "/images/projects/rockinrio.png",
    href: "/rockinrio",
  },
  {
    title: "Incendiários",
    image: "/images/projects/incendiarios.png",
    href: "/incendiarios",
  },
  {
    title: "Lagoinha SP",
    image: "/images/projects/lagoinha-sp.png",
    href: undefined as string | undefined,
  },
  {
    title: "Gustavo Mendes",
    image: "/images/projects/gustavo-mendes.png",
    href: undefined as string | undefined,
  },
] as const;

export const projects: Project[] = [
  {
    slug: "fernandinho",
    title: "Fernandinho",
    subtitle: "Campanha e lançamentos com o ídolo da Premier League",
    cover: "/images/projects/fernandinho.png",
    images: [
      "/images/cases/fernandinho/hero.png",
      "/images/cases/fernandinho/premierleague.jpg",
    ],
    recoveredPartial: true,
    sections: [
      {
        title: "Overview do Projeto",
        subtitle: "Quais são os principais pontos.",
        body: "Gestão de campanhas, lançamentos e produções ligadas à marca Fernandinho — do planejamento operacional ao acompanhamento de criação, mídia e entregas, alinhando briefing, fornecedores e times multidisciplinares.",
      },
      {
        title: "Objetivos",
        subtitle: "O que foi solucionado.",
        body: "Orquestrar campanhas publicitárias e ações de conteúdo com prazos apertados, garantindo escopo, qualidade das entregas e sincronia entre criação, tráfego, produção e stakeholders da marca.",
      },
    ],
  },
  {
    slug: "manchester-city",
    title: "Manchester City",
    subtitle: "Quando o futebol transforma a relação com o público",
    cover: "/images/projects/manchester-city.png",
    recoveredPartial: true,
    sections: [
      {
        title: "Overview do Projeto",
        subtitle: "Quais são os principais pontos.",
        body: "Projeto que visava transformar a forma como o futebol se relaciona com seu público. O Manchester City Football Club veio para o Brasil — e a gestão do projeto envolveu planejamento operacional, coordenação de equipes e acompanhamento de todas as entregas da ação.",
      },
      {
        title: "Objetivos",
        subtitle: "O que foi solucionado.",
        body: "Conduzir um projeto de grande porte com marca internacional: definição de escopo, timeline, alocação de recursos, alinhamento criativo e controle de entregas para uma experiência memorável com os fãs no Brasil.",
      },
    ],
  },
  {
    slug: "soulphia",
    title: "Soulphia",
    subtitle: "Case de marca, produto e comunicação",
    cover: "/images/projects/soulphia.png",
    images: [
      "/images/cases/soulphia/hero.jpg",
      "/images/cases/soulphia/case.png",
      "/images/cases/soulphia/1.jpg",
      "/images/cases/soulphia/2.jpg",
      "/images/cases/shared/o-problema.png",
      "/images/cases/shared/a-solucao.png",
    ],
    recoveredPartial: true,
    sections: [
      {
        title: "Overview do Projeto",
        subtitle: "Quais são os principais pontos.",
        body: "Case Soulphia com foco em posicionamento, narrativa de marca e execução de campanha — da definição do problema à solução criativa e operacional, com acompanhamento de times de criação e produção.",
      },
      {
        title: "O Problema",
        subtitle: "O desafio.",
        body: "Traduzir a proposta da marca em uma comunicação clara, coerente e executável em múltiplos formatos, mantendo consistência visual e de mensagem em todas as frentes.",
      },
      {
        title: "A Solução",
        subtitle: "O que foi entregue.",
        body: "Construção colaborativa de narrativa, materiais e fluxo de produção — alinhando briefing, criativos e cronograma para lançar a campanha com qualidade e previsibilidade.",
      },
    ],
  },
  {
    slug: "rockinrio",
    title: "Rock in Rio – Escola do Criador",
    subtitle:
      "Imagine uma iniciativa gratuita que formaria a nova geração de produtores de conteúdo",
    cover: "/images/projects/rockinrio.png",
    sections: [
      {
        title: "Overview do Projeto",
        subtitle: "Quais são os principais pontos.",
        body: "Quando uma ideia tem potencial, ela também deixa de ter limites. Pensando nisso, a Upper Aducation trouxe o Itaú para criarem, dentro do Rock in Rio, o encontro de uma turma muito criativa formada pelo time Artplan — uma iniciativa de formação educacional com uma das maiores agências do mundo como escola e o Rock in Rio como palco de lançamento.",
      },
      {
        title: "Objetivos",
        subtitle: "O que foi solucionado.",
        body: "Grandes Marcas — pavimentar o acesso aos times de assessoria e construir um pipeline de parcerias. Plataforma Digital — escola com aulas gravadas e ao vivo, do roteiro e cenografia às sprints de produto. Iniciativas Storyteller e Realtime Content — planejamento de entregas em paralelo, incluindo ação que levou um aluno à produção do Rock in Rio.",
      },
    ],
  },
  {
    slug: "incendiarios",
    title: "Incendiários",
    subtitle:
      "Qual é a cara da maior cruzada cristã para jovens do mundo?",
    cover: "/images/projects/incendiarios.png",
    sections: [
      {
        title: "Overview do Projeto",
        subtitle: "Quais são os principais pontos.",
        body: "O propósito move o mundo e transforma vidas — e assim nasceram os Incendiários. Mesmo afetados pela pandemia, se mantiveram acesos e vieram com tudo para o Brasil. Iniciativa da Lagoinha Los Angeles, dirigida pelo pastor André Fernandes, com a intenção de despertar o chamado na vida de jovens ao redor do mundo.",
      },
      {
        title: "Objetivos",
        subtitle: "O que foi solucionado.",
        body: "Branding — dar uma cara que comunique e engaje um público específico, com entrevistas, brainstorming e pesquisa alinhados a cronogramas entre fusos. Coordenação de produção envolvendo identidade, palco, iluminação, som e fornecedores para a experiência do evento.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
