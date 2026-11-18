import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';
import { translateExperiences } from './translate';
import { RESUME_PT_BR as PT } from './pt-BR';

/**
 * Currículo em inglês. Só os textos são traduzidos: datas, links, empresas, clientes e os títulos
 * de cursos e certificados (são os nomes que estão nos certificados) vêm do pt-BR.
 */
export const RESUME_EN: Resume = {
    ...PT,

    profile: {
        ...PT.profile,
        role: 'Front-end Architect',
        headline: '{anos} years building systems for the financial and public sectors.',
        focus: 'Angular, microfrontends, Java and Node.js.',
        summary: 'At Mirante Tecnologia, serving Sicoob, I led the move from a monolithic front end to microfrontends and define '
            + 'the front-end architecture of the card journey, guiding the squads that use it. Before that, I spent five years on Spid, '
            + 'Banco do Brasil\'s urban mobility solution, through EngeSoftware and IBM: I followed the product from its start, '
            + 'was technical lead for the post-trip stream and proposed migrating the portal from React to Angular. In the federal '
            + 'government, I was technical lead on a 74-person contract at the Ministry of Economy. My background is full stack, '
            + 'with Java, Node.js and PHP, and I work with OpenShift and CI/CD pipelines. Outside work, I explore AI tools for '
            + 'development, such as the MCP server in my projects.',
        city: 'Planaltina/GO, Brazil',
    },

    experiences: translateExperiences(PT.experiences, {
        'Mirante Tecnologia': {
            summary: 'Front-end Architect on a team of 5 developers, with a PO and a manager, responsible for the front-end decisions '
                + 'of the new card journey; I take on technical leadership when needed.',
            highlights: [
                'Led the move from a monolithic front end to 6 microfrontends, each with its own pipeline and deployment, '
                    + 'and guide the vertical squads that use them.',
                'Created a component library shared across the microfrontends, aligned with Sicoob\'s design system and backward compatible.',
                'Card journey: card requests and replacement, inquiries, authorization, reconciliation and card network configuration.',
                'Delivered the MVP for migrating members between credit unions 2 weeks ahead of schedule, starting from an informal '
                    + 'requirement, and absorbed a late scope change in 2 days.',
            ],
        },
        'IBM': {
            summary: 'Spid, Banco do Brasil\'s urban mobility solution for the public sector, on a 20-person team working with '
                + 'the bank\'s technology and business areas.',
            highlights: [
                'Technical lead for the post-trip stream: billing, reconciliation of the quoted fare with the transport operators\' '
                    + 'final amount, accounting entries and the invoice approval portal.',
                'Built asynchronous billing with message queues (RabbitMQ, later Kafka) and automatic rebilling when the operator '
                    + 'sends the final amount.',
                'Proposed and led the portal\'s migration from React to Angular: lighter screens, faster navigation and nearly zero bugs.',
                'Built the product website (spid.bb.com.br) in Next.js and followed the back end\'s evolution from Node 10 to 24.',
            ],
        },
        'Life Tecnologia e Consultoria': {
            summary: 'Technical lead on a 74-person contract serving the former MDIC and the agencies merged into the Ministry of Economy.',
            highlights: [
                'Avalia-me, the performance review system behind civil servants\' bonuses: 35 deliveries in 6 months, '
                    + 'with the contract\'s continuity depending on them.',
                'PAB and CAMEX systems, and a time-tracking system with biometrics and geolocation in C#.',
                'Set up deployment pipelines for the test, staging and production environments.',
            ],
        },
        'Basis Tecnologia da Informação': {
            summary: 'Intern, then junior developer, maintaining and evolving federal ministry systems.',
            highlights: [
                'Cartão Reforma (Ministry of Cities), FNDE and MDIC systems such as the Direct Investment Ombudsman (OID) '
                    + 'and the Brazilian Handicraft Program.',
            ],
        },
    }),

    projects: projectsFor('en'),

    education: [{ ...PT.education[0], course: 'Information Systems' }],

    skillGroups: [
        { ...PT.skillGroups[0], title: 'Architecture' },
        { ...PT.skillGroups[1], title: 'Back-end' },
        { ...PT.skillGroups[2], title: 'Front-end' },
        { ...PT.skillGroups[3], title: 'Data' },
        { ...PT.skillGroups[4], title: 'DevOps' },
    ],

    languages: [
        { name: 'Portuguese', nameLevel: 'Native', level: 'C2' },
        { name: 'Italian', nameLevel: 'Fluent', level: 'C1' },
        { name: 'English', nameLevel: 'Intermediate', level: 'B1' },
        { name: 'Spanish', nameLevel: 'Intermediate', level: 'B1' },
        { name: 'French', nameLevel: 'Basic', level: 'A1' },
        { name: 'Slovak', nameLevel: 'Basic', level: 'A1' },
    ],
};
