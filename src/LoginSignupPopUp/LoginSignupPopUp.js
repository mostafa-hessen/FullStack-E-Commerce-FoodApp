// import Tab from './tab/Tab'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


// export default function PopUp() {

//     return (
//         <>

//             {/* <div class="modal fade signloginpop" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//                 <div class="modal-dialog modal-dialog-centered">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                             <Tab/>
//                         </div>
                       
//                     </div>
//                 </div>
//             </div>
//             <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
//  */}


//         </>
//     )
// }


import React ,{useState} from 'react'
import './PopUp.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from './tab/Tab';
import {RxAvatar} from 'react-icons/rx'
// import Signup from './tab/Signup/Signup';

function PopUp(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
       <RxAvatar  onClick={() => setModalShow(true)} style={{fontSize:'35px'}}></RxAvatar>
      {/* <Signup/> */}
      

      <PopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <Modal className='signloginpop'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Tab/>
        {/* <Signup/> */}

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>

    </>
  );
}

export default function LoginSignupPopUp() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <RxAvatar  onClick={() => setModalShow(true)} style={{fontSize:'35px'}}></RxAvatar>
      {/* <Signup/> */}
      

      <PopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


