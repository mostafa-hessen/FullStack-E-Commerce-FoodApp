import React from 'react'
import './Offer.css'
import offerImg from '../../../assets/COOLPIZZA.png';

function Offer

() {
  return (
    <div className="boxOffer">
   <div className='image'><img src={offerImg}/></div>  
    <div className='boxOfferDetails'>
    <h4> خصم 50%  </h4>
    
    <p style={{fontWeight: 'bold',margin:0}}> علي البيتزا لمده يومين </p>
    </div>
   </div>
  )
}

export default Offer
 


