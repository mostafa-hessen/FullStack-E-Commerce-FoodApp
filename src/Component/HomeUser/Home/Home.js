import React from "react";
import Bestfood from "../Bestfood/Bestfood";
import FilterItems from "../FilterItems/FilterItems";
import FoodCard from "../FoodCard/FoodCard";

function Home() {
  return (
      
      <div className="row " >

      <div className="col-lg-4 d-none d-lg-block"  >
        <Bestfood className="d-none"/>
      </div>
      <div className="col-12 col-lg-8 p-4"   >
        <FilterItems  />
        <FoodCard />
      </div>
    </div>
  );
}

export default Home;
