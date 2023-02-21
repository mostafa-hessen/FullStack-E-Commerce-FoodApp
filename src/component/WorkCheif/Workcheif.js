import React from 'react';
import './Workcheif.css'
import chef from "../../assets/team4.jpg"

const Home =()=>{
return(
<>

     <div className='container' id="con">
        <div className='row align-items-center'>
       
        
            <div className='col-12 col-md-6 text-center'  id="text"> 
     <h1 > عائشة</h1>  
<p style={{  color: 'black'}} >الميعاد المتاح للعمل </p>
<p className='chef text-center' >من <span style={{color:'black'}}>3</span>الــي <span style={{color:'black'}}>11</span></p>
        </div>
        <div className='col-12 col-md-6 text-center'>
            <img src={chef} id="img" />
            </div>
        
            </div>
     </div>
     </>
)
}
export default Home;