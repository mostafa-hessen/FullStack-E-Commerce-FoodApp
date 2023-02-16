
import './Header.css'
function Header() {


    return (

        <>
            <div className="row p-5">


                <div className="col-7">
                    <div className="search-box d-flex align-items-center">
                        <div className="search-btn">
                            <i className="fas fa-search"></i>
                        </div>

                        <input type="text" placeholder="ابحث عن اكلتك" />

                        {/* <div className="cancel-btn">
                            <i className="fas fa-times"></i>
                        </div> */}
                    </div>

                </div>

                <div className="col-5">
                    <h3> 🤤 مرحبا بك في الاكيله</h3>
                </div>






            </div>




        </>
    )




}
export default Header