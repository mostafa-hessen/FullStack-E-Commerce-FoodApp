import React from 'react'
import footer from "../../assets/footer.png"
import './Footer.css'
export default function Footer() {
    return (
<div class="footer p-5 mt-2">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                  
                      
                            <div class="footer-contact">
                                <h2> ساعات العمل</h2>
                             
                              <p> <i class="uil uil-clock"></i> الاثنين -الثلاثاء: 11صباحا -11مساءا</p> 
                    <p><i class="uil uil-clock"></i>  الاحد -الاربعاء: مساءا -1مساءا</p>   
                            </div>   
                        </div>
                        <div class="col-12  col-md-6 col-lg-4 callus">
                            <div class="footer-link">
                                <h2> اتصل بنا </h2>

                                <div className='row'>
                                    <div className='col-6'>
                                    <a href="">Terms of use</a>
                                <a href="">Privacy policy</a>
                                <a href="">Cookies</a>
                                    </div>
                                    <div className='col-6'>
                                    <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>

                                    </div>
                                </div>
                                {/* <a href="">Terms of use</a>
                                <a href="">Privacy policy</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a> */}
                            </div>
                        </div>
                
            
                <div className='col-12 mb-3  col-md-6 col-lg-4'>
                    <img src={footer} />
                    <h6>يسعدنا ان نقدم لك  أفضل الخدمات</h6>
                    <div class="footer-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-youtube"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    </div>

                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <p>Copyright &copy; <a href="#">الأكيلة</a>, All Right Reserved.</p>
              
            </div>
        </div>
    </div>
   
    )
}
