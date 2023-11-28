import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fix import
import Login from './Components/login';
import Register from './Components/register';
import Profile from './Components/Profile';


import './App.css';

function App() {
  return (
    <div className="App"> 
      <Router> {/* Fix opening tag */}
        <Routes>
          <Route path="/" element={<login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
