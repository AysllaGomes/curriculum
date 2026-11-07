export interface PersonalProject {
    /** Nome para exibição ("Pet Health API"), gerado a partir do nome do repositório */
    name: string;
    description?: string;
    /** Repositório no GitHub */
    url: string;
    /** Linguagem principal, segundo o GitHub */
    language?: string;
    /** Tópicos do repositório (sem o "portfolio") */
    topics: string[];
    /** Site ou demonstração (campo "Website" do repositório) */
    homepage?: string;
}
