import React from "react"
export const AuthContext= React.createContext()
export function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=React.useState(false)
    const[token,setToken]=React.useState("")

    const loginSuccess=(token)=>{
        setIsAuth(true)
        setToken(token)
    }
    const logoutSuccess=()=>{
        setIsAuth(false)
    }

    const value={
        isAuth,
        loginSuccess,
        logoutSuccess,
        token
    }
    console.log(isAuth)
    return(
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </div>
    )
}