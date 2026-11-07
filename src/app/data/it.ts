import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';
import { RESUME_PT_BR as PT } from './pt-BR';

/**
 * Currículo em italiano. Só os textos são traduzidos: datas, links, empresas, clientes e os títulos
 * de cursos e certificados (são os nomes que estão nos certificados) vêm do pt-BR.
 */
export const RESUME_IT: Resume = {
    ...PT,

    profile: {
        ...PT.profile,
        role: 'Architetta Software',
        headline: 'Studiosa instancabile, sempre pronta a immergermi in nuove tecnologie e ad affrontare sfide stimolanti.',
        summary: 'Come Architetta Software, sono costantemente alla ricerca del successo professionale, spinta dalla mia dedizione, '
            + 'dalla passione per l\'apprendimento e dal rigore che pretendo da me stessa. Sono una studiosa instancabile, sempre pronta '
            + 'a immergermi in nuove tecnologie e ad affrontare sfide stimolanti. In ogni ostacolo vedo un\'opportunità di crescita e di superamento. '
            + 'Determinata e impegnata, sono pronta ad affrontare qualsiasi sfida la carriera mi presenti.',
        city: 'Planaltina/GO, Brasile',
    },

    projects: projectsFor('it'),

    education: [{ ...PT.education[0], course: 'Sistemi Informativi' }],

    skillGroups: [
        { ...PT.skillGroups[0], title: 'Linguaggi' },
        { ...PT.skillGroups[1], title: 'Framework' },
        { ...PT.skillGroups[2], title: 'Tecnologie' },
        { ...PT.skillGroups[3], title: 'Design' },
    ],

    languages: [
        { name: 'Portoghese', nameLevel: 'Madrelingua', level: 'C2' },
        { name: 'Inglese', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Spagnolo', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Francese', nameLevel: 'Base', level: 'A1' },
        { name: 'Slovacco', nameLevel: 'Base', level: 'A1' },
    ],
};
