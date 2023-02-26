import React from 'react';
import './Workcheif.css'
import chef from "../../../assets/team4.jpg"

function Workcheif(){
return(
<div dir="rtl" className="container justify-content-center rounded-5 mt-5" style={{ backgroundColor: '#dce6d5' }}>

     <div className='container' id="con">
        <div className='row align-items-center'>
       
        
        <div className='col-12 col-md-6 text-center' style={{marginRight:-50, marginTop:60}} id="text"> 
            <h1> عائشة</h1>  
            <p style={{color: 'black'}}>الميعاد المتاح للعمل </p>
            <p className=' text-center'>من <span style={{color:'black'}}> 3 </span>الــي <span style={{color:'black'}}> 11 </span></p>
        </div>
        <div className='col-12 col-md-6 text-center mb-5'>
            <img src={chef} id="img" />
        </div>
        
         </div>
     </div>
     </div>
)
}
export default Workcheif;