import React, { useState } from "react";
import CheifList from "../../../HomeAfterLoginForUser/CheifList/CheifList";
import "./AddFood.css";
import FoodForm from "./FoodForm/FoodForm";
function AddFood() {
  const [active, setActive] = useState('')
  const removeActive=()=>{
    setActive("h")
    console.log('hjjhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
  }
  return (
    <div className={`addFood mt-5 border d-flex align-items-center flex-column ${active}`}  >
      <header  onClick={()=>setActive('active')} className=" d-flex">
        <h4>إضافه اكله</h4>
        <div className="icon">
          <lord-icon
            src="https://cdn.lordicon.com/mecwbjnp.json"
            trigger="loop"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
        </div>
      </header>
      <section className={`foodForm ${active}`}>
        <button className="btn btn-danger mb-2" onClick={()=>removeActive()}>X</button>
        <FoodForm clickFun={removeActive}    />
      </section>


    


    </div>
  );
}

export default AddFood;
