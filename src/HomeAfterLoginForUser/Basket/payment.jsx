import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { arrayUnion, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function Payment(props) {
    let myTotalPrice=useSelector(state=>state.TotalPrice.price)
    let myCart = useSelector(state=>state.MyCart.MyCartOrders)
    let MYORDERS = useSelector(state=>state.MYORDERS.MYORDERS)
    let user=JSON.parse(localStorage.getItem('user'))
const [x, setx] = useState([])
    const setOrder=()=>{
      console.log(myCart);
              myCart?.map(ele=>{
               const q = doc(db, "cookers", ele.cookerId);
               updateDoc(q, { order: arrayUnion(ele) });
        })
        console.log(MYORDERS);
        const q = doc(db, "orders", user.uid);
        setDoc(q,{orders:arrayUnion(...MYORDERS,...myCart)})
    }

    const empty = () =>{
      const q = doc(db, "users", user.uid);
      updateDoc(q, { cart: [] });
    }


/////////////////////////////
    let deliveryFees = 17



    /* let firstSum = 0
    const total1 = () =>{
        myCart.map(item =>{
        return  firstSum = firstSum + (Number(item[priceTranslate[item.choosenPrice]]) * Number(item.quantity)) 
        })
        return firstSum
    } */


  return (

<>

<div className=" mx-auto row justify-content-evenly  rounded-2 col-10 ">
          <div className="col-lg-3 mt-3 mb-3 col-6 border border-3 rounded-4 mt-2 ">
            <div className="col-lg-11 m-3">
              <p>الحساب الخاص بك : {myTotalPrice}ج</p>
            </div>
            <div className="col-lg-11 m-3">
              <p>ضريبة التوصيل: {deliveryFees}ج</p>
            </div>

            <div className="col-lg-11 m-3">
              <p>الحساب الصافي : {myTotalPrice == 0 ? 0: myTotalPrice + deliveryFees}ج</p>
            </div>
          
          </div>
        </div>



        
 <PayPalScriptProvider options={{ "client-id":"AYqaKElgqrBNzGijar7sOja8NvjgV-X4LssO7u4ahxUwts9_LazEoFtUmTx6v5YtbFXqQjdNi8J6tMS4" }}>

<PayPalButtons style={{ layout: "horizontal" }}

createOrder={(data, actions) => {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          value:  myTotalPrice
        },
      },
    ],
  });
}}
onApprove={async (data, actions) => {
  const details = await actions.order.capture();
  const name = details.payer.name.given_name;
  
  console.log("nbvcx",myTotalPrice);
  setOrder()
  empty()
//  await sendorder()
  // alert("Transaction completed by " + name);
}}/>
</PayPalScriptProvider>
</>

  )
}

export default Payment