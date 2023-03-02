import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Tab from '../../../../LoginSignupPopUp/tab/Tab';
import EditeFoodForm from './EditeFoodForm';
import './popupFood.css'
export default function Popupeditefood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
      <i className="fa-solid fa-pen-to-square" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose} className="my" >
      
        <Modal.Body style={{background:""}} >
        <Modal.Header  style={{background:"transaprent"}} closeButton>
        </Modal.Header>
          <EditeFoodForm />
          {/* <Tab/> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

