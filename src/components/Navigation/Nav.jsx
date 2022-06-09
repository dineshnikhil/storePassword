import React from 'react'

import { Link } from 'react-router-dom'

import classes from './Nav.module.css'

function Nav() {
    return (
    <div className={classes.nav}>
        <h3 className={classes.brandName}>
            storePass
        </h3>
        <div className={classes.navFeatures}>
            <h4 className={classes.username}>username</h4>
            <Link to='/login' className={classes.navLoginBtn}>
                login
            </Link>
            <Link to='/register' className={classes.navLoginBtn}>
                SignUp
            </Link>
        </div>
    </div>
    )
}

export default Nav