import type { L } from '../i18n';

export type Category = 'research' | 'engineering' | 'study';

export const categories: Record<Category, L> = {
  research: { pt: 'Pesquisa & IA', en: 'Research & AI' },
  engineering: { pt: 'Engenharia de software', en: 'Software engineering' },
  study: { pt: 'Estudos', en: 'Studies' },
};

export type Project = {
  slug: string;
  title: L;
  year: L;
  category: Category;
  featured?: boolean;
  status?: L;
  summary: L;
  /** Pontos de destaque exibidos no card expandido. */
  points?: L[];
  tags: (string | L)[];
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: 'rfid',
    title: { pt: 'Inventário patrimonial com RFID UHF', en: 'UHF RFID asset inventory' },
    year: { pt: '2026', en: '2026' },
    category: 'research',
    featured: true,
    summary: {
      pt: 'Prova de conceito para mapear itens em uma sala com etiquetas e um leitor RFID UHF, a partir de um problema real de uma empresa.',
      en: 'Proof of concept for locating items in a room with UHF RFID tags and a reader, based on a real company problem.',
    },
    points: [
      { pt: 'Experimentos presenciais para coletar dados de leitura em ambiente real.', en: 'In-person experiments to collect read data in a real environment.' },
      { pt: 'Análise das limitações práticas, como obstáculos físicos e posicionamento das etiquetas.', en: 'Analysis of practical limitations such as physical obstacles and tag placement.' },
      { pt: 'Resultados apresentados em pôster e relatório técnico no formato de short paper.', en: 'Results presented as a poster and a short-paper-style technical report.' },
    ],
    tags: ['RFID UHF', { pt: 'Experimentação', en: 'Experimentation' }, { pt: 'Análise de dados', en: 'Data analysis' }],
  },
  {
    slug: 'neural-render',
    title: { pt: 'Neural-Render', en: 'Neural-Render' },
    year: { pt: '2026', en: '2026' },
    category: 'research',
    featured: true,
    status: { pt: 'Em desenvolvimento', en: 'In development' },
    summary: {
      pt: 'Renderizador volumétrico 3D de ressonância magnética (MRI/fMRI) em Rust, compilável para WebAssembly, para tornar a visualização de neuroimagem acessível em qualquer navegador.',
      en: 'A 3D volumetric MRI/fMRI renderer in Rust that compiles to WebAssembly, aiming to make neuroimaging visualization accessible from any browser.',
    },
    points: [
      { pt: 'Foco em consumo de memória e segurança, sem garbage collector.', en: 'Focus on memory footprint and safety, without a garbage collector.' },
      { pt: 'Renderização via wgpu (WebGPU) usando a GPU local do usuário.', en: 'Rendering via wgpu (WebGPU) using the user’s local GPU.' },
      { pt: 'Código aberto para favorecer a reprodutibilidade científica.', en: 'Open source to support scientific reproducibility.' },
    ],
    tags: ['Rust', 'wgpu', 'WebAssembly', 'NIfTI/DICOM'],
    repo: 'https://github.com/VictorSamyr/neural-render',
  },
  {
    slug: 'prevismart',
    title: { pt: 'PreviSmart', en: 'PreviSmart' },
    year: { pt: 'Acadêmico', en: 'Academic' },
    category: 'research',
    featured: true,
    summary: {
      pt: 'Plataforma de previsão de demanda com IA para varejo, logística e energia, com API em Rust e painel interativo. Projeto de disciplina que pretendo retomar.',
      en: 'AI-based demand forecasting platform for retail, logistics and energy, with a Rust API and an interactive dashboard. A course project I plan to resume.',
    },
    tags: ['Rust', 'Machine Learning', { pt: 'Séries temporais', en: 'Time series' }],
    repo: 'https://github.com/VictorSamyr/PreviSmart',
  },
  {
    slug: 'virtual-try-on',
    title: { pt: 'Provador virtual', en: 'Virtual try-on' },
    year: { pt: 'Estudo', en: 'Study' },
    category: 'research',
    summary: {
      pt: 'Estudo individual de um pipeline de virtual try-on para e-commerce, combinando estimativa de pose (OpenPose), segmentação e geração de imagem.',
      en: 'Self-directed study of a virtual try-on pipeline for e-commerce, combining pose estimation (OpenPose), segmentation and image generation.',
    },
    tags: ['PyTorch', { pt: 'Visão computacional', en: 'Computer vision' }, { pt: 'Modelos generativos', en: 'Generative models' }],
  },
  {
    slug: 'orion-cv',
    title: { pt: 'ORION: estudos de visão computacional', en: 'ORION: computer vision studies' },
    year: { pt: '2026', en: '2026' },
    category: 'study',
    summary: {
      pt: 'Notebooks didáticos do Laboratório ORION: segmentação por limiarização de Otsu, componentes conectados, propriedades geométricas e morfologia matemática, com testes automatizados.',
      en: 'Teaching notebooks from the ORION Lab: Otsu thresholding, connected components, region properties and mathematical morphology, with automated tests.',
    },
    tags: ['Python', 'scikit-image', 'Jupyter', 'pytest'],
    repo: 'https://github.com/VictorSamyr/orion-visao-computacional',
  },
  {
    slug: 'state-space-search',
    title: { pt: 'Busca em espaço de estados', en: 'State-space search' },
    year: { pt: '2026', en: '2026' },
    category: 'study',
    summary: {
      pt: 'Protótipo de alocação de horários de turmas com busca em profundidade, backtracking e poda por restrições, sem materializar a árvore de busca.',
      en: 'Class-timetabling prototype using depth-first search, backtracking and constraint pruning, without materializing the search tree.',
    },
    tags: ['Java', { pt: 'IA clássica', en: 'Classical AI' }, { pt: 'Busca', en: 'Search' }],
    repo: 'https://github.com/VictorSamyr/state-space-search',
  },
  {
    slug: 'biblioteca-virtual',
    title: { pt: 'Biblioteca Virtual (2021 → 2026)', en: 'Virtual Library (2021 → 2026)' },
    year: { pt: '2026', en: '2026' },
    category: 'engineering',
    summary: {
      pt: 'Meu primeiro projeto, do curso técnico, refatorado cinco anos depois: arquitetura em camadas, consultas parametrizadas contra SQL injection, senhas com PBKDF2 e testes automatizados.',
      en: 'My first project, from technical school, refactored five years later: layered architecture, parameterized queries against SQL injection, PBKDF2 password hashing and automated tests.',
    },
    tags: ['Java', 'JDBC', { pt: 'Segurança', en: 'Security' }, { pt: 'Arquitetura', en: 'Architecture' }],
    repo: 'https://github.com/VictorSamyr/BibliotecaVirtual',
  },
  {
    slug: 'wepayu',
    title: { pt: 'WePayU: folha de pagamento', en: 'WePayU: payroll system' },
    year: { pt: '2026', en: '2026' },
    category: 'engineering',
    summary: {
      pt: 'Sistema de folha de pagamento orientado a objetos, guiado por testes de aceitação, com undo/redo, persistência e agendas de pagamento customizadas.',
      en: 'Object-oriented payroll system driven by acceptance tests, with undo/redo, persistence and custom payment schedules.',
    },
    tags: ['Java', { pt: 'POO', en: 'OOP' }, { pt: 'Testes de aceitação', en: 'Acceptance testing' }],
    repo: 'https://github.com/VictorSamyr/WePayU---P2',
  },
];
