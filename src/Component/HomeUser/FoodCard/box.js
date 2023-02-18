import React from 'react'
import foodimg1 from '../../../assets/6.png'
import './box.css'



function Box() {
  return (
    <div className="box">
    <div className='boximg'><img src={foodimg1}/></div>
    <div className='boxDetails'>
    <h4>سلطه خضار </h4>
    <p className="p-content">اخلط كُل من الخيار، الطماطم خلط كُل من الخيار، الطماطم</p>
    <p style={{fontWeight: 'bold'}}>EGP 22.00</p>
    </div>
    
    <a href="#"><i class="fas fa-shopping-cart"></i></a>
</div>
  )
}

export default Box