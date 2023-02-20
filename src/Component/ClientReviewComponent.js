
import { FaRegStar, FaStar } from "react-icons/fa";
import './clientReview.css'

function ClientReviewComponent() {

    return (<>
        <div className="container   rounded-5 " style={{ backgroundColor: '#9DC183' }}>
            <div className="row " dir="rtl">

                <div className=" col-lg-3 col-sm-6 p-4" >

                    <h2 dir="rtl">تقييم عميلنا</h2>
                </div>
            </div>

            <div className="row justify-content-center" >


                <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3 smallscreen">
                    <div className="row justify-content-center bg-white  rounded-4  ">
                        <div className="col-5 ">
                            <img className="w-100 mt-3 rounded-5" src="profile.jpg"></img>
                        </div>
                        <div className="col-6 mt-5">
                            <h4>تقوي علي</h4>
                        </div>
                        <div className="col-11 mt-5 ">
                            <p>  تا لات ال سق لل لل عا ه اا عاغا اعاع فب هتعلات تا تات اتى ثق لغال لع لعل لغل</p>
                        </div>
                        <div dir="rtl" className="col-11 m-3">
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaRegStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaRegStar></span>


                        </div>
                    </div>
                </div>


                <div className="col-lg-3  col-7 col-md-4   shadow  zoom m-3">
                    <div className="row justify-content-center bg-white rounded-4 ">
                        <div className="col-5 ">
                            <img className="w-100 mt-3 rounded-5" src="profile.jpg"></img>
                        </div>
                        <div className="col-6 mt-5">
                            <h4>تقوي علي</h4>
                        </div>
                        <div className="col-11 mt-5 ">
                            <p>  تا لات ال سق لل لل عا ه اا عاغا اعاع فب هتعلات تا تات اتى ثق لغال لع لعل لغل</p>
                        </div>
                        <div dir="rtl" className="col-11 m-3">
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaRegStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaRegStar></span>


                        </div>
                    </div>
                </div>

                <div className="col-lg-3  col-7 col-md-4  shadow  zoom m-3">
                    <div className="row justify-content-center bg-white rounded-4 ">
                        <div className="col-5 ">
                            <img className="w-100 mt-3 rounded-5" src="profile.jpg"></img>
                        </div>
                        <div className="col-6 mt-5">
                            <h4>تقوي علي</h4>
                        </div>
                        <div className="col-11 mt-5 ">
                            <p>  تا لات ال سق لل لل عا ه اا عاغا اعاع فب هتعلات تا تات اتى ثق لغال لع لعل لغل</p>
                        </div>
                        <div dir="rtl" className="col-11 m-3">
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaStar></span>
                            <span><FaRegStar style={{ color: '#FFFF00', fontSize: 25, marginRight: 6 }}></FaRegStar></span>


                        </div>
                    </div>
                </div>
            </div>
        </div>




    </>

    )
}

export default ClientReviewComponent


