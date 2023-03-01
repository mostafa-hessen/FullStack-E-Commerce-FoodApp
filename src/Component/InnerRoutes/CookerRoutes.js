import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menue from "../../HomeForCookerAfterLogin/Menu/Menue";
import Orders from "../../HomeForCookerAfterLogin/Orders/Orders";
import ChiefHome from "../../HomeForCookerAfterLogin/shiefBage/chiefHome";
function CookerRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/HomeCooker/" component={() => <ChiefHome authorized={true}/>}/>

                <Route exact path="/HomeCooker/Home" component={() => <ChiefHome authorized={true}/>}/>

                <Route exact path="/HomeCooker/Menue" component={() => <Menue authorized={true}/>}/>

                <Route exact path="/HomeCooker/Orders" component={() => <Orders authorized={true}/>}/>
            </Switch>
        </BrowserRouter>
    )
}
export default CookerRoutes;