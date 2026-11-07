import { Resume } from '../shared/models/resume.model';
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

    projects: [
        {
            name: 'Interstate Mobility Center',
            description: 'Nuestra aplicación ofrece una experiencia moderna e intuitiva para planificar y reservar viajes interestatales. '
                + 'Con una interfaz amigable, los usuarios pueden explorar una gran variedad de destinos, ver opciones de transporte, incluidos autobuses y trenes, consultar horarios y precios, y hacer reservas directamente en la aplicación. '
                + 'Además, ofrecemos información detallada sobre los destinos, incluidos puntos turísticos, restaurantes y opciones de alojamiento, para garantizar un viaje perfectamente planificado y personalizado para cada usuario. '
                + 'Con pago seguro y atención al cliente integrada, hacemos que viajar sea más cómodo y sin complicaciones. Prepárate para un viaje sin igual con nuestra aplicación de viajes interestatales.',
            url: PT.projects[0].url,
        },
        {
            name: 'React Hooks',
            description: 'Nuestro proyecto tiene como objetivo mejorar el rendimiento y la eficiencia de React mediante personalizaciones cuidadosas de su ciclo de vida. '
                + 'Nos dedicamos a explorar y optimizar cada aspecto de React, desde el montaje hasta el desmontaje de los componentes, para alcanzar el máximo rendimiento posible. '
                + 'Además, nos comprometemos a adquirir y compartir un conocimiento profundo sobre las mejores prácticas y técnicas, para poder aplicarlas en proyectos futuros. '
                + 'Al centrarnos en la optimización de React, preparamos el terreno para desarrollar aplicaciones más rápidas, receptivas y escalables en el futuro.',
            url: PT.projects[1].url,
        },
        { name: 'UI Control Financiero', url: PT.projects[2].url },
        { name: 'Control Financiero', url: PT.projects[3].url },
        { name: 'Red Switch', url: PT.projects[4].url },
        { name: 'API PetShop', url: PT.projects[5].url },
        {
            name: 'Ceep',
            description: 'Nuestra aplicación de notas para Android ofrece una experiencia intuitiva y eficiente para capturar y organizar tus ideas, recordatorios y tareas en cualquier lugar y en cualquier momento. '
                + 'Con una interfaz limpia y amigable, puedes crear, editar y eliminar notas fácilmente, además de clasificarlas con etiquetas o colores para organizarte mejor. '
                + 'La aplicación también sincroniza automáticamente tus notas en todos tus dispositivos, para que tengas acceso a tu información siempre que la necesites, incluso sin conexión. '
                + 'Con funciones adicionales como archivos multimedia adjuntos, recordatorios y opciones para compartir, nuestra aplicación de notas te ofrece la flexibilidad y la funcionalidad que necesitas para mantener tus ideas bajo control y aumentar tu productividad en el día a día.',
            url: PT.projects[6].url,
        },
        {
            name: 'Agenda',
            description: 'Nuestra aplicación de agenda para Android es una herramienta indispensable para organizar tu vida de forma eficiente y productiva. '
                + 'Con una interfaz intuitiva y amigable, puedes programar fácilmente citas, eventos y recordatorios, manteniendo todo organizado y accesible en un solo lugar. '
                + 'Además, ofrecemos funciones potentes, como la sincronización en la nube, que mantiene tu información siempre actualizada en todos tus dispositivos y te permite acceder a ella al instante dondequiera que estés. '
                + 'Personaliza tus agendas con categorías, colores y alarmas para que la experiencia se adapte aún más a tus necesidades. '
                + 'Ya sea para gestionar tu trabajo, tus estudios o tu vida personal, nuestra aplicación de agenda te ofrece la practicidad y la eficiencia que necesitas para mantener el control y alcanzar tus objetivos con facilidad.',
            url: PT.projects[7].url,
        },
    ],

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
