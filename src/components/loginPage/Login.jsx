import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Input from '../ui/input/Input'
import LogBtn from '../ui/logBtn/LogBtn'
import classes from './Login.module.css'


// importing the image from the image file in src folder
import login from '../../images/login.svg'

function Login(props) {

    const navigate = useNavigate()

    // use refs for form details
    const username = useRef();
    const password = useRef();

    // input msg
    const msg = "dammn one"

    function submitHandler(event) {
        event.preventDefault();
        console.log({
            username: username.current.value,
            password: password.current.value
        });

        // clearing the useref values
        username.current.value = ""
        password.current.value = ""
        // now at the end page redirecting to the home page
        navigate("/")
    }


    return (
    <div className={classes.loginDiv}>
        <div className={classes.LoginImgDiv}>
            <img src={login} alt="do" />
        </div>
        <div className={classes.LoginFormDiv}>
            <form onSubmit={submitHandler}>
                <h1>Wellcome Back!</h1>
                <p>we are so excited to see you again!</p>
                <Input type="text" label="username" onRef={username} msg={msg} />
                <Input type="password" label="password" onRef={password} msg={msg} />
                <div className={classes.loginInnerDiv}>
                    <div>
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <div>
                        <Link className={classes.forgotLink} to='/' >forgot password?</Link>
                    </div>
                    
                </div>
                <LogBtn log="Login" type="submit"/>
                <div>
                    Need an Account? <Link to='/register' className={classes.forgotLink}>Register</Link>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login