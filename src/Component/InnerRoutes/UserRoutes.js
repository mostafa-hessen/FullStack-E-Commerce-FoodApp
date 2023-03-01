import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddToFav from "../../HomeAfterLoginForUser/AddToFav/AddToFav";
import Basket from "../../HomeAfterLoginForUser/Basket/BasketComponent";
import CheifList from "../../HomeAfterLoginForUser/CheifList/CheifList";
import CheifPage from "../../HomeAfterLoginForUser/CheifPageForUser/CheifPage";
import Details from "../../HomeAfterLoginForUser/Details/Details";
import Home from "../../HomeAfterLoginForUser/HomeUser/Home/Home";
function UserRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/HomeUser/" component={() => <Home authorized={true}/>}/>
                
                <Route exact path="/HomeUser/Home"  component={() => <Home authorized={true}/>}/>

                <Route exact path="/HomeUser/ChiefList" component={() => <CheifList authorized={true}/>}/>

                <Route exact path="/HomeUser/ChiefList/Cheif/:id" component={() => <CheifPage authorized={true}/>}/>

                <Route exact path="/HomeUser/ChiefList/Cheif/details/:id" component={() => <Details authorized={true}/>}/>

                <Route exact path="/HomeUser/AddToFav" component={() => <AddToFav authorized={true}/>}/>

                <Route exact path="/HomeUser/Cart" component={() => <Basket authorized={true}/>}/>
            </Switch>
        </BrowserRouter>
    )
}
export default UserRoutes;