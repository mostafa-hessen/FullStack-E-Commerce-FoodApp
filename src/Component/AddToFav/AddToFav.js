import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './AddToFav.css'
function AddToFav() {
const [myactive, setmyactive] = useState("")
  return (
    <div className='bg-danger parent' >
  <h1> <i class="fa-solid fa-star"></i>المفضلة لديك </h1>
    <div className='bg-warning md-auto cardparent' style={{maxWidth: '540px'}}><i class="fa-solid fa-trash bg-danger"></i>
    <div className={`card1 mycard ${myactive} align-items-center d-flex flex-direction-row`} style={{width:'100%'}} onClick={()=>myactive=="active"?setmyactive(""):setmyactive("active")}>
    <i class="fa-solid fa-ellipsis-vertical" style={{}}></i>
<img src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg" alt="..."/>
<div class="card-body">
<h5 class="card-title mb-5" style={{color:'orange'}}> الفراخ المشوية</h5>
<p class="card-text mt-2"> فراخ تتمتع بتتبيلة قويه مع رائحه الفحم ويقدم معها الارز والسلطات والعيش</p>

</div>
</div>
    </div>
</div>
   
  );
}

export default AddToFav;