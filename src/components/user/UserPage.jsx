import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './UserPage.module.css'
import AppDiv from '../appsData/AppDiv';
import AppAddingForm from '../appsData/AppAddingForm';
import MsgCard from '../ui/MsgCard';
import { userSliceActions } from '../../store/user-slice';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';

function UserPage() {

  const dispatch = useDispatch();
  // here we are fetching the msgcard show value from redux.
  const isShow = useSelector(state => state.msgCardShowSlice.isShow);
  // here we are username and userId form userSlice redux.
  const userName = useSelector(state => state.userSlice.username);
  const userId = useSelector(state => state.userSlice.id);
  // here we are fetching the appdata array form userSlice redux.
  const appData = useSelector(state => state.userSlice.apps);


  useEffect(() => {
    dispatch(msgCardSliceActions.closeMsgCard());
    fect_updated_apps_list();
  }, []);

  
  // usestate for the userid and appid which we want to delete.
  const [appid, setAppid] = useState("");
  // appdataarray usestate and it is set to app data.
  const [appDataArray, setappDataArray] = useState(appData);
  // search state is here.
  const [search, setSearch] = useState("");
  // delete msg state.
  const [deleteMsg, setDeleteMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);

  function searchHandler(event) {
    setSearch(event.target.value);
  }
  
  // ==========================================================================
  // ============================ fetching the updated apps list ==============
  // ==========================================================================
  async function fect_updated_apps_list() {
    // here we are generating the url with userId we have.
    var url = "http://localhost:8000/apps/" + userId;
    // again we are fetching the appsData array from database freshlly.
    const response = await fetch(url);

    const data = await response.json();
    console.log(data.status);
    // updating the usestate variable here.
    // Here i am reversing the array elements for better user experiance.
    setappDataArray(data.apps.reverse());
    // updating the apps array from the userSlice redux dispatch method.
    dispatch(userSliceActions.updateApps(data.apps))
  }

  // =======================================================================
  // =================== Deleteing the App Handler =========================
  // =======================================================================
  // 1. Here we have three functions
  // 2. deleteAppHandler -> it will pops up the delete msg.
  // 3. on appDeleteCancelHandler -> it will concel the delete process.
  // 4. appDeleteOkayHandler -> it will execute the delete process.
  const deleteAppHandler = (item) => {
    // here we are setting the userid and appid states.
    setAppid(item.id)
    setDeleteMsg("");
    dispatch(msgCardSliceActions.showMsgCard());
  }

  function appDeleteCancelHandler() {
    dispatch(msgCardSliceActions.closeMsgCard());
  }

  async function appDeleteOkayHandler() {
    // here we are generating the url with userId and appid we have.
    var url = "http://localhost:8000/app-delete/" + userId + "/" + appid;
    const response = await fetch(url);

    const data = await response.json();

    if (data.status === "successfully deleted the app.") {
      setDeleteMsg("app deleted 🗑️ successfully!");
      fect_updated_apps_list();
    } else {
      setDeleteMsg("something went worng!")
    }
  }

  // filltering the apps based on the search
  const filteredApps = appDataArray.filter(app => {
    return app.appname.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <React.Fragment>
    {isShow && <MsgCard>
      {deleteMsg.length === 0 ? 
        <div>
          <h1>Do you want to delete the app</h1>
          <button onClick={appDeleteOkayHandler}>Yeap!</button>
          <button onClick={appDeleteCancelHandler}>cancel</button>
        </div> : <h1>{deleteMsg}</h1>}
    </MsgCard>}
    <div className={classes['userPage-div']}>
      {/* Here fist we are displaying the welcome note with username */}
        <h1>Wellcome {userName}.!</h1>
        {/* And added the AppAddingForm form here and pass the function to recieve the data from the  appAddingForm element */}
        {/* <AppAddingForm onAddApp={onAddAppHandler} /> */}
        {/* Here we are putting the search bar and add app button */}
        <div className={classes.userActionDiv}>
          <input type="search" name="appname" id="appSearch" placeholder='search your app' onChange={searchHandler} />
          <Link to="/app-add" className={classes.appAddBtn}>
            <button>add app</button>
          </Link>
        </div>
        {/* Here we are checking for the appDataArray if length is zero then show no apps found msg or else show apps through the map method with AppDiv */}
        <div className={classes.appsCardDiv}>
          {filteredApps.length === 0 ? <h3>no apps found yet!</h3> : filteredApps.map(item => {
            return <AppDiv data={item} key={item._id} deleteHandler={deleteAppHandler} />
          })}
        </div>
    </div>
    </React.Fragment>
  )
}

export default UserPage