import { createContext } from "react";
import { useState, useEffect } from "react";
import { buscar } from "./api/api";

export const CounterContext = createContext()

export const ContextProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [videos, setVideos] = useState([])
    const [video, setVideo] = useState(null)
    const [colorCategoria, setColor] = useState(null)

    const videosConCategorias = videos.filter(video =>
        categorias.some(categoria => video.categoria === categoria.titulo)
    );


    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videosConCategorias.length);
        const selectedVideo = videosConCategorias[randomIndex];
        setVideo(selectedVideo);
    }, [videos]);

    useEffect(() => {
        const categoria = categorias.find(categoria => categoria.titulo === video?.categoria)
        setColor(categoria?.color || null)
        }, [video])

    
    

    useEffect(() => {
        buscar(`/categorias`, setCategorias)
        buscar(`/videos`, setVideos)
    }, [])
    const values = {
        categorias,
        videos,
        setCategorias,
        setVideos,
        setVideo,
        video,
        colorCategoria,
        videosConCategorias
    }

    return (
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    )
}