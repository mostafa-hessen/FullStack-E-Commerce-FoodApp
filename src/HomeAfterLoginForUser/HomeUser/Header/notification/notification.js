import { updateDoc, doc, arrayUnion, onSnapshot } from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db } from '../../../../firebase';
import '../../../../HomeForCookerAfterLogin/Orders/orderTime.css'

export default function Notification() {

  const [show, setShow] = useState(false);
  const [time, setTime] = useState('')
  const[notifications, setNotifications] = useState([])
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClose = () => {
    setShow(false)
    setTime('')
  }
  const handleShow = () => {
    setShow(true)    
  }

  useEffect (() => {
    const q = doc(db, "users", user.uid);
    onSnapshot(q, (snapshot) => {
      setNotifications(snapshot.data().notifications);
      console.log(snapshot.data().notifications)})
    }, [ ])

  /*const changeData = (e) => {
    if (e.target.name === "orderTime") {
      setTime(e.target.value)
    }

    setErr(e.target.value.length === 0 ? "يجب أن تدخل موعد التسليم" : e.target.value.length < 2 ? "يجب أن لا يقل عدد الأحرف عن ٢": '')
  }

  useEffect (() => {
    const q = doc(db, "cookers", user.uid);
    onSnapshot(q, (snapshot) => {
      setCurrentOrders(snapshot.data().order);})
    }, [ ])

   currentOrders[props.index]={...props.order, finishedTime:time}
   const handleAddTime=()=>{
    setShow(false)

    const q1= doc(db, "users", props.order.userOrderId);
    updateDoc(q1, {
        notifications: arrayUnion({finishedTime:time, cookerName:props.order.cookerName, foodName: props.order.foodName, foodImg:props.order.foodImg}),
      })
    .catch((error) => {
      console.log(error);
    })

    const q = doc(db, "cookers", user.uid);
    updateDoc(q, {
        order: currentOrders,
      })
    .catch((error) => {
      console.log(error);
    })
   }*/

  return (
    <>
     <i className={`ms-3 me-2 fa-regular fa-bell fa-lg`}  style={{ color: '#6cad6c', fontSize: 32 }} onClick={handleShow}></i>
      <Modal className='mytimePopUp' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body style={{display:'flex', justifyContent:'center'}}>

        </Modal.Body>
        {/*<Modal.Footer style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
          <Button variant="light">
          <i class="fa-solid fa-check choose" style={{ color: '#6cad6c', fontSize: 32 }} onClick={()=>handleAddTime()}></i>
  </Button>
  </Modal.Footer>*/}
      </Modal>
    </>
  );
}

