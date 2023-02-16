
import './FilterItems.css';
import filter1 from '../../../assets/menu-1.png';
import filter2 from '../../../assets/menu-2.png';
import filter3 from '../../../assets/menu-3.png';
import filter4 from '../../../assets/menu-4.png';


function FilterItems() {
    return (
        <>
            <div className="Filter">
                <div className="filterItem " >
                    <img src={filter1} width='80%' style={{paddingTop:'20px',paddingBottom:'10px'}}/>
                    <p>مكرونه</p>
                </div>
                <div className="filterItem">
                    <img src={filter2} width='80%' style={{paddingTop:'20px',paddingBottom:'10px'}} />
                    <p>شوربه</p>
                </div>
                <div className="filterItem">
                    <img src={filter3} width='80%' style={{paddingTop:'20px',paddingBottom:'10px'}} />
                    <p>حلويات</p>
                </div>
                <div className="filterItem">
                    <img src={filter4} width='80%' style={{paddingTop:'20px',paddingBottom:'10px'}} />
                    <p>خضار</p>
                </div>
                <div className="filterItem active">
                    <img src={filter4} width='80%' style={{paddingTop:'20px',paddingBottom:'10px'}} />
                    <p>الكل</p>
                </div>


            </div>



        </>
    )
}
export default FilterItems