import React from 'react';
import { useRef } from 'react';
// for fontawesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './AppAddingForm.module.css'

function AppAddingForm(props) {

    var appName = useRef();
    var email = useRef();
    var password = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

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