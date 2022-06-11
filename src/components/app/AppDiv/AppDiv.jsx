import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

// import copy method from copy-to-clipboard.
import copy from 'copy-to-clipboard';
import { Link } from 'react-router-dom';
import classes from './AppDiv.module.css'

function AppDiv(props) {

    // state for maintaing the showing of the password.
    const [isShown, setIsShown] = useState(false);
    // functions for handling showing password.
    function passwordShowToggleHandler() {
        setIsShown(!isShown);
    }

    // function to copy password to clipboard.
    function copyToClipboardHandler() {
        copy(props.data.password);
    }

  return (
    <div className={classes['appData-div']}>
        <div className={classes.grid}>
        {/* app name display */}
        <div className={classes.appInfoDiv}>
            <h2>appName</h2>
            <h4>email</h4>
            {!isShown ? <p className={classes.passwordDiv}>---------</p> : <p className={classes.passwordDiv}>password</p>}
        </div>
        {/* action like edit and delete div */}
        <div className={classes.four}>
            <button onClick={passwordShowToggleHandler}>
            <FontAwesomeIcon icon={!isShown ? faEye : faEyeSlash} />
            </button>
            <button onClick={copyToClipboardHandler}>
            <FontAwesomeIcon icon={faCopy} />
            </button>
            <Link to="/addapp"><button><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
            <button><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
        </div>
    </div>
  )
}

export default AppDiv