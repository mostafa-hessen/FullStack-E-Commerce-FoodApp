import React from 'react'
import { FaCartPlus, FaStar } from "react-icons/fa";
import { Redirect } from 'react-router-dom';

import item1 from '../../assets/photo_2023-02-14_19-46-55.jpg'
import './Basket.css'
function Basket({authorized}) {
  if(!authorized){
    return <Redirect to = '/SignPage'/>
  }
  return (
    <>
      <div dir="rtl" className='container'>
        <div className='row justify-content-center '>

          <div className='col-lg-3 col-6 m-lg-3 m-5 '>
            <h4>سلة التسوق الخاصة بك</h4>
          </div>
          <div className='col-1 m-lg-2 m-5 '>
            <FaCartPlus style={{ fontSize: 35, marginRight: 6 }}></FaCartPlus>
          </div>
        </div>


        <div className='row justify-content-center border border-3 rounded-4  '>

          <div className='col-lg-3 col-md-3 mt-3 mb-3 col-6 d-none d-md-block  d-lg-block'>
            <h4>العنصر</h4>
          </div>
          <div className='col-lg-3 col-md-3 mt-3 mb-3 col-6  d-none d-md-block d-lg-block'>
            <h4>الكمية </h4>
          </div>
          <div className='col-lg-3 col-md-3 mt-3 mb-3 col-6 d-none d-md-block d-lg-block'>
            <h4>السعر </h4>
          </div>
          <div className='col-lg-3 col-md-3 mt-3 mb-3 col-6 d-none d-md-block d-lg-block'>
            <h4>المجموع </h4>
          </div>
        </div>


        <div className='row justify-content-center border border-3 rounded-4 mt-2  zoom'>

          <div className='col-lg-3 col-md-3 mt-3 mb-3 col-9 '>
            <img src={item1} className='w-100 w-md-25 w-lg-25 rounded-2 zoom' ></img>
            <p>برجر حار بالكاتشب</p>
          </div>
          <div className='col-lg-3 col-md-3 mt-5 mb-3 col-5'>
            <input className='w-25 ' type="number" defaultValue={1}></input>
          </div>
          <div className='col-lg-3 col-md-3 mt-5 mb-3 col-3 '>
            <h4>55ج</h4>
          </div>
          <div className='col-lg-3 col-md-3 mt-5 mb-3 col-3 '>
            <h4>110ج</h4>
          </div>
        </div>

        <div className='row justify-content-between '>

          <div className='col-lg-3 mt-3 mb-3 col-6 border border-3 rounded-4 mt-2 '>
            <div className='col-lg-11 m-3'>

              <p>الحساب الخاص بك  :  110ج</p>
            </div>
            <div className='col-lg-11 m-3'>

              <p>ضريبة التوصيل: 15ج</p>
            </div>

            <div className='col-lg-11 m-3'>

              <p>الحساب الصافي  :  125ج</p>
            </div>
            <div className='col-lg-11 m-3 text-center'>

              <button className='btn btn-success'>دفع</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Basket