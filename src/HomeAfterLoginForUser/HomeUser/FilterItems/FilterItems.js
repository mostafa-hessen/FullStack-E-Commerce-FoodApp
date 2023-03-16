import "./FilterItems.css";
import filter1 from "../../../assets/menu-1.png";
import filter2 from "../../../assets/menu-2.png";
import filter3 from "../../../assets/menu-3.png";
import filter4 from "../../../assets/menu-4.png";
import { useDispatch } from "react-redux";
import { filter } from "../../../Component/Redux/action";

function FilterItems() {
  const dispatch = useDispatch();
  function sendFilterItem(element) {
    dispatch(filter(element));
  }
  return (
    <>
      <div className="Filter">
      <div className="filterItem "  onClick={()=>sendFilterItem("all")}>
          <img src={filter1} />
          <p>الكل</p>
        </div>
        <div className="filterItem "  onClick={()=>sendFilterItem("meet")}>
          <img src={filter1} />
          <p>لحمه</p>
        </div>
        <div className="filterItem" onClick={()=>sendFilterItem("chees")}>
          <img src={filter2} />
          <p>جبنه</p>
        </div>
        <div className="filterItem" onClick={()=>sendFilterItem("pizza")}>
          <img src={filter3} />
          <p>بيتزا</p>
        </div>
        <div className="filterItem" onClick={()=>sendFilterItem("chicken")}>
          <img src={filter4} />
          <p>فراخ</p>
        </div>
      </div>
    </>
  );
}
export default FilterItems;
