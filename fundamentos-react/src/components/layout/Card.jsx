import './card.css'
import React from 'react'

export default props => {
  
  const cardStyle = {
    backgroundColor: props.color || '#f00',
    borderColor: props.color || '#f00'
  }
  
  return (
    <div className='Card' style={ cardStyle }>
      <div className='Title'>{ props.title }</div>
      <div className='Content'>{ props.children }</div>
    </div>
  )
}