import './Header.css'
import Notification from './notification/notification'
function Header(props) {


    return (

        <>
            <div className="row header py-5   align-items-center" >

                <div className="col-9 d-flex justify-content-between align-items-center">
                     <div className="image  d-flex align-items-center">
                           <img  className='d-lg-none' src="https://via.placeholder.com/50/09f/fff.png " alt="D" />
                           <Notification/>
                     </div>
                    <div className="search-box d-flex align-items-center">
                        <div className="search-btn">
                            <i className="fas fa-search "></i>
                        </div>
                        <input type="text" placeholder="ابحث عن اكلتك" />
                    </div>               
                </div>

                <div className="col-3 text-center myHeaderText">
                    <p >{props.hello}
                    </p>
                    <p>{props.helloCon}</p>
                </div>
            </div>
        </>
    )
}
export default Header