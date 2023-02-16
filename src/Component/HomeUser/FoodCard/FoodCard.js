
import Box from './box';
import './FoodCard.css';

function FoodCard(){
let arr =['','','','','','']
return(
    <div className='row'>
       {arr.map(ele=><div className='col-12  col-md-6 col-lg-4'><Box/></div>)}
    </div>
)

}
export default FoodCard