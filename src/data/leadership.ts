import type { L } from '../i18n';

export const ieee = {
  role: { pt: 'Tesoureiro', en: 'Treasurer' } as L,
  org: { pt: 'Ramo Estudantil IEEE UFAL', en: 'IEEE UFAL Student Branch' } as L,
  period: { pt: '2026 – atual', en: '2026 – present' } as L,
  instagram: 'https://www.instagram.com/ieee.ufal/',
  summary: {
    pt: 'Faço parte da diretoria do Ramo Estudantil IEEE da UFAL, responsável pelas finanças do ramo e pelo apoio à organização dos eventos dos capítulos e grupos de afinidade.',
    en: 'I serve on the executive board of the IEEE Student Branch at UFAL, managing the branch’s finances and supporting the events of its technical chapters and affinity groups.',
  } as L,
  points: [
    {
      pt: 'Gestão financeira do ramo e apoio transversal a capítulos e grupos (RAS, Computer Society, IES, WIE).',
      en: 'Financial management of the branch and cross-cutting support to chapters and groups (RAS, Computer Society, IES, WIE).',
    },
    {
      pt: 'Primeiro ano de gestão focado em consolidar o IEEE na UFAL: o número de membros ativos e de capítulos e grupos em atividade cresceu no período.',
      en: 'First year of the term focused on consolidating IEEE at UFAL: active memberships and active chapters and groups grew over the period.',
    },
    {
      pt: 'Contato com palestrantes, estruturação de programações e coordenação de público nos eventos.',
      en: 'Liaison with speakers, program design and attendee coordination at events.',
    },
  ] as L[],
};

export type IEEEEvent = {
  date: string; // AAAA-MM-DD (data de início)
  endDate?: string;
  title: L;
  format: L;
  audience?: string;
  summary: L;
  role?: L;
  url?: string;
};

export const events: IEEEEvent[] = [
  {
    date: '2026-12-02',
    endDate: '2026-12-04',
    title: { pt: 'IC-ML 2026: Workshop de Machine Learning', en: 'IC-ML 2026: Machine Learning Workshop' },
    format: { pt: 'Presencial · IC/UFAL', en: 'In person · IC/UFAL' },
    summary: {
      pt: 'Workshop do Instituto de Computação com o Ramo IEEE UFAL e a IEEE Computer Society: palestras com pesquisadores e profissionais, apresentação de trabalhos acadêmicos e minicurso prático de classificação, regressão, clustering e séries temporais.',
      en: 'Workshop by the Institute of Computing with the IEEE UFAL Branch and the IEEE Computer Society: talks by researchers and practitioners, academic paper presentations and a hands-on short course on classification, regression, clustering and time series.',
    },
    url: 'https://www.instagram.com/p/DfS61gDIFZ9/',
  },
  {
    date: '2026-11-19',
    title: { pt: 'IES Day: Workshop de Eletrônica de Potência', en: 'IES Day: Power Electronics Workshop' },
    format: { pt: 'Presencial · Laboratório de Eletrônica, IC/UFAL', en: 'In person · Electronics Lab, IC/UFAL' },
    summary: {
      pt: 'Tarde de práticas em bancada, em comemoração ao IES Day da IEEE Industrial Electronics Society, aberta a quem não tem experiência prévia (16 vagas).',
      en: 'An afternoon of hands-on bench work celebrating IES Day of the IEEE Industrial Electronics Society, open to beginners (16 seats).',
    },
    url: 'https://www.instagram.com/p/DfUajf7IPcQ/',
  },
  {
    date: '2026-10-28',
    title: { pt: 'IEEE na SECOMP 2026', en: 'IEEE at SECOMP 2026' },
    format: { pt: 'Presencial · UFAL', en: 'In person · UFAL' },
    audience: '30–40',
    summary: {
      pt: 'Programação do ramo na semana de computação: minicurso de Git, SpeakUp, ICinema e uma mesa-redonda sobre pesquisa com professores e pesquisadores do IC.',
      en: 'The branch’s program at the computing week: a Git short course, SpeakUp, ICinema and a research round table with IC faculty and researchers.',
    },
    role: { pt: 'Estruturação das atividades do evento.', en: 'Structuring the event’s activities.' },
  },
  {
    date: '2026-10-16',
    title: { pt: 'IEEE Day 2026', en: 'IEEE Day 2026' },
    format: { pt: 'Presencial · UFAL', en: 'In person · UFAL' },
    audience: '20–30',
    summary: {
      pt: 'Tarde com relatos de membros que foram a congressos do IEEE, apresentação do WIE, palestra “IA na Robótica” com a pesquisadora Andressa Martins, demonstração de robôs do capítulo RAS e dinâmica em inglês do SpeakUp.',
      en: 'An afternoon with members sharing IEEE conference experiences, a WIE presentation, the talk “AI in Robotics” by researcher Andressa Martins, robot demos by the RAS chapter and an English-speaking SpeakUp session.',
    },
    role: { pt: 'Organização das atividades e controle de público no dia.', en: 'Organized activities and managed attendance on the day.' },
  },
  {
    date: '2026-06-19',
    title: { pt: 'IEEE Talks: o mercado de trabalho em robótica', en: 'IEEE Talks: the job market in robotics' },
    format: { pt: 'Online', en: 'Online' },
    audience: '20–30',
    summary: {
      pt: 'Palestra com Heitor Savino sobre carreira e oportunidades na área de robótica.',
      en: 'Talk by Heitor Savino on careers and opportunities in robotics.',
    },
    role: { pt: 'Contato com o palestrante e alinhamento da palestra.', en: 'Speaker liaison and talk coordination.' },
  },
];
