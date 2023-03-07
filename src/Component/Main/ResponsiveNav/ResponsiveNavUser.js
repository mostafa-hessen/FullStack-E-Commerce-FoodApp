import React, { useState } from "react";
import theSvg from "./circles.svg";

import homeImg from "../../..//assets/animatedIcon/63-home-outline.gif";
import favouriteImg from "../../../assets/animatedIcon/20-love-heart-outline (1).gif";
import signOuttImg from "../../../assets/animatedIcon/1725-exit-sign-outline.gif";
import cartImg from "../../../assets/animatedIcon/146-basket-trolley-shopping-card-outline (2).gif";
import avatarImg from "../../../assets/animatedIcon/21-avatar-outline.gif";
import avatarChefImg from "../../../assets/animatedIcon/268-avatar-man-outline.gif";
import "./ResponsiveNav.css";
import { Link, useHistory } from "react-router-dom";
function ResponsiveNavUser() {
  const [open, setopen] = useState("");
  const [fade, setfade] = useState("");
  const fadeNav = () => {
    setopen("open");
    setfade("fade");
  };
  const navigate=useHistory()

  const UnfadeNav = () => {
    setopen("");
    setfade("");
  };
  const logOut=()=>{
    
    navigate.push('/')
    // localStorage.removeItem("user")
  }
  return (
    <>
      <nav className="d-lg-none mt-2">
        <div className="hamburger" onClick={() => fadeNav()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className={`nav-links ${open}`}>
          <div className="closeIcon" onClick={() => UnfadeNav()}>
            X
          </div>

          <li className={`${fade}`}>
            <Link to="/HomeUser/Home" onClick={() => UnfadeNav()}>
              الرئيسيه
            </Link>
            <img src={homeImg} />
          </li>
          <li className={`${fade}`}>
            <Link onClick={() => UnfadeNav()} to="/HomeUser/AddToFav">
              المفضله
            </Link>
            <img src={favouriteImg} />
          </li>
          <li className={`${fade}`}>
            <Link onClick={() => UnfadeNav()} to="/HomeUser/Cart">
              السله
            </Link>
            <img src={cartImg} />
          </li>
          <li className={`${fade}`}>
            <Link to="/HomeUser/ChiefList" onClick={() => UnfadeNav()}>
              الشيف
            </Link>
            <img src={avatarChefImg} />
          </li>
          <li className={`${fade}`}>
            <Link onClick={() => UnfadeNav()} to="#">
              صفحتي
            </Link>
            <img src={avatarImg} />
          </li>

          <li className={`${fade}`}>
            <Link onClick={() =>logOut()}> الخروج</Link>
            <img src={signOuttImg} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ResponsiveNavUser;
