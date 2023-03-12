import React from 'react'
import { Redirect } from 'react-router-dom'
import { doc, getDocs,onSnapshot,query,collection } from 'firebase/firestore';
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
    const q = doc(db, "cookers",`${user.uid}`);
    onSnapshot(q, (snapshot) => {
     console.log(snapshot.data())
     setuserInfo( snapshot.data() )
      })

 },[])

  return (
     <>
     <HeaderComponent Name = {userInfo?.fullName} photo={ userInfo?.photo} typeofworkcooker={userInfo?.typeofworkcooker}></HeaderComponent>
<InformationComponent  alldata={userInfo} phone={userInfo?.phone} address={userInfo?.address} country={userInfo?.country}></InformationComponent>
<RateChiefComponent></RateChiefComponent>
     </>

      
  )
}

export default ChiefHome