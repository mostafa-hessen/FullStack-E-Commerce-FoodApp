import React ,{useEffect,useState} from 'react'
import { MdEditLocationAlt, MdFastfood } from "react-icons/md";

import header from "../../assets/Reviewss.jpg"
import profile from "../../assets/Eat.jpg"
import './ChiefBage.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
function HeaderComponent() {
  let user=JSON.parse(localStorage.getItem('user'))
  const [userInfo, setuserInfo] = useState('')


  useEffect(() => {
     const docRef = doc(db, "cookers", user.uid);
     getDoc(docRef)
        .then((docRef) => {
        
           setuserInfo( docRef.data() )
          // console.log(docRef.data())
          // console.log(JSON.parse( docRef.data()))
         
        })
        .catch((error) => {
          console.log(error);
        });

 
 },[])
  return (
    <div className='headerprofile'>
      <div className='container '>
        <div className='backprofile'>
          <img src={header} className='w-100'></img>
        </div>

        <div className='row justify-content-center position-relative align-items-center '>
         
        <div className='col-lg-3 col-md-4 col-5  ' dir='rtl' >
            {/* <h5 className='col-12'>{user.displayName.split('@')[0]} </h5> */}
           <h5 className='col-12'>{userInfo.fullName} </h5> 
            <p className='col-12'>أكل بيتي <span><MdFastfood></MdFastfood></span></p>
          </div>
          <div className='col-lg-2 col-md-3 col-4 '>

            <div className='profile'>
              <img src={user? user.photoURL:profile} ></img>

            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default HeaderComponent