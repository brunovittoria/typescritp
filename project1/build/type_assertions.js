"use strict";
//Afirmando algum tipo
let statusAtual = 1;
let mudaStatus = 0;
//Estamos afirmando que o statusAtual é de fato um numero
mudaStatus = statusAtual; //Sem o as number daria um erro, pois o unknown n deixaria
//Outra maneira de afirmar o tipo
mudaStatus = statusAtual;
console.log(mudaStatus);
let query = "pizza";
let searchTerm = query;
console.log(searchTerm);
