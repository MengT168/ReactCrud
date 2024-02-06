import React from 'react';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
  let user =localStorage.getItem("Key");
  return (
    <>
      {user?<DashBoard/> : <Login/>}
    </>
  );
}

export default App;
