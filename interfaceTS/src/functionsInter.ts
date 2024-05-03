
interface cursoProps{
    id: string
    nome: string
    price: number

    //Podemos definir apenas a funçao e oque ela deve esperar como params e retornar
    promocao: (price: number) => void
}

const novoCurso : cursoProps = {
    id: "1",
    nome: "Curso Typescript",
    price: 200,
    promocao: mostraPromocao
}

function mostraPromocao(price: number): void{
    console.log(`Promocao no curso por apenas: R$ ${price}`)
}

console.log(novoCurso.promocao(350))

//Passando funçao diretamente no objeto:

const novoCurso2 : cursoProps = {
    id: "1",
    nome: "Curso Typescript",
    price: 200,
    promocao: (price: number): void => {
        console.log("TOTAL PRICE: ", price)
    }
}

console.log(novoCurso2)

console.log(novoCurso2.promocao(340))

//////////

interface SomaProps{
    (valor1: number, valor2: number): number
}

let somaNumeros : SomaProps = (valor1: number, valor2: number): number => {
    console.log("RESULTADO: ", valor1 + valor2)

    return valor1 + valor2
}

const resultado = somaNumeros(13, 7)

console.log("Resultado da variavel: ", resultado)