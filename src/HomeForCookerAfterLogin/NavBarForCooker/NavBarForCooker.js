import React from 'react';
import './Navbar.css'
import { Navbar ,Container ,Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Delivery from './Delivery/Delivery';
const Navs =()=>{
  
   let history = useHistory();

    return(
      <nav className="d-flex flex-column justify-content-between">
        <div>
          <div class="image">
            <img src="https://via.placeholder.com/50/09f/fff.png" />
          </div>
          <h4 className="text-center">الاكيله</h4>

          <ul class="ul">
          <li>
              <i class="fa-solid fa-house icon"></i> <span onClick={()=>{history.push('/HomeCooker/Home')}}>الرئيسية</span>
            </li>
            <li>
              <i class="fa-regular fa-heart icon"></i> <span onClick={()=>{history.push('/HomeCooker/Menue')}}>أكلاتي</span>
            </li>
            <li>
              <i class="fa-solid fa-cart-shopping icon"></i> <span onClick={()=>{history.push('/HomeCooker/Orders')}}>طلباتي</span>
            </li>
           
          </ul>
        </div>
        <Delivery />
      </nav>

    )
}
export default Navs;