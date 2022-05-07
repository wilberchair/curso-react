import React from 'react'

export default function Fragmento(props) {
  return (
    //posso adicionar props apenas utilizando o React.Fragment
    // <React.Fragment key='1'>
    <>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!!!</p>
    </>
    //</React.Fragment>
  )
}