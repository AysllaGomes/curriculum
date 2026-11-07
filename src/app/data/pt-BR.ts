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
        role: 'Arquiteta de Software',
        headline: 'Estudiosa incansável, sempre pronta para mergulhar em novas tecnologias e encarar desafios estimulantes.',
        summary: 'Como Arquiteta de Software, estou em constante busca pelo sucesso profissional, alimentada pela minha dedicação, '
            + 'paixão pelo aprendizado e pela minha exigência pessoal. Sou uma estudiosa incansável, sempre pronta para mergulhar '
            + 'em novas tecnologias e encarar desafios estimulantes. A cada obstáculo, vejo uma oportunidade de crescimento e superação. '
            + 'Determinada e comprometida, estou pronta para enfrentar qualquer desafio que a carreira me apresentar.',
        email: 'ayslla.gomes@outlook.com',
        city: 'Planaltina/GO',
        photoUrl: `${R2}/professional/Ayslla_Caroline.webp`,
        links: {
            linkedin: 'https://www.linkedin.com/in/ayslla-gomes/',
            github: 'https://github.com/AysllaGomes',
        },
    },

    experiences: [
        { company: 'Mirante Tecnologia', client: 'Sicoob', start: '2026-01', logoUrl: `${R2}/logo/mirante_tecnologia.jpg` },
        { company: 'IBM', client: 'Banco do Brasil', start: '2022-06', end: '2025-12', logoUrl: `${R2}/logo/ibm.svg` },
        { company: 'EngeSoftware Tecnologia S/A', client: 'Banco do Brasil', start: '2020-12', end: '2022-06', logoUrl: `${R2}/logo/engesoftware.jpeg` },
        { company: 'Life Tecnologia e Consultoria LTDA', client: 'Ministério da Economia', start: '2019-02', end: '2021-06', logoUrl: `${R2}/logo/life_consultoria_tecnologia.webp` },
        { company: 'Basis Tecnologia da Informação LTDA', client: 'MDIC, MPOG, FNDE, MCID, MTE', start: '2018-09', end: '2019-02', logoUrl: `${R2}/logo/basis_tecnologia.jpeg` },
    ],

    projects: projectsFor('pt-BR'),

    education: [
        { course: 'Sistemas de Informação', institution: 'Centro Universitário do Distrito Federal | UDF', startYear: 2018, endYear: 2022 },
    ],

    courses: [
        { year: 2012, provider: 'Kadoche', title: 'Corel Draw X4 e AUTOCAD', url: 'https://drive.google.com/file/d/1TpxbwdZfgGXYNbN7em464zkk1d0qWtFD/view?usp=drive_link' },
        { year: 2013, provider: 'Kadoche', title: 'Montagem e Configuração de Microcomputadores & Configurações de Softwares', url: 'https://drive.google.com/file/d/1WCfi50tA8D2z6iq8C148rA9k3a6b4_iA/view?usp=drive_link' },
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
        { year: 2024, provider: 'Udemy', title: 'OutSystems Reactive', url: 'https://ibm-learning.udemy.com/certificate/UC-2544c926-7e8c-4e4d-bff6-3b1787ed17df/' },
        { year: 2022, provider: 'Udemy', title: 'Redux NGRX com Angular', url: 'https://www.udemy.com/certificate/UC-bcac8834-2401-440c-a576-1efe16160ab3/' },
    ],

    certifications: [
        { year: 2021, provider: 'Scrum Alliance', title: 'Certificate Scrum Master' },
        { year: 2020, provider: 'CertiProf', title: 'DevOps Essentials Professional Certificate' },
        { year: 2019, provider: 'CertiProf', title: 'SCRUM Foundation', url: 'https://drive.google.com/file/d/1WGaNT5Txv6b8Cmgoi4itL7S4cIzdoHd8/view?usp=drive_link' },
    ],

    skillGroups: [
        { title: 'Linguagens', skills: ['PHP', 'Java', 'C#', 'CSS3', 'SASS', 'HTML5', 'JavaScript', 'TypeScript', 'GraphQL', 'Kotlin'] },
        { title: 'Frameworks', skills: ['Symfony', 'Laravel', 'Spring', 'Angular 2+', 'Angular JS', 'PrimeNg', 'PrimeFaces', 'Angular Material', 'React', 'Zend', 'Vue'] },
        {
            title: 'Tecnologia',
            skills: ['Docker', 'Maven', 'Jenkins', 'iReport', 'Liquibase', 'Bootstrap', 'MySQL', 'MongoDB', 'PostgreSQL', 'Oracle Database',
                'Microsoft SQL Server', 'Android Studio', 'Rancher', 'Node.js', 'Grafeno', 'Kafka', 'RabbitMQ', 'Kubernetes'],
        },
        { title: 'Design', skills: ['Frontend', 'Responsive', 'CodeDesign', 'UX/UI'] },
    ],

    languages: [
        { name: 'Português', nameLevel: 'Nativo', level: 'C2' },
        { name: 'Inglês', nameLevel: 'Intermediário', level: 'B1' },
        { name: 'Espanhol', nameLevel: 'Intermediário', level: 'B1' },
        { name: 'Francês', nameLevel: 'Básico', level: 'A1' },
        { name: 'Eslovaco', nameLevel: 'Básico', level: 'A1' },
    ],
};
