import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import PrivateRoute1 from "./PrivateRout1";
import PrivateRoute2 from "./PrivateRout2";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function  App() {
 
  return (
    <div className="App">
   
    <BrowserRouter>
  {/*   <AuthProvider> */}
  <ToastContainer />

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