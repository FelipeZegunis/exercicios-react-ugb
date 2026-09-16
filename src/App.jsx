import CaixaDeMercado from './components/CaixaDeMercado'
import JogoAdivinhacao from './components/JogoAdivinhacao'
import PedraPapelTesoura from './components/PedraPapelTesoura'

// IMPORTANTE:
// Em cada branch (feat-exercicio1, feat-exercicio2, feat-exercicio3),
// deixe renderizado APENAS o componente daquele exercício.
// Troque a linha abaixo conforme a branch atual.

function App() {
  return (
    <div className="app">
      <CaixaDeMercado />
      {/* <JogoAdivinhacao /> */}
      {/* <PedraPapelTesoura /> */}
    </div>
  )
}

export default App
