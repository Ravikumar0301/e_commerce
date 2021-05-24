import React from 'react';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from '../Home/home.js';
import Cart from '../Cart/cart.js'

function Main(){
    return(            
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/cart" component={Cart}></Route>
            </Switch>
        </Router>               
    )
}

export default Main;