import { createContext } from "react";

export const CounterContext = createContext()

export const ContextProvider = ({children}) => {

    const values = {

    }

    return (
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    )
}