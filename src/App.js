
import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";


import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import SignupPage from "./LoginSignupPopUp/SignupPage";
function App() {
  return (
    <div className="App">
        {/* <HomeAfterLoginForUser/> */}
        
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Homebeforelogin />
          </Route>


          <Route path="/HomeUser">
            <HomeAfterLoginForUser />
          </Route>

       
          <Route path="/HomeCooker">
            <HomeForCookerAfterLogin />
          </Route>

          <Route path="/SignupPage">
           <SignupPage/>
          </Route>
          
           
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
