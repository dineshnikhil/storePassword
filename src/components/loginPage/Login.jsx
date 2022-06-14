import React from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Input from '../ui/input/Input'
import LogBtn from '../ui/logBtn/LogBtn'
import classes from './Login.module.css'
import { userSliceActions } from '../../store/userSlice'
import { msgSliceActions } from '../../store/msgSlice'


// importing the image from the image file in src folder
import login from '../../images/login.svg'
import MsgCard from '../ui/popupMsg/MsgCard'

function Login(props) {

    const navigate = useNavigate()
    const dispatch  = useDispatch();

    const isShow = useSelector(state => state.msgSlice.isShow);

    // use refs for form details
    const username = useRef();
    const password = useRef();

    // input msg
    const msg = "dammn one"
    const [popupMsg, setPopupMsg] = useState("");

    function submitHandler(event) {
        event.preventDefault();

        if(username.current.value !== "dinesh") {
            // setting the msg to user not found
            setPopupMsg("user not found!")
            // showing the pop up alert
            dispatch(msgSliceActions.showMsg())
            // clearing the username input field
            username.current.value = ""
        } else if(password.current.value !== "dinesh") {
            // setting the msg to password worng msg
            setPopupMsg("Enterd password is worng!")
            // showing the pop up alert
            dispatch(msgSliceActions.showMsg())
            // clearing the password input field
            password.current.value = ""
        } else {
            dispatch(userSliceActions.loginUser({
                isAuth: true,
                username: username.current.value,
                id: "1",
                apps: []
            }))
            // clearing the useref values
            username.current.value = ""
            password.current.value = ""
            // now at the end page redirecting to the home page
            navigate("/")
        }  
    }


    return (
        <React.Fragment>
            {isShow && <MsgCard>
                <h2>{popupMsg}</h2>
            </MsgCard>}
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
                                <Link className={classes.forgotLink} to='/forgotPass' >forgot password?</Link>
                            </div>
                            
                        </div>
                        <LogBtn log="Login" type="submit"/>
                        <div>
                            Need an Account? <Link to='/register' className={classes.forgotLink}>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login