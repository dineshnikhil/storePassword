import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './UserPage.module.css'
import AppDiv from '../appsData/AppDiv';
import AppAddingForm from '../appsData/AppAddingForm';
import { userSliceActions } from '../../store/user-slice';

function UserPage() {

  const dispatch = useDispatch();

  // here we are fetching the appdata array form userSlice redux.
  const appData = useSelector(state => state.userSlice.apps);

  // appdataarray usestate and it is set to app data.
  const [appDataArray, setappDataArray] = useState(appData);
  // here we are username and userId form userSlice redux.
  const userName = useSelector(state => state.userSlice.username);
  const userId = useSelector(state => state.userSlice.id);


  // here iam fetching the data form server through the userId
  // through the userId we that user appData array only
  // and this newly fetched array is updated with usestate appdataArray.
  async function onAddAppHandler(item) {

    // from the data we pass from appAddingForm if the status is ok then -> fetch the appsData of the perticular user through the userId.
    if(item.status === "ok") {
      // here we are generating the url with userId we have.
      var url = "http://localhost:8000/apps/" + userId;
      // again we are fetching the appsData array from database freshlly.
      const response = await fetch(url);

      const data = await response.json();

      // updating the usestate variable here.
      setappDataArray(data.apps);
      // updating the apps array from the userSlice redux dispatch method.
      dispatch(userSliceActions.updateApps(data.apps))
    }
    
  }

  const deleteAppHandler = (appName) => {
    const filteredArray = appDataArray.filter(function(ele) {
      return ele.appName !== appName;
    });

    setappDataArray([...filteredArray]);
  }

  return (
    <div className={classes['userPage-div']}>
      {/* Here fist we are displaying the welcome note with username */}
        <h1>Wellcome {userName}.!</h1>
        {/* And added the AppAddingForm form here and pass the function to recieve the data from the  appAddingForm element */}
        <AppAddingForm onAddApp={onAddAppHandler} />
        {/* Here we are checking for the appDataArray if length is zero then show no apps found msg or else show apps through the map method with AppDiv */}
        {appDataArray.length === 0 ? <h3>no apps found yet!</h3> : appDataArray.map(item => {
          return <AppDiv data={item} key={item._id} deleteHandler={deleteAppHandler} />
        })}
    </div>
  )
}

export default UserPage