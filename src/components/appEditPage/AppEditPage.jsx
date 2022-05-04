import React from 'react'
import { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../ui/Loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import classes from './AppEditPage.module.css';

function AppEditPage() {

  const text = "EditNow";
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const apps = useSelector(state => state.userSlice.apps);
  const userId = useSelector(state => state.userSlice.id);
  
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

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    let url = "http://localhost:8000/app-edit/" + userId + "/" + id
    //now sending the data to the backend.
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'content-Type': 'application/json',
      },
      body: JSON.stringify({
          appname: appName.current.value,
          password: password.current.value,
          email: email.current.value
      })
    });

    const data = await response.json();
    setIsLoading(false)

    navigate("/userpage");
  }

  return (
    <div className={classes.appEditDiv}>
      <h1>Edit ✍🏻 your app data Here.</h1>
      <div className={classes.innerAppEditDiv}>
        <form onSubmit={submitHandler}>
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
          <button type='submit'>{isLoading ? <Loading /> : text}</button>
        </form>
      </div>
    </div>
  )
}

export default AppEditPage