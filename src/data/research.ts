import type { L } from '../i18n';

export const interests: { icon: string; title: L; text: L }[] = [
  {
    icon: 'scale',
    title: { pt: 'IA confiável e verificação de conteúdo', en: 'Trustworthy AI & content verification' },
    text: {
      pt: 'Como sistemas inteligentes podem ajudar a identificar conteúdo falso em contextos onde o erro custa caro, como o Judiciário.',
      en: 'How intelligent systems can help detect false content where mistakes are costly, such as in the judicial system.',
    },
  },
  {
    icon: 'chart-line',
    title: { pt: 'Ciência de dados e previsão', en: 'Data science & forecasting' },
    text: {
      pt: 'Da coleta experimental à modelagem: medir, limpar e transformar dados reais em decisões, como previsão de demanda.',
      en: 'From experimental data collection to modeling: measuring, cleaning and turning real data into decisions, such as demand forecasting.',
    },
  },
  {
    icon: 'scan-eye',
    title: { pt: 'Visão computacional', en: 'Computer vision' },
    text: {
      pt: 'Segmentação, análise de regiões e pipelines com redes neurais, de técnicas clássicas a modelos generativos.',
      en: 'Segmentation, region analysis and neural pipelines, from classical techniques to generative models.',
    },
  },
  {
    icon: 'brain',
    title: { pt: 'Informática médica', en: 'Medical informatics' },
    text: {
      pt: 'Interesse em desenvolvimento: estudo de revisão sistemática na área e um renderizador de neuroimagem acessível pelo navegador.',
      en: 'A growing interest: a self-directed systematic review study in the field and a browser-based neuroimaging renderer.',
    },
  },
];

export const currentResearch = {
  program: { pt: 'PIBIC 2026–2027 · UFAL', en: 'PIBIC 2026–2027 · UFAL' } as L,
  title: {
    pt: 'Framework para Verificação de Conteúdos Falsos no Judiciário',
    en: 'A Framework for Verifying False Content in the Judiciary',
  } as L,
  advisor: 'Prof. André Luiz Lins de Aquino',
  lab: { pt: 'Laboratório ORION · Instituto de Computação, UFAL', en: 'ORION Lab · Institute of Computing, UFAL' } as L,
  period: { pt: 'out 2026 – ago 2027', en: 'Oct 2026 – Aug 2027' } as L,
  summary: {
    pt: 'O projeto investiga métodos computacionais para apoiar a identificação de conteúdos falsos em processos e comunicações do Judiciário.',
    en: 'The project investigates computational methods to support the identification of false content in judicial proceedings and communications.',
  } as L,
  stage: {
    pt: 'Fase atual: revisão da literatura. Estou reproduzindo e avaliando a proposta da etapa anterior do projeto e buscando, no estado da arte, caminhos para aprimorá-la.',
    en: 'Current stage: literature review. I am reproducing and evaluating the approach from the previous stage of the project and searching the state of the art for ways to improve it.',
  } as L,
};

/** Formação em pesquisa: experiências que não são publicações, mas mostram método. */
export const researchTraining: { period: L; title: L; org: L; text: L }[] = [
  {
    period: { pt: '2026 – atual', en: '2026 – present' },
    title: { pt: 'Revisão sistemática da literatura', en: 'Systematic literature review' },
    org: { pt: 'Estudo independente · informática médica', en: 'Self-directed study · medical informatics' },
    text: {
      pt: 'Estudo prático da metodologia de revisão sistemática aplicado a um tema de informática médica, com o objetivo de chegar a uma primeira produção acadêmica.',
      en: 'Hands-on study of systematic review methodology applied to a medical informatics topic, aiming at a first academic paper.',
    },
  },
  {
    period: { pt: 'jan – jul 2026', en: 'Jan – Jul 2026' },
    title: { pt: 'Capacitação em Tecnologias RFID', en: 'RFID Technologies Training Program' },
    org: { pt: 'Laboratório EASY · IC/UFAL', en: 'EASY Lab · IC/UFAL' },
    text: {
      pt: 'Prova de conceito para um problema real de uma empresa: inventário patrimonial com RFID UHF. Conduzimos experimentos presenciais, analisamos os dados e documentamos o trabalho em um relatório no formato de short paper e em um pôster apresentado aos professores do laboratório.',
      en: 'Proof of concept for a real company problem: asset inventory with UHF RFID. We ran in-person experiments, analyzed the data and documented the work in a short-paper-style report and a poster presented to the lab faculty.',
    },
  },
];

/**
 * Publicações. A seção só aparece quando houver itens.
 * Exemplo:
 * { year: '2027', authors: 'Araújo, V. S.; Aquino, A. L. L.', title: '...', venue: '...', url: '...', status: { pt: 'Aceito', en: 'Accepted' } }
 */
export const publications: {
  year: string;
  authors: string;
  title: string;
  venue: string;
  url?: string;
  status?: L;
}[] = [];
