import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className={classes['home-section']}>
        <h1>Protect your Passwords</h1>
        <p>
          You'll never need to remember or type your passwords again.
          The Most Trusted Open Source Password Manager for Individuals. Stay more organized and safe with storePass...|
        </p>
        <div>
          <Link to="/createAccount"><button className={classes.createBtn}>
            Create Account <FontAwesomeIcon style={{marginLeft: "20px"}} icon={faUser} />
          </button></Link>
          <h5 className={classes.note}>*If you already have an account please login from nav.</h5>
        </div>
    </div>
  )
}

export default Home