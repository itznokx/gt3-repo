import { createContext, useState, Provider } from "react";

export const ContextAuth =  createContext();

export const AuthContext = ({context,children}) => {

    const [logged, setLogged] = useState (false)

    return(


        <>
            <ContextAuth.Provider value={{logged,setLogged}}>
                {children}
            </ContextAuth.Provider>
        </>

    );
}