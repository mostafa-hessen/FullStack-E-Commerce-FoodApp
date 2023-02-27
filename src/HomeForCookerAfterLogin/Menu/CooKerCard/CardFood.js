import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CardFood.css'
import chicken from '../../../assets/photo_2023-02-14_19-45-58.jpg'
import mahshi from '../../../assets/mahshi.jpg'
import burger from '../../../assets/photo_2023-02-14_19-47-18.jpg'
import pizza from '../../../assets/photo_2023-02-14_19-47-58.jpg'
import kofta from '../../../assets/potatoKofta.jpg'
import Popupeditefood from './PopUpEditeFoodForm/Popupeditefood';


import { border } from '@mui/system'
import DeleteFood from './DeleteFood/DeleteFood';

export default function CardFood() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Cheifs = [
    {img:chicken, name:'فراخ مشوية',price:'السعر : 100 ج',details:'تحتوي ع كل ما تشتهيه'}, 
    {img:mahshi, name:' محاشي',price:'السعر : 100 ج',details:'تحتوي ع كل ما تشتهيه'},
    {img:kofta, name:' كفتة فراخ',price:'السعر : 100 ج',details:'تحتوي ع كل ما تشتهيه'},
    {img:burger, name:'برجر بيتي',price:'السعر : 100 ج',details:'تحتوي ع كل ما تشتهيه'},
    {img:pizza, name:'بييتزا بيتي',price:'السعر : 100 ج',details:'تحتوي ع كل ما تشتهيه'},
    {img:chicken, name:'مكرونة بشاميل',price:'السعر : 100 ج',details:'تحتوي ع كل ما تشتهيه'}
    ];
    return (
        <>
          

            <div className="team">
            <div className="container">
                <div className="row">
                <h1 style={{color:'black'}}><i class="fa-solid fa-bowl-food" ></i> أكلاتي </h1>
                    {
                    Cheifs.map((CheifItem, index)=>{
                        return(
                 
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        
                  <div className="box">
       <a href="#"><i class="fa-solid fa-ellipsis-vertical  openicon" ></i> <div className='icons '>
        <Popupeditefood/>
      
      <DeleteFood />
       </div></a>
    <div className='boximg' style={{backgroundImage:`url(${CheifItem.img})`}}>
        {/* <img src={CheifItem.img}/> */}
        </div>
    <div className='boxDetails'>
    <h4> {CheifItem.name}</h4>
    <h6 style={{color:'orange'}} className="p-content">{CheifItem.details}</h6>
    <p style={{fontWeight: 'bold'}}>{CheifItem.price}</p>
    </div>
    
   
</div>
                    </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
