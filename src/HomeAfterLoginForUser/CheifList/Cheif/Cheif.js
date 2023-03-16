import { Link } from 'react-router-dom';
import shape from '../../../assets/shape.svg';
import { collection, query, onSnapshot } from 'firebase/firestore';
import './Cheif.css';
import { db } from '../../../firebase';
import { useEffect, useState } from 'react';
import { orderBy } from "firebase/firestore"; 

function Cheif() {
    const [cookers, setCookers] = useState([]);

    useEffect(() => {
    const q = query(collection(db, "cookers"), orderBy("registerTime", "desc"));
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCookers(data);
      })

    }, [])

    console.log(cookers,"data")

    return (
        <>
            <div className="sec-wp">
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='sec-title text-center mb-5'>
                                <h3 className="h3-title main-title" >أفضل الطباخين لدينا</h3>
                                <div className='sec-title-shape '>
                                    {/* <img src={shape} className='line col-lg-2 col-md-4 col-sm-4'/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
            <div className="container">
                <div className="row">
                    {
                   cookers.map((CheifItem, index)=>{
                        return(
                    <div className="col-lg-4 col-md-6 col-sm-6"  key={index}>
                        <div className="team-item">
                            <div className="team-img">
                                {/* <img src={CheifItem.photo} alt="Cheif Image"/> */}
                                <div style={{height:"250px",width:"100%",overflow:"hidden"}}>
                                <img src={CheifItem.photo} alt="Cheif Image" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>
                                </div>
                                <div className="team-rate">
                                    <a href="">  <i className="fa-solid fa-star" ></i></a>
                                    <a href="">  <i className="fa-solid fa-star" ></i></a>
                                    <a href=""> <i className="fa-solid fa-star" ></i></a>
                                    <a href=""> <i className="fa-solid fa-star" ></i></a>
                                    <a href=""> <i className="fa-solid fa-star" ></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                            <Link to={`/HomeUser/ChiefList/Cheif/${CheifItem.userid}`} style={{textDecoration:'none',color:"black",wordBreak:"break-word",fontWeight:"normal"}}>
                                <h2>{CheifItem.fullName}</h2>   
                            </Link>
                            </div>
                        </div>
                    </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Cheif;