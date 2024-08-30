const nomes = ["Junior", "Julimar", "Maria Eduarda", "Mário", "Maycon", "Pedro", "Andriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)