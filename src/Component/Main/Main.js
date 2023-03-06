import React from 'react'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'
import './Main.css'
import NavbarForUser from '../../HomeAfterLoginForUser//HomeUser/Navbar/NavbarForUser'
import NavbarForCooker from '../../HomeForCookerAfterLogin/NavBarForCooker/NavBarForCooker'
import UserRoutes from '../InnerRoutes/UserRoutes'
import CookerRoutes from '../InnerRoutes/CookerRoutes'
import EditChiefPersonalForm from '../../HomeForCookerAfterLogin/shiefBage/EditChiefPersonalForm/EditChiefPersonalForm'

function Main(props) {
  return (
       <div className="row homNavContainer  rounded-3 " style={{backgroundColor:'rgb(155, 193, 155)'}} >
        <div className="col-12 col-lg-10 py-4  px-3 homeContainer rounded-4" style={{backgroundColor:'#fff',overflowY:"scroll"}}>
          <ResponsiveNav />
 
          {props.kindOfuser=="user"? <UserRoutes/>:<CookerRoutes/>} 
        </div>

     <div className='col-2 d-none d-lg-flex' >
        {props.kindOfuser=="user"? <NavbarForUser/>:<NavbarForCooker/>} 
        </div> 
    
      </div> 
  )
}

export default Main