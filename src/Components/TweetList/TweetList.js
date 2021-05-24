import React from 'react'
import Tweet from '../Tweet/Tweet'
import './TweetList.css'
import * as Icon from 'react-bootstrap-icons';
import {StoreContext} from '../../App.js'
import { useObserver } from 'mobx-react';


export default function TweetList({tweets = []}) {

  const store = React.useContext(StoreContext);

  return useObserver(()=>(
    <div>
       {tweets.map((number, index) => (
         <div key={index}>
          <Tweet Share={Icon.Share} Like={Icon.Heart} Retweet={Icon.ArrowRepeat} Replyicon={Icon.Reply} Checkicon={Icon.CheckCircleFill} text={number}></Tweet>
          </div>
        ))}

    </div>
  ))
}
