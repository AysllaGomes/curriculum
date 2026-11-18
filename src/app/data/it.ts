import { Resume } from '../shared/models/resume.model';
import { projectsFor } from './projects';
import { translateExperiences } from './translate';
import { RESUME_PT_BR as PT } from './pt-BR';

/**
 * Currículo em italiano. Só os textos são traduzidos: datas, links, empresas, clientes e os títulos
 * de cursos e certificados (são os nomes que estão nos certificados) vêm do pt-BR.
 */
export const RESUME_IT: Resume = {
    ...PT,

    profile: {
        ...PT.profile,
        role: 'Architetta Front-end',
        headline: 'Architetta Front-end con {anos} anni di esperienza nella costruzione di sistemi per il settore finanziario e pubblico.',
        summary: 'In Mirante Tecnologia, per Sicoob, ho guidato il passaggio da un front-end monolitico ai microfrontend e definisco '
            + 'l\'architettura front-end del percorso carte, supportando i team che lo utilizzano. In precedenza ho lavorato cinque anni '
            + 'su Spid, la soluzione di mobilità urbana del Banco do Brasil, tramite EngeSoftware e IBM: ho seguito il prodotto fin '
            + 'dall\'inizio, sono stata referente tecnica dell\'area post-viaggio e ho proposto la migrazione del portale da React ad Angular. '
            + 'Nel governo federale sono stata responsabile tecnica di un contratto con 74 persone presso il Ministero dell\'Economia. '
            + 'Ho una formazione full stack, con Java, Node.js e PHP, e lavoro con OpenShift e pipeline CI/CD. Nel tempo libero '
            + 'esploro strumenti di IA per lo sviluppo, come il server MCP presente nei miei progetti.',
        city: 'Planaltina/GO, Brasile',
    },

    experiences: translateExperiences(PT.experiences, {
        'Mirante Tecnologia': {
            summary: 'Architetta front-end in un team di 5 sviluppatori, con PO e manager, responsabile delle scelte front-end '
                + 'del nuovo percorso carte; assumo la guida tecnica quando serve.',
            highlights: [
                'Ho guidato il passaggio da un front-end monolitico a 6 microfrontend, ciascuno con pipeline e deploy indipendenti, '
                    + 'e supporto i team verticali che li utilizzano.',
                'Ho creato una libreria di componenti condivisa tra i microfrontend, allineata al design system di Sicoob e retrocompatibile.',
                'Percorso carte: richiesta e sostituzione della carta, consultazioni, autorizzazione, riconciliazione e configurazione dei circuiti.',
                'Ho rilasciato l\'MVP per la migrazione dei soci tra cooperative 2 settimane prima della scadenza, partendo da un requisito '
                    + 'informale, e ho assorbito un cambio di perimetro tardivo in 2 giorni.',
            ],
        },
        'IBM': {
            summary: 'Spid, la soluzione di mobilità urbana del Banco do Brasil per il settore pubblico, in un team di 20 persone '
                + 'insieme alle aree tecnologia e business della banca.',
            highlights: [
                'Referente tecnica dell\'area post-viaggio: fatturazione, riconciliazione tra l\'importo preventivato e quello finale '
                    + 'degli operatori di trasporto, registrazioni contabili e portale di approvazione delle fatture.',
                'Ho realizzato la fatturazione asincrona con code di messaggi (RabbitMQ, poi Kafka) e rifatturazione automatica '
                    + 'quando l\'operatore invia l\'importo finale.',
                'Ho proposto e guidato la migrazione del portale da React ad Angular: schermate più leggere, navigazione più rapida '
                    + 'e bug quasi azzerati.',
                'Ho sviluppato il sito istituzionale del prodotto (spid.bb.com.br) in Next.js e seguito l\'evoluzione del back-end da Node 10 a 24.',
            ],
        },
        'Life Tecnologia e Consultoria': {
            summary: 'Responsabile tecnica di un contratto con 74 persone, al servizio dell\'ex MDIC e degli enti confluiti '
                + 'nel Ministero dell\'Economia.',
            highlights: [
                'Avalia-me, sistema di valutazione per l\'indennità dei dipendenti pubblici: 35 rilasci in 6 mesi, '
                    + 'con la continuità del contratto legata a ciascuno.',
                'Sistemi PAB e CAMEX, e sistema di rilevazione presenze con biometria e geolocalizzazione in C#.',
                'Ho configurato le pipeline di deploy degli ambienti di test, collaudo e produzione.',
            ],
        },
        'Basis Tecnologia da Informação': {
            summary: 'Stagista e poi sviluppatrice junior, nella manutenzione ed evoluzione di sistemi dei ministeri.',
            highlights: [
                'Cartão Reforma (Ministero delle Città), sistemi del FNDE e del MDIC, come l\'Ombudsman degli Investimenti Diretti (OID) '
                    + 'e il Programma dell\'Artigianato Brasiliano.',
            ],
        },
    }),

    projects: projectsFor('it'),

    education: [{ ...PT.education[0], course: 'Sistemi Informativi' }],

    skillGroups: [
        { ...PT.skillGroups[0], title: 'Architettura' },
        { ...PT.skillGroups[1], title: 'Back-end' },
        { ...PT.skillGroups[2], title: 'Front-end' },
        { ...PT.skillGroups[3], title: 'Dati' },
        { ...PT.skillGroups[4], title: 'DevOps' },
    ],

    languages: [
        { name: 'Portoghese', nameLevel: 'Madrelingua', level: 'C2' },
        { name: 'Italiano', nameLevel: 'Fluente', level: 'C1' },
        { name: 'Inglese', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Spagnolo', nameLevel: 'Intermedio', level: 'B1' },
        { name: 'Francese', nameLevel: 'Base', level: 'A1' },
        { name: 'Slovacco', nameLevel: 'Base', level: 'A1' },
    ],
};
