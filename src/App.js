
import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";


import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
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
          
           
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
