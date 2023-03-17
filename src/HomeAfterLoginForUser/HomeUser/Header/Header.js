import './Header.css'
import Notification from './notification/notification'
import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
function Header(props) {
    const [us, setus] = useState({})
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect (() => {
        const q = doc(db, "users", user.uid);
        onSnapshot(q, (snapshot) => {
          setus(snapshot.data());})
        }, [ ])

    return (

        <>
            <div className="row header py-5   align-items-center" >

                <div className="col-9 d-flex justify-content-between align-items-center">
                     <div className="image  d-flex align-items-center">
                           <img  className='d-lg-none w-100 border-5' src={us.photo && us.photo} />
                           <Notification/>
                     </div>
                   {/* <div className="search-box d-flex align-items-center">
                        <div className="search-btn">
                            <i className="fas fa-search "></i>
                        </div>
                        <input type="text" placeholder="ابحث عن اكلتك" />
                        </div> */}              
                </div>

                <div className="col-3 text-center myHeaderText">
                    <p >{props.hello}</p>
                   <p>{props.helloCon}</p>
                </div>
            </div>
        </>
    )
}
export default Header