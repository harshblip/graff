import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/profilepage/Profilepage';
import CreateGraph from './components/CreateGraph'
import AccountSettings from './components/AccountSettings';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element={<ProfilePage/>} />
        <Route path = '/settings' element={<CreateGraph/>} />
        <Route path = '/AccSettings' element={<AccountSettings />} />
      </Routes>
    </div>
  );
}

export default App;
