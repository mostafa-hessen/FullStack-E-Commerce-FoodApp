

import './Bestfood.css';

import food1 from '../../../assets/photo_2023-02-14_19-45-58.jpg';
import food2 from '../../../assets/photo_2023-02-14_19-46-04.jpg';
import food3 from '../../../assets/photo_2023-02-14_19-46-13.jpg';
import { useState } from 'react';






function Bestfood() {

    let activeFood=['active','','','']
    const [activeFoodstate,SetactiveFoodstate]=useState(activeFood)
    const changeActive =(status)=>{

        activeFood=['','','','']
        console.log(activeFood)
        activeFood[status]='active'
        console.log( activeFood[status]='active'  )
        console.log(activeFood)

        SetactiveFoodstate(activeFood)
       // console.log(activeFood)


       // SetactiveFoodstate( newa)
        //console.log(activeFoodstate)

        


    }

    return (
        <>
            <div className="BestFoods py-3">
                <h5 className='pe-4' style={{marginLeft:'auto'}}>أشهي الأكلات</h5>
                <div className={`food ${activeFoodstate[0]}`}  style={{backgroundImage:`url("https://media.istockphoto.com/id/1147312082/photo/falafel-hummus-and-pita-bread-appetizer.jpg?s=612x612&w=0&k=20&c=-2ji64_i-xib606OSBVGnGoM1wo2uhVT_mKzJx7yM80=")`}} onMouseEnter={()=>changeActive(0)}></div>
                <div className={`food ${activeFoodstate[1]}`}  style={{backgroundImage:`url(${food2})`}} onMouseEnter={()=>changeActive(1)}></div>
                <div className={`food ${activeFoodstate[2]}`}  style={{backgroundImage:`url(${food1})`}} onMouseEnter={()=>changeActive(2)}></div>
                <div className={`food ${activeFoodstate[3]}`}  style={{backgroundImage:`url(${food3})`}} onMouseEnter={()=>changeActive(3)}></div>


            </div>




        </>
    )

}
export default Bestfood