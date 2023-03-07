import React from 'react'
//import './FoodDetailsCooker.css'
import { useState,useEffect } from 'react';
//import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
// import { checkActionCode } from 'firebase/auth';

// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';


export default function Details() {
    const  { id } = useParams();
    console.log(id)
    const [food1, setCartfood1] = useState('')
   const [wordData, setWordData] = useState('')
    


    useEffect(() => {
        const getdata = async()=>{
           const docRef = doc(db, "foods", id);
       await  getDoc(docRef)
            .then((docRef) => {
            
                setCartfood1(docRef.data())
                setWordData(docRef.data().foodImg[0])
             
            })
            .catch((error) => {
              console.log(error);
            });
        }
         
        getdata()

     

     },[])

     console.log(food1)
   
//   const imgs = [
//     { id: 0, value: food1.foodImg[0] },
//     { id: 1, value: food1.foodImg[1] },
//     { id: 2, value: food1.foodImg[2] },
//   ]

  // 'http://static1.squarespace.com/static/5f14d04ebd60fa3de12e3960/t/5fdcc21b84630471db04a0e9/1608303136517/IMG_9417.jpeg?format=1500w')
  const handleClick = (index) => {
    console.log(index)
    const wordSlider = food1.foodImg[index];
    setWordData(wordSlider)
  }
  

  return (
    <>
      {/* {food1?setWordData(food1.foodImg[0]):console.log("not done")} */}
      <div className="main">
        <div className='rounded-4 ' style={{height:"300px", maxWidth:"500px",margin:"auto",overflow:'hidden'}}>
        <img src={wordData} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}  />
        </div>
        <div className='flex_row'>
        {/* {food1.foodImg&&setWordData(food1.foodImg[0])} */}

          {food1.foodImg&&food1.foodImg.map((data, i) =>
            <div className="thumbnail" key={i} >
        <div className={`rounded-4 ${food1.foodImg.indexOf(wordData) == i ? "clicked" : ""}`} style={{maxHeight:"70px", maxWidth:"90px",margin:"auto",overflow:'hidden'}}>
              <img  src={data} onClick={() => handleClick(i)}style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",cursor:"pointer"}}   />
        </div>
            </div>
          )}
        </div>

      </div>

      <div className='row pt-5'>
        <div className='col-lg-6 mx-auto'>

          <div className='d-flex align-items-center' style={{direction:"rtl", width:"70%", margin:"auto"}}>
          <input type="checkbox" id="" name="" value="" className='ms-2'/>
          <h5 style={{margin:0}}>عائلي : {food1?.bigPrice} جنيه مصري </h5>
          </div>
          
          <div className='d-flex align-items-center' style={{direction:"rtl", width:"70%", margin:"auto"}}>
          <input type="checkbox" id="" name="" value="" className='ms-2'/>
          <h5 style={{margin:0}}> وسط : {food1?.middlePrice} جنيه مصري </h5>
          </div>
      
          <div className='d-flex align-items-center' style={{direction:"rtl", width:"70%", margin:"auto"}}>
          <input type="checkbox" id="" name="" value="" className='ms-2'/>
          <h5 style={{margin:0}}> صغير : {food1?.smallPrice} جنيه مصري</h5>
          </div>

          <button className='btn mt-4 inline-flex align-items-center' style={{width:45, backgroundColor:"#069c54",borderRadius:"50%"}}><i className="fas fa-shopping-cart mt-2 text-light"></i></button>
        </div >
        <div className='col-lg-6'>
          <h1 style={{color:'orange'}}>{food1?.foodName} </h1>
          <p> {food1?.foodDiscription} </p>
         
        </div>
       
      </div>

    </>
  );

}
