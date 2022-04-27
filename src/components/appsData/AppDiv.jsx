import React from 'react';
import { useState } from 'react';
// import copy method from copy-to-clipboard.
import copy from 'copy-to-clipboard';
// icons imports from font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import classes from './AppDiv.module.css';
import { Link } from 'react-router-dom';

function AppDiv(props) {

  // state for maintaing the showing of the password.
  const [isShown, setIsShown] = useState(false);
  // functions for handling showing password.
  function passwordShowToggleHandler() {
    setIsShown(!isShown);
  }
  // function for deleteing the app from array.
  function deleteAppHandler() {
    props.deleteHandler({
      id: props.data._id,
      appname: props.data.appname,
      email: props.data.email,
    });
  }
  // function to copy password to clipboard.
  function copyToClipboardHandler() {
    copy(props.data.password);
  }

  return (
    <div className={classes['appData-div']} key={props.data._id}>
        <div className={classes.grid}>
          {/* app name display */}
          <div className={classes.appInfoDiv}>
            <h2>{props.data.appname}</h2>
            <h4>{props.data.email}</h4>
            {!isShown ? <p className={classes.passwordDiv}>.............</p> : <p className={classes.passwordDiv}>{props.data.password}</p>}
          </div>
          {/* action like edit and delete div */}
          <div className={classes.four}>
            <button onClick={passwordShowToggleHandler}>
              <FontAwesomeIcon icon={!isShown ? faEye : faEyeSlash} />
            </button>
            <button onClick={copyToClipboardHandler}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <Link to={`/app-edit/${props.data._id}`}><button><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
            <button onClick={deleteAppHandler}><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
        </div>
    </div>
  )
}

export default AppDiv