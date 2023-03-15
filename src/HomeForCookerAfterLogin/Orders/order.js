import OrderMeal from '../../assets/order.jpg';
import './OrdersStyle.css';
import OrderTime from './orderTime';
function Order(props) {
    return (
        <div className='row'>
            <div className={`col-12 col-lg-9 align-self-center mx-auto my-4 rounded-4 py-3 card-style ${props.var[props.index]} `} onClick={() => props.action(props.index)}>
                <img src={OrderMeal} alt="" className='orderImg' />
                <div className='txt-in me-4'>
                    <h4>طلب من {props.data?.userOrderName.split('@')[0]}</h4>
                    <h6 style={{ color: '#6b6e71' }}>إضغط لمعرفة تفاصيل الطلب</h6>
                </div>

                <div className='mt-4'>
                    
                       
                                <div className=" col-11 align-self-center mx-auto my-3 rounded-4 py-3 box-style">
                                    <div className='col-12 my-3 d-flex  justify-content-evenly'>
                                        <img src={props.data.foodImg[0]&&props.data.foodImg[0]} alt="" className='mealImg' />
                                        <div className='order-item '>
                                            <h5>{props.data?.foodName}</h5>
                                            {/* <h6 style={{ color: '#6b6e71' }}>{props.data.note}</h6> */}
                                        </div>

                                        <div className='order-item '>
                                            <h5>العدد: {props.data?.quantity}</h5>
                                        </div>

                                        <div className='order-item'>
                                            <h5>الحجم: {props.data?.choosenPrice}</h5>
                                        </div>

                                    </div>
                                </div>
                      
                        

                    <div className='col-7 d-flex justify-content-evenly mx-auto'>
                       {/* <h6 style={{ display: 'inline-block' }} className='mt-2'>التسليم: غداً بعد العصر</h6>*/}
                        <OrderTime order={props.data} index={props.index}/>
                      {/* <i class="fa-solid fa-xmark choose" style={{ color: '#e45248', fontSize: 32 }}></i>*/}
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Order;