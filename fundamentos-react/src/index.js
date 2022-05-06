import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

// const el = document.getElementById('root')

// ReactDOM.render('Olá Reactttt', el)
ReactDOM.render(
  <div>
    {/* <strong>Olá React!!!</strong> */}
    <Primeiro></Primeiro>
  </div>,
  document.getElementById('root')
)