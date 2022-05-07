import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

//export default posso retornar uma função anônima
//poderia deixar parenteses sem nada no parametro ou posso deixar o underline
//que representa que o parametro nao é importante
export default _ =>
  <div id='app'>
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro title='Situação do aluno' aluno='Wilber' nota={5.3} />
    <ComParametro title='Situação do aluno' aluno='Cristielly' nota={9.9} />
    <Primeiro></Primeiro>
  </div>