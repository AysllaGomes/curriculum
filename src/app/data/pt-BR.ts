import { Resume } from '../shared/models/resume.model';

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

    projects: [
        {
            name: 'Interstate Mobility Center',
            description: 'Nosso aplicativo oferece uma experiência moderna e intuitiva para planejar e reservar viagens interestaduais. '
                + 'Com uma interface amigável, os usuários podem explorar uma variedade de destinos, visualizar opções de transporte, incluindo ônibus e trens, verificar horários e preços, e efetuar reservas diretamente pelo aplicativo. '
                + 'Além disso, fornecemos informações detalhadas sobre os destinos, incluindo pontos turísticos, restaurantes e opções de hospedagem, para garantir uma viagem perfeitamente planejada e personalizada para cada usuário. '
                + 'Com recursos de pagamento seguro e suporte ao cliente integrado, tornamos a experiência de viagem mais conveniente e sem complicações. Prepare-se para uma jornada sem igual com nosso aplicativo de viagens interestaduais.',
            url: 'https://github.com/AysllaGomes/interstate-mobility-center',
        },
        {
            name: 'React Hooks',
            description: 'Nosso projeto tem como objetivo aprimorar a performance e a eficiência do React por meio de customizações cuidadosas em seu ciclo de vida. '
                + 'Estamos dedicados a explorar e otimizar cada aspecto do React, desde a montagem até a desmontagem dos components, visando alcançar o desempenho máximo possível. '
                + 'Além disso, estamos comprometidos em adquirir e compartilhar um conhecimento profundo sobre as melhores práticas e técnicas, para que possamos aplicá-las em projetos futuros. '
                + 'Ao focar na otimização do React, estamos preparando o terreno para desenvolver aplicações mais rápidas, responsivas e escaláveis no futuro.',
            url: 'https://github.com/AysllaGomes/react-hooks',
        },
        { name: 'UI Controle Financeiro', url: 'https://github.com/AysllaGomes/financeiro-ui' },
        { name: 'Controle Financeiro', url: 'https://github.com/AysllaGomes/controle-financeiro' },
        { name: 'Red Switch', url: 'https://github.com/AysllaGomes/red-switch-realistic' },
        { name: 'API PetShop', url: 'https://github.com/AysllaGomes/petshop' },
        {
            name: 'Ceep',
            description: 'Nosso aplicativo de notas para Android oferece uma experiência intuitiva e eficiente para capturar e organizar suas ideias, lembretes e tarefas em qualquer lugar e a qualquer momento. '
                + 'Com uma interface limpa e amigável, você pode criar, editar e excluir notas facilmente, além de categorizá-las com tags ou cores para uma melhor organização. '
                + 'Além disso, o aplicativo sincroniza automaticamente suas notas em todos os seus dispositivos, garantindo que você tenha acesso a suas informações sempre que precisar, mesmo quando estiver offline. '
                + 'Com recursos adicionais como anexos de mídia, lembretes e opções de compartilhamento, nosso aplicativo de notas oferece a flexibilidade e funcionalidade que você precisa para manter suas ideias sob controle e aumentar sua produtividade no dia a dia.',
            url: 'https://github.com/AysllaGomes/ceep',
        },
        {
            name: 'Agenda',
            description: 'Nosso aplicativo de agenda para Android é uma ferramenta indispensável para organizar sua vida de forma eficiente e produtiva. '
                + 'Com uma interface intuitiva e amigável, você pode facilmente agendar compromissos, eventos e lembretes, mantendo tudo organizado e acessível em um só lugar. '
                + 'Além disso, oferecemos recursos poderosos, como sincronização em nuvem, que garantem que suas informações estejam sempre atualizadas em todos os seus dispositivos, permitindo acesso instantâneo onde quer que você esteja. '
                + 'Personalize suas agendas com categorias, cores e alarmes para tornar sua experiência ainda mais adaptada às suas necessidades. '
                + 'Seja para gerenciar seu trabalho, estudos ou vida pessoal, nosso aplicativo de agenda proporciona a praticidade e eficiência que você precisa para manter-se no controle e alcançar seus objetivos com facilidade.',
            url: 'https://github.com/AysllaGomes/agenda',
        },
    ],

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
