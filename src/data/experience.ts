import type { L } from '../i18n';

export const experience: {
  role: L;
  org: string;
  period: L;
  location: L;
  points: L[];
  tags: string[];
}[] = [
  {
    role: { pt: 'Estagiário → Analista de Sistemas', en: 'Intern → Systems Analyst' },
    org: 'OFM Systems',
    period: { pt: 'out 2022 – abr 2024', en: 'Oct 2022 – Apr 2024' },
    location: { pt: 'Maceió, AL', en: 'Maceió, Brazil' },
    points: [
      {
        pt: 'Efetivado como analista três meses após entrar como estagiário.',
        en: 'Promoted from intern to analyst after three months.',
      },
      {
        pt: 'Manutenção corretiva, evolutiva e de melhoria do produto GFT, usado por diversas empresas clientes, em um time de software de cerca de 20 pessoas.',
        en: 'Corrective, evolutionary and improvement maintenance of the GFT product, used by multiple client companies, in a software team of about 20 people.',
      },
      {
        pt: 'Desenvolvi uma API de exportação em lotes para um cliente com milhões de notas fiscais: o download nativo do Oracle APEX levava mais de 3 horas e falhava; a nova solução passou a concluir em 30 a 40 minutos.',
        en: 'Built a batch export API for a client with millions of invoices: the native Oracle APEX download took over 3 hours and often failed; the new solution finished in 30 to 40 minutes.',
      },
      {
        pt: 'Implementação de regras de negócio fiscais, incluindo a obrigação acessória EFD-Reinf.',
        en: 'Implemented Brazilian tax-reporting business rules, including the EFD-Reinf obligation.',
      },
    ],
    tags: ['TypeScript', 'PHP', 'Java', 'Oracle SQL', 'Oracle APEX'],
  },
];
