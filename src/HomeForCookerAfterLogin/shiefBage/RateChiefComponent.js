import React from 'react'
import { MdPreview } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import header from "../../assets/Reviewss.jpg"
import profile1 from "../../assets/team1.jpg"
import profile2 from "../../assets/team2.jpg"
import profile3 from "../../assets/team3.jpg"
import './ChiefBage.css'
function RateChiefComponent() {
    return (
       <div className='rate  '> 
            <div className='container' dir="rtl">
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-4 col-6 mt-5 '>
                        <h2><span><MdPreview></MdPreview></span>رأي العملاء</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>

                    <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3  smallscreen border border-success rounded-4 ">
                        <div className="row justify-content-center bg-white  rounded-4  ">
                            <div className="col-12 d-flex justify-content-center mt-2">
                            <div className="userimage">
                                <img className='w-100'  src= {profile1}></img>
                            </div>
                            </div>
                            <div className="col-7 text-center">
                                <h4>أسماء علي</h4>
                            </div>
                            <div dir='rtl' className="col-11 ">
                                <p>الأكل طعمه جميل ونظيف ومرتب دقة في المواعيد </p>
                            </div>
                            <div dir="rtl" className="col-11 m-1 text-center mb-4">
                            <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar  className='iconstar' ></FaStar></span>
                                <span><FaRegStar className='iconstar' ></FaRegStar></span>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3  smallscreen border border-success rounded-4 ">
                        <div className="row justify-content-center bg-white  rounded-4  ">
                        <div className="col-12 d-flex justify-content-center mt-2">
                            <div className="userimage">
                                <img className='w-100'   src= {profile2}></img>
                            </div>
                            </div>
                            <div className="col-7 text-center">
                                <h4>أميرة علي</h4>
                            </div>
                            <div dir='rtl' className="col-11 ">
                                <p>الأكل طعمه جميل ونظيف ومرتب دقة في المواعيد </p>
                            </div>
                            <div dir="rtl" className="col-11 m-1 text-center mb-4">
                            <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar  className='iconstar' ></FaStar></span>
                                <span><FaRegStar className='iconstar' ></FaRegStar></span>

                            </div>
                        </div>
                    </div>




                    <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3  smallscreen border border-success rounded-4 ">
                        <div className="row justify-content-center bg-white  rounded-4  ">
                        <div className="col-12 d-flex justify-content-center mt-2">
                            <div className="userimage">
                                <img className='w-100'  src= {profile3}></img>
                            </div>
                            </div>
                            <div className="col-7 text-center">
                                <h4>أزهار علي</h4>
                            </div>
                            <div dir='rtl' className="col-11 ">
                                <p>الأكل طعمه جميل ونظيف ومرتب دقة في المواعيد </p>
                            </div>
                            <div dir="rtl" className="col-11 m-1 text-center mb-4">
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar className='iconstar' ></FaStar></span>
                                <span><FaStar  className='iconstar' ></FaStar></span>
                                <span><FaRegStar className='iconstar' ></FaRegStar></span>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default RateChiefComponent