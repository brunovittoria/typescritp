
interface LojaProps{
    nome: string
    adress: string
    status: boolean
}

const BurguerK: LojaProps = {
    nome: "Burguer King",
    adress: "Av. das americas",
    status: true
}

console.log(BurguerK)

function novaLoja({ nome, adress, status }: LojaProps): void{

    console.log(`Loja ${nome} criada com sucesso`)
    console.log(`Endereço da loja ${adress}`)
    console.log(`Status da loja ${status}`)
}

novaLoja({nome: "Mc", adress: "Av. Americas", status: false})