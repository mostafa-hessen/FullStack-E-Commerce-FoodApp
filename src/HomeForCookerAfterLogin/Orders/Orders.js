import './OrdersStyle.css';
import chickenMeal from '../../assets/chicken meal.jpg';
import makronyKofta from '../../assets/makrony&kofta.jpg';
import cake from '../../assets/cake.png';
import potatoKofta from '../../assets/potatoKofta2.jpg';
import gulash from '../../assets/gulash.jpg';
import mahshiAnab from '../../assets/mahshiAnab.jpg';
import pashamel from '../../assets/pashamel.jpg';
import pea from '../../assets/pea.jpg';
import { useState } from 'react';
import Order from './order';
import { Redirect } from 'react-router-dom';
function Orders({authorized}) {

  const orders = [
    {
      name: 'علي محمد', meal: chickenMeal, time: '١بعد الظهر ٢/٢٥', details: [
        { food: 'مكرونه بشاميل', note: 'بدون إضافات', count: 1, size: 'وسط', mealImg: pashamel },
        { food: 'بسلة باللحمة', note: 'بدون إضافات ', count: 1, size: 'وسط', mealImg: pea }
      ]
    },
    {
      name: 'دعاء عوض', meal: makronyKofta, time: '٣ عصراً ٢/٢٧ ', details: [
        { food: 'مكرونه بالكفتة', note: 'إضافة ماشروم', count: 1, size: 'وسط', mealImg: makronyKofta },
        { food: 'كفتة بطاطس', note: 'إضافة جبنه رومي', count: 1, size: 'صغير', mealImg: potatoKofta }
      ]
    },
    {
      name: 'محمود توفيق', meal: potatoKofta, time: '٣ عصراً غداً', details: [
        { food: 'محشي ورق عنب', note: 'إضافة ليمون خفيف', count: 1, size: 'وسط', mealImg: mahshiAnab },
        { food: 'فراخ وأرز بسمتي', note: 'بدون إضافات', count: 1, size: 'عائلي', mealImg: chickenMeal }
      ]
    },
    {
      name: 'هدي مجدي', time: '٦ مساءاً ٢٩ /٢', details: [
        { food: 'كيكة الفراولة', note: 'سكر مظبوط', count: 1, size: 'عائلي', mealImg: cake },
        { food: 'جلاش حلو', note: 'بدون فسدق', count: 1, size: 'وسط', mealImg: gulash }
      ]
    }
  ]

  let activeOrder = ['', '', '', '']
  const [activeOrderState, setActiveOrderState] = useState(activeOrder)

  const changeActive = (status) => {
    activeOrder = ['', '', '', '']
    activeOrder[status]= 'orderActive'

    setActiveOrderState(activeOrder)
  }
  
  if(!authorized){
    return <Redirect to = '/SignPage'/>
  }

  return (
    <div dir="rtl" className="container justify-content-center my-5 rounded-3">
      <div className="row" >
        <div className="col-12 align-self-center mx-auto mt-2 mb-3">
          <h2>طلباتي <i className="fa-solid fa-clipboard" style={{ color: '#87a087' }}></i></h2>
        </div>
      </div>

      <div className='m-4'>
        {
          orders.map((order, idx) => {
            return (
              <Order data={order} index={idx} var={activeOrderState} action={changeActive} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders;