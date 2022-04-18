import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './UserPage.module.css'
import AppDiv from '../appsData/AppDiv';
import AppAddingForm from '../appsData/AppAddingForm';

function UserPage() {

  const appData = useSelector(state => state.userSlice.apps);

  // const appData = [
  //   {
  //     id: '1',
  //     appName: 'google',
  //     password: 'pass1'
  //   },
  //   {
  //       id: '2',
  //       appName: 'facebook',
  //       password: 'pass1'
  //   },
  //   {
  //       id: '3',
  //       appName: 'instagram',
  //       password: 'pass1'
  //   },
  //   {
  //       id: '4',
  //       appName: 'snapchat',
  //       password: 'pass4'
  //   },
  //   {
  //       id: '5',
  //       appName: 'grow',
  //       password: 'pass1'
  //   }
  // ];

  const [appDataArray, setappDataArray] = useState(appData);
  const userName = useSelector(state => state.userSlice.username);
  const userId = useSelector(state => state.userSlice.id);

  console.log(appDataArray);
  console.log(userId);

  // Here we have to send the app data to the database.
  // and fetche the data from the database also.
  const onAddAppHandler = (item) => {
   console.log({
     userId: userId,
     appName: item.appName,
     password: item.password,
     email: item.email
   });
  }

  const deleteAppHandler = (appName) => {
    const filteredArray = appDataArray.filter(function(ele) {
      return ele.appName !== appName;
    });

    setappDataArray([...filteredArray]);
  }

  return (
    <div className={classes['userPage-div']}>
        <h1>Wellcome {userName}.!</h1>
        <AppAddingForm onAddApp={onAddAppHandler} />
        {appDataArray.length === 0 ? <h3>no apps found yet!</h3> : appDataArray.map(item => {
          return <AppDiv data={item} key={item.id} deleteHandler={deleteAppHandler} />
        })}
    </div>
  )
}

export default UserPage