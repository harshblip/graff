import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/Profilepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
