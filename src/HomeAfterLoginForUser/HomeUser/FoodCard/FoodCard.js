
import Box from './box';
import './FoodCard.css';

function FoodCard(){
let arr =['','','','','','']
return(
    <div className='row FoodCardForUser'>
       {arr.map(ele=><div className='col-12  col-md-6 col-xl-4'><Box/></div>)}
    </div>
)

}
export default FoodCard