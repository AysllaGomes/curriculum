import { Resume } from '../shared/models/resume.model';
import { fillYears } from '../shared/utils/dates';

/**
 * Dados estruturados (schema.org, formato JSON-LD) da página: uma página de perfil (`ProfilePage`) cuja pessoa
 * principal é a autora. O Google usa isso para ligar o site ao nome dela, ao cargo, à empresa e aos perfis
 * (LinkedIn, GitHub). Vai no <head> de cada idioma, gerado no build (ver head.ts).
 * Teste no https://search.google.com/test/rich-results depois de publicar.
 */
export function structuredData(resume: Resume, pageUrl: string, inLanguage: string): object {
    const { profile, experiences, skillGroups } = resume;
    const current = experiences.find(e => !e.end);

    return {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: pageUrl,
        inLanguage,
        name: `${profile.shortName} · ${profile.role}`,
        description: `${fillYears(profile.headline, experiences)} ${profile.focus}`,
        mainEntity: {
            '@type': 'Person',
            name: profile.name,
            alternateName: profile.shortName,
            jobTitle: profile.role,
            ...(current ? { worksFor: { '@type': 'Organization', name: current.company } } : {}),
            image: profile.photoUrl,
            email: `mailto:${profile.email}`,
            address: { '@type': 'PostalAddress', addressLocality: 'Planaltina', addressRegion: 'GO', addressCountry: 'BR' },
            sameAs: [profile.links.linkedin, profile.links.github],
            knowsAbout: skillGroups.flatMap(g => g.skills),
            knowsLanguage: resume.languages.map(l => l.name),
        },
    };
}
