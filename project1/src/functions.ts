
function funcaoNoReturn(idade: number):void{
    let message = "Eu tenho " + idade

    console.log(message)

    //return(message)     //Se colocarmos um return dara erro pois acima especificamos que o retorno da funçao sera vazio!
}

funcaoNoReturn(25)

function souLindo(resposta: string):boolean{
    let message = "Sou lindo " + resposta
    console.log(message)

    return true
}

const retornoFuncao = souLindo("Demais") //Mesmo ao definir uma nova variavel para a funçao, por default tera o tipo do retorno da funçao, ou seja BOOLEAN

console.log(retornoFuncao)

//Retornando mais de um tipo com union type
function login(username: string):boolean | string{
    let message = "Bem vindo " + username
    console.log(message)

    return username
}

const usernameLogin = login("Bruno") //Nesse caso ira retornar string

console.log(usernameLogin)

//Outro exemplo de calculos:

let n1: number = 10
let n2: string = "24"

function soma(valor1: number, valor2: number): number {
    let soma = valor1 + valor2
    return soma
}

//console.log(soma(n1, n2)) //Aqui ja da um erro e nao aceita o n2 por nao ser um numero.

function soma2(valor1: number, valor2: number): string {
    let soma = valor1 + valor2
    
    if(soma > 20){
        return 'SOMA MAIOR QUE 20'
    } else{
        return "MENOR QUE 20"
    }
}

console.log(soma2(10,40))