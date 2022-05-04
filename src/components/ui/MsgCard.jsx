import React from 'react'
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './MsgCard.module.css'
import BackDrop from './BackDrop';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function MsgModal(props) {

    const dispatch = useDispatch();
    function closeHandler() {
        dispatch(msgCardSliceActions.closeMsgCard());
    }

    return (
        <div className={classes['msg-modal-div']}>
            <button className={classes.btnClose} onClick={closeHandler}><FontAwesomeIcon icon={faXmark} /></button>
            <div className={classes['inner-div']}>
                {props.content}
            </div>
        </div>
    )
}




function MsgCard(props) {
  return (
      <React.Fragment>
        {ReactDom.createPortal(
            <BackDrop />,
            document.getElementById('backdrop-root')
        )}

        {ReactDom.createPortal(
            <MsgModal content={props.children} />,
            document.getElementById('msgModal-root')
        )}
    </React.Fragment>
  )
}

export default MsgCard;