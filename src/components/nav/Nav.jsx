import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import classes from './Nav.module.css';
import { userSliceActions } from '../../store/user-slice';

function Nav() {

  const [mode, setMode] = useState(true);
  const [icon, setIcon] = useState(faSun);

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.userSlice.isAuthenticated);
  const userName = useSelector(state => state.userSlice.username)

  function modeChangeHandler() {
    if (mode) {
        document.documentElement.setAttribute('data-theme', 'light')
        setMode(false)
        setIcon(faMoon)
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        setMode(true)
        setIcon(faSun)
    }
  }

  function logoutHandler(event) {

    // loging out the user using redux.
    dispatch(userSliceActions.logoutUser({
      isAuthenticated: false,
      username: "",
      id: "",
      apps: []
    }));

    // after logout redirecting to the home page.
    navigate("/");
  }

  return (
    <nav>
      <h1><Link to="/"  className={classes.logo}>storePass..</Link></h1>
      <div className={classes.actionSection}>
        <h3><Link to="/userpage" className={classes.username}>{userName}</Link></h3>
        {isAuthenticated ? <button className={classes.logoutBtn} onClick={logoutHandler}>logout <FontAwesomeIcon icon={faRightFromBracket} /></button> : <Link to="/login"><button className={classes.loginBtn}>login <FontAwesomeIcon icon={faRightToBracket} /></button></Link>}
        <button className={classes.modeIconBtn} onClick={modeChangeHandler}><FontAwesomeIcon icon={icon} /></button>
      </div>
    </nav>
  )
}

export default Nav