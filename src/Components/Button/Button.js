import React from 'react'
import './Button.css'

export default function Button({ onButton = () => {} ,value,style}) {
  return (
    <div className="Button">
     <button style={style} className="Reusable__Button">{value}</button>
    </div>
  )
}
