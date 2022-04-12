import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import classes from './BackDrop.module.css'
import { msgCardSliceActions } from '../../store/msgCardShow-slice';

function BackDrop(props) {

  const dispatch = useDispatch();
  // const isShow = useSelector(state => state.msgCardShowSlice.isShow);

  function cardHideHandler() {
    dispatch(msgCardSliceActions.showToggle());
  }

  return (
    <div onClick={cardHideHandler} className={classes.backdrop}></div>
  )
}

export default BackDrop