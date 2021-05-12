import React from 'react'
import './Tweet.css'
import World from '../../images/world.jpg'
import Raghda2 from '../../images/raghda2.jpg'


export default function Tweet({displayName,username,text,image,Checkicon,Replyicon,Retweet,Like,Share}) {
  
  
   
  
  return (
    <div className="Tweet">
      <div className="Tweet__avatarImage">
      <img src={Raghda2} height="60" width="60"></img>
      </div>
      <div className="Tweet__body">
      <div className="Tweet__header">
      <div className="Tweet__headerText">
        <h3>
          Raghda Tamimi{" "}
          <span className="Tweet__username">
            <Checkicon className="Tweet__checkIcon"></Checkicon> @raghda24298137
          </span>
        </h3>
        </div>
        <div className="Tweet__Description">
          <p>
          {text}
          </p>
          </div>
        </div>
        <img src={World} height="320" width="510"></img>
        <div className="Tweet__footer">
          <Replyicon fontSize="medium"></Replyicon>
          <Retweet fontSize="medium"></Retweet>
          <Like fontSize="medium"></Like>
          <Share fontSize="medium"></Share>
        </div>
      </div>
      </div>
      
  )
}

