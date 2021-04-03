import React from "react"
import {Link} from "react-router-dom"
import {AuthContext} from "./../Context/AuthContextProvider"


export function Menu(){
    // const {token}=React.useContext(AuthContext)
    // console.log(token)
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/dashboard/settings'}>Settings</Link>
            <br/>
            <Link to={'/dashboard'}>Dashboard</Link>
            <br/>
            <Link to={'/login'}>Login</Link>
            <br/>
        </div>
    )
}
