import React from 'react'

export default (props) => {
  // const min = props.min
  // const max = props.max

  //destructuring
  const {min, max} = props

  //const [a, b] = [1, 2]
  //neste caso o h viria como undefined
  //const {x, y, z, h} = {x: 12, y: 5, z: 'teste'}
  const aleatorio = parseInt(Math.random() * (min - max)) + min
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong>{min}</p>
      <p><strong>Valor Máximo: </strong>{max}</p>
      <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
    </>
  )
}