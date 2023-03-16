import React, { useEffect } from "react";
import { useState } from "react";
import "./CardFood.css";
import chicken from "../../../assets/photo_2023-02-14_19-45-58.jpg";
import mahshi from "../../../assets/mahshi.jpg";
import burger from "../../../assets/photo_2023-02-14_19-47-18.jpg";
import pizza from "../../../assets/photo_2023-02-14_19-47-58.jpg";
import kofta from "../../../assets/potatoKofta.jpg";
import Popupeditefood from "./PopUpEditeFoodForm/Popupeditefood";
import DeleteFood from './DeleteFood/DeleteFood';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Link } from 'react-router-dom';

export default function CardFood() {

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
  const [show,setShow]=useState(true)

  useEffect(() => {
    const q = query(collection(db, "foods"));
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setuserfood(data);
      })
    }, [])

    return (
        <>


            <div className="team">
                <div className="container">
                    <div className="row">
                        <h1 style={{ color: 'black' }} onClick={()=>console.log(userfood)}><i className="fa-solid fa-bowl-food" ></i> أكلاتي </h1>
                        {
                             userfood&&
                            userfood?.filter(ele=>ele.cookerId==user.uid)?.map((CheifItem, index) => {
                                return (

                                    <div key={index} className='col-lg-4 col-md-6 col-sm-6'>

                                        <div className="box">
                                            <a href="#" className='a-container'><i className="fa-solid fa-ellipsis-vertical  openicon" ></i> <div className='icons '>
                                                <Popupeditefood targetEditeItem={CheifItem} />

                                                <DeleteFood targetitem={CheifItem}/>
                                                <Link to={`/HomeCooker/FoodDetailsCooker/${CheifItem.id}`}>  <i class="fa-solid fa-arrow-up-right-from-square"
                                                style={{ color: "#4f5b47" }} ></i></Link>

                                            </div>              
                                            </a>

                                            <div className='boximg' style={{ backgroundImage: `url(${CheifItem.foodImg&&CheifItem.foodImg[0]})` }}>
                                                <img src={CheifItem.img} />
                                            </div>
                                            <div className='boxDetails'>
                                                <h4> {CheifItem.foodName}</h4> 
                                                 <h6 style={{color:'orange'}} className="p-content">{CheifItem.foodDiscription}</h6>

                                            </div>
                                           
                                            <div>
                                            
                                            </div>


                                        </div>
                                    </div>
                                )
                            }) 
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
