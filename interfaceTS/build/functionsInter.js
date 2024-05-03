"use strict";
const novoCurso = {
    id: "1",
    nome: "Curso Typescript",
    price: 200,
    promocao: mostraPromocao
};
function mostraPromocao(price) {
    console.log(`Promocao no curso por apenas: R$ ${price}`);
}
console.log(novoCurso.promocao(350));
//Passando funçao diretamente no objeto:
const novoCurso2 = {
    id: "1",
    nome: "Curso Typescript",
    price: 200,
    promocao: (price) => {
        console.log("TOTAL PRICE: ", price);
    }
};
console.log(novoCurso2);
console.log(novoCurso2.promocao(340));
let somaNumeros = (valor1, valor2) => {
    console.log("RESULTADO: ", valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(13, 7);
console.log("Resultado da variavel: ", resultado);
