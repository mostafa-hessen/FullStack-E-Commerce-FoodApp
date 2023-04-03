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
  let activeFood=['active','','','']
  const [activeFoodstate,SetactiveFoodstate]=useState(activeFood)
  const changeActive =(status)=>{

      activeFood=['','','','']
      console.log(activeFood)
      activeFood[status]='active'
      console.log( activeFood[status]='active'  )
      console.log(activeFood)

      SetactiveFoodstate(activeFood)
     // console.log(activeFood)


     // SetactiveFoodstate( newa)
      //console.log(activeFoodstate)

      


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
            <li  className={`${activeFoodstate[0]}` }onClick={()=>changeActive(0)}>

              <Link to="/HomeUser/Home">
                    <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
              </Link>
            </li>
            <li className={`${activeFoodstate[1]}` }onClick={()=>changeActive(1)}>
              <Link to="/HomeUser/AddToFav">
              <i class="fa-regular fa-heart icon"></i> <span>المفضلة</span>
              </Link>
            </li>
            <li className={`${activeFoodstate[2]}` }onClick={()=>changeActive(2)}>
              <Link to="/HomeUser/Cart">
              <i class="fa-solid fa-cart-shopping icon"></i> <span>سلة التسوق</span>
              </Link>
            </li>
            <li className={`${activeFoodstate[3]}` }onClick={()=>changeActive(3)}>
              <Link to="/HomeUser/ChiefList">
              <i class="fa-solid fa-utensils icon"></i> <span>الطباخين</span>
                </Link>
            </li>

            <li >
            <Link onClick={() =>logOut()}> <i class="fas fa-sign-out icon"></i><span>الخروج</span></Link>

            </li>
            </ul>

        </div>
        <Delivery />
      </nav>
  );
}
export default Navbar;
