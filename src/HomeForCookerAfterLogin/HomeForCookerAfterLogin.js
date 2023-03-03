import React from "react";
import { Redirect } from "react-router-dom";
import Main from "../Component/Main/Main";
import "./HomeForCookerAfterLogin.css" 
function HomeForCookerAfterLogin({authrized}) {
  if(!authrized){
    return <Redirect to = '/SignPage'/>
  }

  return (
    <div className="HomeForCookerAfterLogin">
      <div className="container-fluid appContainer  ">
        <Main kindOfuser={"cooker"} />
      </div>
     </div>
  );
}

export default HomeForCookerAfterLogin;
