import './Login.css'

function Login(){
return(
    <>
    <div className="formContainer">
      <div className="formWrapper1">
        <span className="logo">الاكيله</span>
        {/* <span className="title">تسجيل الدخول </span> */}
        <form >
          <input type="email" placeholder="ادخل البريد الالكتروني" />
          <input type="password" placeholder="ادخل كلمه السر " />
          <button>تسجيل الدخول</button>
        </form>
        {/* <p>You don't have an account? <a href="/register">Register</a></p> */}
      </div>
    </div>
    
    </>
)

}
export default Login