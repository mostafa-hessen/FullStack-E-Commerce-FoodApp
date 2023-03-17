import { useSelector } from "react-redux";
import { Redirect,Route } from "react-router-dom";

const PrivateRoute2 =(props)=>{
    const AuthStatues=useSelector(state=> state.AuthStatuesForCooker.cookerStatues)
const mysessionStorageForCooker= sessionStorage.getItem("authCooker")

    console.log(mysessionStorageForCooker);
if(AuthStatues||mysessionStorageForCooker){
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


export default PrivateRoute2