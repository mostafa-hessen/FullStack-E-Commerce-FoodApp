import React from 'react'
import Home from '../HomeUser/Home/Home'
import Navbar from '../HomeUser/Navbar/NavbarForUser'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'
import './Main.css'
function Main() {
import NavbarForUser from '../HomeUser/Navbar/NavbarForUser'
import NavbarForCooker from '../../HomeForCookerAfterLogin/NavBarForCooker/NavBarForCooker'
function Main(props) {
  return (
       <div className="row homNavContainer  rounded-3 " style={{backgroundColor:'rgb(155, 193, 155)'}} >
        <div className="col-12 col-lg-10 py-4  px-3 homeContainer rounded-4" style={{backgroundColor:'#fff',overflowY:"scroll"}}>
          <ResponsiveNav />
          <Home />

          <Home />

        </div>

        <div className='col-2 d-none d-lg-flex' >
        {props.kindOfuser=="user"? <NavbarForUser/>:<NavbarForCooker/>} 
        </div>
      
      </div> 
  )
}

export default Main