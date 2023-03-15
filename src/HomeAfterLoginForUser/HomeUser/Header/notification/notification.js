import { updateDoc, doc, arrayUnion, onSnapshot } from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db } from '../../../../firebase';
import './notification.css'
import logo from '../../../../assets/logo.png'
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
    }, [ ])
})

  return (
    <>
     <i className={`ms-3 me-2 fa-regular fa-bell fa-lg`}  style={{ color: '#6cad6c', fontSize: 32 }} onClick={handleShow}></i>
      <Modal show={show} onHide={handleClose} >
        <div className='headerNote'>
        <img src={logo} className='logo'/>
        <p className='logoTxt'>الأكيله</p>
        </div>
        <Modal.Body style={{display:'flex', justifyContent:'center', backgroundColor:'#F5F5F5'}}>
        <div className='container'> 
        {
        notifications.map((ele,inx)=>{
        return(
        <div className=" row col-11 align-self-center mx-auto my-3 rounded-3 noteBoxStyle" dir='rtl' key={inx}>
            <div className='col-12 my-2 d-flex align-items-center'>
            <img src={ele.foodImg[0] && ele.foodImg[0]} alt="" className='note-img'/>
           <div className="noteCon">
            <div className='note-item'>
            <h5>إشعار من {ele.cookerName && ele.cookerName.split('@')[0]}</h5>
            </div>
            <div className='note-item'>
            <h6 style={{color: '#6b6e71'}}>بخصوص طلب {ele.foodName && ele.foodName}</h6>
            </div>
            <div className='note-item'>
            <h6 style={{color: '#6b6e71'}}>ميعاد التسليم {ele.finishedTime && ele.finishedTime}</h6>
            </div>
            </div>
            </div>
        </div>
        )
        })  
      }
      </div>
        </Modal.Body>
        <Modal.Footer style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
          <button className='note-btn'>مسح الكل</button>
           </Modal.Footer>
      </Modal>
    </>
  );
}

