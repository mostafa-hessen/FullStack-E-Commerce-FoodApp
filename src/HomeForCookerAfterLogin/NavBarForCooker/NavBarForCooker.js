import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { doc, onSnapshot } from 'firebase/firestore';
import { Link, useHistory } from 'react-router-dom';
import Delivery from './Delivery/Delivery';
import { db } from '../../firebase';

const Navs =()=>{
  const [us, setus] = useState({})
  const user = JSON.parse(localStorage.getItem("user"));
 const navigate=useHistory()
  const logOut=()=>{
    navigate.push('/')
    localStorage.removeItem("user")
  }

  useEffect (() => {
    const q = doc(db, "cookers", user.uid);
    onSnapshot(q, (snapshot) => {
      setus(snapshot.data())
    })
    }, [ ])

    return(
      <nav className="d-flex flex-column justify-content-between navforcooker">
        <div>
          {console.log(us,user.uid)}
          <div className="image mt-3">
            <img src={us?us.photo:""} />
          </div>
          <h4 className="text-center mt-3">{us? us.fullName: 'هذا الحساب غير مسجل'}</h4>

          <ul className="ul">
          <li>
            <Link to='/HomeCooker/Home'>
              <i className="fa-solid fa-house icon"></i> <span>الرئيسية</span>
           </Link  >
            </li>
            <li>
              <Link to='/HomeCooker/Menue'>
              <i className="fa-regular fa-heart icon"></i> <span>أكلاتي</span>
              </Link  >
            </li>
            <li>
              <Link to='/HomeCooker/Orders'>
              <i className="fa-solid fa-cart-shopping icon"></i> <span>طلباتي</span>
              </Link  >
            </li>
            <li>
            <Link onClick={() =>logOut()}> <i class="fas fa-sign-out icon"></i><span>الخروج</span></Link>
            </li>
          </ul>
        </div>
        <Delivery />
      </nav>

    )
}
export default Navs;