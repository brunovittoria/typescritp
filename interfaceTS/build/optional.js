"use strict";
const novoUsuario = {
    email: "matheus@teste.com",
    status: true,
};
function novoUser({ nome, email, status }) {
    console.log(nome);
}
function novoUser2(props) {
    console.log(props.email);
}
novoUser({ email: "bruno@bruno.com", status: false });
