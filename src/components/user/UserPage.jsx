import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './UserPage.module.css'
import AppDiv from '../appsData/AppDiv';
import AppAddingForm from '../appsData/AppAddingForm';

function UserPage() {

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
  ];

  const [appDataArray, setappDataArray] = useState(appData);  
  const userName = useSelector(state => state.username);

    

  const onAddAppHandler = (item) => {
    // adding the app item to start of the array.
    appDataArray.unshift(item);
    // updateing the appDataArray with newly added array.
    setappDataArray([...appDataArray]);
  }

  const deleteAppHandler = (appName) => {
    const filteredArray = appDataArray.filter(function(ele) {
      return ele.appName != appName;
    });

    setappDataArray([...filteredArray]);
  }

  return (
    <div className={classes['userPage-div']}>
        <h1>Wellcome {userName}.!</h1>
        <AppAddingForm onAddApp={onAddAppHandler} />
        {appDataArray.map(item => {
          return <AppDiv data={item} key={item.id} deleteHandler={deleteAppHandler} />
        })}
    </div>
  )
}

export default UserPage