import React from "react";
import { Redirect } from "react-router-dom";
import Bestfood from "../HomeUser/Bestfood/Bestfood";
import Header from "../HomeUser/Header/Header";
import Offer from "../HomeUser/Offer/Offer";
import Cheif from "./Cheif/Cheif";

function CheifList({authorized}) {
  if(!authorized){
    return <Redirect to = '/SignPage'/>
  }

  return (
      
      <div className="row " >

      <div className="col-lg-4 d-none d-lg-block"  >
        <Offer/>
        <Bestfood className="d-none"/>
      </div>
      <div className="col-12 col-lg-8 p-4"   >
        <Header hello='طباخينا' helloCon='👩‍🍳المتميزين'/>
        <Cheif />
      </div>
    </div>
  );
}

export default CheifList;
