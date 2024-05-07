
interface NomeProps {
    aluno: string | number
    idade: number
}


export function Nome({ aluno, idade }: NomeProps){
    return(
        <>
            <h1>Bem Vindo: {aluno}</h1>
            <h2>Idade: {idade}</h2>
        </>
    )
}