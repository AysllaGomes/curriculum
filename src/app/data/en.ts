import { Resume } from '../shared/models/resume.model';
import { RESUME_PT_BR as PT } from './pt-BR';

/**
 * Currículo em inglês. Só os textos são traduzidos: datas, links, empresas, clientes e os títulos
 * de cursos e certificados (são os nomes que estão nos certificados) vêm do pt-BR.
 */
export const RESUME_EN: Resume = {
    ...PT,

    profile: {
        ...PT.profile,
        role: 'Software Architect',
        headline: 'A tireless learner, always ready to dive into new technologies and take on exciting challenges.',
        summary: 'As a Software Architect, I am constantly pursuing professional success, driven by my dedication, '
            + 'my passion for learning and the high standards I set for myself. I am a tireless learner, always ready to dive '
            + 'into new technologies and take on exciting challenges. I see every obstacle as an opportunity to grow and overcome. '
            + 'Determined and committed, I am ready to face whatever challenges my career brings.',
        city: 'Planaltina/GO, Brazil',
    },

    projects: [
        {
            name: 'Interstate Mobility Center',
            description: 'Our app offers a modern, intuitive experience for planning and booking interstate trips. '
                + 'With a friendly interface, users can explore a variety of destinations, view transport options including buses and trains, check schedules and prices, and make bookings directly in the app. '
                + 'We also provide detailed information about destinations, including sights, restaurants and accommodation options, to ensure a perfectly planned trip tailored to each user. '
                + 'With secure payments and built-in customer support, we make travel more convenient and hassle-free. Get ready for a one-of-a-kind journey with our interstate travel app.',
            url: PT.projects[0].url,
        },
        {
            name: 'React Hooks',
            description: 'Our project aims to improve React\'s performance and efficiency through careful customizations of its lifecycle. '
                + 'We are dedicated to exploring and optimizing every aspect of React, from mounting to unmounting components, to achieve the best possible performance. '
                + 'We are also committed to gaining and sharing deep knowledge of best practices and techniques so we can apply them to future projects. '
                + 'By focusing on optimizing React, we are laying the groundwork for faster, more responsive and more scalable applications in the future.',
            url: PT.projects[1].url,
        },
        { name: 'Financial Control UI', url: PT.projects[2].url },
        { name: 'Financial Control', url: PT.projects[3].url },
        { name: 'Red Switch', url: PT.projects[4].url },
        { name: 'PetShop API', url: PT.projects[5].url },
        {
            name: 'Ceep',
            description: 'Our Android notes app offers an intuitive, efficient way to capture and organize your ideas, reminders and tasks anywhere, anytime. '
                + 'With a clean, friendly interface, you can easily create, edit and delete notes, and categorize them with tags or colors for better organization. '
                + 'The app also syncs your notes automatically across all your devices, so you can access your information whenever you need it, even offline. '
                + 'With extra features such as media attachments, reminders and sharing options, our notes app gives you the flexibility and functionality you need to keep your ideas under control and boost your everyday productivity.',
            url: PT.projects[6].url,
        },
        {
            name: 'Agenda',
            description: 'Our Android planner app is an essential tool for organizing your life efficiently and productively. '
                + 'With an intuitive, friendly interface, you can easily schedule appointments, events and reminders, keeping everything organized and accessible in one place. '
                + 'We also offer powerful features such as cloud sync, which keeps your information up to date across all your devices and gives you instant access wherever you are. '
                + 'Customize your calendars with categories, colors and alarms to make the experience even better suited to your needs. '
                + 'Whether you are managing work, studies or personal life, our planner app gives you the convenience and efficiency you need to stay in control and reach your goals with ease.',
            url: PT.projects[7].url,
        },
    ],

    education: [{ ...PT.education[0], course: 'Information Systems' }],

    skillGroups: [
        { ...PT.skillGroups[0], title: 'Languages' },
        { ...PT.skillGroups[1], title: 'Frameworks' },
        { ...PT.skillGroups[2], title: 'Technologies' },
        { ...PT.skillGroups[3], title: 'Design' },
    ],

    languages: [
        { name: 'Portuguese', nameLevel: 'Native', level: 'C2' },
        { name: 'English', nameLevel: 'Intermediate', level: 'B1' },
        { name: 'Spanish', nameLevel: 'Intermediate', level: 'B1' },
        { name: 'French', nameLevel: 'Basic', level: 'A1' },
        { name: 'Slovak', nameLevel: 'Basic', level: 'A1' },
    ],
};
