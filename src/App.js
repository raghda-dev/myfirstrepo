import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import TrendSide from './Components/TrendSide/TrendSide';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <TrendSide/>
    </div>
  );
}

export default App;
