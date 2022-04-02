import React from 'react';
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes['home-section']}>
        <h1>Protect your Passwords</h1>
        <p>
          You'll never need to remember or type your passwords again.
          The Most Trusted Open Source Password Manager for Individuals. Stay more organized and safe with storePass...|
        </p>
        <div>
          <button className={classes.createBtn}>
            Create Account
          </button>
          <h5 className={classes.note}>*If you already have an account please login from nav.</h5>
        </div>
    </div>
  )
}

export default Home