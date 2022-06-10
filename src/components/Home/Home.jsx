import React from 'react'
import { useState } from 'react'
import Nav from '../Navigation/Nav'
import UserPage from '../userPage/UserPage'
import WellcomePage from '../wellcomePage/WellcomePage'


function Home() {
  const [userPage, setuserPage] = useState(false);
  return (
    <React.Fragment>
        <Nav />
        {userPage ? <WellcomePage /> : <UserPage />}
    </React.Fragment>
  )
}

export default Home