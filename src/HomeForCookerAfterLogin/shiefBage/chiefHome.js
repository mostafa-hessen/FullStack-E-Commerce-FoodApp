import React from 'react'
import { Redirect } from 'react-router-dom'

// import Navbar from '../HomeUser/Navbar/Navbar'

import HeaderComponent from '../shiefBage/ChiefProfileHeader'
import InformationComponent from '../shiefBage/information'
import RateChiefComponent from '../shiefBage/RateChiefComponent'
function ChiefHome({authorized}) {
  if(!authorized){
    return <Redirect to = '/SignPage'/>
  }
  return (
     <>
     <HeaderComponent></HeaderComponent>
<InformationComponent></InformationComponent>
<RateChiefComponent></RateChiefComponent>
     </>

      
  )
}

export default ChiefHome