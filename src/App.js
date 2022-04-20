import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Login from './components/login/Login';
import UserPage from './components/user/UserPage';
import SignUpForm from './components/login/SignUpForm';

function App() {

  // const isLoggedIn = useSelector(state => state.loginSlice.isLoggedIn);
  const isAuthenticated = useSelector(state => state.userSlice.isAuthenticated);

  return (
    <React.Fragment>
      <Nav />
      <main>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/userpage' element={!isAuthenticated ? <h1>please login</h1> : <UserPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createAccount' element={<SignUpForm />} />
      </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
