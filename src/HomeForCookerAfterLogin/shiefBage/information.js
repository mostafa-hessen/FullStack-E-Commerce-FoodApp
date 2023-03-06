import React from 'react'
import { MdEditLocationAlt,MdFastfood ,MdEdit} from "react-icons/md";
import{ FaMedapps,FaPhone} from "react-icons/fa";
import {TbListDetails} from "react-icons/tb";
import './ChiefBage.css'
import PopUpEditCheifPerson from './EditChiefPersonalForm/PopUpEditCheifPerson';
function InformationComponent(props) {
  return (
    <>
     <div className='container'>
        <div className='row position-relative justify-content-center mt-5 border border-success rounded-4 p-3 py-5'>
        {/* <MdEdit className='position-absolute top-0 end-0' >< /MdEdit> */}
<PopUpEditCheifPerson editecookerpersonal={props.alldata}/>
            <div className='col-lg-8 col-md-9 col-12      info '>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-6'>
                <h4 className='infosize'><span><FaMedapps></FaMedapps></span> مواعيد العمل </h4>
                </div>
                
                <div className='col-6 '>
                <h5>    {`  ${props.alldata.amcooker}   ${props.alldata.amcooker}  ${props.alldata.pmcookerselect} ${props.alldata.amcookerselect} ` }</h5>
                </div>
               
            </div>
            </div>


            <div className='col-lg-8 col-md-9 col-12  info mt-4'>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-6'>
                <h4 className='infosize'><span><MdEditLocationAlt></MdEditLocationAlt></span> العنوان</h4>
                </div>
                
                <div className='col-6 '>
                   <h5>{props.country}, {props.address}</h5>
                </div>
              
            </div>
            </div>

            <div className='col-lg-8 col-md-9 col-12   info mt-4'>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-6'>
                <h4 className='infosize'><span><FaPhone></FaPhone></span> رقم التليفون</h4>
                </div>
                
                <div className='col-6 '>
                <h5>{props.phone}</h5>
                </div>
                <div className='col-1'>
                </div>
            </div>
            </div>

            <div className='col-lg-8 col-md-9 col-12   info mt-4'>
            <div dir='rtl' className='row justify-content-around align-items-center py-2'>
                <div className='col-6'>
                <h4 className='infosize'><span><TbListDetails></TbListDetails></span> عن الطباخ</h4>
                </div>
                
                <div className='col-6 '>
                <h5 >{props.alldata.detailscooker}  </h5>
                </div>
               
            </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default InformationComponent