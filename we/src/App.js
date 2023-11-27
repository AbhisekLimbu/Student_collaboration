import React from 'react';
import Login from './Components/login.js';
import Register from './Components/register.js';
import Profile from './Components/Profile.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Welcome to Your Student Community</h1>
        <p>Connect with students who share your interests!</p>
      </header>
      
      <Login />
      <Register />
      <Profile />

      

       
    </div>
  );
}

export default App;
