/** Endereço para ler no papel: "https://www.linkedin.com/in/fulana/" → "linkedin.com/in/fulana". */
export function displayUrl(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
}
