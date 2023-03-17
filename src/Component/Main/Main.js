import React from "react";
// import ResponsiveNav from "./ResponsiveNav/ResponsiveNav";
import "./Main.css";
import NavbarForUser from "../../HomeAfterLoginForUser//HomeUser/Navbar/NavbarForUser";
import NavbarForCooker from "../../HomeForCookerAfterLogin/NavBarForCooker/NavBarForCooker";
import UserRoutes from "../InnerRoutes/UserRoutes";
import CookerRoutes from "../InnerRoutes/CookerRoutes";
import EditChiefPersonalForm from "../../HomeForCookerAfterLogin/shiefBage/EditChiefPersonalForm/EditChiefPersonalForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../HomeBeforeLogin/Homepage/Home";
import ResponsiveNavUser from "./ResponsiveNav/ResponsiveNavUser";
import ResponsiveNavCooker from "./ResponsiveNav/ResponsiveNavCooker";
import Homebeforelogin from "../../HomeBeforeLogin/Homebeforelogin";

function Main(props) {
  return (
    <div
      className="row homNavContainer  rounded-3 "
      style={{ backgroundColor: "rgb(155, 193, 155)" }}
    >

      
          <div
            className="col-12 col-lg-10 py-3  px-2 homeContainer rounded-4"
            style={{ backgroundColor: "#fff", overflowY: "scroll" }}
          >
            {props.kindOfuser == "user" ? <ResponsiveNavUser />:  <ResponsiveNavCooker />}
            {props.kindOfuser == "user" ? <UserRoutes /> : <CookerRoutes />}
          </div>
        {/* </Switch> */}
        <div className="col-2 d-none d-lg-flex">
          {props.kindOfuser == "user" ? <NavbarForUser /> : <NavbarForCooker />}
        </div>
   {/* </BrowserRouter> */}
    </div>
  );
}

export default Main;















