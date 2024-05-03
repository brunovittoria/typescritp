
interface CadastroProps{
    nome?: string
    email: string
    status: boolean
}

const novoUsuario: CadastroProps = {
    email: "matheus@teste.com",
    status: true,
}

function novoUser({nome, email, status}: CadastroProps){
    console.log(nome)
}

function novoUser2(props: CadastroProps){
    console.log(props.email)
}

novoUser({  email: "bruno@bruno.com", status: false })
