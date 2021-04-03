import React from "react"
import {AuthContext} from "./../Context/AuthContextProvider"
import Axios from "axios"
import {Redirect} from "react-router-dom"

var obj={
    email:"",
    password:""
}

export function Login(){
    const [formState,setFormState]=React.useState(obj)
    const{email,password}=formState
    const {loginSuccess,isAuth}=React.useContext(AuthContext)
    const[isloading,setIsLoading]= React.useState(false)


    const handleSubmit=(e=>{
        e.preventDefault()
        const payload={
            ...formState
        }
        handleLogin(payload)
    })


    const handleChange=e=>{
        const{name,value}=e.target
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const handleLogin=({email,password})=>{
        setIsLoading(true)
        Axios
        .post("https://reqres.in/api/login",{
            email,
            password
        })
        .then((res)=>{
            var data= res.data.token
            loginSuccess(data)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    if(isAuth){
        return <Redirect to="/dashboard" push/>
    }
    return isloading?(
        <div>...loading</div>
    ): <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email
                    <input onChange={handleChange} value={email} type="text" name="email"/>
                </label>
            </div>

            <div>
                <label>
                    Password
                    <input onChange={handleChange} value={password} type="text" name="password"/>
                </label>
            </div>
            <div>
                <input type="submit" value="submit"/>
            </div>
        </form>

    </div>
}