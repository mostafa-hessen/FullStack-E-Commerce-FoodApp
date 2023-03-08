

import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";
//import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import SignPage from "./LoginSignupPopUp/SignPage";
import React, { useEffect } from "react";
//import Login from "./LoginSignupPopUp/tab/Login/Login";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";


/* 
const fakeAuth={
  isAuthenticated:false,
  authenticate(cb){
    this.isAuthenticated=true
    setTimeout(cb,100)
  },
  signout(cb){
    this.isAuthenticated=false
    setTimeout(cb,100)
  }
 } 
 function PrivatRoute({children,...rest}){
  return(
    <Route {...rest} 
    render={()=>{
      return fakeAuth.isAuthenticated === true
      ? children 
      :<Redirect to='/'></Redirect>
    }}
    />
   /*    {children}
    </Route> 
  )
   }


   function Log(){
    const [redirectToReferrer,
      setRedirecteToReferrer]=
      React.useState(false)

      const login =()=>{
        fakeAuth.authenticate(()=>{
          setRedirecteToReferrer(true)
        })
      }
if(redirectToReferrer === true){
  return <Redirect to='/HomeCooker'></Redirect>
}
 return(<>
 <Login log={login}></Login>
 </>)
   } */
function  App() {
  //let authFromSessionUser = setTimeout(sessionStorage.getItem('authorizeduser')?JSON.parse(sessionStorage.getItem('authorizeduser')):false,400)
 // let authFromSessionCooker = setTimeout(sessionStorage.getItem('authorizedcook')?JSON.parse(sessionStorage.getItem('authorizedcook')):false,400)
 

 return (
    <div className="App">
    <BrowserRouter>
    <AuthProvider>
      <Switch>
          <Route exact path="/">
            <Homebeforelogin />
          </Route>

          {/* <Route path="/HomeUser" >
          <HomeAfterLoginForUser  authorized={setTimeout(sessionStorage.getItem('authorizeduser')?JSON.parse(sessionStorage.getItem('authorizeduser')):false,400)}/>
          </Route> */}

         <PrivateRoute path="/HomeCooker">
            <HomeForCookerAfterLogin/>
         </PrivateRoute>

          <Route path="/SignPage">
           <SignPage/>
          </Route>
          
        </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}
export default App;


//authorized={setTimeout(sessionStorage.getItem('authorizedcook')?JSON.parse(sessionStorage.getItem('authorizedcook')):false,400)} 