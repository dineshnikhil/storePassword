import React from 'react';
import { useRef } from 'react';
import classes from './SignUpForm.module.css';

function SignUpForm() {

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
  }

  return (
    <div className={classes['signup-form-div']}>
      <h1>Hi, Wellcome!</h1>
        <form onSubmit={createUserHandler}>
            {/* Username input field */}
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder='Username'
              ref={username}
            />
            {/* email input field */}
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email'
              ref={email}
            />
            {/* password input field */}
            <input 
              type="password" 
              name="password" 
              d="password" 
              placeholder='Password' 
              ref={password}
            />
            {/* actionPassword input field */}
            <input 
              type="password" 
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