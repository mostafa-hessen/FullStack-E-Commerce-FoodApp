import React from 'react'
import Main from '../Component/Main/Main'
import './HomeAfterLoginForUser.css'
// import Main from "./Main/Main";

function HomeAfterLoginForUser() {
  return (
    <div className='HomeAfterLoginForUser' >
     <div className="container-fluid appContainer  ">
         <Main kindOfuser={"user"} />
    </div>
    </div>

  )
}

export default HomeAfterLoginForUser