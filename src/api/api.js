import axios from "axios";

const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/Lautaro-Balda/datosAlura"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}

