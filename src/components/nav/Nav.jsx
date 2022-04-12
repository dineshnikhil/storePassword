import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import classes from './Nav.module.css';
import { loginActions } from '../../store/login-slice';

function Nav() {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.loginSlice.isLoggedIn);
  const userName = useSelector(state => state.username)

  function logoutHandler(event) {
    event.preventDefault();

    dispatch(loginActions.logout());
  }

  return (
    <nav>
      <h1 className={classes.logo}>storePass...|<FontAwesomeIcon icon={faFolder} /> </h1>
      <div className={classes.actionSection}>
        <h3>{userName}</h3>
        {isLoggedIn ? <button className={classes.logoutBtn} onClick={logoutHandler}>logout <FontAwesomeIcon icon={faRightFromBracket} /></button> : <Link to="/login"><button className={classes.loginBtn}>login <FontAwesomeIcon icon={faRightToBracket} /></button></Link>}
      </div>
    </nav>
  )
}

export default Nav