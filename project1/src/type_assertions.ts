//Afirmando algum tipo

let statusAtual: unknown = 1

let mudaStatus: number = 0

//Estamos afirmando que o statusAtual é de fato um numero

mudaStatus = statusAtual as number //Sem o as number daria um erro, pois o unknown n deixaria

//Outra maneira de afirmar o tipo
mudaStatus = <number>statusAtual

console.log(mudaStatus)

let query: unknown = "pizza"

let searchTerm: string = query as string

console.log(searchTerm)