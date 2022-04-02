import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Login from './components/login/Login';
import UserPage from './components/user/UserPage';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <React.Fragment>
      <Nav />
      <main>
      <Routes>
          <Route path='/' element={!isLoggedIn ? <Home /> : <UserPage />} />
          <Route path='/login' element={<Login />} />
      </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
