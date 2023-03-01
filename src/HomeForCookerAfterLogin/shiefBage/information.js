import React from 'react'
import { MdEditLocationAlt,MdFastfood ,MdEdit} from "react-icons/md";
import{ FaMedapps,FaPhone} from "react-icons/fa";
import {TbListDetails} from "react-icons/tb";
import './ChiefBage.css'
function InformationComponent() {
  return (
    <>
     <div className='container'>
        <div className='row justify-content-center mt-5'>
            <div className='col-lg-8 col-md-9 col-12 border border-success rounded-5 info '>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-4'>
                <h4 className='infosize'><span><FaMedapps></FaMedapps></span> مواعيد العمل </h4>
                </div>
                
                <div className='col-4 '>
                <h5>متاح من 3 ع وحتي 10م</h5>
                </div>
                <div className='col-1'>
                <MdEdit style={{fontSize:30}}></MdEdit>
                </div>
            </div>
            </div>


            <div className='col-lg-8 col-md-9 col-12 border border-success rounded-5 info mt-4'>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-4'>
                <h4 className='infosize'><span><MdEditLocationAlt></MdEditLocationAlt></span> العنوان</h4>
                </div>
                
                <div className='col-4 '>
                <h5>أهناسيا بني سويف</h5>
                </div>
                <div className='col-1'>
                <MdEdit style={{fontSize:30}}></MdEdit>
                </div>
            </div>
            </div>

            <div className='col-lg-8 col-md-9 col-12 border border-success rounded-5 info mt-4'>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-4'>
                <h4 className='infosize'><span><FaPhone></FaPhone></span> رقم التليفون</h4>
                </div>
                
                <div className='col-4 '>
                <h5>01147791094 </h5>
                </div>
                <div className='col-1'>
                <MdEdit style={{fontSize:30}}></MdEdit>
                </div>
            </div>
            </div>

            <div className='col-lg-8 col-md-9 col-12 border border-success rounded-5 info mt-4'>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-4'>
                <h4 className='infosize'><span><TbListDetails></TbListDetails></span> عن الطباخ</h4>
                </div>
                
                <div className='col-4 '>
                <h5 >تفاصيل أكثر </h5>
                </div>
                <div className='col-1'>
                <MdEdit style={{fontSize:30}}></MdEdit>
                </div>
            </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default InformationComponent