import { FaRegStar, FaStar } from "react-icons/fa";
import './ClientReview.css'
import user1 from '../../../assets/user1.jpg';
import user2 from '../../../assets/user2.jpg';
import user3 from '../../../assets/user3.jpg';
function ClientReview() {
    const users = [
        {img:user1, name:'ندي علي'},
        {img:user2, name:'محمد عادل'},
        {img:user3, name:'هدي مجدي'}
    ]
    return (
        <div className="container rounded-5 mt-5" style={{ backgroundColor: '#dce6d5' }}>
            <div className="row " dir="rtl">
                <div className=" col-lg-3 col-sm-6 p-4 mx-sm-auto" >
                    <h3 dir="rtl">تقييم عميلنا</h3>
                </div>
            </div>

            <div className="row justify-content-center" >
                {
                    users.map((user, index)=>{
                        return(
                            <div className="col-6 col-lg-3 col-md-4 col-sm-6 shadow  zoom m-2 mb-4 smallscreen" key={index}>
                                <div className="row justify-content-center bg-white  rounded-4">
                                  <div className="row justify-content-center w-100">
                                   <div className="col-7">
                                        <img className="w-100 mt-4" src={user.img} style={{borderRadius:'50%'}}></img>
                                    </div>
                                <div className="col-2 me-4 mt-5 mt-lg-3">
                                    <h5>{user.name}</h5>
                                </div>
                                <div className="col-12 align-self-center mt-3 mx-2 fs-6 " style={{textAlign:'right'}}>
                                    <p>زرت هذه الصفحة مرتين خلال زيارتي للمنيا. الطعام كان جيداً جداً، وكان معظمهم لذيذ</p>
                                </div>
                                </div>
                                <div dir="rtl" className="col-lg-12 mt-2 mb-4 align-self-center d-flex">
                                    <span><FaStar style={{ color: '#ffae19', fontSize: 19 }}></FaStar></span>
                                    <span><FaStar style={{ color: '#ffae19', fontSize: 19, marginRight: 4 }}></FaStar></span>
                                    <span><FaStar style={{ color: '#ffae19', fontSize: 19, marginRight: 4 }}></FaStar></span>
                                    <span><FaStar style={{ color: '#ffae19', fontSize: 19, marginRight: 4 }}></FaStar></span>
                                    <span><FaRegStar style={{ color: '#ffae19', fontSize: 19, marginRight: 4 }}></FaRegStar></span>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ClientReview;