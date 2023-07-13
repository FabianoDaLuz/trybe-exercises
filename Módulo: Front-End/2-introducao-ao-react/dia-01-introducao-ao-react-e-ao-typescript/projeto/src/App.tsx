import Skills from './components/Skills/Skills';
import Title from './components/Title/Title';
import { calculateAge } from './helpers/calculateIdade'
import './App.css'

function App() {
  const idade = calculateAge('11/01/1994');

  return (
    <div>
      <Title />
      <p>Sua idade atual é {idade}</p>
      <p> CSS RULES </p>
      <Skills />
    </div>
  )
}

export default App
