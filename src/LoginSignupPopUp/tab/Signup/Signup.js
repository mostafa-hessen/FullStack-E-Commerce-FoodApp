
import React,{useState} from 'react'
import './Signup.css'

export default function Signup() {

    let rgex={
        fName:/^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
        lastName:/^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
        email:/\S+@\S+\.\S+/,
        password:/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/,
        adrees:/^\w/,
        phone:/^01[0125][0-9]{8}$/
    }

    const handleClick=()=>{
        console.log('d');
    }

    const[data, setData] = useState({fName:"", lName:"", email:"", password:"",phone:"", adrees:""});
    const[  errorMessage, setMessage] = useState({FNameErr:null, LNameErr:null, emailErr: null, passwordErr:null, phoneErr:null, adreesErr:""});
    const afterLeaveInput=(e)=>{

      console.log(e.target.value);
      rgex['lastName'].test(e.target.value)?e.target.style.border="1px solid #5b8d61":e.target.style.border="1px solid red";

    }
        
    const changeData = (e) => {
// e.preventDefault()
      // console.log(e.target.value);
      // var value = e.target.value;
            if(e.target.name === "fName"){ 
                setData({
                  ...data,
                  fName: e.target.value
                });
               rgex['fName'].test(e.target.value)?e.target.style.border="1px solid #5b8d61":e.target.style.border="1px solid red";

            }
 

            //       console.log(data);
            // }
            else if(e.target.name == "lName"){
                setData({
                  ...data,
                  lName:e.target.value
                });
               rgex['lastName'].test(e.target.value)?e.target.style.border="1px solid #5b8d61":e.target.style.border="1px solid red";
             
              }
                // setMessage({
                //     ...errorMessage,
                //     LNameErr: e.target.value.length === 0 ? "last Name is required": e.target.value.length < 3 ? "Minimum length is 3 characters":rgex.lastName.test(e.target.value) ? null : "last Name mustn't contain white spaces"
                //   });
                
              // }
            // else if(e.target.name === "email"){
            //   setData({
            //     ...data,
            //     email: e.target.value
            //   });
        
            //   setMessage({
            //     ...  errorMessage,
            //     emailErr: e.target.value.length === 0 ? "Email is required" : rgex.email.test(e.target.value) ? null : "Invalid pattern for email"
            //   });
            // }
            // else if(e.target.name === "password"){
            //   setData({
            //     ...data,
            //     password: e.target.value
            //   });
              
            //   setMessage({
            //     ...  errorMessage,
            //     passwordErr: e.target.value.length === 0 ? "Password is required": rgex.password.test(e.target.value) ? null : "Password length must be 8 or more characters, contains at least one lowercase, one uppercase, one digit and special character."
            //   });
            // }
            // else if(e.target.name === "phone"){
            //     setData({
            //       ...data,
            //       phone: e.target.value
            //     });
          
            //     setMessage({
            //       ...  errorMessage,
            //       phoneErr: e.target.value.length === 0 ? "phone number is required":  rgex.phone.test(e.target.value) ?  null: "phone must be 11 charcter"
            //     });
            //   }
            //   else{

            //     setData({
            //       ...data,
            //       adress: e.target.value
            //     });
          
            //     setMessage({
            //       ...  errorMessage,
            //       addressErr: e.target.value.length === 0 ? "adress is required": rgex.adress.test(e.target.value) ?  null: "must start with charcter not number"
            //     });

              // }
          }
          console.log(data);
        //   console.log(  errorMessage.lastName);
    //onChange={(e) => changeData(e)}  will put in each input
    return (
        <div className="formContainer">
            <div className="formWrapper1">
                <span className="logo">الاكيله</span>
                {/* <span className="title">Register</span> */}

                <form onSubmit={()=>handleClick} >
                   <div className='d-flex justify-content-between' >
                    <input required type="text" placeholder="الاسم الثاني " autoComplete="name" name="lName"    style={{width:'49%'}} onChange={(e) => changeData(e)} onBlur={(e)=>afterLeaveInput(e)}/>
               {console.log(data.lastName,rgex['lastName'].test(data.lastName))}
                    {/* { errorMessage.lName?'':<span className='text-warning'>{errorMessage}</span>} */}
                    <input required type="text" placeholder="الاسم الاول" autoComplete="name"  name='fName' value={data.fName} style={{width:'49%'}} onChange={(e) => changeData(e)}/>
                   </div>
                    <input required  type="email" placeholder="البريد الالكتروني"  name="email" pattern='/\S+@\S+\.\S+/' />
                    <input required type="password" placeholder="كلمه السر" name="password" pattern='/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/' />
                    <input required type="tel" placeholder=" رقم التليفون" name="phone" pattern='/^01[0125][0-9]{8}$/' />

                    <div className='d-flex justify-content-between'>
                    <input type="text" id="street-address" name="street-address" autoComplete="street-address" required   placeholder='العنوان' style={{width:'49%'}}></input>

                    <select id="country" name="country" autoComplete="country"    required style={{width:'49%'}}>
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
                        <option>المنيا</option>

                    </select>
                    {/* <div> */}
                    </div>

                    <label htmlFor="kindUser">نوع الحساب:</label>
                    <select name="kindUser" id="kindUser">
                        <option value="cook">الطباخ</option>
                        <option value="user">العميل</option>
                    </select>

                    {/* <input required type="" placeholder="password" /> */}
                    <input required style={{ display: "none" }} type="file" id="cxcx"   />
                    <label htmlFor="cxcx">
                        s
                        <span className='d-flex align-items-center'><i class="fa-solid fa-camera-retro" style={{fontSize:'25px' , color:'#5b8d61'}}></i>  ارفع صورتك</span>
                    </label>
                    <button type="submit">Submit</button>
                    {/* {loading && "Uploading and compressing the image please wait..."} */}
                    {/* {err && <span>Something went wrong</span>} */}
                </form>

                {/* <p>
        You do have an account? 
        <Link to="/login">Login</Link> 
      </p> */}

                {/* {!err ? console.log("done") : console.log("you have   errorMessagee")} */}
            </div>
        </div>
    )
}
