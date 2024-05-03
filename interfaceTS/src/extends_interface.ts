

interface JogoProps{
    readonly id: string
    nome: string
    plataforma: string[]
}

const left4dead: JogoProps = {
    id: "20",
    nome: "Left 4 Dead",
    plataforma: ["PLAY", "XBOX"]
}

interface DLC extends JogoProps { //Ao usar o extends iremos heardar a interface JogoProps para nossa interface DLC
    jogoOriginal: JogoProps,
    novoConteudo: string[]
}

const left4deadDLC: DLC = {
    id: "90",
    nome: "L4D NOVOS MAPAS",
    plataforma: ["PLAY", "NINTENDO WII"],
    novoConteudo: ["Modo Online", "+ Mapas"],
    jogoOriginal: left4dead
}

console.log(left4deadDLC)


