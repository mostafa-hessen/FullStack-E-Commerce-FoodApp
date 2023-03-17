import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import item1 from "../../assets/photo_2023-02-14_19-46-55.jpg";
import "./Basket.css";
import { useState, useEffect } from "react";
import { arrayUnion, doc, onSnapshot, orderBy, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAllorders, myCartOrderAction, totalPrice } from "../../Component/Redux/action";
import { margin } from "@mui/system";
function Basket() {
  const [Allorders, setAllorders] = useState([])
const dispatch =useDispatch()
  let user = JSON.parse(localStorage.getItem("user"));
let navigate = useHistory()
  const removeFromCart = (element) => {
    console.log(myCart);
    const q = doc(db, "users", user.uid);
    updateDoc(q, {cart:(myCart?.filter(ele=> ele != element)),})
  };



  const priceTranslate = {
    كبير: "bigPrice",
    صغير: "smallPrice",
    وسط: "middlePrice",
  };
  const [myCart, setmyCart] = useState([]);
  useEffect(() => {
    const q = doc(db, "users", user.uid);
    onSnapshot(q, (snapshot) => {
      setmyCart(snapshot.data().cart);
    });


    const q2 = doc(db, "orders", user.uid);
    onSnapshot(q2, (snapshot) => {
      setAllorders(snapshot.data().orders);
    });
  }, []);

  const quantutyFunc = (current, e) => {
    console.log(e.target.value,current.choosenPrice);
    console.log(+e.target.value != 0);
    // console.log(myCart,);

   if (+e.target.value > 0) {
      console.log("h");
      myCart.find((ele) => {
/* <<<<<<< HEAD
       /*  console.log(ele ,"takwa"); 
        if (ele.foodId == current.foodId && ele.choosenPrice == current.choosenPrice) {
          console.log(JSON.stringify( ele )+"ttttttttt");
          console.log( JSON.stringify( current )+"aaaaaaaaaaaa");
          ele.quantity = e.target.value;
          console.log(ele.quantity ,"takwa");
          console.log(e.target.value ,"takwa"); */

        if (ele.foodId == current.foodId && ele.choosenPrice == current.choosenPrice) {
          ele.quantity = +e.target.value;

          const q = doc(db, "users", user.uid);
          updateDoc(q, { cart: myCart });
        }
      });
    }

     else{
       removeFromCart(current)
    }
  }
 

let deliveryFees = 17

//  send order to cooker

let firstSum = 0
const total1 = () =>{
    myCart.map(item =>{
    return  firstSum = firstSum + (Number(item[priceTranslate[item.choosenPrice]]) * Number(item.quantity)) 
    })
    return firstSum
}
const callPaypal= ()=>{
   console.log(firstSum)
   if(firstSum){
     dispatch(totalPrice(firstSum))
     dispatch(myCartOrderAction(myCart))
     dispatch(myAllorders(Allorders))
     navigate.push("/HomeUser/Cart/f")
   }
   else{
    alert ('you must add food')
   }
}


  return (
    <>
      <div dir="rtl" className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-5 col-10 mt-5 mb-4 ">
            <h4 style={{display:"inline-block"}}> سلة التسوق الخاصة بك</h4>
            <FaCartPlus style={{ fontSize: 35,color:'rgb(26, 156, 26)', marginRight:15}}></FaCartPlus>
          </div>
        {/*   <div className="col-1  mb-4 text-end " style={{marginTop:46}}>
           
          </div> */}
        </div>

        <div className=" mx-auto row justify-content-evenly headercart rounded-2 col-10  ">
         
          <div className="col-lg-2 col-md-3 mt-3 mb-3 col-3  d-none d-md-none d-lg-block ">
            <h4 className="headercartmid">العنصر</h4>
          </div>
          <div className="col-lg-2 col-md-2 mt-3 mb-3 col-3  d-none d-md-none d-lg-block">
            <h4 className="headercartmid">الكمية </h4>
          </div>
          <div className="col-lg-2 col-md-3 mt-3 mb-3 col-2  d-none d-md-none d-lg-block">
            <h4 className="headercartmid">السعر </h4>
          </div>

          <div className="col-lg-2 col-md-2 mt-3 mb-3 col-2  d-none d-md-none d-lg-block">
            <h4 className="headercartmid">الحجم </h4>
          </div>
          <div className="col-lg-2 col-md-2 mt-3 mb-3 col-3 d-none d-md-none d-lg-block headercartmid">
            <h4 className="headercartmid">المجموع </h4>
          </div>
          <div className="col-lg-1 col-md-1 mt-5 mb-3 col-1  ">
              
              </div>  
        </div>
       
        {myCart?.map((ele,index) => {
          return (
            <>
           {/*  <div className="row col-lg-12 justify-content-evenly " > */}
              {console.log(ele)}
              <div className="row mx-auto col-lg-10 justify-content-lg-evenly justify-content-md-center justify-content-center rounded-2 mt-3 basket carthieght "key={index}>
              <div className="col-lg-2 col-md-12  mt-lg-3 mb-lg-2 col-11 mt-lg-4 mt-3 ">
             <div className="cartimage">
                <img
                  src={ele.foodImg[0] && ele.foodImg[0]}
                  className="w-100 "
                  
                ></img>
                </div>
                <p className="mt-3">{ele?.foodName}</p>
              </div>
              <div className="col-lg-2 col-md-3 mt-lg-5 mb-lg-3 mb-4 col-3  textmargin">
                <input
                  className="  text-center rounded-3 "
              
                  type="number"
                  value={(+ele?.quantity)}
                  onChange={(e) => quantutyFunc(ele , e)}
                  style={{width:45 ,border: "2px solid #87a087 " }}
                ></input>

              </div>
              <div className=" col-lg-2 col-md-3 mt-lg-5  mb-4 col-3 textmargin">
                <h4> {ele[priceTranslate[ele.choosenPrice]]}</h4>
              </div>
              <div className="col-lg-2 col-md-2 mt-lg-5  mb-4 col-2  textmargin ">
                <h4>{ele?.choosenPrice}</h4>
              </div>
              <div className="col-lg-2 col-md-2 mt-lg-5  mb-4 col-2 textmargin ">
                <h4>
                  {
                  +ele[priceTranslate[ele.choosenPrice]] * +ele.quantity
                  }
                </h4>
              </div>
              <div className="col-lg-1 col-md-1 mt-lg-5  mb-4 col-1 ms-lg-0 ms-1  textmargin">
                <button className="back zoom" onClick={() => removeFromCart(ele)}><i className="fs-5  text-danger fa-sharp fa-solid fa-xmark "></i></button>
              </div>  
            </div>
             
              
              </>
          );
        })}

        <div className=" mx-lg-auto me-1 row justify-content-start  rounded-2 col-10  ">
          <div className="col-lg-5 col-8 mt-4 mb-3   rounded-2  basket justify-content-start">
            <div className="col-lg-11 col-12 m-3">
              <p>الحساب الخاص بك : {total1()}ج</p>
            </div>
           {/*  <div className="col-lg-11 col-12 m-3">
              <p>ضريبة التوصيل: {deliveryFees}ج</p>
            </div>

            <div className="col-lg-11 col-12 m-3">
              <p>الحساب الصافي : {firstSum == 0 ? 0: firstSum + deliveryFees}ج</p>
            </div> */}
            <div className="col-lg-11 col-12 m-3 ">
            <button className="btn  w-50 fs-5 ms-3 " style={{backgroundColor:'#046d02',color:'#fff'}} onClick={()=> callPaypal() }>دفع</button>
            </div>
          </div>
        </div>
      
         {/* <div className="col-lg-3 m-3 text-center">
              <button className="btn  w-50 fs-5 me-3" style={{backgroundColor:'046d02',color:'#fff'}} onClick={()=> callPaypal() }>دفع</button>
            </div> */}
      </div>
    </>
  );
}

export default Basket;
