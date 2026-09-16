import { useState } from 'react'

function gerarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1
}

export default function JogoAdivinhacao() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto())
  const [palpite, setPalpite] = useState('')
  const [mensagem, setMensagem] = useState('Tente adivinhar o número entre 1 e 100!')
  const [tentativas, setTentativas] = useState(0)
  const [acertou, setAcertou] = useState(false)

  function handleTentar() {
    const numeroPalpite = Number(palpite)

    if (palpite === '' || isNaN(numeroPalpite)) {
      setMensagem('Digite um número válido.')
      return
    }

    const novaContagem = tentativas + 1
    setTentativas(novaContagem)

    if (numeroPalpite === numeroSecreto) {
      setMensagem(`🎉 Acertou! O número era ${numeroSecreto}.`)
      setAcertou(true)
    } else if (numeroPalpite > numeroSecreto) {
      setMensagem('📉 Muito alto! Tente um número menor.')
    } else {
      setMensagem('📈 Muito baixo! Tente um número maior.')
    }
  }

  function handleReiniciar() {
    setNumeroSecreto(gerarNumeroSecreto())
    setPalpite('')
    setMensagem('Novo jogo! Tente adivinhar o número entre 1 e 100!')
    setTentativas(0)
    setAcertou(false)
  }

  return (
    <div className="card">
      <h2>🎯 Jogo de Adivinhação</h2>
      <p>{mensagem}</p>

      {!acertou && (
        <div className="campos">
          <input
            type="number"
            value={palpite}
            onChange={(e) => setPalpite(e.target.value)}
            placeholder="Digite seu palpite"
          />
          <button onClick={handleTentar}>Tentar</button>
        </div>
      )}

      <p className="tentativas">Tentativas: {tentativas}</p>

      {acertou && <button onClick={handleReiniciar}>Jogar novamente</button>}
    </div>
  )
}
