import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';
import { translateExperiences } from './translate';
import { RESUME_PT_BR as PT } from './pt-BR';

/**
 * Currículo em espanhol. Só os textos são traduzidos: datas, links, empresas, clientes e os títulos
 * de cursos e certificados (são os nomes que estão nos certificados) vêm do pt-BR.
 */
export const RESUME_ES: Resume = {
    ...PT,

    profile: {
        ...PT.profile,
        role: 'Arquitecta Front-end',
        headline: 'Arquitecta Front-end con {anos} años construyendo sistemas para el sector financiero y público.',
        focus: 'Angular, microfrontends, Java y Node.js.',
        summary: 'En Mirante Tecnologia, atendiendo a Sicoob, conduje la transición de un front-end monolítico a microfrontends '
            + 'y defino la arquitectura front-end del flujo de tarjetas, orientando a los squads que lo utilizan. Antes, pasé cinco años '
            + 'en Spid, la solución de movilidad urbana del Banco do Brasil, a través de EngeSoftware e IBM: acompañé el producto '
            + 'desde su inicio, lideré técnicamente el frente de posviaje y propuse la migración del portal de React a Angular. '
            + 'En el gobierno federal, fui responsable técnica de un contrato con 74 personas en el Ministerio de Economía. '
            + 'Mi base es full stack, con Java, Node.js y PHP, y trabajo con OpenShift y pipelines de CI/CD. Fuera del trabajo, '
            + 'exploro herramientas de IA para desarrollo, como el servidor MCP que está en mis proyectos.',
        city: 'Planaltina/GO, Brasil',
    },

    experiences: translateExperiences(PT.experiences, {
        'Mirante Tecnologia': {
            summary: 'Arquitecta Front-end en un equipo de 5 desarrolladores, con PO y gerente, responsable de las decisiones '
                + 'de front-end del nuevo flujo de tarjetas; asumo el liderazgo técnico cuando es necesario.',
            highlights: [
                'Conduje la transición de un front-end monolítico a 6 microfrontends, cada uno con pipeline y despliegue independientes, '
                    + 'y oriento a los squads verticales que los usan.',
                'Creé una biblioteca de componentes compartida entre los microfrontends, alineada con el design system de Sicoob y retrocompatible.',
                'Flujo de tarjetas: solicitud y reposición de tarjetas, consultas, autorización, conciliación y configuración de marcas.',
                'Entregué el MVP de migración de socios entre cooperativas 2 semanas antes del plazo, a partir de un requisito informal, '
                    + 'y absorbí un cambio de alcance tardío en 2 días.',
            ],
        },
        'IBM': {
            summary: 'Spid, la solución de movilidad urbana del Banco do Brasil para el sector público, en un equipo de 20 personas '
                + 'junto a las áreas de tecnología y de negocio del banco.',
            highlights: [
                'Lideré técnicamente el frente de posviaje: facturación, conciliación del valor cotizado con el valor final de los '
                    + 'operadores de transporte, asientos contables y portal de aprobación de facturas.',
                'Construí la facturación asíncrona con colas de mensajería (RabbitMQ y luego Kafka) y refacturación automática '
                    + 'cuando el operador envía el valor final.',
                'Propuse y conduje la migración del portal de React a Angular: pantallas más ligeras, navegación más rápida '
                    + 'y errores prácticamente eliminados.',
                'Desarrollé el sitio institucional del producto (spid.bb.com.br) en Next.js y acompañé la evolución del back-end de Node 10 a 24.',
            ],
        },
        'Life Tecnologia e Consultoria': {
            summary: 'Responsable técnica de un contrato con 74 personas, que atendía al antiguo MDIC y a los órganos incorporados '
                + 'al Ministerio de Economía.',
            highlights: [
                'Avalia-me, sistema de evaluación para la gratificación de servidores públicos: 35 entregas en 6 meses, '
                    + 'con la continuidad del contrato dependiendo de ellas.',
                'Sistemas PAB y CAMEX, y sistema de control horario con biometría y geolocalización en C#.',
                'Configuré los pipelines de despliegue de los entornos de pruebas, homologación y producción.',
            ],
        },
        'Basis Tecnologia da Informação': {
            summary: 'Pasante y después desarrolladora júnior, en el mantenimiento y la evolución de sistemas de ministerios.',
            highlights: [
                'Cartão Reforma (Ministerio de las Ciudades), sistemas del FNDE y del MDIC, como el Ombudsman de Inversiones '
                    + 'Directas (OID) y el Programa de Artesanía Brasileña.',
            ],
        },
    }),

    projects: projectsFor('es'),

    education: [{ ...PT.education[0], course: 'Sistemas de Información' }],

    skillGroups: [
        { ...PT.skillGroups[0], title: 'Arquitectura' },
        { ...PT.skillGroups[1], title: 'Back-end' },
        { ...PT.skillGroups[2], title: 'Front-end' },
        { ...PT.skillGroups[3], title: 'Datos' },
        { ...PT.skillGroups[4], title: 'DevOps' },
    ],

    languages: [
        { name: 'Portugués', nameLevel: 'Nativo', level: 'C2' },
        { name: 'Italiano', nameLevel: 'Fluido', level: 'C1' },
        { name: 'Inglés', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Español', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Francés', nameLevel: 'Básico', level: 'A1' },
        { name: 'Eslovaco', nameLevel: 'Básico', level: 'A1' },
    ],
};
