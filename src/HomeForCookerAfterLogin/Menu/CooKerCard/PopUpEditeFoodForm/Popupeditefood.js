import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EditeFoodForm from './EditeFoodForm';
export default function Popupeditefood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
      <i class="fa-solid fa-pen-to-square" onClick={handleShow}></i>

      <Modal  show={show} onHide={handleClose}>
      
        <Modal.Body >
        <Modal.Header closeButton>
       
        </Modal.Header>
          <EditeFoodForm />
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

