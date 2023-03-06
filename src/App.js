

import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";
//import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import SignPage from "./LoginSignupPopUp/SignPage";
import { useContext, useEffect } from "react";

import { Redirect } from 'react-router-dom'
import { AuthContext} from "./contexts/AuthContext";



function  App() {
  //let authFromSessionUser = setTimeout(sessionStorage.getItem('authorizeduser')?JSON.parse(sessionStorage.getItem('authorizeduser')):false,400)
 // let authFromSessionCooker = setTimeout(sessionStorage.getItem('authorizedcook')?JSON.parse(sessionStorage.getItem('authorizedcook')):false,400)

const { currentUser } = useContext(AuthContext);

 const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Redirect to = '/'/>;
  }

  return children
}; 

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={() =>
            <Homebeforelogin />
          }/>

          <Route path="/HomeUser" component={() =>
          <ProtectedRoute>
          <HomeAfterLoginForUser/>
          </ProtectedRoute>
          }/>

         <Route path="/HomeCooker" component={() =>
         <ProtectedRoute>
             <HomeForCookerAfterLogin />
          </ProtectedRoute>
          }/>

         {/* <Route path="/SignPage">
           <SignPage/>
        </Route>*/}
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;