import { Injectable } from "@angular/core";

import { PersonalProject } from "../models/personal-project.model";

@Injectable({
    providedIn: 'root'
})
export class PersonalProjectService {
    getPersonalProjects(): PersonalProject[] {
        return [
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
            {
                name: 'UI Controle Financeiro',
                url: 'https://github.com/AysllaGomes/financeiro-ui',
            },
            {
                name: 'Controle Financeiro',
                url: 'https://github.com/AysllaGomes/controle-financeiro',
            },
            {
                name: 'Red Switch',
                url: 'https://github.com/AysllaGomes/red-switch-realistic',
            },
            {
                name: 'API PetShop',
                url: 'https://github.com/AysllaGomes/petshop',
            },
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
        ];
    }
}
