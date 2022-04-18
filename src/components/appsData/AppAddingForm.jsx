import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
// for fontawesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './AppAddingForm.module.css'

function AppAddingForm(props) {

    const userId = useSelector(state => state.userSlice.id);

    var appName = useRef();
    var email = useRef();
    var password = useRef();

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
                appName: appName.current.value,
                email: email.current.value,
                password: password.current.value
            })
        });


        const data = await response.json();
        console.log(data);
        // passing the app data object to the UserPage.
        props.onAddApp({
            appName: appName.current.value,
            email: email.current.value,
            password: password.current.value
        });

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