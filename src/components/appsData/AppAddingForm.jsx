import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// for fontawesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';
import MsgCard from '../ui/MsgCard';

import classes from './AppAddingForm.module.css'

function AppAddingForm(props) {

    const [msg, setMsg] = useState("");
    // userid from react redux of userSlice
    const userId = useSelector(state => state.userSlice.id);
    const apps = useSelector(state => state.userSlice.apps);
    // msg card show variable
    const isShow = useSelector(state => state.msgCardShowSlice.isShow);
    // dispatching the redux functions.
    const dispatch = useDispatch();

    // refs for the app adding from.
    var appName = useRef();
    var email = useRef();
    var password = useRef();

    // This is the app adding form handler function.
    // 1.Here we are sending the data to the server
    // 2.and receving the object with parameter status.
    async function submitHandler(event) {
        event.preventDefault();

        // here we are checking if the app already exits or not
        if (apps.find(function(ele) {
            return ele.appname.toLowerCase() === appName.current.value.toLowerCase();
        })) {
            // if we found the app
            // console.log("element found!");
            setMsg("app is already exists in your library.");
            dispatch(msgCardSliceActions.showMsgCard());
            appName.current.value = "";
            email.current.value = "";
            password.current.value = "";
        } else {
            // if we not found the app then send data to the backend
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

            if(data.status === 'ok') {
                setMsg("app is added the library");
                dispatch(msgCardSliceActions.showMsgCard());
            } else {
                setMsg("something went worng");
                dispatch(msgCardSliceActions.showMsgCard())
            };
            
            // Here after submiting the form we are reseting the input fields.
            appName.current.value = '';
            email.current.value = '';
            password.current.value = '';
        }

    }


  return (
    <div className={classes['appAdding-form-div']}>
        {isShow && <MsgCard>
            <h1>{msg}</h1>
            <Link to="/userpage"><button>Go to UserPage</button></Link>
            </MsgCard>}
        <form onSubmit={submitHandler}>
            {/* App Name input feild */}
            <input 
                type="text" 
                required
                name="appName" 
                id="appName"
                placeholder='AppName'
                ref={appName}
            />
            {/* Email input feild */}
            <input 
                type="email"
                required 
                name="email" 
                id="email"
                placeholder='Email'
                ref={email}
            />
            {/* Password input feild */}
            <input 
                type="password" 
                required
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