import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../ui/input/Input'
import LogBtn from '../../ui/logBtn/LogBtn'
import classes from './AddApp.module.css'

import card2 from '../../../images/card2.svg'

function AddApp() {

    const appName = useRef();
    const email = useRef();
    const password = useRef();

  return (
    <div className={classes.signupDiv}>
        <div className={classes.signupImgDiv}>
            <img src={card2} alt="do" />
        </div>
        <div className={classes.signupFormDiv}>
            <form>
                <h1>Add Your App</h1>
                <p>we ensure that your data is safe</p>
                <Input type="text" label="AppName" onRef={appName} />
                <Input type="email" label="Email" onRef={email} />
                <Input type="password" label="Password" onRef={password} />
                <LogBtn log="Add"/>
                <div>
                    Don't want to Add? <Link to='/' className={classes.forgotLink}>Go Back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddApp