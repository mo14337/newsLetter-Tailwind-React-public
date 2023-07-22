import { Children, createContext, useContext, useState } from "react";

const ProjextContext= createContext({});
export const states=()=> useContext(ProjextContext);


function StatesManagerFunction({children}){
    const[email,setEmail]=useState("")

    return(
        <ProjextContext.Provider
        value={{
            email,
            setEmail
        }}
        >
            {children}
        </ProjextContext.Provider>
    )
}


export default StatesManagerFunction;