"use strict";
function totalVendas(...vendas) {
    const quantidadeDeVendas = vendas.length;
    console.log(`Voce fez ${quantidadeDeVendas} vendas hoje!`);
}
totalVendas(10, 30, 25, 15, 90, 30);
function mostraNomes(...nomes) {
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Bruno", "Joyce", "Dalila");
