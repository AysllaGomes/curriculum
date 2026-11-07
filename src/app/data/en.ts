import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';
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

    projects: projectsFor('en'),

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
