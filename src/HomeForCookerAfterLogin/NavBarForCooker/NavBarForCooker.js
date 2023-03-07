import React from 'react';
import './Navbar.css'
//import { Navbar ,Container ,Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import Delivery from './Delivery/Delivery';
const Navs =()=>{

    return(
      <nav className="d-flex flex-column justify-content-between">
        <div>
          <div class="image">
            <img src="https://via.placeholder.com/50/09f/fff.png" />
          </div>
          <h4 className="text-center">الاكيله</h4>

          <ul class="ul">
          <li>
            <a href='/HomeCooker/Home' className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
              <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
           </a>
            </li>
            <li>
              <a href='/HomeCooker/Menue' className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
              <i class="fa-regular fa-heart icon"></i> <span>أكلاتي</span>
              </a>
            </li>
            <li>
              <a href='/HomeCooker/Orders' className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
              <i class="fa-solid fa-cart-shopping icon"></i> <span>طلباتي</span>
              </a>
            </li>
           
          </ul>
        </div>
        <Delivery />
      </nav>

    )
}
export default Navs;