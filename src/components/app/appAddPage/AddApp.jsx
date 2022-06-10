import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../ui/input/Input'
import LogBtn from '../../ui/logBtn/LogBtn'
import classes from './AddApp.module.css'

import card2 from '../../../images/card2.svg'

function AddApp() {
  return (
    <div className={classes.signupDiv}>
        <div className={classes.signupImgDiv}>
            <img src={card2} alt="do" />
        </div>
        <div className={classes.signupFormDiv}>
            <form>
                <h1>Add Your App</h1>
                <p>we ensure that your data is safe</p>
                <Input type="text" label="AppName" />
                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
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