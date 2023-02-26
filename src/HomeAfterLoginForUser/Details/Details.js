import React from 'react'
import './Details.css'
import { useState } from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';


export default function Details() {
  const imgs = [


    { id: 0, value: "http://static1.squarespace.com/static/5f14d04ebd60fa3de12e3960/t/5fdcc21b84630471db04a0e9/1608303136517/IMG_9417.jpeg?format=1500w" },
    { id: 1, value: "  https://i.pinimg.com/736x/46/93/78/469378234e538dd09d187b54172c8663--eggplants-tomatoes.jpg" },
    { id: 2, value: "https://img.atlasobscura.com/v0bPaqaz_yHfNRw_jfScfX1c4sGXG13Pr_1cSy_hgOw/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS8y/MDE3LzExLzEzLzE3/LzMzLzA3L2RiMTg4/YmMxLTg1ODktNDE4/Zi04ZjA2LTMwZTU4/Y2Q0YzBhNy9maWxl/LmpwZw.jpg" },
  ]
  const [wordData, setWordData] = useState(imgs[0])
  const handleClick = (index) => {
    console.log(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }
  return (
    <>
      <div className="main">
        <img src={wordData.value} height="300" width="500" />
        <div className='flex_row'>
          {imgs.map((data, i) =>
            <div className="thumbnail" key={i} >
              <img className={wordData.id == i ? "clicked" : ""} src={data.value} onClick={() => handleClick(i)} height="70" width="100" />
            </div>
          )}
        </div>

      </div>

      <div className='row pt-5'>
        <div className='col-lg-6'>
          <h5> 270 السعر : جنيه مصري </h5>
          <h6 className='m-2'>
        
          <label className='m-1' >
          
        <input type="checkbox"  className='m-1'/>
        عائلية
      </label>
      <label className='m-1'>
    
        <input type="checkbox" className='m-1'/>
      فرد
      </label>
   
      : الحجم</h6>
    <h6  className='m-1'> <input type="number"  className='m-1'/>الكمية   </h6>
 
        </div>
        <div className='col-lg-6'>
          <h1 style={{color:'orange'}}>وجبة عائلية</h1>
          <p>  نحن نقدم لك وجبة عائليه تحتوي علي  كل ما تشتهيه </p>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
      
        </div>

      </div>

    </>
  );

}
