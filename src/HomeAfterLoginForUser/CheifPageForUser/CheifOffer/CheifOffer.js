import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import crip from "../../../assets/crip.jpg";
import burger from "../../../assets/burger.jpg";
import pizza from "../../../assets/pizza.jpg";
import './CheifOffer.css'
export default function CheifOffer() {
    const Offers = [
        {img:crip, offer:'أى ٢ كريب بالطعم إللى تحبه ب٤٥ فقط  العرض متاح بكره بس'},
        {img:burger, offer:'برجر و شاورما كيزر وربع فرخة مشوية ده لزوم الدلع ب٤٥ فقط'},
        {img:pizza, offer:'أطلب ٢ بيتزا كبار ب١٢٠  وليك بيتزا كبيره هديه العرض متاح لمدة إسبوع'}
    ]
    return (
        <div dir="rtl" className="container justify-content-center rounded-5 mt-5 p-4" style={{ backgroundColor: '#dce6d5' }}>
            <div className="row" >
                <div className="col-lg-2 me-lg-4 mx-sm-auto mt-4 mb-4 col-sm-12 col-md-12">
                    <h3>عروضنا</h3>
                </div>
            </div>
            <CardGroup>
            {
            Offers.map((item, index)=>{
                return(
                <Card key={index}  className=" mb-4 position-relative rounded-2 mx-2 offer-card">
                    <Card.Img variant="top" src={item.img} className='rounded-2 offer-img'/>
                    <Card.Body>
                        <Card.Text style={{textAlign:'right'}}>
                          {item.offer}
                       </Card.Text>
                       <Button className='btnCart' style={{ backgroundColor:'#7e8e72', borderColor:'#6e7c63' }}><i class="fa-solid fa-cart-shopping" style={{color:'#fff'}}></i></Button>
                    </Card.Body>
                </Card>
                )
            })
            }
            </CardGroup>
        </div>
    )
}
