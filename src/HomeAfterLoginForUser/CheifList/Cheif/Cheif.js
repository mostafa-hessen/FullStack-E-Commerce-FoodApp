import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import shape from '../../../assets/shape.svg';
import team1 from '../../../assets/team1.jpg';
import team2 from '../../../assets/team2.jpg';
import team3 from '../../../assets/team3.jpg';
import team4 from '../../../assets/team4.jpg';
import team5 from '../../../assets/team5.jpg';
import team6 from '../../../assets/team6.jpg';
import './Cheif.css';
function Cheif() {
    const Cheifs = [
    {img:team1, name:'محمود الشافعي'}, 
    {img:team2, name:'أدم محروس'},
    {img:team3, name:'أمجد السيد'},
    {img:team4, name:'عائشة'},
    {img:team5, name:'ناديه'},
    {img:team6, name:'مريم'}
    ];
    return (
        <>
            <div className="sec-wp">
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='sec-title text-center mb-5'>
                                <h3 className="h3-title main-title" >أفضل الطباخين لدينا</h3>
                                <div className='sec-title-shape '>
                                    <img src={shape} className='line col-lg-2 col-md-4 col-sm-4'/>
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
                    Cheifs.map((CheifItem, index)=>{
                        return(
                    <div className="col-lg-4 col-md-6 col-sm-6"  key={index}>
                        <div className="team-item">
                            <div className="team-img">
                                <img src={CheifItem.img} alt="Cheif Image"/>
                                <div className="team-rate">
                                    <a href="">  <i className="fa-solid fa-star" ></i></a>
                                    <a href="">  <i className="fa-solid fa-star" ></i></a>
                                    <a href=""> <i className="fa-solid fa-star" ></i></a>
                                    <a href=""> <i className="fa-solid fa-star" ></i></a>
                                    <a href=""> <i className="fa-solid fa-star" ></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                            <Link to={`/HomeUser/ChiefList/Cheif/${index}`} style={{textDecoration:'none'}}>
                                <h2>{CheifItem.name}</h2>   
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