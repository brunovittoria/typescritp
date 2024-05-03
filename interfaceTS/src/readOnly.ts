interface ProdutoProps{
    readonly id: string
    nome: string
    description: string
}

let produto1: ProdutoProps = {
    id: "1",
    nome: "Macbook",
    description: "Prop m2"
}

produto1.nome = "Notebook"

console.log(produto1)