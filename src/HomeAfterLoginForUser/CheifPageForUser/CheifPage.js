import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../HomeUser/Header/Header";
import AboutCheif from "./Aboutchief/Aboutchief";
import CheifMenu from "./CheifMenu/CheifMenu";
import CheifOffer from "./CheifOffer/CheifOffer";
import ClientReview from "./ClientReview/ClientReview";
import Workcheif from "./Workcheif/Workcheif";

function CheifPage({authorized}) {
  if(!authorized){
    return <Redirect to = '/SignPage'/>
  }
  return (      
      <div className="row " >
      <div className="col-12 col-lg-9 p-4 ms-auto me-auto">
        <Header hello='إعرف' helloCon='👩‍🍳طباخك'/>
        <Workcheif/>
        <AboutCheif/>
        <CheifOffer/>
        <CheifMenu/>
        <ClientReview/>
      </div>
    </div>
  );
}

export default CheifPage;
