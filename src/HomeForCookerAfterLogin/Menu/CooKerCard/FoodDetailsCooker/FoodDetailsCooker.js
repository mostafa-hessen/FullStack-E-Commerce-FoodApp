import React from 'react'
import './FoodDetailsCooker.css'
import { useState,useEffect } from 'react';
//import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';

// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';


export default function FoodDetailsCooker() {
    const  { id } = useParams();
    console.log(id)
    const [food1, setCartfood1] = useState([])
    


    useEffect(() => {
        const getdata = async()=>{
           const docRef = doc(db, "foods", id);
       await  getDoc(docRef)
            .then((docRef) => {
            
                setCartfood1(docRef.data())
             
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

  const [wordData, setWordData] = useState('http://static1.squarespace.com/static/5f14d04ebd60fa3de12e3960/t/5fdcc21b84630471db04a0e9/1608303136517/IMG_9417.jpeg?format=1500w')
  const handleClick = (index) => {
    console.log(index)
    const wordSlider = food1.foodImg[index];
    setWordData(wordSlider)
  }
  

  return (
    <>
      {/* {food1?console.log(JSON.parse(food1.foodImg)):console.log("not done")} */}
      <div className="main">
        <img src={wordData} height="300" width="500" />
        <div className='flex_row'>
          {/* {food1?.foodImg.map((data, i) =>
            <div className="thumbnail" key={i} >
              <img  src={data} onClick={() => handleClick(i)} height="70" width="100" />
            </div>
          )} */}
        </div>

      </div>

      <div className='row pt-5'>
        <div className='col-lg-6'>
          <h5> {food1?.bigPrice} عائلي : جنيه مصري </h5>
          <h5> {food1?.middlePrice} وسط : جنيه مصري </h5>
          <h5> {food1?.smallPrice} صغير : جنيه مصري </h5>
        
        </div>
        <div className='col-lg-6'>
          <h1 style={{color:'orange'}}>{food1?.foodName} </h1>
          <p> {food1?.foodDiscription} </p>
         
      
        </div>

      </div>

    </>
  );

}
