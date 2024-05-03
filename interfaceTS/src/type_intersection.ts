// Type ALIAS | Conseguimos criar tipos mais poderosos, com mais informacoes do que tipos primitivos

//Basicamente o intersection é como o extends com as interfaces, porem ele vai servir para herdar tipos 

type Info = {
    id: number
    nome: string
    description?: string
}

const produtoInfo: Info = {
    id: 113,
    nome: "Macbook",
}

type Categoria = {
    url: string
    quantidadeProduto: number
}

const categoria1: Categoria = {
    url: "software",
    quantidadeProduto: 2
}

type infoProduct = Info & Categoria     //infoProduct é a intercessao (UNIAO) entre info e categoria

const novoProduto: infoProduct = {
    id: 34324,
    nome: "TECLADO RGB",
    url: "teste",
    quantidadeProduto: 10
}

console.log(novoProduto)