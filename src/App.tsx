import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/profilepage/Profilepage';
import CreateGraph from './components/CreateGraph'
import AccountSettings from './components/AccountSettings';
import Navbar from './components/Navbar';

function App() {
  const [name, setName] = useState('Shourya');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element={<ProfilePage/>} />
        <Route path = '/settings' element={<CreateGraph/>} />
        <Route path = '/AccSettings' element={<AccountSettings name={name} email={email} bio={bio}/>} />
      </Routes>
    </div>
  );
}

export default App;
