import React from "react";
import { useParams } from "react-router-dom";
import Header from "../HomeUser/Header/Header";
import AboutCheif from "./Aboutchief/Aboutchief";
import CheifMenu from "./CheifMenu/CheifMenu";
import CheifOffer from "./CheifOffer/CheifOffer";
import ClientReview from "./ClientReview/ClientReview";
import Workcheif from "./Workcheif/Workcheif";
import { doc, onSnapshot} from 'firebase/firestore';
import { db } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";

function CheifPage() {
const { id } = useParams()
const [cookerInfo, setCookerInfo] = useState('')

useEffect(() => {
  const q = doc(db, "cookers", id);
  
  onSnapshot(q, (snapshot) => {
   console.log(snapshot.data(), "cooker info")
   setCookerInfo( snapshot.data() )
    })

},[])

  return (      
      <div className="row " >
      <div className="col-12 col-lg-9 p-4 ms-auto me-auto">
        <Header hello='إعرف' helloCon='👩‍🍳طباخك'/>
        <Workcheif data={cookerInfo}/>
        <AboutCheif data={cookerInfo}/>
        <CheifOffer data={cookerInfo}/>
        <CheifMenu id={id}/>
        <ClientReview data={cookerInfo}/>
      </div>
    </div>
  );
}

export default CheifPage;
