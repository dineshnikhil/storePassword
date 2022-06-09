import React from 'react'
import classes from './Input.module.css'

function Input(props) {
  return (
    <div className={classes.input}>
      <div className={classes.inputLabelDiv}>
        <label className={classes.inputLabel}>{props.label}</label>
        <span>{props.msg}</span>
      </div>
        <input className={classes.inputField} type={props.type} ref={props.onRef} />
    </div>
  )
}

export default Input