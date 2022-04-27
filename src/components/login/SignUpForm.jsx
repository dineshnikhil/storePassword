import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './SignUpForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { msgCardSliceActions } from '../../store/msgCardShow-slice';
import MsgCard from '../ui/MsgCard';

function SignUpForm() {

  const dispatch = useDispatch();
  const isShow = useSelector(state => state.msgCardShowSlice.isShow)

  const [msg, setMsg] = useState("");

  // userefs for form input fields.
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const actionPassword = useRef();

  // createUser function Handler.
  async function createUserHandler(event) {
    event.preventDefault();

    // sending new user data to the backend
    const response = await fetch('http://localhost:8000/createAccount', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        actionPassword: actionPassword.current.value,
      })
    })

    const data = await response.json();

    console.log(data);

    console.log({
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      actionPassword: actionPassword.current.value,
    });

    // reSetting the values of the input fields.
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    actionPassword.current.value = "";

    setMsg(data.status)
    dispatch(msgCardSliceActions.showToggle());
  }

  return (
    <div className={classes['signup-form-div']}>
      {!isShow && <MsgCard>
        <h1>{msg}😀</h1>
        <button>login <FontAwesomeIcon icon={faRightToBracket} /></button>
        </MsgCard>}
      <h1>Hi, Wellcome!</h1>
        <form onSubmit={createUserHandler}>
            {/* Username input field */}
            <input 
              type="text"
              required
              name="username" 
              id="username" 
              placeholder='Username'
              ref={username}
            />
            {/* email input field */}
            <input 
              type="email"
              required
              name="email" 
              id="email" 
              placeholder='Email'
              ref={email}
            />
            {/* password input field */}
            <input 
              type="password"
              required
              name="password" 
              d="password" 
              placeholder='Password' 
              ref={password}
            />
            {/* actionPassword input field */}
            <input 
              type="password"
              required
              name="actionPassword" 
              id="actionPassword"  
              placeholder='ActionPassword'
              ref={actionPassword}
            />
            {/* submitt button */}
            <button type="submit">
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignUpForm;