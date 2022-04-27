import React from 'react'
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import classes from './AppEditPage.module.css';

function AppEditPage() {

  const { id } = useParams();
  const apps = useSelector(state => state.userSlice.apps);
  
  const appData = apps.find(item => item._id === id);

  // Here we have the use refs of the input feilds.
  let appName = useRef();
  let email = useRef();
  let password = useRef();

  useEffect(() => {
    appName.current.value = appData.appname;
    email.current.value = appData.email;
    password.current.value = appData.password;
  }, []);

  return (
    <div className={classes.appEditDiv}>
      <h1>Edit your app data Here.</h1>
      <div className={classes.innerAppEditDiv}>
        <label>AppName</label>
        <input 
          type="text"
          ref={appName}
        />
        <label>Email</label>
        <input 
          type="text"
          ref={email}
        />
        <label>Password</label>
        <input 
          type="text"
          ref={password}
        />
        <button>Edit Now <FontAwesomeIcon icon={ faPenToSquare } /></button>
      </div>
    </div>
  )
}

export default AppEditPage