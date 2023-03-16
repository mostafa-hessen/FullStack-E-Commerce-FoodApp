import "./Navbar.css";
import Delivery from "../Delivery/Delivery";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { authStatuesForUser } from "../../../Component/Redux/action";
import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
function Navbar() {
  const [us, setus] = useState({})
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch=useDispatch()
  const logOut=()=>{
    signOut(auth).then(() => {
      dispatch(authStatuesForUser(false))
      sessionStorage.removeItem("authUser")
    
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
  }

  useEffect (() => {
    const q = doc(db, "users", user.uid);
    onSnapshot(q, (snapshot) => {
      setus(snapshot.data());})
    }, [ ])

  return (
      <nav className="d-flex flex-column justify-content-between navbaruser">
        <div>
          <div class="image">
            <img src={us.photo && us.photo} style={{height:90}}/>
          </div>
          <h4 className="text-center mt-3">{us.fullName && us.fullName}</h4>


          <ul class="ul">
            <li>

              <Link to="/HomeUser/Home">
                    <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
              </Link>
            </li>
            <li>
              <Link to="/HomeUser/AddToFav">
              <i class="fa-regular fa-heart icon"></i> <span>المفضلة</span>
              </Link>
            </li>
            <li>
              <Link to="/HomeUser/Cart">
              <i class="fa-solid fa-cart-shopping icon"></i> <span>سلة التسوق</span>
              </Link>
            </li>
            <li>
              <Link to="/HomeUser/ChiefList">
              <i class="fa-solid fa-utensils icon"></i> <span>الطباخين</span>
                </Link>
            </li>

            <li>
            <Link onClick={() =>logOut()}> <i class="fas fa-sign-out icon"></i><span>الخروج</span></Link>

            </li>
            </ul>

        </div>
        <Delivery />
      </nav>
  );
}
export default Navbar;
