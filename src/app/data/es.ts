import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';
import { RESUME_PT_BR as PT } from './pt-BR';

/**
 * Currículo em espanhol. Só os textos são traduzidos: datas, links, empresas, clientes e os títulos
 * de cursos e certificados (são os nomes que estão nos certificados) vêm do pt-BR.
 */
export const RESUME_ES: Resume = {
    ...PT,

    profile: {
        ...PT.profile,
        role: 'Arquitecta de Software',
        headline: 'Estudiosa incansable, siempre lista para sumergirme en nuevas tecnologías y afrontar desafíos estimulantes.',
        summary: 'Como Arquitecta de Software, busco constantemente el éxito profesional, impulsada por mi dedicación, '
            + 'mi pasión por el aprendizaje y mi nivel de exigencia personal. Soy una estudiosa incansable, siempre lista para sumergirme '
            + 'en nuevas tecnologías y afrontar desafíos estimulantes. En cada obstáculo veo una oportunidad de crecimiento y superación. '
            + 'Decidida y comprometida, estoy preparada para enfrentar cualquier desafío que me presente la carrera.',
        city: 'Planaltina/GO, Brasil',
    },

    projects: projectsFor('es'),

    education: [{ ...PT.education[0], course: 'Sistemas de Información' }],

    skillGroups: [
        { ...PT.skillGroups[0], title: 'Lenguajes' },
        { ...PT.skillGroups[1], title: 'Frameworks' },
        { ...PT.skillGroups[2], title: 'Tecnologías' },
        { ...PT.skillGroups[3], title: 'Diseño' },
    ],

    languages: [
        { name: 'Portugués', nameLevel: 'Nativo', level: 'C2' },
        { name: 'Inglés', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Español', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Francés', nameLevel: 'Básico', level: 'A1' },
        { name: 'Eslovaco', nameLevel: 'Básico', level: 'A1' },
    ],
};
