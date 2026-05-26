import { createContext, useState } from "react";


export const AppContext=createContext()

const AppContextProvider = (props)=>{
    const [user,setUser]=useState(false); //navigation bar change ho rhi hai har page ke liye 
    // to hamne ek user sate create kiya hai ki user logged in hai to nav bar kaisa hoga vice versa

    const [showLogin,setShowLogin]=useState(false);

    const value={
        user,setUser,showLogin,setShowLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider