import { useSelector } from "react-redux";
import { Redirect,Route } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

const PrivateRoute1 =(props)=>{

 
 
  const [show, setShow] = useState(true);
    
  const AuthStatues=useSelector(state=> state.AuthStatuesForUser.userStatues) //true or false
  const mysessionStorageForUSer= sessionStorage.getItem("authUser") 

    console.log(mysessionStorageForUSer);

     
  if(AuthStatues||mysessionStorageForUSer){
    return <Route {...props}/> 

}

return (
<>
<Redirect to={"/"}/>
{/* {
setTimeout(()=>alert("سجل الدخول اولا"),1000)
} */}

</>)

}


export default PrivateRoute1