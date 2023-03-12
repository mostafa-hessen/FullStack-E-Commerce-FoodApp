import { combineReducers } from "redux";
// import { productsReducer } from "./productsReducer";
import { FilterItem, AuthStatuesForUser,AuthStatuesForCooker } from "./reducer";
const reducers = combineReducers({
    FilterItem,
    AuthStatuesForUser,
    AuthStatuesForCooker,
 
//   product: selectedProductsReducer,
});
export default reducers;