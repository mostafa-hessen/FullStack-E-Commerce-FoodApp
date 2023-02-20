import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import shape from '../../assets/shape.svg'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import './Cheif.css'
function Cheif() {
    return (
        <>
            <div class="sec-wp">
                <div class="container">
                    <div className='row'>
                        <div className='col-12  '>
                            <div className='sec-title text-center mb-5'>
                                <p className='sec-sub-title '>
                                الطباخين المتميزين
                                </p>
                                <h2 class="h2-title" > افضل الطباخين لدينا</h2>
                                <div className='sec-title-shape '>
                                    <img src={shape} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="team">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src={team1} alt="Image"/>
                                <div class="team-rate">
                                    <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                  
                                </div>
                            </div>
                            <div class="team-text">
                                <h2> محمود الشافعي</h2>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src={team2} alt="Image"/>
                                <div class="team-rate">
                                <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                </div>
                            </div>
                            <div class="team-text">
                                <h2>أدم محروس</h2>
                             
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src={team3} alt="Image"/>
                                <div class="team-rate">
                                <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                              
                                </div>
                            </div>
                            <div class="team-text">
                                <h2>امجد السيد</h2>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="team-item">
                            <div class="team-img">
                                <img src={team4} alt="Image"/>
                                <div class="team-rate">
                                <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href="">  <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                    <a href=""> <i class="fa-solid fa-star" ></i></a>
                                </div>
                            </div>
                            <div class="team-text">
                                <h2>عائشة</h2>
                             
                            </div>
                        </div>
                    </div>
                    
                    
                   
                  
                </div>
            </div>
        </div>
        </>
    )
}

export default Cheif;