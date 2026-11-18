import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';

const R2 = 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev';

/**
 * Conteúdo do currículo em português — a fonte principal.
 * As versões em outros idiomas seguem exatamente esta estrutura (o teste em resume.spec.ts confere).
 */
export const RESUME_PT_BR: Resume = {
    profile: {
        name: 'Ayslla Caroline Prates Gomes',
        shortName: 'Ayslla Gomes',
        role: 'Arquiteta Front-end',
        headline: 'Arquiteta Front-end com {anos} anos construindo sistemas para o setor financeiro e público.',
        summary: 'Na Mirante Tecnologia, atendendo o Sicoob, conduzi a saída de um front monolítico para microfrontends e defino '
            + 'a arquitetura de front da jornada de cartões, orientando as squads que a usam. Antes, passei cinco anos no Spid, '
            + 'solução de mobilidade urbana do Banco do Brasil, pela EngeSoftware e pela IBM: acompanhei o produto desde o início, '
            + 'liderei tecnicamente a frente de pós-viagem e propus a migração do portal de React para Angular. No governo federal, '
            + 'fui responsável técnica de um contrato com 74 pessoas no Ministério da Economia. Minha base é full stack, com Java, '
            + 'Node.js e PHP, e trabalho com OpenShift e esteiras de CI/CD. Fora do trabalho, exploro ferramentas de IA para '
            + 'desenvolvimento, como o servidor MCP que está nos meus projetos.',
        email: 'ayslla.gomes@outlook.com',
        city: 'Planaltina/GO',
        photoUrl: `${R2}/professional/Ayslla_Caroline.webp`,
        links: {
            linkedin: 'https://www.linkedin.com/in/ayslla-gomes/',
            github: 'https://github.com/AysllaGomes',
        },
    },

    experiences: [
        {
            company: 'Mirante Tecnologia', client: 'Sicoob', start: '2026-01', logoUrl: `${R2}/logo/mirante_tecnologia.jpg`,
            summary: 'Arquiteta Front-end em um time de 5 desenvolvedores, com PO e gerente, responsável pelas decisões de front-end '
                + 'da nova jornada de cartões; assumo a liderança técnica quando necessário.',
            highlights: [
                'Conduzi a saída do front monolítico para 6 microfrontends, cada um com esteira e deploy independentes, '
                    + 'e oriento as squads verticais que os usam.',
                'Criei uma biblioteca de componentes compartilhada entre os microfrontends, alinhada ao design system do Sicoob e retrocompatível.',
                'Jornada de cartões: solicitação e troca de cartão, consultas, autorização, conciliação e parametrização de bandeiras.',
                'Entreguei o MVP de migração de cooperados entre cooperativas 2 semanas antes do prazo, partindo de um requisito informal, '
                    + 'e absorvi uma mudança de escopo tardia em 2 dias.',
            ],
            stack: ['Angular', 'Java', 'Webpack Module Federation', 'Jenkins', 'OpenShift'],
        },
        {
            company: 'IBM', client: 'Banco do Brasil', start: '2022-06', end: '2025-12', logoUrl: `${R2}/logo/ibm.svg`,
            earlier: [
                { company: 'EngeSoftware Tecnologia', start: '2020-12', end: '2022-06', logoUrl: `${R2}/logo/engesoftware.jpeg` },
            ],
            summary: 'Spid, solução de mobilidade urbana do Banco do Brasil para o setor público, em um time de 20 pessoas '
                + 'com as áreas de tecnologia e de negócio do banco.',
            highlights: [
                'Liderei tecnicamente a frente de pós-viagem: faturamento, conciliação do valor cotado com o valor final das operadoras '
                    + 'de transporte, lançamentos contábeis e portal de ateste das faturas.',
                'Construí o faturamento assíncrono, com filas de mensageria (RabbitMQ e depois Kafka) e refaturamento automático '
                    + 'quando a operadora envia o valor final.',
                'Propus e conduzi a migração do portal de React para Angular: telas mais leves, navegação mais rápida e bugs praticamente zerados.',
                'Desenvolvi o site institucional do produto (spid.bb.com.br) em Next.js e acompanhei a evolução do back-end do Node 10 ao 24.',
            ],
            stack: ['Angular (até o 18)', 'React', 'Next.js', 'Node.js', 'RabbitMQ', 'Kafka', 'Grafana', 'OpenShift', 'Jenkins', 'Argo CD', 'GitHub Actions'],
        },
        {
            company: 'Life Tecnologia e Consultoria', client: 'Ministério da Economia', start: '2019-02', end: '2021-06',
            logoUrl: `${R2}/logo/life_consultoria_tecnologia.webp`,
            summary: 'Responsável técnica de um contrato com 74 pessoas, atendendo o antigo MDIC e os órgãos incorporados ao Ministério da Economia.',
            highlights: [
                'Avalia-me, sistema de avaliação para gratificação de servidores: 35 entregas em 6 meses, com a continuidade do contrato dependendo delas.',
                'Sistemas PAB e CAMEX, e sistema de ponto com biometria e geolocalização em C#.',
                'Configurei as esteiras de deploy dos ambientes de teste, homologação e produção.',
            ],
            stack: ['PHP (Symfony)', 'Java', 'C#', 'Angular', 'Docker', 'Jenkins', 'Rancher'],
        },
        {
            company: 'Basis Tecnologia da Informação', client: 'MDIC, MPOG, FNDE, MCID, MTE', start: '2018-09', end: '2019-02',
            logoUrl: `${R2}/logo/basis_tecnologia.jpeg`,
            summary: 'Estágio e depois desenvolvedora júnior, na sustentação e evolução de sistemas de ministérios.',
            highlights: [
                'Cartão Reforma (Ministério das Cidades), sistemas do FNDE e do MDIC, como o Ombudsman de Investimentos Diretos (OID) '
                    + 'e o Programa do Artesanato Brasileiro.',
            ],
            stack: ['Java', 'PHP (Symfony)', 'Angular', 'Jenkins', 'Rancher'],
        },
    ],

    projects: projectsFor('pt-BR'),

    education: [
        { course: 'Sistemas de Informação', institution: 'Centro Universitário do Distrito Federal | UDF', startYear: 2018, endYear: 2022 },
    ],

    courses: [
        { year: 2018, provider: 'Udemy', title: 'HTML5, CSS3 e JavaScript', url: 'https://www.udemy.com/certificate/UC-A25SJJPO/' },
        { year: 2019, provider: 'Udemy', title: 'Firebase', url: 'https://www.udemy.com/certificate/UC-RBSCD7NG/' },
        { year: 2019, provider: 'CertiProf', title: 'SCRUM Foundation', url: 'https://drive.google.com/file/d/1WGaNT5Txv6b8Cmgoi4itL7S4cIzdoHd8/view?usp=drive_link' },
        { year: 2021, provider: 'Origamid', title: 'Automação Front com o NPM', url: 'https://origamid.com/certificate/37eba3d8' },
        { year: 2021, provider: 'Origamid', title: 'CSS com SASS', url: 'https://origamid.com/certificate/acff0849' },
        { year: 2021, provider: 'Origamid', title: 'CSS Flexbox', url: 'https://www.origamid.com/certificate/60e5c49e/' },
        { year: 2022, provider: 'Origamid', title: 'CSS Avançado - Posicionamento', url: 'https://origamid.com/certificate/4a327cd4' },
        { year: 2022, provider: 'Udemy', title: 'Angular, .NET Core Web API e Angular Material', url: 'https://www.udemy.com/certificate/UC-e7f07581-57d6-4058-92a4-b5957aca04bb/' },
        { year: 2022, provider: 'Udemy', title: 'Visual Basic .NET', url: 'https://www.udemy.com/certificate/UC-8b920f6e-2be6-43cd-8bef-0c570ae6953f/' },
        { year: 2022, provider: 'Origamid', title: 'CSS Grid Layout', url: 'https://www.origamid.com/certificate/e6802513/' },
        { year: 2022, provider: 'Origamid', title: 'JavaScript 6', url: 'https://www.origamid.com/certificate/94334673/' },
        { year: 2022, provider: 'Origamid', title: 'Tipografia Avançada', url: 'https://www.origamid.com/certificate/35337941/' },
        { year: 2022, provider: 'Origamid', title: 'UI Design Avançado', url: 'https://www.origamid.com/certificate/fa5a49b2/' },
        { year: 2022, provider: 'Origamid', title: 'UX Design Heurísticas', url: 'https://www.origamid.com/certificate/4588ce5f/' },
        { year: 2022, provider: 'Origamid', title: 'Vue.js 2', url: 'https://www.origamid.com/certificate/a9b1a678/' },
        { year: 2022, provider: 'Origamid', title: 'WordPress Como CMS', url: 'https://www.origamid.com/certificate/17160626/' },
        { year: 2022, provider: 'Origamid', title: 'WordPress REST API', url: 'https://www.origamid.com/certificate/b8a4417a/' },
        { year: 2022, provider: 'Origamid', title: 'Web Design Completo', url: 'https://www.origamid.com/certificate/bf5c8e07/' },
        { year: 2022, provider: 'Udemy', title: 'Redux NGRX com Angular', url: 'https://www.udemy.com/certificate/UC-bcac8834-2401-440c-a576-1efe16160ab3/' },
        { year: 2024, provider: 'Udemy', title: 'OutSystems Reactive', url: 'https://ibm-learning.udemy.com/certificate/UC-2544c926-7e8c-4e4d-bff6-3b1787ed17df/' },
    ],

    certifications: [
        { year: 2021, provider: 'Scrum Alliance', title: 'Certificate Scrum Master' },
        { year: 2020, provider: 'CertiProf', title: 'DevOps Essentials Professional Certificate' },
        { year: 2019, provider: 'CertiProf', title: 'SCRUM Foundation', url: 'https://drive.google.com/file/d/1WGaNT5Txv6b8Cmgoi4itL7S4cIzdoHd8/view?usp=drive_link' },
    ],

    // Os itens são nomes de tecnologia, iguais em todos os idiomas; só o título do grupo é traduzido
    skillGroups: [
        { title: 'Arquitetura', skills: ['Microfrontends (Module Federation)', 'BFF', 'Microservices', 'RabbitMQ', 'Kafka', 'REST', 'GraphQL'] },
        { title: 'Back-end', skills: ['Java/Spring', 'Node.js/NestJS', 'PHP/Laravel', 'C#'] },
        { title: 'Front-end', skills: ['Angular', 'TypeScript', 'React', 'Vue', 'Sass'] },
        { title: 'Dados', skills: ['PostgreSQL', 'Oracle', 'SQL Server', 'MongoDB', 'Prisma'] },
        { title: 'DevOps', skills: ['Docker', 'Kubernetes', 'OpenShift', 'Rancher', 'Jenkins', 'Argo CD', 'GitHub Actions', 'Grafana'] },
    ],

    languages: [
        { name: 'Português', nameLevel: 'Nativo', level: 'C2' },
        { name: 'Italiano', nameLevel: 'Fluente', level: 'C1' },
        { name: 'Inglês', nameLevel: 'Intermediário', level: 'B1' },
        { name: 'Espanhol', nameLevel: 'Intermediário', level: 'B1' },
        { name: 'Francês', nameLevel: 'Básico', level: 'A1' },
        { name: 'Eslovaco', nameLevel: 'Básico', level: 'A1' },
    ],
};
