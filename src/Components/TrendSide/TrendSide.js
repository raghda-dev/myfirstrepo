import React from 'react'
import "./TrendSide.css"
import Button from '../Button/Button.js'

function TrendSide() {
  return (
    <div className="TrendSide">
      <div className="TrendSide__input">
        <input placeholder="Search Twitter" type="text"></input>
      <Button style={{backgroundColor:"white"}} value="Follow"></Button> 
      
    </div>
    <div className="TrendSide__container">
    
    </div>
    </div>
  )
}

export default TrendSide
