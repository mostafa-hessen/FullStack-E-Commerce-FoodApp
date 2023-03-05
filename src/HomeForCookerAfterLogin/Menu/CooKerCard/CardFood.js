import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CardFood.css";
import chicken from "../../../assets/photo_2023-02-14_19-45-58.jpg";
import mahshi from "../../../assets/mahshi.jpg";
import burger from "../../../assets/photo_2023-02-14_19-47-18.jpg";
import pizza from "../../../assets/photo_2023-02-14_19-47-58.jpg";
import kofta from "../../../assets/potatoKofta.jpg";
import Popupeditefood from "./PopUpEditeFoodForm/Popupeditefood";
import ve from "../../../assets/animatedIcon/original-0525abb512e57734018fefe96706d1e0.mp4";
/* 
import { border } from '@mui/system' */
import DeleteFood from "./DeleteFood/DeleteFood";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

export default function CardFood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Cheifs = [
    {
      img: chicken,
      name: "فراخ مشوية",
      price: "السعر : 100 ج",
      details: "تحتوي ع كل ما تشتهيه",
    },
    {
      img: mahshi,
      name: " محاشي",
      price: "السعر : 100 ج",
      details: "تحتوي ع كل ما تشتهيه",
    },
    {
      img: kofta,
      name: " كفتة فراخ",
      price: "السعر : 100 ج",
      details: "تحتوي ع كل ما تشتهيه",
    },
    {
      img: burger,
      name: "برجر بيتي",
      price: "السعر : 100 ج",
      details: "تحتوي ع كل ما تشتهيه",
    },
    {
      img: pizza,
      name: "بييتزا بيتي",
      price: "السعر : 100 ج",
      details: "تحتوي ع كل ما تشتهيه",
    },
    {
      img: chicken,
      name: "مكرونة بشاميل",
      price: "السعر : 100 ج",
      details: "تحتوي ع كل ما تشتهيه",
    },
  ];
  let user = JSON.parse(localStorage.getItem("user"));
  const [userfood, setuserfood] = useState([]);

  useEffect(() => {
    /* const docRef = doc(db, "foods");
        getDocs(docRef)
           .then((docRef) => {
           
              setuserfood( docRef.data())
              //filter(element=>element.userid==user.uid)
             // console.log(docRef.data())
             // console.log(JSON.parse( docRef.data()))
            
           })
           .catch((error) => {
             console.log(error);
           }); */
    const getData = async () => {
      const q = query(collection(db, "foods"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setuserfood(data);
    };
    getData();

    // console.log(data);
    //const data = snapshot.docs
    /*   map((doc)=>({
              ...doc.data(), id:doc.id
          })) */
    // setuserfood(data);
  }, []);
  return (
    <>
      <div className="team">
        <div className="container">
          <div className="row">
            <h1 style={{ color: "black" }}>
              <i className="fa-solid fa-bowl-food"></i> أكلاتي{" "}
            </h1>
            {
              userfood &&
                userfood.map((CheifItem, index) => {
                  return (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                      <div className="box">
                        <a className="a-container" href="#">
                          <i className="fa-solid fa-ellipsis-vertical  openicon"></i>{" "}
                          <div className="icons ">
                            <Popupeditefood targetEditeItem={CheifItem} />
                            <DeleteFood targetitem={CheifItem} />
                          <Link  >
                      <i class="fa-solid fa-arrow-up-right-from-square"
                              style={{ color: "#4f5b47" }}
                            ></i>
                          </Link>  

                          </div>
                        </a>
                        <div
                          className="boximg"
                          style={{
                            backgroundImage: `url(${CheifItem.foodImg[0]})`,
                          }}
                        >
                          <img src={CheifItem.img} />
                        </div>
                        <div className="boxDetails">
                          <h4> {CheifItem.foodName}</h4>
                          <h6 style={{ color: "orange" }} className="p-content">
                            {CheifItem.foodDiscription}
                          </h6>
                          <p style={{ fontWeight: "bold" }}>
                            {CheifItem.bigPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              //userfood&&
              // console.log(userfood)
            }
          </div>
        </div>
      </div>
    </>
  );
}
