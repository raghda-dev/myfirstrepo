import { useObserver } from 'mobx-react';
import React, { useState } from 'react'
import TweetBox from '../TweetBox/TweetBox'
import TweetList from '../TweetList/TweetList';
import "./Feed.css"


function Feed() {

  const [posts, setPost] = useState([]);
  //console.log(posts)

  return (
    <div className="Feed">
      <div className="Feed_header">
        <h2>Home</h2>

      </div>
     
     <TweetBox onCreate={(tweets) => setPost([tweets, ...posts])}/> 
      <TweetList tweets={posts}/>

    </div>
  )
}

export default Feed
