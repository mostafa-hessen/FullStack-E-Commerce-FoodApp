
import { useEffect, useState } from 'react';
import Box from './box';
import './FoodCard.css';
import { collection,  onSnapshot,   query ,orderBy, limit} from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSelector } from 'react-redux';
function FoodCard(){
    const [allfood, setallFood] = useState([])
    const [editedFood, setEDitedFood] = useState([])
    const myFilterValue=useSelector((state)=>state)

    useEffect(() => {
   

        const q = query(collection(db, "foods"), orderBy("timestamP", "desc"));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setallFood(data);
          setEDitedFood(data);
            
          })
    
    
        }, [])



        useEffect(()=>{
   
          setEDitedFood(allfood&&myFilterValue?.currentFilter!="all"?allfood.filter(ele=>ele.foodCateogry==myFilterValue.currentFilter):allfood)
       

        },[myFilterValue])
    
// let arr =['','','','','','']
// myFilterValue&&setFood(food.filter(ele=>ele.cteogry==myFilterValue.currentFilter))

return(
    <div className='row FoodCardForUser'>
        {/* {console.log(food)} */}
        { 
          // console.log(myFilterValue)
          }
       {editedFood?.map(ele=><div className='col-12  col-md-6 col-xl-4'><Box  element={ele}/></div>)}
    </div>
)

}
export default FoodCard