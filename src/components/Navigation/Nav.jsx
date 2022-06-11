import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import classes from './Nav.module.css'
import { userSliceActions } from '../../store/userSlice'

function Nav() {
    const dipatch = useDispatch();
    const username = useSelector(state => state.userSlice.username);
    const isAuth = useSelector(state => state.userSlice.isAuth);

    function logoutHandler() {
        dipatch(userSliceActions.logoutUser({
            isAuth: false,
            username: "",
            id: "",
            apps: []
        }))
    }

    return (
    <div className={classes.nav}>
        <h3 className={classes.brandName}>
            storePass
        </h3>
        <div className={classes.navFeatures}>
            <h4 className={classes.username}>{username}</h4>
            {!isAuth && <Link to='/login' className={classes.navLoginBtn}>
                login
            </Link>}
            {!isAuth && <Link to='/register' className={classes.navLoginBtn}>
                SignUp
            </Link>
            }
            {isAuth && <button className={classes.navLoginBtn} onClick={logoutHandler}>logout</button>}
        </div>
    </div>
    )
}

export default Nav