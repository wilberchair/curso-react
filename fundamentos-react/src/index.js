import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

// const el = document.getElementById('root')

// ReactDOM.render('Olá Reactttt', el)
ReactDOM.render(
  <div>
    {/* <strong>Olá React!!!</strong> */}
    <Primeiro></Primeiro>
    <ComParametro title='Segundo Componenteeee' subtitle ='Legal'/>
  </div>,
  document.getElementById('root')
)