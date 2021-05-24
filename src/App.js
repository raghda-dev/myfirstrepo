import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import TrendSide from './Components/TrendSide/TrendSide';
import {useLocalStore,useObserver} from 'mobx-react'


export const StoreContext = React.createContext();

const StoreProvider = ({children})=>{
  const store = useLocalStore(()=>({
    tweets:[],
   addTweet: tweet =>{
      store.tweets.push(tweet);
      
    }
    
  }));

  return (
      <StoreContext.Provider value={store}>
      {children}
      </StoreContext.Provider>
     
  );
}

 function App() {
  return useObserver(()=>(
    <StoreProvider>
    <div className="App">
      <Sidebar/>
      <Feed/>
      <TrendSide/>
    </div>
    </StoreProvider>
  ));
}

export default App;

