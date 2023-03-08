import React from 'react';
import './Navbar.css'
// import { Navbar ,Container ,Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import logo from '../../assets/logo.png'
import Delivery from './Delivery/Delivery';
const Navs =()=>{


 const navigate=useHistory()
  const logOut=()=>{
    
    navigate.push('/')
    localStorage.removeItem("user")
  }
    return(
      <nav className="d-flex flex-column justify-content-between navforcooker">
        <div>
          <div class="image">
            <img src="https://via.placeholder.com/50/09f/fff.png" />
          </div>
          <h4 className="text-center">الاكيله</h4>

          <ul class="ul">
          <li>
            <Link to='/HomeCooker/Home'>
              <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
           </Link  >
            </li>
            <li>
              <Link to='/HomeCooker/Menue'>
              <i class="fa-regular fa-heart icon"></i> <span>أكلاتي</span>
              </Link  >
            </li>
            <li>
              <Link to='/HomeCooker/Orders'>
              <i class="fa-solid fa-cart-shopping icon"></i> <span>طلباتي</span>
              </Link  >
            </li>
           
          </ul>
        </div>
        <Delivery />
      </nav>

    )
}
export default Navs;