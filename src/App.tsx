import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/Profilepage';
import CreateGraph from './components/CreateGraph'
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<ProfilePage/>} />
        <Route path = '/settings' element={<CreateGraph/>} />
        <Route path = '/AccSettings' element={<AccountSettings />} />
      </Routes>
    </div>
  );
}

export default App;
