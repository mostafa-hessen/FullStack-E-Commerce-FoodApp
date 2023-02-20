import React,{useState} from "react";
import theSvg from './circles.svg'
import "./ResponsiveNav.css";
function ResponsiveNav() {
    const [open, setopen] = useState('')
    const [fade, setfade] = useState('')
    const fadeNav=()=>{
        setopen('open')
        setfade('fade')
    }

    const UnfadeNav=()=>{
        setopen('')
        setfade('')
    }
  return (
    <>
      <nav className="d-lg-none">

        <div className="hamburger" onMouseEnter={()=>fadeNav()}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>



        <ul className={`nav-links ${open}`}>
            <div className="closeIcon"
            
            onMouseEnter={()=>UnfadeNav()}>X</div>
          <li className={`${fade}`}>
            <a href="#">About</a>
          </li >
          <li className={`${fade}`}>
            <a href="#">Contact</a>
          </li>
          <li className={`${fade}`}>
            <a href="#">Projects</a>
          </li>
        </ul>


      </nav>


    </>
  );
}

export default ResponsiveNav;
