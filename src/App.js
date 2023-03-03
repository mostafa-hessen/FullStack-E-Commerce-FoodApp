
import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";
//import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import SignPage from "./LoginSignupPopUp/SignPage";
import { useEffect } from "react";
function  App() {
  //let authFromSessionUser = setTimeout(sessionStorage.getItem('authorizeduser')?JSON.parse(sessionStorage.getItem('authorizeduser')):false,400)
 // let authFromSessionCooker = setTimeout(sessionStorage.getItem('authorizedcook')?JSON.parse(sessionStorage.getItem('authorizedcook')):false,400)
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Homebeforelogin />
          </Route>

          <Route path="/HomeUser" >
          <HomeAfterLoginForUser  authorized={setTimeout(sessionStorage.getItem('authorizeduser')?JSON.parse(sessionStorage.getItem('authorizeduser')):false,400)}/>
          </Route>

         <Route path="/HomeCooker">
            <HomeForCookerAfterLogin  authorized={setTimeout(sessionStorage.getItem('authorizedcook')?JSON.parse(sessionStorage.getItem('authorizedcook')):false,400)}  />
         </Route>

          <Route path="/SignPage">
           <SignPage/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;