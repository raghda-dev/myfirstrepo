import React from 'react'
import Tweet from '../Tweet/Tweet'
import './TweetList.css'
import * as Icon from 'react-bootstrap-icons';


export default function TweetList({tweets = []}) {
  return (
    <div>
       {tweets.map((number, index) => (
         <div key={index}>
          <Tweet Share={Icon.Share} Like={Icon.Heart} Retweet={Icon.ArrowRepeat} Replyicon={Icon.Reply} Checkicon={Icon.CheckCircleFill} text={number}></Tweet>
          </div>
        ))}

    </div>
  )
}
