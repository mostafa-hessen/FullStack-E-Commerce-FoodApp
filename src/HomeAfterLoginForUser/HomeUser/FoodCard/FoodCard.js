import { useEffect, useState } from 'react';
import Box from './box';
import './FoodCard.css';
import { collection,  onSnapshot,   query ,orderBy, limit} from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSelector } from 'react-redux';
function FoodCard(){
    const [allfood, setallFood] = useState([])
    const [editedFood, setEDitedFood] = useState([])
    const myFilterValue=useSelector((state)=>state.FilterItem.currentFilter    )
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
          setEDitedFood(allfood&&myFilterValue!="all"?allfood.filter(ele=>ele.foodCateogry==myFilterValue):allfood)
        },[myFilterValue])

return(
    <div className='row FoodCardForUser'>
       {editedFood?.map(ele=><div className='col-12  col-md-6 col-xl-4'><Box  element={ele}/></div>)}
    </div>
)

}
export default FoodCard