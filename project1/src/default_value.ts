//Como deixar um valor por default ou deixar ele opcional.

function cadastro(email: string, senha: string, nome?: string): void {
    let data = {email, senha, nome}

    console.log(data)
}

cadastro("teste@gmail.com", "123123", "Bruno")

function cadastroLoja(nome: string, email: string, status = false){
    console.log("Status atual: ", nome + " " + email + " " + status)
}

cadastroLoja("Bruno", "brunoemail.com")