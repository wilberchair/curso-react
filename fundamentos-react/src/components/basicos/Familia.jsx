import React, {cloneElement} from 'react'

// import FamiliaMembro from './FamiliaMembro'

export default props => {
  return (
    <div>
      {/* Posso usar dessas formas para pasar o sobrenome */}
      {/* <FamiliaMembro nome='Wilber' sobrenome={props.sobrenome}/>
      <FamiliaMembro nome='Cristielly' {...props}/>
      <FamiliaMembro nome='Mariana' sobrenome='Calci Lima'/> */}
      {/* Passaria desta forma abaixo se eu nao importasse o cloneElement */}
      {/* {React.cloneElement(props.children)} */}

      {/* {cloneElement(props.children, props)} */}
      {/* {cloneElement(props.children, {...props})} */}
      
      {/* {React.Children.map(props.children, child => {
        return cloneElement(child, {...props})
      })} */}

      {/* Desta forma consigo garantir que tenha uma key, nao gere erro e o código fica menor */}
      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i})
      })}
    </div>
  )
}