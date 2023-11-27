import React from 'react';
import Login from './componets/login.js'

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

      

       
    </div>
  );
}

export default App;