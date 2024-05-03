//Passamo uma interface para dentro de outra em formato de array

interface TecnologiaProps{
    id: string
    nome: string
    description: string
}

interface NomeProps{
    tecnologia: TecnologiaProps[]
}

let frontend : NomeProps = {
    tecnologia : [
        { id: "12", nome: "Next", description: "Framework SEO"},
        { id: "11", nome: "React", description: "Framework FE"}
    ]
}

console.log(frontend)