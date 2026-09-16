import { useState } from 'react'

function ResultadoOperacoes({ resultados }) {
  if (!resultados) return null

  return (
    <div className="resultados">
      <h3>Resultados</h3>
      <p><strong>Soma:</strong> {resultados.soma}</p>
      <p><strong>Subtração:</strong> {resultados.subtracao}</p>
      <p><strong>Multiplicação:</strong> {resultados.multiplicacao}</p>
      <p><strong>Divisão:</strong> {resultados.divisao}</p>
    </div>
  )
}

function CamposValores({ valor1, valor2, setValor1, setValor2 }) {
  return (
    <div className="campos">
      <div className="campo">
        <label>Valor 1</label>
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          placeholder="Digite o primeiro valor"
        />
      </div>
      <div className="campo">
        <label>Valor 2</label>
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          placeholder="Digite o segundo valor"
        />
      </div>
    </div>
  )
}

export default function CaixaDeMercado() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [resultados, setResultados] = useState(null)
  const [erro, setErro] = useState('')

  function handleCalcular() {
    const numero1 = Number(valor1)
    const numero2 = Number(valor2)

    if (valor1 === '' || valor2 === '' || isNaN(numero1) || isNaN(numero2)) {
      setErro('Preencha os dois valores com números válidos.')
      setResultados(null)
      return
    }

    setErro('')
    setResultados({
      soma: (numero1 + numero2).toFixed(2),
      subtracao: (numero1 - numero2).toFixed(2),
      multiplicacao: (numero1 * numero2).toFixed(2),
      divisao: numero2 !== 0 ? (numero1 / numero2).toFixed(2) : 'Indefinido (divisão por zero)',
    })
  }

  return (
    <div className="card">
      <h2>🛒 Caixa de Mercado</h2>
      <p>Digite dois valores e calcule automaticamente as quatro operações.</p>

      <CamposValores
        valor1={valor1}
        valor2={valor2}
        setValor1={setValor1}
        setValor2={setValor2}
      />

      <button onClick={handleCalcular}>Calcular</button>

      {erro && <p className="erro">{erro}</p>}

      <ResultadoOperacoes resultados={resultados} />
    </div>
  )
}
