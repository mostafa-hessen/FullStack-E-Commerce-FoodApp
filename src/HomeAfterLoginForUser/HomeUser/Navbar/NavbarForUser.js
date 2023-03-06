import "./Navbar.css";
import Delivery from "../Delivery/Delivery";
import { useHistory } from "react-router-dom";

function Navbar() {
 // let history = useHistory();

  return (
      <nav className="d-flex flex-column justify-content-between">
        <div>
          <div class="image">
            <img src="https://via.placeholder.com/50/09f/fff.png " />
          </div>
          <h4 className="text-center">سهيله حماده</h4>

        {/*  <ul class="ul">
            <li onClick={()=>{history.push('/HomeUser/Home')}}>
              <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
            </li>
            <li onClick={()=>{history.push('/HomeUser/AddToFav')}}>
              <i class="fa-regular fa-heart icon"></i> <span>المفضلة</span>
            </li>
            <li onClick={()=>{history.push('/HomeUser/Cart')}}>
              <i class="fa-solid fa-cart-shopping icon"></i> <span>سلة التسوق</span>
            </li>
            <li onClick={()=>{history.push('/HomeUser/ChiefList')}}>
              <i class="fa-solid fa-utensils icon"></i> <span>الطباخين</span>
            </li>
          </ul>*/}
          <ul class="ul">
            <li>
              <a href="/HomeUser/Home">
              <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
              </a>
            </li>
            <li>
              <a href="/HomeUser/AddToFav">
              <i class="fa-regular fa-heart icon"></i> <span>المفضلة</span>
              </a>
            </li>
            <li>
              <a href="/HomeUser/Cart">
              <i class="fa-solid fa-cart-shopping icon"></i> <span>سلة التسوق</span>
              </a>
            </li>
            <li>
              <a href="/HomeUser/ChiefList">
              <i class="fa-solid fa-utensils icon"></i> <span>الطباخين</span>
                </a>
            </li>
            </ul>

        </div>
        <Delivery />
      </nav>
  );
}
export default Navbar;
