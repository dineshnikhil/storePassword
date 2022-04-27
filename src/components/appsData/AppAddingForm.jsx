import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
// for fontawesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './AppAddingForm.module.css'

function AppAddingForm(props) {

    // userid from react redux of userSlice
    const userId = useSelector(state => state.userSlice.id);

    // refs for the app adding from.
    var appName = useRef();
    var email = useRef();
    var password = useRef();

    // This is the app adding form handler function.
    // 1.Here we are sending the data to the server
    // 2.and receving the object with parameter status.
    async function submitHandler(event) {
        event.preventDefault();
        // sending the data to the database
        const response = await fetch('http://localhost:8000/addapp', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                appname: appName.current.value,
                email: email.current.value,
                password: password.current.value
            })
        });

        // here we are waiting the response to come from the server.
        const data = await response.json();
        console.log(data);
        // if the status is ok then we are passing the status and app data to the userpage.jsx
        if(data.status === "ok") {
            // passing the app data object to the UserPage.
            props.onAddApp({
                status: "ok",
                appName: appName.current.value,
                email: email.current.value,
                password: password.current.value
            });
        }

        // Here after submiting the form we are reseting the input fields.
        appName.current.value = '';
        email.current.value = '';
        password.current.value = '';
    }


  return (
    <div className={classes['appAdding-form-div']}>
        <form onSubmit={submitHandler}>
            {/* App Name input feild */}
            <input 
                type="text" 
                name="appName" 
                id="appName"
                placeholder='AppName'
                ref={appName}
            />
            {/* Email input feild */}
            <input 
                type="email" 
                name="email" 
                id="email"
                placeholder='Email'
                ref={email}
            />
            {/* Password input feild */}
            <input 
                type="password" 
                name="password" 
                id="password"
                placeholder='Password'
                ref={password}
            />
            {/* submit button */}
            <button type="submit">
                Add <FontAwesomeIcon icon={faPlus} />
            </button>
        </form>
    </div>
  )
}

export default AppAddingForm;