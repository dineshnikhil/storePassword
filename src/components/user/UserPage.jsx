import React from 'react';
import { useSelector } from 'react-redux';

import classes from './UserPage.module.css'
import AppDiv from '../appsData/AppDiv';

function UserPage() {

    const userName = useSelector(state => state.username);

    const appData = [
      {
        id: '1',
        appName: 'google',
        password: 'pass1'
      },
      {
          id: '2',
          appName: 'facebook',
          password: 'pass1'
      },
      {
          id: '3',
          appName: 'instagram',
          password: 'pass1'
      },
      {
          id: '4',
          appName: 'snapchat',
          password: 'pass4'
      },
      {
          id: '5',
          appName: 'grow',
          password: 'pass1'
      }
    ]

  return (
    <div className={classes['userPage-div']}>
        <h1>Wellcome {userName}.!</h1>
        {appData.map(item => {
          return <AppDiv data={item} />
        })}
    </div>
  )
}

export default UserPage