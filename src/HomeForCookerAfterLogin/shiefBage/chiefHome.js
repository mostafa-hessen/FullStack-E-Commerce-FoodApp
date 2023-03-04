import React from 'react'
import { Redirect } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
// import Navbar from '../HomeUser/Navbar/Navbar'
import profile from "../../assets/Eat.jpg"
import HeaderComponent from '../shiefBage/ChiefProfileHeader'
import InformationComponent from '../shiefBage/information'
import RateChiefComponent from '../shiefBage/RateChiefComponent'
import { useEffect } from 'react';
import { useState } from 'react';
function ChiefHome() {
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
     <>
     <HeaderComponent Name = {userInfo.fullName} photo={user? user.photoURL:profile}></HeaderComponent>
<InformationComponent phone={userInfo.phone} address={userInfo.address} country={userInfo.country}></InformationComponent>
<RateChiefComponent></RateChiefComponent>
     </>

      
  )
}

export default ChiefHome