
import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";
//import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import SignPage from "./LoginSignupPopUp/SignPage";
function App() {
  let authFromSessionUser=sessionStorage.getItem('authorizeduser')?JSON.parse(sessionStorage.getItem('authorizeduser')):true

  console.log(authFromSessionUser);
  // let authFromSessionCooker=sessionStorage.getItem('authorizedcook')?JSON.parse(sessionStorage.getItem('authorizedcook')):false
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Homebeforelogin />
          </Route>

          <Route path="/HomeUser" >
            <HomeAfterLoginForUser authorized={authFromSessionUser} />
          </Route>

          <Route path="/HomeCooker">
            <HomeForCookerAfterLogin  authorized={false}  />
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