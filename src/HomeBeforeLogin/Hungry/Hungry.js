import React from 'react';
import './Hungry.css'
import app from "../../assets/app.png"
import apple from "../../assets/apple.png"
import Android from "../../assets/Android.png"


const Hungry =()=>{
return(
<>

     <div className='container' id="app">
        <div className='row align-items-center Hungry'>
       
        <div className='col-12 col-md-6 '>
            <img src={app} id="app" />
            </div>
            <div className='col-12 col-md-6' id="text">
                
<h5 style={{fontSize:'30px'}}>  لا تشعر بالجوع ابدا وحمل تطبيقنا الأن واستمتع ب ألذ الأطعمة </h5>
<div className='row'>
    <div className='col-12 col-lg-6'>
  
    <img src={apple} className="apple"/>
    </div>
    <div className='col-12 col-lg-6'>
    <img src={Android} className="apple"/>

    </div>
</div>


        </div>
        
            </div>
     </div>
     </>
)
}
export default Hungry;