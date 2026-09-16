import { useState } from 'react'

const OPCOES = ['Pedra', 'Papel', 'Tesoura']

const EMOJIS = {
  Pedra: '✊',
  Papel: '✋',
  Tesoura: '✌️',
}

function escolhaAleatoria() {
  const indice = Math.floor(Math.random() * OPCOES.length)
  return OPCOES[indice]
}

function definirVencedor(jogador, maquina) {
  if (jogador === maquina) return 'empate'

  const vitoriasJogador = {
    Pedra: 'Tesoura',
    Papel: 'Pedra',
    Tesoura: 'Papel',
  }

  return vitoriasJogador[jogador] === maquina ? 'jogador' : 'maquina'
}

export default function PedraPapelTesoura() {
  const [escolhaJogador, setEscolhaJogador] = useState(null)
  const [escolhaMaquina, setEscolhaMaquina] = useState(null)
  const [resultado, setResultado] = useState('Escolha uma opção para começar!')
  const [placar, setPlacar] = useState({ jogador: 0, maquina: 0, empates: 0 })

  function handleJogar(opcaoJogador) {
    const opcaoMaquina = escolhaAleatoria()
    const vencedor = definirVencedor(opcaoJogador, opcaoMaquina)

    setEscolhaJogador(opcaoJogador)
    setEscolhaMaquina(opcaoMaquina)

    if (vencedor === 'empate') {
      setResultado('🤝 Empate!')
      setPlacar((p) => ({ ...p, empates: p.empates + 1 }))
    } else if (vencedor === 'jogador') {
      setResultado('🏆 Você venceu!')
      setPlacar((p) => ({ ...p, jogador: p.jogador + 1 }))
    } else {
      setResultado('💻 A máquina venceu!')
      setPlacar((p) => ({ ...p, maquina: p.maquina + 1 }))
    }
  }

  return (
    <div className="card">
      <h2>✊✋✌️ Pedra, Papel e Tesoura</h2>

      <div className="opcoes">
        {OPCOES.map((opcao) => (
          <button key={opcao} onClick={() => handleJogar(opcao)}>
            {EMOJIS[opcao]} {opcao}
          </button>
        ))}
      </div>

      {escolhaJogador && (
        <div className="jogadas">
          <p>Você: {EMOJIS[escolhaJogador]} {escolhaJogador}</p>
          <p>Máquina: {EMOJIS[escolhaMaquina]} {escolhaMaquina}</p>
        </div>
      )}

      <h3>{resultado}</h3>

      <div className="placar">
        <p>Você: {placar.jogador}</p>
        <p>Máquina: {placar.maquina}</p>
        <p>Empates: {placar.empates}</p>
      </div>
    </div>
  )
}
