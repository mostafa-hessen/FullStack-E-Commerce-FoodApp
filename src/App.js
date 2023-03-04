

import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";

import React from "react"
import Signup from "./Component/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Component/Dashboard"

import Login from "./Component/Login"
import PrivateRoute from "./Component/PrivateRoute"
import ForgotPassword from "./Component/ForgotPassword"
import UpdateProfile from "./Component/UpdateProfile"

import './App.css';
import BasketHome from "./Component/Basket/Home";
import Main from "./Component/Main/Main";

function App() {
  return (

      
        <Router>
          <AuthProvider>
            <Switch>
           
              <PrivateRoute exact path="/HomeAfterLoginForUser" component={HomeAfterLoginForUser} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/" component={Main} />
              {/* <Route path="/" component={Login} /> */}
             
            </Switch>
          </AuthProvider>
        </Router>
  )
  }

export default App
