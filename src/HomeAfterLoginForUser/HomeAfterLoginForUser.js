import React from 'react'
import { Redirect } from 'react-router-dom'
import Main from '../Component/Main/Main'
import './HomeAfterLoginForUser.css'

function HomeAfterLoginForUser({authorized}) {
  if(!authorized){
    return <Redirect to = '/'/>
  }

  return (
    <div className='HomeAfterLoginForUser' >
     <div className="container-fluid appContainer  ">
         <Main kindOfuser={"user"} />
    </div>
    </div>

  )
}

export default HomeAfterLoginForUser