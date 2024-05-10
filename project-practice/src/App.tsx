import './App.css'
//import { Nome } from './components/nome' //Importamos assim pois nome.tsx esta como: export function Nome ()
import { Header } from './components/header'
import { useState, FormEvent, useRef } from 'react'

interface UserProps{
  nome: string;
  cargo: string;
}


function App() {

  const nameRef = useRef<HTMLInputElement>(null)  //podemos usar o useRef para evitar renderizacoes desnecessarias e assim deixar de usar o useState
  const [users, setUsers] = useState<UserProps[]>([]) //Iremos criar uma lista agora
  const cargoRef = useRef<HTMLInputElement>(null)

  //function trocaValorInput(event: ChangeEvent<HTMLInputElement>){     //Normalmente se tivermos em um projeto grande iremos perceber esse padrao
    //setInput(event.target.value)
  //}

  function handleRegister(event: FormEvent) {
    event.preventDefault()

    if(!nameRef.current?.value || !cargoRef.current?.value ) {
      alert("PREENCHA OS CAMPOS")
      return
    }

    let user = {
      nome: nameRef.current?.value,
      cargo: cargoRef.current?.value
    }

    setUsers(values => [...values, user]) //O ...values serve para que obtenha os valores precedentes que tinham no useState + o valor do name ref

    console.log(nameRef.current?.value)
  }

  return (
    <main>
      <Header nome="REACT + TYPESCRIPT" description="Alguma Descriçao de teste a"/>

    <form onSubmit={handleRegister}>
      <label>NOME: </label>
      <input
        type="text"
        placeholder="Digite seu nome..."
        ref={nameRef}
        //onChange={trocaValorInput} //OU = {(event) => setInput(event.target.value)}
      />

      <label>CARGO: </label>
      <input
        type="text"
        placeholder="Digite seu cargo..."
        ref={cargoRef}
      />
      
      <br></br>
      <button type="submit">CADASTRAR</button>
    </form>

    {users.map(user => (
      <div>
        <br/>
          <h1>{user.cargo}</h1>
        <br/>
      </div>
    ))}

    </main>
  )
}

export default App
