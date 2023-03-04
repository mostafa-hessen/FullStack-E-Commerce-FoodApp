import OrderMeal from '../../assets/order.jpg';
import './OrdersStyle.css';
function Order(props) {
    return (
        <div className='row'>
            <div className={`col-12 col-lg-9 align-self-center mx-auto my-4 rounded-4 py-3 card-style ${props.var[props.index]} `} onClick={() => props.action(props.index)}>
                <img src={OrderMeal} alt="" className='orderImg' />
                <div className='txt-in me-4'>
                    <h4>طلب من {props.data.name}</h4>
                    <h6 style={{ color: '#6b6e71' }}>إضغط لمعرفة تفاصيل الطلب</h6>
                </div>

                <div className='mt-4'>
                    {
                        props.data.details.map((item, id) => {
                            return (
                                <div className=" col-11 align-self-center mx-auto my-3 rounded-4 py-3 box-style" key={id}>
                                    <div className='col-12 my-3 d-flex  justify-content-evenly'>
                                        <img src={item.mealImg} alt="" className='mealImg' />
                                        <div className='order-item '>
                                            <h5>{item.food}</h5>
                                            <h6 style={{ color: '#6b6e71' }}>{item.note}</h6>
                                        </div>

                                        <div className='order-item '>
                                            <h5>العدد: {item.count}</h5>
                                        </div>

                                        <div className='order-item'>
                                            <h5>الحجم: {item.size}</h5>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    <div className='col-7 d-flex justify-content-evenly mx-auto'>
                        <h6 style={{ display: 'inline-block' }} className='mt-2'>التسليم: {props.data.time}</h6>
                        <i class="fa-solid fa-check choose" style={{ color: '#6cad6c', fontSize: 32 }}></i>
                        <i class="fa-solid fa-xmark choose" style={{ color: '#e45248', fontSize: 32 }}></i>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Order;