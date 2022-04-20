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

function AppDiv(props) {

  // state for maintaing the showing of the password.
  const [isShown, setIsShown] = useState(false);
  // functions for handling showing password.
  function passwordShowToggleHandler() {
    setIsShown(!isShown);
  }
  // function for deleteing the app from array.
  function deleteAppHandler() {
    props.deleteHandler(props.data.appName);
  }
  // function to copy password to clipboard.
  function copyToClipboardHandler() {
    copy(props.data.password);
  }

  return (
    <div className={classes['appData-div']} key={props.data._id}>
        <div className={classes.grid}>
          {/* app name display */}
          <div>{props.data.appname}</div>
          {/* noting for present */}
          <div></div>
          {/* app password div */}
          <div className={classes.passwordDiv}>
            {!isShown ? <p>.............</p> : <p>{props.data.password}</p>}
          </div>
          {/* action like edit and delete div */}
          <div className={classes.four}>
            <button onClick={passwordShowToggleHandler}>
              <FontAwesomeIcon icon={!isShown ? faEye : faEyeSlash} />
            </button>
            <button onClick={copyToClipboardHandler}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <button><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button onClick={deleteAppHandler}><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
        </div>
    </div>
  )
}

export default AppDiv