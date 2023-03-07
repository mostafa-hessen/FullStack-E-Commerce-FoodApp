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
          <ul class="ul">
            <li>
              <a href="/HomeUser/Home" className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
              <i class="fa-solid fa-house icon"></i> <span>الرئيسية</span>
              </a>
            </li>
            <li>
              <a href="/HomeUser/AddToFav" className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
              <i class="fa-regular fa-heart icon"></i> <span>المفضلة</span>
              </a>
            </li>
            <li>
              <a href="/HomeUser/Cart" className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
              <i class="fa-solid fa-cart-shopping icon"></i> <span>سلة التسوق</span>
              </a>
            </li>
            <li>
              <a href="/HomeUser/ChiefList" className="d-flex align-items-center" style={{textDecoration:'none', color:'#000'}}>
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
