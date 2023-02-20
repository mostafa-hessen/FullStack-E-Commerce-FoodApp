import React from 'react';
import './Home.css'
import hero from "../../assets/hero.png"

const Home =()=>{
return(
<>

     <div className='container' id="con">
        <div className='row align-items-center'>
       
        <div className='col-12 col-md-6 text-center'>
            <img src={hero} id="home" />
            </div>
            <div className='col-12 col-md-6'  id="text"> 
<h2> نحن نقدم لك مذاقك الخاص &#129316;</h2>  
<p style={{  color: 'black', paddingLeft:'50px'}}>نقدم لك طعامك المفضل بشكل صحي ونضيف</p>
        </div>
        
            </div>
     </div>
     </>
)
}
export default Home;