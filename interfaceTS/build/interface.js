"use strict";
const BurguerK = {
    nome: "Burguer King",
    adress: "Av. das americas",
    status: true
};
console.log(BurguerK);
function novaLoja({ nome, adress, status }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço da loja ${adress}`);
    console.log(`Status da loja ${status}`);
}
novaLoja({ nome: "Mc", adress: "Av. Americas", status: false });
