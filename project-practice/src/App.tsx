import './App.css'
import { Nome } from './components/nome' //Importamos assim pois nome.tsx esta como: export function Nome ()
import { Header } from './components/header'
import { useState } from 'react'

interface UserProps {
  nome: string
  cargo: string
  salario: number
}

function App() {
  const [nome, setNome] = useState<string>("Sem nome...")
  const [user, setUser] = useState<UserProps>()

  function mudarNome(){
    setNome("Bruno Vittoria")
  }

  function mudarUser() {
    setUser({
      nome: "Bruno",
      cargo: "Developer",
      salario: 20000
    })
  }

  return (
    <main>
      <Header nome="TESTE"/>

      <Nome aluno="Bruno" idade= {25}/>
      <Nome aluno="Joyce" idade= {28}/>
      <Nome aluno="Gigi"  idade= {10}/>

      <h1>BEM VINDO {nome}</h1>

      <hr/><br/>

      <button onClick={mudarUser}>Alterar User</button>

      <hr/><br/>

      <button onClick={mudarNome}>Alterar Nome</button>

      {/*RESULTADO DO USER ALTERADO PELA USESTATE: */}
      {user && (
        <div>
          <h1>{user.nome}</h1>
          <p>Salario: {user.salario}</p>
          <p>Cargo:   {user.cargo}</p>
        </div>
      )}

    </main>
  )
}

export default App
