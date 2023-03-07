import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import chicken from "../../../assets/chicken.jpg";
import potatoKofta from "../../../assets/potatoKofta.jpg";
import pizza from "../../../assets/pizza.jpg";
import mahshi from "../../../assets/mahshi.jpg";
import hamam from "../../../assets/hamam.jpg";
import fish from "../../../assets/fish.jpg";
import './CheifMenu.css'
import { Link } from 'react-router-dom';
import {onSnapshot, collection, query, where} from 'firebase/firestore';
import { db } from '../../../firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import { orderBy } from "firebase/firestore"; 

export default function CheifMenu({id}) {

    const [cookerFood, setCookerFood] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "foods"), where("userid", "==", `${id}`));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCookerFood(data);
            
          })
    }, [])
    console.log(cookerFood)
    return (
        <div dir="rtl" className="container justify-content-center rounded-5 mt-5 p-4" style={{ backgroundColor: '#dce6d5' }}>
            <div className="row" >
                <div className="col-12 col-md-6 col-lg-3 me-lg-4 mx-sm-auto mt-4 mb-4">
                    <h3>الأطعمة المتاحة</h3>
                </div>
            </div>
            <CardGroup>
            {
            cookerFood.map((item, index)=>{
                return(
                <Card key={index}  className=" mb-4 position-relative rounded-2 mx-2 card-item">
                    <Card.Img variant="top" src={item?.foodImg[0]} className='rounded-2 menu-img'/>
                    <Card.Body>
                    <Card.Text  style={{textAlign:'right'}}>
                          {item?.foodName}
                       </Card.Text>
                        <Card.Text  style={{textAlign:'right'}}>
                          {item?.foodDiscription}
                       </Card.Text>
                       <Link to={`/HomeUser/ChiefList/Cheif/details/${item?.id}`} style={{textDecoration:'none'}} className='open'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:'#4f5b47'}}></i></Link>
                       <Button className='btnCar' style={{ backgroundColor:'#7e8e72', borderColor:'#6e7c63' }}><i class="fa-solid fa-cart-shopping" style={{color:'#fff'}}></i></Button>
                       <a href='' className='star'><i className="fa-solid fa-star"></i></a>
                    </Card.Body>
                </Card>
                )
            })
            }
            </CardGroup>
        </div>
    )
}
