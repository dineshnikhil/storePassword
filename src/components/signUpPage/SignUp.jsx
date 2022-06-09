import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../ui/input/Input'
import LogBtn from '../ui/logBtn/LogBtn'
import classes from './SignUp.module.css'


// importing the image from the image file in src folder
import login from '../../images/login.svg'

function SignUp() {
  return (
    <div className={classes.signupDiv}>
        <div className={classes.signupImgDiv}>
            <img src={login} alt="do" />
        </div>
        <div className={classes.signupFormDiv}>
            <form>
                <h1>Create an Account</h1>
                <p>we are so excited to have you on board!</p>
                <Input type="email" label="Email" />
                <Input type="text" label="Username" />
                <Input type="password" label="Password" />
                <div className={classes.signupInnerDiv}>
                    <div>
                        <input type="checkbox"/>
                        <label>accept tems and conditions</label>
                    </div>
                </div>
                <LogBtn log="Create Account"/>
                <div>
                    already have an account? <Link to='/login' className={classes.forgotLink}>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp