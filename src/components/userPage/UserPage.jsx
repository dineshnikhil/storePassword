import React from 'react'
import classes from './UserPage.module.css'
import { Link } from 'react-router-dom'

function UserPage() {
  return (
    <React.Fragment>
        <div className={classes.userpageOuterDiv}>
            <div className={classes.userpageInnerDivOne}>
                <input type="text" placeholder='search you app'/>
                <Link to='/addapp' className={classes.appAddBtn}>Add App</Link>
            </div>
            <div className={classes.userpageInnerDivTwo}>

            </div>
        </div>
    </React.Fragment>
  )
}

export default UserPage