import React from 'react'
import './Homebeforelogin.css'
import Home from './Homepage/Home'
import Navs from './Nav/Navs';
import Service from './WeServe/Service';
import Eat from './Eat/Eat';
import Reviews from './Reviews/Reviews';
import Hungry from './Hungry/Hungry';
import Footer from './Footer/Footer';
import Signup from '../LoginSignupPopUp/tab/Signup/Signup';
import Tab from '../LoginSignupPopUp/tab/Tab';

export default function Homebeforelogin() {
  return (
    <div className='All'>
    <Navs/>
    <Home/>
   <Service/>
   <Eat/>
   <Reviews/>
   <Hungry/>
   <Footer/>
   {/* <Signup/>
  <Tab/> */}
    </div>
  )
}
