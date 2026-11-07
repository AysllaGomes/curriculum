import { Resume } from '../shared/models/resume.model';
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

    projects: [
        {
            name: 'Interstate Mobility Center',
            description: 'La nostra app offre un\'esperienza moderna e intuitiva per pianificare e prenotare viaggi interstatali. '
                + 'Con un\'interfaccia semplice da usare, gli utenti possono esplorare un\'ampia varietà di destinazioni, visualizzare le opzioni di trasporto, inclusi autobus e treni, controllare orari e prezzi ed effettuare prenotazioni direttamente dall\'app. '
                + 'Inoltre, forniamo informazioni dettagliate sulle destinazioni, tra cui attrazioni turistiche, ristoranti e alloggi, per garantire un viaggio pianificato alla perfezione e personalizzato per ogni utente. '
                + 'Con pagamenti sicuri e assistenza clienti integrata, rendiamo l\'esperienza di viaggio più comoda e senza complicazioni. Preparati a un viaggio senza pari con la nostra app di viaggi interstatali.',
            url: PT.projects[0].url,
        },
        {
            name: 'React Hooks',
            description: 'Il nostro progetto ha l\'obiettivo di migliorare le prestazioni e l\'efficienza di React attraverso personalizzazioni accurate del suo ciclo di vita. '
                + 'Ci dedichiamo a esplorare e ottimizzare ogni aspetto di React, dal montaggio allo smontaggio dei componenti, per raggiungere le massime prestazioni possibili. '
                + 'Inoltre, ci impegniamo ad acquisire e condividere una conoscenza approfondita delle migliori pratiche e tecniche, per poterle applicare nei progetti futuri. '
                + 'Concentrandoci sull\'ottimizzazione di React, gettiamo le basi per sviluppare applicazioni più veloci, reattive e scalabili in futuro.',
            url: PT.projects[1].url,
        },
        { name: 'UI Controllo Finanziario', url: PT.projects[2].url },
        { name: 'Controllo Finanziario', url: PT.projects[3].url },
        { name: 'Red Switch', url: PT.projects[4].url },
        { name: 'API PetShop', url: PT.projects[5].url },
        {
            name: 'Ceep',
            description: 'La nostra app di note per Android offre un\'esperienza intuitiva ed efficiente per annotare e organizzare idee, promemoria e attività ovunque e in qualsiasi momento. '
                + 'Con un\'interfaccia pulita e semplice da usare, puoi creare, modificare ed eliminare le note con facilità, oltre a classificarle con tag o colori per organizzarle meglio. '
                + 'Inoltre, l\'app sincronizza automaticamente le note su tutti i tuoi dispositivi, così puoi accedere alle tue informazioni ogni volta che ne hai bisogno, anche offline. '
                + 'Con funzioni aggiuntive come allegati multimediali, promemoria e opzioni di condivisione, la nostra app di note ti offre la flessibilità e le funzionalità di cui hai bisogno per tenere sotto controllo le tue idee e aumentare la tua produttività quotidiana.',
            url: PT.projects[6].url,
        },
        {
            name: 'Agenda',
            description: 'La nostra app di agenda per Android è uno strumento indispensabile per organizzare la tua vita in modo efficiente e produttivo. '
                + 'Con un\'interfaccia intuitiva e semplice da usare, puoi pianificare facilmente appuntamenti, eventi e promemoria, mantenendo tutto organizzato e accessibile in un unico posto. '
                + 'Inoltre, offriamo funzioni potenti come la sincronizzazione nel cloud, che mantiene le tue informazioni sempre aggiornate su tutti i tuoi dispositivi e ti permette di accedervi all\'istante ovunque tu sia. '
                + 'Personalizza le tue agende con categorie, colori e sveglie per rendere l\'esperienza ancora più adatta alle tue esigenze. '
                + 'Che tu debba gestire il lavoro, lo studio o la vita personale, la nostra app di agenda ti offre la praticità e l\'efficienza di cui hai bisogno per mantenere il controllo e raggiungere i tuoi obiettivi con facilità.',
            url: PT.projects[7].url,
        },
    ],

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
