import React from "react";
//import './FoodDetailsCooker.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Details() {
  const { id } = useParams();
  console.log(id); //اكله%20من%20عمو%20مصطفي33a09d9f-eb34-405e-a32b-3869948ef3a1
  const [food1, setCartfood1] = useState("");
  const [wordData, setWordData] = useState("");

  useEffect(() => {
    const getdata = async () => {
      const docRef = doc(db, "foods", id);
      await getDoc(docRef)
        .then((docRef) => {
          setCartfood1(docRef.data()); //{fooname:vfds,}
          setWordData(docRef.data().foodImg[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getdata();
  }, []);

  //  console.log(food1)
  let user = JSON.parse(localStorage.getItem("user"));

  // 'http://static1.squarespace.com/static/5f14d04ebd60fa3de12e3960/t/5fdcc21b84630471db04a0e9/1608303136517/IMG_9417.jpeg?format=1500w')
  const handleClick = (index) => {
    // console.log(index);
    const wordSlider = food1.foodImg[index];
    setWordData(wordSlider);
  };
  let arr = []; //rr.push => ["",""]
  const [fav, setFav] = useState([]);
  const addToFavBtn = (favEle) => {
    // console.log( user.uid,"id")

    const q = doc(db, "users", user.uid);
    updateDoc(q, {
      favoriteFood: arrayUnion(favEle), // arr
    })
      .then((q) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //1678636613263 1678636613263

  // fire base add to cart
  const [www, setwww] = useState(1)
  // ==== 1 get all cart array from fire base =====
  const [myCart, setmyCart] = useState([]);
  useEffect(() => {
    const q = doc(db, "users", user.uid);

    onSnapshot(q, (snapshot) => {
      setmyCart(snapshot.data());
    });

  }, [www]);

  const checkIfRepeated = (ele) => {

   console.log('');
    // ===== 1- set cart if not have it ====
    if (!myCart.cart) {
      // console.log("first");
      const docRef = doc(db, "users", user.uid);
      updateDoc(docRef, {
        cart:arrayUnion (ele),
      });
    } 

    // ====== 2 - check if second time added =====

   myCart.cart?.find((value, index) => {
    // Delete element 5 on first iteration
    if (value.foodId==ele.foodId) {
      value.quantity+=1
         const docRef = doc(db, "users", user.uid);
        updateDoc(docRef, {
          cart:myCart.cart,
        });
   }
  });
   

  if( !myCart.cart.find(myele=>myele.foodId==ele.foodId)){
    myCart.cart.push(ele)
     const docRef = doc(db, "users", user.uid);
       updateDoc(docRef, {
         cart:myCart.cart,
       });

  }






  };
  const addTocart = (target) => {
    setwww(Date.now())
    // 1 if cart have this before
    checkIfRepeated(target);


    // ====== 3- update firebase ===== 

  };
  return (
    <>
      {/* {food1?setWordData(food1.foodImg[0]):console.log("not done")} */}
      <div className="main">
        <div
          className="rounded-4 "
          style={{
            height: "300px",
            maxWidth: "500px",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <img
            src={wordData}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="flex_row">
          {/* {food1.foodImg&&setWordData(food1.foodImg[0])} */}

          {food1.foodImg &&
            food1.foodImg.map((data, i) => (
              <div className="thumbnail" key={i}>
                <div
                  className={`rounded-4 ${
                    food1.foodImg.indexOf(wordData) == i ? "clicked" : ""
                  }`}
                  style={{
                    height: "70px",
                    width: "90px",
                    margin: "auto",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={data}
                    onClick={() => handleClick(i)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-lg-6 mx-auto">
          <div
            className="d-flex align-items-center"
            style={{ direction: "rtl", width: "70%", margin: "auto" }}
          >
            <input type="checkbox" id="" name="" value="" className="ms-2" />
            <h5 style={{ margin: 0 }}>عائلي : {food1?.bigPrice} جنيه مصري </h5>
          </div>

          <div
            className="d-flex align-items-center"
            style={{ direction: "rtl", width: "70%", margin: "auto" }}
          >
            <input type="checkbox" id="" name="" value="" className="ms-2" />
            <h5 style={{ margin: 0 }}>
              {" "}
              وسط : {food1?.middlePrice} جنيه مصري{" "}
            </h5>
          </div>

          <div
            className="d-flex align-items-center"
            style={{ direction: "rtl", width: "70%", margin: "auto" }}
          >
            <input type="checkbox" id="" name="" value="" className="ms-2" />
            <h5 style={{ margin: 0 }}> صغير : {food1?.smallPrice} جنيه مصري</h5>
          </div>

          <button
            className="btn mt-4 inline-flex align-items-center"
            style={{
              width: 45,
              backgroundColor: "#069c54",
              borderRadius: "50%",
            }}
            onClick={() => addTocart(food1)}
          >
            <i className="fas fa-shopping-cart mt-2 text-light"></i>
          </button>
          <button className="star mt-2" onClick={() => addToFavBtn(food1)}>
            <i className="fa-solid fa-star"></i>
          </button>
        </div>
        <div className="col-lg-6">
          <h1 style={{ color: "orange" }}>{food1?.foodName} </h1>
          <p> {food1?.foodDiscription} </p>
        </div>
      </div>
    </>
  );
}
