export type Lang = 'pt' | 'en';
export type L = { pt: string; en: string };

export const t = (value: L | string, lang: Lang): string =>
  typeof value === 'string' ? value : value[lang];

/** Rotas por idioma. A chave é usada para trocar de idioma mantendo a página. */
export const routes = {
  home: { pt: '/', en: '/en/' },
  research: { pt: '/pesquisa/', en: '/en/research/' },
  projects: { pt: '/projetos/', en: '/en/projects/' },
  leadership: { pt: '/lideranca/', en: '/en/leadership/' },
  cv: { pt: '/cv/', en: '/en/cv/' },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  nav: {
    research: { pt: 'Pesquisa', en: 'Research' },
    projects: { pt: 'Projetos', en: 'Projects' },
    leadership: { pt: 'Liderança', en: 'Leadership' },
    cv: { pt: 'CV', en: 'CV' },
  },
  switchLang: { pt: 'Read in English', en: 'Ler em português' },
  switchLangShort: { pt: 'EN', en: 'PT' },
  toggleTheme: { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark theme' },
  openMenu: { pt: 'Abrir menu', en: 'Open menu' },
  skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  footer: {
    pt: 'Feito com Astro. Código aberto no GitHub.',
    en: 'Built with Astro. Source code on GitHub.',
  },
  seeAll: { pt: 'Ver tudo', en: 'See all' },
  upcoming: { pt: 'Próximos', en: 'Upcoming' },
  past: { pt: 'Realizados', en: 'Past' },
  myRole: { pt: 'Meu papel', en: 'My role' },
  participants: { pt: 'participantes', en: 'attendees' },
  repo: { pt: 'Repositório', en: 'Repository' },
  inProgress: { pt: 'Em andamento', en: 'In progress' },
  all: { pt: 'Todos', en: 'All' },
  contact: { pt: 'Contato', en: 'Contact' },
};

export const formatMonth = (iso: string, lang: Lang) => {
  const [y, m] = iso.split('-').map(Number);
  if (!m) return String(y);
  const d = new Date(Date.UTC(y, (m ?? 1) - 1, 1));
  return d.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).replace('.', '');
};

const months = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/** "19 nov 2026" / "Nov 19, 2026"; com fim no mesmo mês: "2–4 dez 2026" / "Dec 2–4, 2026". */
export const formatDay = (iso: string, lang: Lang, endIso?: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const mon = months[lang][m - 1];
  if (endIso) {
    const [y2, m2, d2] = endIso.split('-').map(Number);
    if (y2 === y && m2 === m) return lang === 'pt' ? `${d}–${d2} ${mon} ${y}` : `${mon} ${d}–${d2}, ${y}`;
    return `${formatDay(iso, lang)} – ${formatDay(endIso, lang)}`;
  }
  return lang === 'pt' ? `${d} ${mon} ${y}` : `${mon} ${d}, ${y}`;
};
