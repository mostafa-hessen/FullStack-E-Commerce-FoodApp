import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './deletedFormPopup.css'
export default function DeleteFood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <i class="fa-solid fa-trash"  onClick={handleShow}>  </i>

      <Modal className='mydeletePopUp' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body style={{display:'flex', justifyContent:'center'}}>هل انت متأكد من حذف الأكلة؟</Modal.Body>
        <Modal.Footer style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
          
          <Button variant="success" onClick={handleClose}>
         إلغاء
          </Button>
          <Button variant="danger" onClick={handleClose}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

