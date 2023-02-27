
import React from 'react'
import './Signup.css'

export default function Signup() {
    return (
        <div className="formContainer">
            <div className="formWrapper1">
                <span className="logo">الاكيله</span>
                {/* <span className="title">Register</span> */}

                <form >
                    <input required type="text" placeholder=" الاسم" autocomplete="name" enterkeyhint="next" />
                    <input required type="email" placeholder="البريد الالكتروني" pattern='/\S+@\S+\.\S+/' />
                    <input required type="password" placeholder="كلمه السر" pattern='/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/' />
                    <input required type="tel" placeholder=" رقم التليفون" pattern='/^01[0125][0-9]{8}$/' />
                    <select id="country" name="country" autocomplete="country" enterkeyhint="done" required>
                        <option >الغربية</option>
                        <option>الإسكندرية</option>
                        <option>الإسماعيلية</option>
                        <option>كفر الشيخ</option>
                        <option>أسوان</option>
                        <option>أسيوط</option>
                        <option>الأقصر</option>
                        <option>الوادي الجديد</option>
                        <option>شمال سيناء</option>
                        <option>البحيرة</option>
                        <option>بني سويف</option>
                        <option>بورسعيد</option>
                        <option>البحر الأحمر</option>
                        <option>الجيزة</option>
                        <option>الدقهلية</option>
                        <option>جنوب سيناء</option>
                        <option>دمياط</option>
                        <option>سوهاج</option>
                        <option>السويس</option>
                        <option>الشرقية</option>
                        <option>الغربية</option>
                        <option>الفيوم</option>
                        <option>القاهرة</option>
                        <option>القليوبية</option>
                        <option>قنا</option>
                        <option>مطروح</option>
                        <option>المنوفية</option>
                        <option selected="selected">المنيا</option>

                    </select>
                    <div>
                        <input type="text" id="street-address" name="street-address" autocomplete="street-address" required enterkeyhint="next" placeholder='العنوان'></input>
                    </div>

                    <label for="kindUser">نوع الحساب:</label>
                    <select name="kindUser" id="kindUser">
                        <option value="cook">الطباخ</option>
                        <option value="user">العميل</option>
                    </select>

                    {/* <input required type="" placeholder="password" /> */}
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        {/* <img src={Add} alt="" /> */}
                        <span className='d-flex align-items-center'><i class="fa-solid fa-camera-retro" style={{fontSize:'25px' , color:'#5b8d61'}}></i>  ارفع صورتك</span>
                    </label>
                    <button>تسجيل حساب</button>
                    {/* {loading && "Uploading and compressing the image please wait..."} */}
                    {/* {err && <span>Something went wrong</span>} */}
                </form>

                {/* <p>
        You do have an account? 
        <Link to="/login">Login</Link> 
      </p> */}

                {/* {!err ? console.log("done") : console.log("you have errore")} */}
            </div>
        </div>
    )
}
