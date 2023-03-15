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
      setmyCart(snapshot.data().cart.reverse());
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
        if (ele.id == current.id && ele.choosenPrice == current.choosenPrice) {
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
          <div className="col-lg-3 col-6 m-lg-3 m-5 ">
            <h4>سلة التسوق الخاصة بك</h4>
          </div>
          <div className="col-1 m-lg-2 m-5 ">
            <FaCartPlus style={{ fontSize: 35, marginRight: 6 }}></FaCartPlus>
          </div>
        </div>

        <div className="row justify-content-center border border-3 rounded-4  ">
          <div className="col-lg-2 col-md-3 mt-5 mb-3 col-3  d-none d-md-block d-lg-block">
            <h4>العنصر</h4>
          </div>
          <div className="col-lg-2 col-md-2 mt-5 mb-3 col-3  d-none d-md-block d-lg-block">
            <h4>الكمية </h4>
          </div>
          <div className="col-lg-2 col-md-3 mt-5 mb-3 col-2  d-none d-md-block d-lg-block">
            <h4>السعر </h4>
          </div>

          <div className="col-lg-3 col-md-2 mt-5 mb-3 col-2  d-none d-md-block d-lg-block">
            <h4>الحجم </h4>
          </div>
          <div className="col-lg-3 col-md-2 mt-5 mb-3 col-3 d-none d-md-block d-lg-block">
            <h4>المجموع </h4>
          </div>
        </div>

        {myCart?.map((ele,index) => {
          return (
            <div className="row justify-content-center border border-3 rounded-4 mt-2  zoom" key={index}>
              {console.log(ele)}
              <div className="col-lg-2 col-md-2 mt-3 mb-3 col-9 ">
                <img
                  src={ele.foodImg[0] && ele.foodImg[0]}
                  className="w-50 w-md-25 w-lg-25 zoom h-50"
                  style={{ borderRadius: "50%" }}
                ></img>
                <p className="mt-3">{ele?.foodName}</p>
              </div>
              <div className="col-lg-2 col-md-2 mt-5 mb-3 col-3  ">
                <input
                  className="w-25 "
                  type="number"
                  value={+ele?.quantity}
                  onChange={(e) => quantutyFunc(ele, e)}
                ></input>
              </div>
              <div className=" col-lg-2 col-md-2 mt-5 mb-3 col-3">
                <h4> {ele[priceTranslate[ele.choosenPrice]]}</h4>
              </div>
              <div className="col-lg-2 col-md-3 mt-5 mb-3 col-2   ">
                <h4>{ele?.choosenPrice}</h4>
              </div>
              <div className="col-lg-2 col-md-2 mt-5 mb-3 col-3  ">
                <h4>
                  {
                  +ele[priceTranslate[ele.choosenPrice]] * +ele.quantity
                  }
                </h4>
              </div>
              <div className="col-lg-1 col-md-1 mt-5 mb-3 col-1  ">
                <button onClick={() => removeFromCart(ele)}>remove</button>
              </div>
            </div>
          );
        })}

        <div className="row justify-content-between ">
          <div className="col-lg-3 mt-3 mb-3 col-6 border border-3 rounded-4 mt-2 ">
            <div className="col-lg-11 m-3">
              <p>الحساب الخاص بك : {total1()}ج</p>
            </div>
            <div className="col-lg-11 m-3">
              <p>ضريبة التوصيل: {deliveryFees}ج</p>
            </div>

            <div className="col-lg-11 m-3">
              <p>الحساب الصافي : {firstSum == 0 ? 0: firstSum + deliveryFees}ج</p>
            </div>
            <div className="col-lg-11 m-3 text-center">
              <button className="btn btn-success"  onClick={()=> callPaypal() }>دفع</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
