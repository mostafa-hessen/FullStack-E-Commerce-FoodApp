import "./Navbar.css";
import Delivery from "../Delivery/Delivery";
function NavbarForUser() {
  return (
    <>
      <nav className="d-flex flex-column justify-content-between">
        <div>
          <div class="image">
            <img src="https://via.placeholder.com/50/09f/fff.png" />
          </div>
          <h4 className="text-center">سهيله حماده</h4>

          <ul class="ul">
          <li>
              <i class="fa-solid fa-house icon"></i> <span>الرئيسيه</span>
            </li>
            <li>
              <i class="fa-regular fa-heart icon"></i> <span>المفضله</span>
            </li>
            <li>
              <i class="fa-solid fa-cart-shopping icon"></i> <span>السله</span>
            </li>
            <li>
              <i class="fa-solid fa-utensils icon"></i> <span>الشيف</span>
            </li>
          </ul>
        </div>
        <Delivery />
      </nav>
    </>
  );
}
export default NavbarForUser;
