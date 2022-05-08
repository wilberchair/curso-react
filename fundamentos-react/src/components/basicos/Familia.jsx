import React from 'react'

import FamiliaMembro from './FamiliaMembro'

export default props => {
  return (
    <div>
      {/* Posso usar dessas formas para pasar o sobrenome */}
      <FamiliaMembro nome='Wilber' sobrenome={props.sobrenome}/>
      <FamiliaMembro nome='Cristielly' {...props}/>
      <FamiliaMembro nome='Mariana' sobrenome='Calci Lima'/>
    </div>
  )
}