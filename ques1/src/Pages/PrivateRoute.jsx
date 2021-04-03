import React from "react"
import {Redirect,Route} from "react-router-dom"
import {AuthContext} from "./../Context/AuthContextProvider"

export function PrivateRoute({children,path,exact=false,RedirectPath="login", push=false}){
    const{isAuth}= React.useContext(AuthContext)
    return isAuth?(
        <Route path={path} exact={exact}>{children}</Route>
    ):(
        <Redirect to={RedirectPath} push={push}/>
    )
}