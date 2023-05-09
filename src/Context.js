import { createContext } from "react";
import { useState, useEffect } from "react";
import { buscar } from "./api/api";

export const CounterContext = createContext()

export const ContextProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [videos, setVideos] = useState([])
    
    useEffect(() => {
        buscar(`/categorias`, setCategorias)
        buscar(`/videos`, setVideos)
    }, [])
    const values = {
        categorias,
        videos


    }

    return (
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    )
}