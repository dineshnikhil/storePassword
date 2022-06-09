import React from 'react'

import classes from './LogBtn.module.css'

function LogBtn(props) {
  return (
    <button className={classes.logBtn} type={props.type}>
        {props.log}
    </button>
  )
}

export default LogBtn