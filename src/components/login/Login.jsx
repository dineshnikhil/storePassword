import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Login.module.css';
import { loginActions } from '../../store/login-slice';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';
import MsgCard from '../ui/MsgCard';

function Login() {

    const [msg, setMsg] = useState("");

    const navigate = useNavigate();
    const userName = useRef();
    const password = useRef();


    const dispatch = useDispatch();
    const isShow  = useSelector(state => state.msgCardShowSlice.isShow)
    // const isLoggedIn = useSelector(state => state.loginSlice.isLoggedIn);

    async function submitHandler(event) {
        event.preventDefault();

        //now sending the data to the backend.
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName.current.value,
                password: password.current.value
            })
        });

        const data = await response.json();

        console.log(data);

        // dispatch(loginActions.login());
        // navigate("/");

        // if (data.status === "wrong password!") {
        //     setMsg(data.status);
        //     dispatch(msgCardSliceActions.showToggle())
        //     password.current.value = ""
        // } else if(data.status === "ok") {
        //     dispatch(loginActions.login());
        //     dispatch(loginActions.setUserName(userName.current.value));

        //     navigate("/")
        // }

        // if (data.status === "ok") {
        //     dispatch(loginActions.login());
        //     dispatch(loginActions.setUserName(userName.current.value));

        //     navigate("/")
        // } else {
        //     setMsg("invalid username or password");
        //     dispatch(msgCardSliceActions.showToggle())
        //     password.current.value = ""
        //     userName.current.value = ""
        // }

        
    }

  return (
    <div className={classes['login-form-div']}>
        {isShow && <MsgCard>
            <h1>{msg}</h1>
            </MsgCard>}
        <h1>Hi, User Wellcome Back!</h1>
        <form onSubmit={submitHandler}>
            {/* username input field */}
            <input 
                type="text"
                required
                name='username'
                id='username'
                placeholder='Username'
                ref={userName}
            />
            <br />
            {/* password input field */}
            <input 
                type="password"
                required
                name="password" 
                id="password" 
                placeholder='password'
                ref={password}
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