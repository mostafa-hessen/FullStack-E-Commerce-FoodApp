import React from 'react';
import './Eat.css'
import eat from "../../assets/Eat.jpg"

const Eat =()=>{
return(
<>

     <div className='container mt-5' id="list">
        <div className='row align-items-center Eat' >
       
        <div className='col-12 col-md-6 '>
            <img src={eat} id="Eat" />
            </div>
            <div className='col-12 col-md-6' id="text">
<h2 >   محتار تتعشي إيه!؟  </h2>
{/* <h2 >   محتار تتعشي إيه!؟  &#128580;</h2> */}
<p style={{  color: 'black'}}>عندنا هتلاقي كل اللي نفسك فيه متشغلش بالك بالتجهيز</p>
<button className='button button1'>مقترحات</button>
        </div>
        
            </div>
     </div>
     </>
)
}
export default Eat;


