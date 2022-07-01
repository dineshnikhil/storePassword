import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './UserPage.module.css'
import { Link } from 'react-router-dom'
import AppDiv from '../app/AppDiv/AppDiv'
import { userSliceActions } from '../../store/userSlice'

function UserPage() {

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  function searchHandler(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetchUpdatedAppsList();
  });

  const appsData = useSelector(state => state.userSlice.apps)
  const [appsDataArray, setAppsDataArray] = useState(appsData);
  const userId = useSelector(state => state.userSlice.id)

  async function fetchUpdatedAppsList() {
    // here we are generating the url with userId we have.
    var url = "http://localhost:8000/apps/" + userId;
    // again we are fetching the appsData array from database freshlly.
    const response = await fetch(url);

    const data = await response.json();
    // updating the usestate variable here.
    // Here i am reversing the array elements for better user experiance.
    setAppsDataArray(data.apps.reverse());
    // updating the apps array from the userSlice redux dispatch method.
    dispatch(userSliceActions.updateApps(data.apps))
  }

  const filterArray = appsDataArray.filter(app => {
    return app.appname.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <React.Fragment>
        <div className={classes.userpageOuterDiv}>
            <div className={classes.userpageInnerDivOne}>
                <input type="text" placeholder='search you app' onChange={searchHandler}/>
                <Link to='/addapp' className={classes.appAddBtn}>Add App</Link>
            </div>
            <div className={classes.userpageInnerDivTwo}>
              {filterArray.map(item => {
                return <AppDiv data={item} />
              })}
            </div>
        </div>
    </React.Fragment>
  )
}

export default UserPage