import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Login from './components/login/Login';
import UserPage from './components/user/UserPage';
import SignUpForm from './components/login/SignUpForm';
// importing the backdrop component.
// import BackDrop from './components/ui/BackDrop';
import MsgCard from './components/ui/MsgCard';

function App() {

  const isLoggedIn = useSelector(state => state.loginSlice.isLoggedIn);
  const isShow = useSelector(state => state.msgCardShowSlice.isShow);

  return (
    <React.Fragment>
      <Nav />
      <main>
      {/* {isShow && <MsgCard>
        <h1>Store your passwrods 🔑 and secure your informations from data attacks.</h1>
      </MsgCard>} */}
      <Routes>
          <Route path='/' element={!isLoggedIn ? <Home /> : <UserPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createAccount' element={<SignUpForm />} />
      </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
