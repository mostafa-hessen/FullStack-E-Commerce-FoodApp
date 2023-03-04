import React from 'react'

import Navbar from '../HomeUser/Navbar/Navbar'

import './Basket.css'
import Basket from './BasketComponent'
import ResponsiveNav from '../Main/ResponsiveNav/ResponsiveNav'
function BasketHome() {
  return (
       <div className="row homNavContainer  rounded-3 " style={{backgroundColor:'rgb(155, 193, 155)'}} >
        <div className="col-12 col-lg-10 py-4  px-3 homeContainer rounded-4" style={{backgroundColor:'#fff',overflowY:"scroll"}}>
          <ResponsiveNav/>
          <Basket />

        </div>

        <div className='col-2 d-none d-lg-flex' >
          <Navbar/>
        </div>
      
      </div> 
  )
}

export default BasketHome