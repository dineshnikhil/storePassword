import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home/Home';
import Login from './components/loginPage/Login';
import SignUp from './components/signUpPage/SignUp';

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
