import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

//export default posso retornar uma função anônima
//poderia deixar parenteses sem nada no parametro ou posso deixar o underline
//que representa que o parametro nao é importante
export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>
      <Card title='#04 - Exemplo de card' color='#0f0'>
        <Aleatorio min={10} max={60} />
      </Card>
      
      <Card title='#03 - Fragmento' color='#875'>
        <Fragmento />
      </Card>

      <Card title='#02 - Com Parâmetro' color='#234'>
        <ComParametro title='Situação do aluno' aluno='Wilber' nota={5.3} />
        <ComParametro title='Situação do aluno' aluno='Cristielly' nota={9.9} />
      </Card>
      
      <Card title='#01 - Primeiro Componente' color='#f12'>
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>