import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Navigation/Nav'
import UserPage from '../userPage/UserPage'
import WellcomePage from '../wellcomePage/WellcomePage'

import { userSliceAction } from '../../store/userSlice';


function Home() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.userSlice.isAuth)

  return (
    <React.Fragment>
        <Nav />
        {isAuth ? <UserPage /> : <WellcomePage />}
    </React.Fragment>
  )
}

export default Home