import React, { useState } from 'react'
import './TweetBox.css'
import {StoreContext} from '../../App.js'
import { useObserver } from 'mobx-react';


function TweetBox({ onCreate = () => {} }) {
  const store = React.useContext(StoreContext);

  const [clicked, setClicked] = useState(false);
  const [tweets, setTweet] = useState('')

  
return useObserver(()=>(
    <div className="TweetBox">
      <form 
      onSubmit={e=>{
        store.addTweet(tweets)
      }} >
 
          <div  className="tweetBox__input">
            <input value={tweets}
              onChange={(e) => setTweet(e.target.value)}
              placeholder="What's happening?" type="text" className="no-outline">
            </input>

          </div>
        {tweets.length >0?
          <button onClick={(event) => {
            event.preventDefault();
            onCreate(tweets);
            setTweet('')
            setClicked(true)
          }}

            disabled={false} type="submit" className="tweetBox__tweetButtonEnabled">Tweet</button>
           :<button disabled={true} className="tweetBox__tweetButtonDisabled">Tweet</button>
        }
      </form>

    </div>
  ));
  
}
export default TweetBox
