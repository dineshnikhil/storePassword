import React from 'react'
import classes from './Form.module.css'
import Input from './input/Input'
import LogBtn from './logBtn/LogBtn'

function Form() {
  return (
    <div className={classes.form}>
        <form action="">
            <h3>Wellcome Back!</h3>
            <Input type="text" label="username" />
            <Input type="password" label="password" />
            <LogBtn />
        </form>
    </div>
  )
}

export default Form