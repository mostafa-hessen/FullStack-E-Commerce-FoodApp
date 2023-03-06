
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import EditChiefPersonalForm from './EditChiefPersonalForm';
import { MdEdit } from "react-icons/md";
export default function PopUpEditCheifPerson(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
       
       <i className="fa-solid fa-pencil position-absolute top-20  fa-xl   " onClick={handleShow}  style={{left:'18px',top:"26px",width:"20px",color:"black",cursor:"pointer"}} ></i>
      
  
        <Modal show={show} onHide={handleClose} className="my" >
        
          <Modal.Body style={{background:""}} >
          <Modal.Header  style={{background:"transaprent"}} closeButton>
          </Modal.Header>
          <EditChiefPersonalForm cookerpersonal={props.editecookerpersonal}/>
          </Modal.Body>
         
        </Modal>
      </>
    );
}
