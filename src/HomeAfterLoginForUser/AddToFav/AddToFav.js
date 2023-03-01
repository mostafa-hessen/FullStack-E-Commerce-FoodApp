import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import first from '../../assets/potatoKofta.jpg'
import sec from '../../assets/chicken.jpg'

import { useState } from 'react';
import './AddToFav.css'
import { Redirect } from 'react-router-dom';
function AddToFav({authorized}) {
const [myactive, setmyactive] = useState("")
const [second, setsecond] = useState("")

if(!authorized){
  return <Redirect to = '/SignPage'/>
}

  return (
    <div className=' parent' >
  <h3> <i class="fa-solid fa-star"></i>المفضلة لديك </h3>
    <div className=' md-auto cardparent mt-4' style={{maxWidth: '700px'}}><a><i class="fa-solid fa-trash "  style={{ position:'absolute', left:'0%', top:'50%',cursor:'pointer'}}></i></a>
    <div className={`card1 mycard ${myactive} align-items-center d-flex flex-direction-row`} style={{width:'100%'}} >
    <i class="fa-solid fa-ellipsis-vertical" style={{ position:'absolute', left:'3%', top:'5%',cursor:'pointer'}} onClick={()=>myactive=="active"?setmyactive(""):setmyactive("active")}></i>
<img src={first} alt="..."/>
<div class="card-body">
<h5 class="card-title " style={{color:'orange'}}> كفتة الفراخ المقلية</h5>
<p class="card-text mt-2"> فراخ تتمتع بتتبيلة قويه مع طعم الجبنه الرائع ويقدم معها الارز والسلطات والعيش</p>

</div>
</div>
    </div>
    <div className=' md-auto cardparent mt-4' style={{maxWidth: '700px'}}><a><i class="fa-solid fa-trash "  style={{ position:'absolute', left:'0%', top:'50%',cursor:'pointer'}}></i></a>
    <div className={`card1 mycard ${second} align-items-center d-flex flex-direction-row`} style={{width:'100%'}} >
    <i class="fa-solid fa-ellipsis-vertical" style={{ position:'absolute', left:'3%', top:'5%',cursor:'pointer'}} onClick={()=>second=="active"?setsecond(""):setsecond("active")}></i>
<img src={sec} alt="..."/>
<div class="card-body">
<h5 class="card-title " style={{color:'orange'}}> الفراخ المشوية</h5>
<p class="card-text mt-2"> فراخ تتمتع بتتبيلة قويه مع رائحه الفحم ويقدم معها الارز والسلطات والعيش</p>

</div>
</div>
    </div>
    <div className=' md-auto cardparent mt-4' style={{maxWidth: '700px'}}><a><i class="fa-solid fa-trash "  style={{ position:'absolute', left:'0%', top:'50%',cursor:'pointer'}}></i></a>
    <div className={`card1 mycard ${myactive} align-items-center d-flex flex-direction-row`} style={{width:'100%'}} >
    <i class="fa-solid fa-ellipsis-vertical" style={{ position:'absolute', left:'3%', top:'5%',cursor:'pointer'}} onClick={()=>myactive=="active"?setmyactive(""):setmyactive("active")}></i>
<img src={first} alt="..."/>
<div class="card-body">
<h5 class="card-title " style={{color:'orange'}}> كفتة الفراخ المقلية</h5>
<p class="card-text mt-2"> فراخ تتمتع بتتبيلة قويه مع طعم الجبنه الرائع ويقدم معها الارز والسلطات والعيش</p>

</div>
</div>
    </div>
</div>
   
  );
}

export default AddToFav;