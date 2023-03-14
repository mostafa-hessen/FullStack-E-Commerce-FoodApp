import './OrdersStyle.css';
import chickenMeal from '../../assets/chicken meal.jpg';
import makronyKofta from '../../assets/makrony&kofta.jpg';
import cake from '../../assets/cake.png';
import potatoKofta from '../../assets/potatoKofta2.jpg';
import gulash from '../../assets/gulash.jpg';
import mahshiAnab from '../../assets/mahshiAnab.jpg';
import pashamel from '../../assets/pashamel.jpg';
import pea from '../../assets/pea.jpg';
import { useEffect, useState } from 'react';
import Order from './order';
import { Redirect } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';


function Orders() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentuserinfo, setcurrentuserinfo] = useState([])

 useEffect (() => {
  const q = doc(db, "cookers",user.uid);
  onSnapshot(q, (snapshot) => {
     
    setcurrentuserinfo(snapshot.data().order); })

 
  
 }, [ ])
  
//  if order.useOrderdID 

// const checkdifrent=()=>{
//  let i=[]
//   const sumWithInitial = currentuserinfo.reduce(
//     (accumulator, currentValue) => accumulator == currentValue,
//    i
//   );
  


// }


  let activeOrder = ['', '', '', '']
  const [activeOrderState, setActiveOrderState] = useState(activeOrder)

  const changeActive = (status) => {
    activeOrder = ['', '', '', '']
    activeOrder[status]= 'orderActive'

    setActiveOrderState(activeOrder)
  }

  return (
    <div dir="rtl" className="container justify-content-center my-5 rounded-3">
      <div className="row" >
        <div className="col-12 align-self-center mx-auto mt-2 mb-3">
          <h2>طلباتي <i className="fa-solid fa-clipboard" style={{ color: '#87a087' }}></i></h2>
        </div>
      </div>
{/* {console.log(currentuserinfo,sumWithInitial)} */}
      <div className='m-4'>
        {
          currentuserinfo?.map((order, idx) => {
            return (
              <Order data={order} index={idx} var={activeOrderState} action={changeActive} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders;