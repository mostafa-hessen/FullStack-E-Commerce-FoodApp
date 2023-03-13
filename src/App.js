

import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// import Main from "./Component/Main/Main";
//import logo from './logo.svg';
import './App.css';
import Homebeforelogin from './HomeBeforeLogin/Homebeforelogin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeForCookerAfterLogin from "./HomeForCookerAfterLogin/HomeForCookerAfterLogin";
import SignPage from "./LoginSignupPopUp/SignPage";
import PrivateRoute1 from "./PrivateRout1";
import PrivateRoute2 from "./PrivateRout2";
// import { useContext, useEffect } from "react";

// import { Redirect } from 'react-router-dom'
// import { AuthContext} from "./contexts/AuthContext";

// import PrivateRoute from './PrivateRout'

function  App() {
 
  return (
    <div className="App">
   
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={() => <Homebeforelogin /> }/>

          <PrivateRoute1  path="/HomeUser" component={HomeAfterLoginForUser}/> 

          <PrivateRoute2  path="/HomeCooker" component={HomeForCookerAfterLogin}/>

{/* 
         <Route path="/SignUp">
           <SignPage/>
        </Route> */}
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;



// import React from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   Redirect
// } from 'react-router-dom';
// import decode from 'jwt-decode';
// import SignPage from "./LoginSignupPopUp/SignPage";

// // import Home from './Home';
// // import Register from './Register';
// // import Login from './Login';
// // import { Redirect } from 'react-router-dom';

// // import PrivateComponent1 from './PrivateComponent1';
// // import PrivateComponent2 from './PrivateComponent2';
// import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";
// // 

// const isAuthenticated = () => {
//   const token = localStorage.getItem('token');
//   const refreshToken = localStorage.getItem('refreshToken');
//   try {
//     decode(token);
//     decode(refreshToken);
//     console.log([decode(token),decode(refreshToken)])
//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// export default function  App(){

//   return ( <BrowserRouter>
//     <Switch>
//       {/* <Route path="/" exact component={}/> */}
//       <Route path="/HomeUser" component={() => // <ProtectedRoute>
//             <HomeAfterLoginForUser/>
//           // </ProtectedRoute>
//           }/>
//       {/* <Route path="/register" exact component={Register}/> */}
//       {/* <Route path="/login" exact component={Login}/> */}
//       <Route path="/SignPage">
//             <SignPage/>
//        </Route>
//       {/* <PrivateRoute path="/private1/:id?" exact component={PrivateComponent1}/>
//       <PrivateRoute path="/private2" exact component={PrivateComponent2}/> */}
//     </Switch>
//   </BrowserRouter>
//   )
// }  
