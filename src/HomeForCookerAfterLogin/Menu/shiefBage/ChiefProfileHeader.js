import React from 'react'
import { MdFastfood } from "react-icons/md";

import header from "../../assets/Reviewss.jpg"
import profile from "../../assets/Eat.jpg"
import './ChiefBage.css'
function HeaderComponent() {
  return (
    <div className='headerprofile'>
      <div className='container '>
        <div className='backprofile'>
          <img src={header} className='w-100'></img>
        </div>
        <div className='row justify-content-center position-relative align-items-center '>
        <div className='col-lg-3 col-md-4 col-5  ' dir='rtl' >
            <h5 className='col-12'>تقوي علي</h5>
            <p className='col-12'>اكل بيتي <span><MdFastfood></MdFastfood></span></p>
          </div>
          <div className='col-lg-2 col-md-3 col-4 '>
            <div className='profile'>
              <img src={profile} ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent