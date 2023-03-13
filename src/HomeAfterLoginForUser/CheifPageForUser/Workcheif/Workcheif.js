import React from 'react';
import './Workcheif.css'
import chef from "../../../assets/team4.jpg"

function Workcheif({data}){
return(
<div dir="rtl" className="container justify-content-center rounded-5 mt-5" style={{ backgroundColor: '#dce6d5' }}>

     <div className='container' id="con">
        <div className='row align-items-center p-4'>
       
        
        <div className='col-12 col-md-6 text-center'  id="text"> 
            <h1 style={{wordBreak:"break-word"}}>{data?.fullName}</h1>  
            <p style={{color: 'black'}}>الميعاد المتاح للعمل </p>
            <p className=' text-center'>من <span style={{color:'black'}}> {data?.amcooker} </span>الــي <span style={{color:'black'}}> {data?.pmcooker} </span></p>
        </div>
        <div className='col-12 col-md-6 text-center  d-flex justify-content-center align-items-center'>
                 <div style={{height:"150px",width:"150px",overflow:"hidden",borderRadius:'50%'}}> 
                       <img src={data.photo} id="mg" style={{height:"100%",width:"100%",objectFit:"cover",objectPosition:"top"}} />
                </div>
        </div>
        
         </div>
     </div>
     </div>
)
}
export default Workcheif;