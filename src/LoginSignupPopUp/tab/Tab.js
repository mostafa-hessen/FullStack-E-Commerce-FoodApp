import React from 'react'
//import Login from './Login/Login'
import { useState } from "react";
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Tab.css'

export default function Tab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="containers">

                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                       تسجيل الدخول
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        إنشاء حساب
                    </button>
                   
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                       <Login/>
                       {/* <Signup/> */}

                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <Signup/>
                    </div>
                </div>
            </div>

        </>
    )
}
