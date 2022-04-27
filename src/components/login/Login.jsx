import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Login.module.css';
// import { loginActions } from '../../store/login-slice';
import { userSliceActions } from '../../store/user-slice';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';
import MsgCard from '../ui/MsgCard';
import Loading from '../ui/Loading';;

function Login() {

    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const text = "Login"

    // useing navigate method
    const navigate = useNavigate();
    const userName = useRef();
    const password = useRef();


    const dispatch = useDispatch();
    const isShow  = useSelector(state => state.msgCardShowSlice.isShow)
    // const isLoggedIn = useSelector(state => state.loginSlice.isLoggedIn);

    async function submitHandler(event) {
        event.preventDefault();
        setIsLoading(true);

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

        // if the user is not found in the database.
        if(data.status === "user not found") {
            setMsg(data.status);
            // displaying notification
            dispatch(msgCardSliceActions.showToggle());
            // clering the all input fields
            userName.current.value = "";
            password.current.value = "";
            // loading to false
            setIsLoading(false)
        }
        // if the enterd user password is worng.
        else if (data.status === "entered password is worng!") {
            setMsg(data.status);
            // displaying the notification
            dispatch(msgCardSliceActions.showToggle())
            // reassing the value to empty of password field input.
            password.current.value = ""
            // loading is false
            setIsLoading(false)
        } 
        // if the user is successfully anthenticated
        else if(data.status === "user anthenticated!") {
            // then we login the user
            dispatch(userSliceActions.loginUser({
                isAuthenticated: true,
                username: data.data.username,
                id: data.data._id,
                apps: data.data.appsData
            }));
            // then we set uername in redux login slice.
            // dispatch(loginActions.setUserName(userName.current.value));

            // we navigation to the home page again.
            navigate("/userpage")
        } 
    }

  return (
    <div className={classes['login-form-div']}>
        {!isShow && <MsgCard>
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
                {isLoading ? <Loading /> : text}
            </button>
        </form>
    </div>
  )
}

export default Login