import React, { useState } from 'react'
import './TweetBox.css'


function TweetBox({ onCreate = () => {} }) {


  const [clicked, setClicked] = useState(false);
  const [tweets, setTweet] = useState('')




  const updateItem = (prop, event, index) => {

    
    const old = tweets[index];
    const updated = { ...old, [prop]: event.target.value }
    const clone = [...tweets];
    clone[index] = updated;
    setTweet(clone);
  
  }

  

  return (
    <div className="TweetBox">
      <form>
        {/*
        {tweets.map((tweet, index) => 
          key={tweets}
        */}
          <div  className="tweetBox__input">
            <input value={tweets}
        
              onChange={(e) => setTweet(e.target.value)}
   
              placeholder="What's happening?" type="text" className="no-outline">
            </input>

          </div>
        {tweets.length >0?
          <button onClick={(event) => {
            event.preventDefault();

           // setPost(tweets);

            onCreate(tweets);
            console.log(onCreate(tweets))
            setTweet('')
            setClicked(true)
          }}

            disabled={false} type="submit" className="tweetBox__tweetButtonEnabled">Tweet</button>
           :<button disabled={true} className="tweetBox__tweetButtonDisabled">Tweet</button>
        }
      </form>

    </div>
  );
}
export default TweetBox
