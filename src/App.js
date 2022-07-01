import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import AddApp from './components/app/appAddPage/AddApp';
import Home from './components/Home/Home';
import ForgotPass from './components/loginPage/ForgotPass';
import Login from './components/loginPage/Login';
import SignUp from './components/signUpPage/SignUp';
import EditApp from './components/app/editAppPage/EditApp';

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
          <Route path='/addapp' element={<AddApp />} />
          <Route path='/editapp/:id' element={<EditApp />} />
          <Route path='/forgotPass' element={<ForgotPass />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
