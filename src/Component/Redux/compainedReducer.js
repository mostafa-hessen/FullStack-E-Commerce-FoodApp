import { combineReducers } from "redux";
// import { productsReducer } from "./productsReducer";
import { FilterItem, AuthStatuesForUser,AuthStatuesForCooker,TotalPrice,MyCart ,MYORDERS} from "./reducer";
const reducers = combineReducers({
    FilterItem,
    AuthStatuesForUser,
    AuthStatuesForCooker,
    TotalPrice,
    MyCart,
    MYORDERS
 
//   product: selectedProductsReducer,
});
export default reducers;