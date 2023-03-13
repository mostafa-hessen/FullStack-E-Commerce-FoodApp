import React from 'react'
import { FaCartPlus, FaStar } from "react-icons/fa";

import item1 from '../../assets/photo_2023-02-14_19-46-55.jpg'
import './Basket.css'

import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
function Basket() {
  let user = JSON.parse(localStorage.getItem("user"));
 
  const removeFromCart= (element)=>{

    console.log(myCart);
    const x=(elem)=>{
    if(  elem.foodId==element.foodId&&elem.choosenPrice!=element.choosenPrice){
      return elem
    }
    }
 console.log(  myCart.filter(elem=>x(elem)))
   console.log(myCart);

    const q = doc(db, "users", user.uid);
    updateDoc(q,{  cart:  myCart.filter(elem=>x(elem)) })



  }

  const priceTranslate={كبير:"bigPrice",صغير:"smallPrice",وسط :"middlePrice"}
  const [myCart, setmyCart] = useState([]);
  useEffect(() => {
    const q = doc(db, "users", user.uid);

    onSnapshot(q, (snapshot) => {
      setmyCart(snapshot.data().cart);
    });

  }, []);


 const  quantutyFunc =(current,e)=>{

 console.log( e.target.value)
    // console.log(myCart,);
   myCart.find(ele=>
{
   if(ele.id==current.id && ele.choosenPrice==current.choosenPrice ){

    ele.quantity=e.target.value

    const q = doc(db, "users", user.uid);

    updateDoc(q,{  cart:myCart   })
  

   }
   
  }
   )
}
  
 
 
  return (
    <>
      <div dir="rtl" className='container'>
        <div className='row justify-content-center '>

          <div className='col-lg-3 col-6 m-lg-3 m-5 '>
            <h4>سلة التسوق الخاصة بك</h4>
          </div>
          <div className='col-1 m-lg-2 m-5 '>
            <FaCartPlus style={{ fontSize: 35, marginRight: 6 }}></FaCartPlus>
          </div>
        </div>


        <div className='row justify-content-center border border-3 rounded-4  '>

          <div className='col-lg-2 col-md-3 mt-5 mb-3 col-3  d-none d-md-block d-lg-block'>
            <h4>العنصر</h4>
          </div>
          <div className='col-lg-2 col-md-2 mt-5 mb-3 col-3  d-none d-md-block d-lg-block'>
            <h4>الكمية </h4>
          </div>
          <div className='col-lg-2 col-md-3 mt-5 mb-3 col-2  d-none d-md-block d-lg-block'>
            <h4>السعر </h4>
          </div>

          <div className='col-lg-3 col-md-2 mt-5 mb-3 col-2  d-none d-md-block d-lg-block'>
            <h4>الحجم </h4>
          </div>
          <div className='col-lg-3 col-md-2 mt-5 mb-3 col-3 d-none d-md-block d-lg-block'>
            <h4>المجموع </h4>
          </div>
        </div>


      

{

myCart?.map(ele=>{
    return    <div className='row justify-content-center border border-3 rounded-4 mt-2  zoom'> <div className='col-lg-2 col-md-2 mt-3 mb-3 col-9 '>
    <img src={ele.foodImg[0]&&ele.foodImg[0]} className='w-50 w-md-25 w-lg-25 zoom h-50' style={{borderRadius:"50%"}}></img>
    <p className='mt-3'>{ele?.foodName}</p>
  </div>
  <div className='col-lg-2 col-md-2 mt-5 mb-3 col-3  '>
    <input className='w-25 ' type="number" defaultValue={ele?.quantity} onChange={(e)=>quantutyFunc(ele,e)}></input>
  </div>
{console.log(ele.foodImge,ele.foodImg[0])}
  <div className=' col-lg-2 col-md-2 mt-5 mb-3 col-3'>
    <h4> {ele[priceTranslate[ele.choosenPrice] ]}</h4>
  </div>
  <div className='col-lg-2 col-md-3 mt-5 mb-3 col-2   '>
    <h4>{ele?.choosenPrice}</h4>
  </div>


  <div className='col-lg-2 col-md-2 mt-5 mb-3 col-3  '>
    <h4>110ج</h4>
  </div>

  <div className='col-lg-1 col-md-1 mt-5 mb-3 col-1  '>
   <button onClick={()=> removeFromCart(ele)}>remove</button>
  </div>
        </div>
   })

        

}






        <div className='row justify-content-between '>

          <div className='col-lg-3 mt-3 mb-3 col-6 border border-3 rounded-4 mt-2 '>
            <div className='col-lg-11 m-3'>

              <p>الحساب الخاص بك  :  110ج</p>
            </div>
            <div className='col-lg-11 m-3'>

              <p>ضريبة التوصيل: 15ج</p>
            </div>

            <div className='col-lg-11 m-3'>

              <p>الحساب الصافي  :  125ج</p>
            </div>
            <div className='col-lg-11 m-3 text-center'>

              <button className='btn btn-success'>دفع</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Basket