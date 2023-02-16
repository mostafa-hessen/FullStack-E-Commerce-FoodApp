
import './FilterItems.css';
import filter1 from '../../../assets/menu-1.png';
import filter6 from '../../../assets/img10.png';

import filter2 from '../../../assets/menu-2.png';
import filter3 from '../../../assets/img6.png';
import filter4 from '../../../assets/img7.png';
import filter5 from '../../../assets/X.png';



function FilterItems() {
    return (
        <>
            <div className="Filter">
                <div className="filterItem " >
                    <img src={filter1} width='80%' style={{paddingTop:'20px',paddingBottom:'10px'}}/>
                    <p>مكرونه</p>
                </div>
                <div className="filterItem">
                    <img src={filter2}  />
                    <p>خضار</p>
                </div>
                <div className="filterItem">
                    <img src={filter3}  />
                    <p>بيتزا</p>
                </div>
                <div className="filterItem">
                    <img src={filter4}  />
                    <p>شوربه</p>
                </div>
                <div className="filterItem">
                    <img src={filter6}  />
                    <p>ساندوتشات</p>
                </div>
                <div className="filterItem active">
                    <img src={filter5}  />
                    <p>الكل</p>
                </div>


            </div>



        </>
    )
}
export default FilterItems