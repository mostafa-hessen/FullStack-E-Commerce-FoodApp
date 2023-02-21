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
export default function CheifMenu() {
    const food1 = [
        {img:chicken, offer:'فرخة كيلو ونصف مشويه علي الفحم بسعر ١٢٠  جنية'},
        {img:potatoKofta, offer:'نصف كيلو كفتة بطاطس بالجبنه إللي تختارها بسعر ٤٠  جنية'},
        {img:pizza, offer:'بيتزا الحجم الكبير والحشو علي زوقك بسعر ٦٠ جنية'}
    ]
    const food2 = [
        {img:hamam, offer:'حمام محمر بالسمنة البلدي محشي فريك سعر الجوز ١٢٠ جنيه'},
        {img:mahshi, offer:'محشي ورق عنب والتفاصيل عليك سعر الكيلو ٥٠ جنيه'},
        {img:fish, offer:'سمك مقلي معاه طحنة وسلطة سعر الكيلو ٦٠ جنيه'}
    ]

    return (
        <div dir="rtl" className="container justify-content-center rounded-5 mt-5 p-4" style={{ backgroundColor: '#dce6d5' }}>
            <div className="row" >
                <div className="col-lg-3 me-lg-4 mx-sm-auto mt-4 mb-4 col-sm-12 col-md-12">
                    <h3>الأطعمة المتاحة</h3>
                </div>
            </div>
            <CardGroup>
            {
            food1.map((item, index)=>{
                return(
                <Card key={index}  className=" mb-4 position-relative rounded-2 mx-2 card-item">
                    <Card.Img variant="top" src={item.img} className='rounded-2 menu-img'/>
                    <Card.Body>
                        <Card.Text  style={{textAlign:'right'}}>
                          {item.offer}
                       </Card.Text>
                       <a href='' className='open'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:'#4f5b47'}}></i></a>
                       <Button className='btnCar' style={{ backgroundColor:'#7e8e72', borderColor:'#6e7c63' }}><i class="fa-solid fa-cart-shopping" style={{color:'#fff'}}></i></Button>
                       <a href='' className='star'><i className="fa-solid fa-star"></i></a>
                    </Card.Body>
                </Card>
                )
            })
            }
            </CardGroup>

            <CardGroup>
            {
            food2.map((item, index)=>{
                return(
                <Card key={index}  className=" mb-4 position-relative rounded-2 mx-2 card-item">
                    <Card.Img variant="top" src={item.img} className='rounded-2 menu-img'/>
                    <Card.Body>
                        <Card.Text style={{textAlign:'right'}}>
                          {item.offer}
                       </Card.Text>
                       <a href='' className='open'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:'#4f5b47'}}></i></a>
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
