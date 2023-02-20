import React, { useState } from "react";
import theSvg from "./circles.svg";

import homeImg from '../../..//assets/animatedIcon/63-home-outline.gif'
import favouriteImg from '../../../assets/animatedIcon/20-love-heart-outline (1).gif'
import signOuttImg from '../../../assets/animatedIcon/1725-exit-sign-outline.gif'
import cartImg from '../../../assets/animatedIcon/146-basket-trolley-shopping-card-outline (2).gif'
import avatarImg from '../../../assets/animatedIcon/21-avatar-outline.gif'
import avatarChefImg from '../../../assets/animatedIcon/268-avatar-man-outline.gif'
import "./ResponsiveNav.css";
function ResponsiveNav() {
  const [open, setopen] = useState("");
  const [fade, setfade] = useState("");
  const fadeNav = () => {
    setopen("open");
    setfade("fade");
  };

  const UnfadeNav = () => {
    setopen("");
    setfade("");
  };
  return (
    <>
      <nav className="d-lg-none mt-2">
        <div className="hamburger" onClick ={() => fadeNav()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className={`nav-links ${open}`}>
          <div className="closeIcon" onClick={() => UnfadeNav()}>
            X
          </div>

          <li className={`${fade}`}>
           
            <a href="#">الرئيسيه</a>
            <img
              src={homeImg}
            />
          
          </li>
          <li className={`${fade}`}>
            <a href="#">المفضله</a>
            <img
              src={favouriteImg}
            />
          </li>
          <li className={`${fade}`}>
            <a href="#">السله</a>
            <img
              src={cartImg}
            />
            
          </li>
          <li className={`${fade}`}>
            <a href="#">الشيف</a>
            <img
              src={avatarChefImg}
            />
          </li>
          <li className={`${fade}`}>
            <a href="#">صفحتي</a>
            <img
              src={avatarImg}
            />
            
          </li>

          <li className={`${fade}`}>
            <a href="#"> الخروج</a>
            <img
              src={signOuttImg}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ResponsiveNav;
