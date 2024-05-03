"use strict";
//Como deixar um valor por default ou deixar ele opcional.
function cadastro(email, senha, nome) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro("teste@gmail.com", "123123", "Bruno");
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual: ", nome + " " + email + " " + status);
}
cadastroLoja("Bruno", "brunoemail.com");
