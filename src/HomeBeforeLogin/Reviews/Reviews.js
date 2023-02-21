import React from 'react';
import { Rating } from 'react-simple-star-rating';

import shape from "../../assets/shape.svg"
import Reviewss from '../../assets/Reviewss.jpg'
import './Reviews.css'
export default function Reviews() {
    return (
        <section className='Reviews section '>
            <div class="sec-wp">
                <div class="container">
                    <div className='row'>
                        <div className='col-12  '>
                            <div className='sec-title text-center mb-5'>
                                <p className='sec-sub-title '>
                                    الاراء
                                </p>
                                <h2 class="h2-title" > ماذا يقول عملائنا <span>&#128525;عن خدمتنا </span></h2>
                                <div className='sec-title-shape '>
                                    <img src={shape} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* reviews section */}
                    <div className='row'>
                        <div className='col-12 col-lg-5'>
                            <div className='testimonials-img'>
                                <img src={Reviewss} />
                            </div>
                        </div>
                        <div className='col-12 col-lg-7'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='testimonials-box'>
                                        <div className='testimonial-box-top'>
                                             <div className='t1'>

                                             </div>
                                            
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                             

                                        </div>
                                        <div className='testimonials-box-text'>
                                            <h3 className='h3-title'>
                                                جويريا حكيم
                                            </h3>
                                            <p>الاكل نظيف  وهناك سرعه في التوصيل </p>

                                        </div>
                                    </div>
                           
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='testimonials-box'>
                                        <div className='testimonial-box-top'>
                                             <div className='t2' >

                                             </div>
                                             <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                            <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                            <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-regular fa-star" style={{backgroundColor:'white'}}></i>
                                        </div>
                                        <div className='testimonials-box-text'>
                                            <h3 className='h3-title'>
                                             نيللي كريم
                                            </h3>
                                            <p> سرعه ف التوصيل والنظام  </p>
                                            
                                        </div>
                                    </div>
                           
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='testimonials-box'>
                                        <div className='testimonial-box-top'>
                                             <div className='t3' >

                                             </div>
                                             <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-regular fa-star" style={{backgroundColor:'white'}}></i>

                                        </div>
                                        <div className='testimonials-box-text'>
                                            <h3 className='h3-title'>
                                             علياء السيد
                                            </h3>
                                            <p>الاكل نظيف  وهناك سرعه في التوصيل </p>
                                            
                                        </div>
                                    </div>
                           
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='testimonials-box'>
                                        <div className='testimonial-box-top'>
                                             <div className='t4' >

                                             </div>
                                             <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-solid fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-regular fa-star" style={{backgroundColor:'white'}}></i>
                                           <i class="fa-regular fa-star" style={{backgroundColor:'white'}}></i>

                                        </div>
                                        <div className='testimonials-box-text'>
                                            <h3 className='h3-title'>
                                               علاء شربيني
                                            </h3>
                                            <p>اكل بيتي اصيل</p>
                                            
                                        </div>
                                    </div>
                           
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
