import React from 'react'
import Home from '../../HomeAfterLoginForUser/HomeUser/Home/Home'
// import Navbar from '../HomeUser/Navbar/NavbarForUser'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'
import './Main.css'
import NavbarForUser from '../../HomeAfterLoginForUser//HomeUser/Navbar/NavbarForUser'
import NavbarForCooker from '../../HomeForCookerAfterLogin/NavBarForCooker/NavBarForCooker'
import AddToFav from '../../HomeAfterLoginForUser/AddToFav/AddToFav'
import CheifList from '../../HomeAfterLoginForUser/CheifList/CheifList'
import CheifPage from '../../HomeAfterLoginForUser/CheifPageForUser/CheifPage'
import Details from '../../HomeAfterLoginForUser/Details/Details'
import Basket from '../../HomeAfterLoginForUser/Basket/BasketComponent'
import FoodForm from '../../HomeForCookerAfterLogin/Menu/AddFood/FoodForm/FoodForm'
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import CardFood from '../../HomeForCookerAfterLogin/Menu/CooKerCard/CardFood'
import Login from '../../LoginSignupPopUp/tab/Login/Login'
import Signup from '../../LoginSignupPopUp/tab/Signup/Signup'
import Tab from '../../LoginSignupPopUp/tab/Tab'
import LoginSignupPopUp from '../../LoginSignupPopUp/LoginSignupPopUp'

function Main(props) {
  return (
       <div className="row homNavContainer  rounded-3 " style={{backgroundColor:'rgb(155, 193, 155)'}} >
        <div className="col-12 col-lg-10 py-4  px-3 homeContainer rounded-4" style={{backgroundColor:'#fff',overflowY:"scroll"}}>
          <ResponsiveNav />
          {/* <AddToFav /> */}
          {/* <Home/> */}
    
    <CardFood/>
          {/* <Route exact path="/Home"> */}
            {/* <CheifPage /> */}
          {/* </Route> */}

{/* 
          <Route path="/fav">
            <AddToFav />
          </Route>

       
          <Route path="/chieflist">
            <CheifList />
          </Route>
          
          <Route path="/aboutCheif">
            <CheifPage />
          </Route>
           
          <Route path="/det">
            <Details />
          </Route>
            */}
            {/* <Details /> */}
            {/* <CheifPage/> */}
            {/* <Basket/>  */}
   
            {/* <FoodForm/> */}
            {/* <Login/>
            <Signup/> */}
            <Tab/>
            {/* <PopUp/> */}
            <LoginSignupPopUp/>
         
        </div>

        <div className='col-2 d-none d-lg-flex' >
        {props.kindOfuser=="user"? <NavbarForUser/>:<NavbarForCooker/>} 
        </div>
    
      </div> 
  )
}

export default Main