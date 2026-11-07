// Depois do build: o GitHub Pages precisa de um index.html na raiz e de um 404.html.
// As páginas de cada idioma (pt/, en/, es/, it/) já saem prontas do pré-render; a raiz e os
// endereços desconhecidos usam a versão que roda no navegador (index.csr.html), que manda
// a pessoa para o idioma dela.
import { copyFile } from 'node:fs/promises';

const dir = 'dist/curriculum/browser';
for (const target of ['index.html', '404.html']) {
    await copyFile(`${dir}/index.csr.html`, `${dir}/${target}`);
}
console.log('index.html e 404.html criados a partir de index.csr.html');
