import React from 'react'
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';

import classes from './MsgCard.module.css'
import BackDrop from './BackDrop';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';

function MsgModal(props) {

    const dispatch = useDispatch();
    function closeHandler() {
        dispatch(msgCardSliceActions.showToggle());
    }

    return (
        <div className={classes['msg-modal-div']}>
            <button onClick={closeHandler}>close</button>
        {props.content}
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