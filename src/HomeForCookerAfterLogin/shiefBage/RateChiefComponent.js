import React from 'react'
import { MdPreview } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import header from "../../assets/Reviewss.jpg"
import profile from "../../assets/Eat.jpg"
import './ChiefBage.css'
function RateChiefComponent() {
    return (
       <div className='rate'>
            <div className='container' dir="rtl">
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-4 col-6 mt-5 '>
                        <h2><span><MdPreview></MdPreview></span>رأي العملاء</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>

                    <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3  smallscreen border border-success rounded-4 ">
                        <div className="row justify-content-center bg-white  rounded-4  ">
                            <div className="col-6 mt-2">
                            <div className="userimage">
                                <img className='w-100'  src="profile.jpg"></img>
                            </div>
                            </div>
                            <div className="col-7 text-center">
                                <h4>أسماء علي</h4>
                            </div>
                            <div dir='rtl' className="col-11 ">
                                <p>الأكل طعمه جميل ونظيف ومرتب دقة في المواعيد </p>
                            </div>
                            <div dir="rtl" className="col-11 m-1 text-center mb-4">
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaRegStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaRegStar></span>


                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3  smallscreen border border-success rounded-4 ">
                        <div className="row justify-content-center bg-white  rounded-4  ">
                        <div className="col-6 mt-2">
                            <div className="userimage">
                                <img className='w-100'  src="profile.jpg"></img>
                            </div>
                            </div>
                            <div className="col-7 text-center">
                                <h4>أميرة علي</h4>
                            </div>
                            <div dir='rtl' className="col-11 ">
                                <p>الأكل طعمه جميل ونظيف ومرتب دقة في المواعيد </p>
                            </div>
                            <div dir="rtl" className="col-11 m-1 text-center mb-4">
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaRegStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaRegStar></span>


                            </div>
                        </div>
                    </div>




                    <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3  smallscreen border border-success rounded-4 ">
                        <div className="row justify-content-center bg-white  rounded-4  ">
                        <div className="col-6 mt-2">
                            <div className="userimage">
                                <img className='w-100'  src="profile.jpg"></img>
                            </div>
                            </div>
                            <div className="col-7 text-center">
                                <h4>أزهار علي</h4>
                            </div>
                            <div dir='rtl' className="col-11 ">
                                <p>الأكل طعمه جميل ونظيف ومرتب دقة في المواعيد </p>
                            </div>
                            <div dir="rtl" className="col-11 m-1 text-center mb-4">
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaStar></span>
                                <span><FaRegStar style={{ color: '#fbaf32', fontSize: 25, marginRight: 6 }}></FaRegStar></span>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default RateChiefComponent