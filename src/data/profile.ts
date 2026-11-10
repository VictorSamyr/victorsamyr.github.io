import type { L } from '../i18n';

export const profile = {
  name: 'Victor Samyr',
  fullName: 'Victor Samyr da Silva Araújo',
  photo: '/images/victor.jpg',
  email: 'victorifalm@gmail.com',
  location: { pt: 'Maceió, Alagoas, Brasil', en: 'Maceió, Alagoas, Brazil' } as L,
  role: {
    pt: 'Pesquisador de graduação em Sistemas Inteligentes, IA e Ciência de Dados',
    en: 'Undergraduate researcher in Intelligent Systems, AI and Data Science',
  } as L,
  tagline: {
    pt: 'Graduando em Ciência da Computação na UFAL e bolsista de Iniciação Científica (PIBIC). Levo para a pesquisa em inteligência artificial a experiência de quem já colocou software em produção na indústria.',
    en: 'Computer Science undergraduate at UFAL and undergraduate research fellow (PIBIC). I bring to AI research the experience of someone who has already shipped production software in industry.',
  } as L,
  status: {
    pt: 'Aberto a colaborações de pesquisa e estágios em P&D',
    en: 'Open to research collaborations and R&D internships',
  } as L,
  links: [
    { label: 'GitHub', url: 'https://github.com/VictorSamyr' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/victor-samyr-da-silva-ara%C3%BAjo-3350221ba/' },
    { label: 'Lattes', url: 'http://lattes.cnpq.br/3622663657664130' },
  ],
};

/** Números de destaque exibidos na página inicial. */
export const highlights: { value: L; label: L }[] = [
  {
    value: { pt: 'PIBIC', en: 'PIBIC' },
    label: { pt: 'Bolsista de Iniciação Científica, 2026–2027', en: 'Undergraduate research fellowship, 2026–2027' },
  },
  {
    value: { pt: 'Top 5%', en: 'Top 5%' },
    label: { pt: 'OBI 2025, nível Sênior (100º no Brasil)', en: 'Brazilian Olympiad in Informatics 2025, Senior level (100th nationally)' },
  },
  {
    value: { pt: '18 meses', en: '18 months' },
    label: { pt: 'Desenvolvendo software na indústria', en: 'Building software in industry' },
  },
  {
    value: { pt: 'IEEE', en: 'IEEE' },
    label: { pt: 'Tesoureiro do Ramo Estudantil UFAL', en: 'Treasurer, UFAL Student Branch' },
  },
];

export const education = [
  {
    degree: { pt: 'Bacharelado em Ciência da Computação', en: 'B.Sc. in Computer Science' } as L,
    institution: { pt: 'Universidade Federal de Alagoas (UFAL), Instituto de Computação', en: 'Federal University of Alagoas (UFAL), Institute of Computing' } as L,
    period: { pt: '2024 – previsão 2028', en: '2024 – expected 2028' } as L,
    note: {
      pt: 'Bolsista PIBIC. 100 h de atividades de extensão.',
      en: 'PIBIC research fellow. 100 h of university outreach activities.',
    } as L,
  },
  {
    degree: { pt: 'Técnico em Informática para Internet (integrado ao ensino médio)', en: 'Technical degree in Web Development (integrated with high school)' } as L,
    institution: { pt: 'Instituto Federal de Alagoas (IFAL)', en: 'Federal Institute of Alagoas (IFAL)' } as L,
    period: { pt: 'até 2022', en: 'until 2022' } as L,
  },
];

export const honors = [
  {
    year: '2025',
    title: { pt: 'Olimpíada Brasileira de Informática (OBI), nível Sênior', en: 'Brazilian Olympiad in Informatics (OBI), Senior level' } as L,
    detail: { pt: '100º lugar nacional (top 5%), após as três fases da competição.', en: 'Ranked 100th nationally (top 5%) after all three rounds.' } as L,
  },
  {
    year: '2026',
    title: { pt: 'Bolsa PIBIC/UFAL 2026–2027', en: 'PIBIC/UFAL research fellowship 2026–2027' } as L,
    detail: { pt: 'Programa Institucional de Bolsas de Iniciação Científica.', en: 'Institutional undergraduate research fellowship program.' } as L,
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { pt: 'Linguagens', en: 'Languages' }, items: ['Python', 'Rust', 'TypeScript', 'Java', 'PHP', 'SQL'] },
  { group: { pt: 'IA e dados', en: 'AI & data' }, items: ['PyTorch', 'NumPy', 'scikit-image', 'Matplotlib', 'Jupyter'] },
  { group: { pt: 'Back-end e bancos', en: 'Back-end & databases' }, items: ['Node.js', 'Laravel', 'Oracle SQL / APEX', 'PostgreSQL'] },
  { group: { pt: 'Ferramentas', en: 'Tools' }, items: ['Git', 'Docker', 'pytest', 'WebAssembly'] },
];

export const languages: { name: L; level: L }[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Intermediário (B1–B2)', en: 'Intermediate (B1–B2)' } },
];
