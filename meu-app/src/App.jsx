import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InserirFatec from './components/InserirFatec'

function App() {
  return (
    <>
        <InserirFatec type="text"  placeholder = "nome" />
        <br/>
        <InserirFatec type="text"  placeholder = "e-mail" />
        <br/>
        <InserirFatec type="text"  placeholder = "telefone" />
        <br/>
        <ButtonFatec type = "text" label="Enviar"/>
    </>
  )
}

export default App
