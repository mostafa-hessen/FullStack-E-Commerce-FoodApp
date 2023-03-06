import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddToFav from "../../HomeAfterLoginForUser/AddToFav/AddToFav";
import Basket from "../../HomeAfterLoginForUser/Basket/BasketComponent";
import CheifList from "../../HomeAfterLoginForUser/CheifList/CheifList";
import CheifPage from "../../HomeAfterLoginForUser/CheifPageForUser/CheifPage";
import Details from "../../HomeAfterLoginForUser/Details/Details";
import Home from "../../HomeAfterLoginForUser/HomeUser/Home/Home";
import FoodDetailsCooker from "../../HomeForCookerAfterLogin/Menu/CooKerCard/FoodDetailsCooker/FoodDetailsCooker";
function UserRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/HomeUser/" component={Home}/>
                
                <Route exact path="/HomeUser/Home"  component={Home}/>
                <Route exact path="/HomeUser/Home/useFoodDetailes/:id" component={FoodDetailsCooker}/>
                <Route exact path="/HomeUser/ChiefList" component={CheifList}/>

                <Route exact path="/HomeUser/ChiefList/Cheif/:id" component={CheifPage}/>

                <Route exact path="/HomeUser/ChiefList/Cheif/details/:id" component={Details}/>

                <Route exact path="/HomeUser/AddToFav" component={AddToFav}/>

                <Route exact path="/HomeUser/Cart" component={Basket}/>
            </Switch>
        </BrowserRouter>
    )
}
export default UserRoutes;