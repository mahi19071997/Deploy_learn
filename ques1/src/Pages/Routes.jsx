import React from "react"

import {Route,Switch} from "react-router-dom"
import {Welcome} from "./Home"
import {Login} from "./Login"
import {Setting} from "./Setting"
import {Dashboard} from "./Dashboard"
import {PrivateRoute} from "./PrivateRoute"
import {Menu} from "./../Components/Menu"

export function Routes(){
    return(
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <PrivateRoute path='/dashboard/settings'>
                    <Setting/>
                </PrivateRoute>
                <PrivateRoute exact path='/dashboard'>
                    <Dashboard/>
                </PrivateRoute>

            </Switch>
        </div>
    )
}