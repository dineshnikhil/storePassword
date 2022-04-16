import React from 'react'

import classes from './Loading.module.css';

function Loading() {
  return (
    <div className={classes['lds-dual-ring']}></div>
  )
}

export default Loading