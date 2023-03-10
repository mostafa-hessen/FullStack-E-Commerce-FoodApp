import { BrowserRouter, Route, Switch } from "react-router-dom";
import FoodDetailsCooker from "../../HomeForCookerAfterLogin/Menu/CooKerCard/FoodDetailsCooker/FoodDetailsCooker";
import Menue from "../../HomeForCookerAfterLogin/Menu/Menue";
import Orders from "../../HomeForCookerAfterLogin/Orders/Orders";
import ChiefHome from "../../HomeForCookerAfterLogin/shiefBage/chiefHome";
function CookerRoutes() {
    return (
     <>
                <Route exact path="/HomeCooker/" component={ChiefHome}/>

                <Route exact path="/HomeCooker/Home" component={ChiefHome}/>

                <Route exact path="/HomeCooker/Menue" component={Menue}/>

                <Route exact path="/HomeCooker/Orders" component={Orders}/>
                <Route exact path="/HomeCooker/FoodDetailsCooker/:id" component={FoodDetailsCooker}/>
                
        </>
    )
}
export default CookerRoutes;