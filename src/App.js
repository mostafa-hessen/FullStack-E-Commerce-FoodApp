import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import PrivateRoute1 from "./PrivateRout1";
import PrivateRoute2 from "./PrivateRout2";

function  App() {
 
  return (
    <div className="App">
   
    <BrowserRouter>
  {/*   <AuthProvider> */}
      <Switch>
          <Route exact path="/" component={() => <Homebeforelogin /> }/>

          <PrivateRoute1  path="/HomeUser" component={HomeAfterLoginForUser}/> 

          <PrivateRoute2  path="/HomeCooker" component={HomeForCookerAfterLogin}/>
          
        </Switch>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  )
}
export default App;