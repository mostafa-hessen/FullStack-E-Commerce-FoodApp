import React from 'react'
import foodimg1 from '../../../assets/6.png'
import './box.css'

import { useHistory } from "react-router-dom";

// import { doc } from "prettier";
// import { log } from 'console';

// export default function Signup() {
  
  function Box(props) {
  let navigate= useHistory()
  return (
    <div className="box" onClick={()=>navigate.push(`/HomeUser/Home/useFoodDetailes/${props.element?.id}`)}>
    <div className='boximg' style={{borderRadius:"50%",overflow:"hidden"}}>
      <img src={props.element.foodImg&&props.element.foodImg[0]} style={{objectFit:"cover",objectPosition:"center",width:"100%",height:"100%"}}/>
      </div>
    <div className='boxDetails'>
    <h4>   {props.element?.foodName} </h4>
    <p className="p-content" style={{wordBreak:"break-word"}}> {props.element?.foodDiscription}</p>
    <p style={{fontWeight: 'bold'}}>EGP {props.element?.middlePrice}</p>
    </div>
    
    {/* <a href="#"><i class="fas fa-shopping-cart"></i></a> */}
    <a href="#">
    <lord-icon
    src="https://cdn.lordicon.com/udwhdpod.json"
    trigger="hover"
    // style="width:250px;height:250px"
    >
</lord-icon>
</a>
</div>
  )
}

export default Box