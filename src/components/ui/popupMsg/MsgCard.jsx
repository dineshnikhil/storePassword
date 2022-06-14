import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDom from 'react-dom'
import Backdrop from './Backdrop'


import classes from './MsgCard.module.css'
import { msgSliceActions } from '../../../store/msgSlice'

function MsgModal(props) {
    return(
        <div className={classes.msgmodal}>
            <div>{props.content}</div>
            <div className={classes.msgmodalTwo}>
                {/* <button onClick={props.onClose}>ok</button> */}
                <button onClick={props.onClose}>nope!</button>
            </div>
        </div>  
    )
}

function MsgCard(props) {

    const dispatch = useDispatch();

    function closeMsg() {
        dispatch(msgSliceActions.hideMsg());
    }

  return (
    <React.Fragment>
        {
            ReactDom.createPortal(
                <Backdrop />,
                document.getElementById('backdrop-root')
            )
        }

        {
            ReactDom.createPortal(
                <MsgModal content={props.children} onClose={closeMsg} />,
                document.getElementById('backdrop-root')
            )
        }
    </React.Fragment>
  )
}

export default MsgCard