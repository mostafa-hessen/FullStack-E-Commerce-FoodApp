import React from "react";
import CheifList from "../../../HomeAfterLoginForUser/CheifList/CheifList";
import "./AddFood.css";
import FoodForm from "./FoodForm/FoodForm";
function AddFood() {
  return (
    <div className="addFood mt-5 border d-flex align-items-center flex-column">
      <header className=" d-flex">
        <h4>إضافه اكله</h4>
        <div className="icon">
          <lord-icon
            src="https://cdn.lordicon.com/mecwbjnp.json"
            trigger="loop"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
        </div>
      </header>
      <section className="foodForm">
        {/* <CheifList/> */}
        <FoodForm />
      </section>


    


    </div>
  );
}

export default AddFood;
