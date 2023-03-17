import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import first from '../../assets/potatoKofta.jpg'
import sec from '../../assets/chicken.jpg'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './AddToFav.css'
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import img from '../../assets/1.png'
function AddToFav() {

let activeItem = ['', '', '', '']
const [myactive, setmyactive] = useState(activeItem)
const navigate=useHistory()
const changeActive = (status) => {

myactive [status]== 'active'?activeItem  = ['', '', '', ''] : activeItem [status]= 'active'
    setmyactive(activeItem)

  }

  let user = JSON.parse(localStorage.getItem('user'))
  const [favFoodInfo, setFavFoodInfo] = useState([])

  useEffect(() => {
    const q = doc(db, "users", user.uid);
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.data(), "fav food info")
      setFavFoodInfo(snapshot.data().favoriteFood)
    })

  }, [])


  const removeFav = (item) => {
    let removeArr = favFoodInfo?.filter(ele => ele != item)

    const q = doc(db, "users", user.uid);
    updateDoc(q, {
      favoriteFood: (removeArr),
    })
      .then((q) => {
        console.log(
          "An item has been removed from an existing Field"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className=' parent' >
  <h3> <i class="fa-solid fa-star"></i>المفضلة لديك </h3>

  <div className="row w-100">

{
  favFoodInfo?.map((item,index) =>{

    return (

      <div className='col-9 col-lg-7 m-auto '>
    <div className=' md-auto cardparent mt-4 d-flex ' >
      <a >
        {console.log(item)}
        <i class="fa-solid fa-trash "  style={{ position:'absolute', left:'0%', top:'40%',cursor:'pointer'}} onClick={()=>removeFav(item)}></i>
        <i class="fa-solid fa-info "  style={{ position:'absolute', left:'1%', top:'60%',cursor:'pointer'}} onClick={()=>navigate.push(`/HomeUser/Home/useFoodDetailes/${item.foodId}`)}></i>
        
        </a>
    <div className={`card1 mycard ${myactive[index]} align-items-center d-flex flex-direction-row`} style={{width:'100%'}} >
    <i class="fa-solid fa-ellipsis-vertical" style={{ position:'absolute', left:'3%', top:'5%',cursor:'pointer'}} onClick={()=>changeActive(index)}></i>
    <div className='myimg'>
<img src={item.foodImg?item.foodImg[0]:img} alt="..."/>

    </div>
<div class="card-body">
<h5 class="card-title " style={{color:'orange'}}>{item?.foodName}</h5>
<p class="card-text mt-2" style={{wordBreak:"break-word"}}>{item?.foodDiscription}</p>

</div>
</div>
    </div>

    </div>
    )
  })
}
</div>

</div>
   
  );
}

export default AddToFav;