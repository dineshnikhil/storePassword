import React from 'react'
import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link,useParams, useNavigate } from 'react-router-dom'
import Input from '../../ui/input/Input'
import LogBtn from '../../ui/logBtn/LogBtn'
import classes from './AddApp.module.css'

import card2 from '../../../images/card2.svg'

function EditApp() {

    const navigate = useNavigate();

    const appName = useRef();
    const email = useRef();
    const password = useRef();

    // getting the id from the params through the link
    const { id } = useParams();
    // getting the apps array from the redux
    const apps = useSelector(state => state.userSlice.apps);
    const userId = useSelector(state => state.userSlice.id);
    // find the item which has required id
    const appData = apps.find(item => item._id === id);

    // when the editapp page load it assign the inputs wiht appdata
    useEffect(() => {
        appName.current.value = appData.appname;
        email.current.value = appData.email;
        password.current.value = appData.password;
    }, []);

    // form submit handler function
    async function submitHandler(event) {
        event.preventDefault();

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
        navigate("/");
    }

  return (
    <div className={classes.signupDiv}>
        <div className={classes.signupImgDiv}>
            <img src={card2} alt="do" />
        </div>
        <div className={classes.signupFormDiv}>
            <form onSubmit={submitHandler}>
                <h1>Edit Your App</h1>
                <p>we ensure that your data is safe</p>
                <Input type="text" label="AppName" onRef={appName} />
                <Input type="email" label="Email" onRef={email} />
                <Input type="text" label="Password" onRef={password} />
                <LogBtn log="Edit Now"/>
                <div>
                    Don't want to Add? <Link to='/' className={classes.forgotLink}>Go Back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditApp