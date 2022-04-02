import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Login.module.css';
import { loginActions } from '../../store/login-slice';

function Login() {

    const navigate = useNavigate();
    const userName = useRef();


    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    function submitHandler(event) {
        event.preventDefault();

        dispatch(loginActions.login());
        dispatch(loginActions.setUserName(userName.current.value));

        navigate("/")
    }

  return (
    <div className={classes['login-form-div']}>
        <h1>WellCome Back Login into your Accout</h1>
        <form onSubmit={submitHandler}>
            {/* username input field */}
            <input 
                type="text"
                name='username'
                id='username'
                placeholder='Username'
                ref={userName}
            />
            <br />
            {/* password input field */}
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='password'
            />
            <br />
            {/* login submit button */}
            <button type="submit">
                Login
            </button>
        </form>
    </div>
  )
}

export default Login