// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { LoginLayout } from './components/login/home';

import Dashboard from './pages/dashboard';
import Room from './pages/room';


import { localDataProvider } from './components/localDataProvider';
// import Login from './pages/login';
function App() {
  return (
       <HashRouter>
        <localDataProvider.Provider
         value={{}}
        >
      <Routes>
        <Route path="/" element={< LoginLayout/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </localDataProvider.Provider>
    </HashRouter>
  );
}

export default App;
