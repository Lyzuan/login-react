import { createContext, useState } from "react";

export const Context = createContext();

const AuthContext = ({children}) => {

    const [logado, setLogado] = useState(false);

    return (
        <>
            <Context.Provider value={{logado, setLogado}}>
                {children}
            </Context.Provider>
        </>
    );
}

export default AuthContext;