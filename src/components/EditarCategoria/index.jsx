import Campo from "../Campo"
import styled from "styled-components"
import { Btn } from "../UI"
import { colorPrimario, fuenteTitulos} from "../UI/variables"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { CounterContext } from "../../Context"

const StyledH3 = styled.h3`
font-size: 1.4rem;
letter-spacing: .2rem;
font-family: ${fuenteTitulos};
box-sizing: border-box;
padding: .9rem 1.2rem;
border-radius: .2rem;
max-width: 50%;
word-wrap: break-word;
`
const StyledDiv = styled.div`
display: flex;
align-items: center;
padding: 0 1rem;
flex-direction: row;
gap: 2vw;
`
const StyledBtnEditar = styled(Btn)`
width: clamp(3rem, 10vw, 6rem);
height: clamp(2rem, 5vh, 5rem);
margin: .4rem 0;
font-family: ${fuenteTitulos};
letter-spacing: .1rem;
&.btn-guardar{
background-color: ${colorPrimario};
color: white;
}
&.btn-cancelar{
background-color: white;
color: ${colorPrimario};
}
`
const StyledH4 = styled.h4`
color: #8a8a8a;
font-size: .9rem;
width: 60%;
text-align: center;
`
const EditarCategoria = ({setMostrar, categoriaTitulo, categoriaSubtitulo , categoriaColor, categoriaId}) => {
    const CounterData = useContext(CounterContext)
    const tituloInicial = categoriaTitulo
    const subTituloInicial = categoriaSubtitulo
    const idCategoria = categoriaId

    const [titulo, setTitulo] = useState(tituloInicial)
    const [subtitulo, setSubtitulo] = useState(subTituloInicial)


    const editarCategoria = async (categoriaId) => {
        try {
            const respuesta = await axios.get(`http://localhost:4000/categorias/${categoriaId}`); 
            if(respuesta.status === 200){
                const categoria = respuesta.data
                categoria.titulo = titulo
                categoria.subtitulo = subtitulo
                axios.put(`http://localhost:4000/categorias/${categoriaId}`, categoria)
                CounterData.setCategorias(prevCategorias => {
                    const categoriasActualizadas = prevCategorias.map(prevCategoria => {
                        if (prevCategoria.id === categoriaId) {
                            return categoria
                        } else {
                        return prevCategoria
                    }
                    });
                        return categoriasActualizadas
                    });
            } else{
                console.log("no es por acá", respuesta.status)
            }
        } catch (error) {
            console.error('Error al editar la categoría:', error);
        }
    } 
    const manejarEnvio = () => {
        editarCategoria(idCategoria)
    }

    return (
        <>
            {
                titulo != "" && <StyledH3 style={{backgroundColor: categoriaColor}}>{titulo}</StyledH3>
            }
            {
                subtitulo != "" && <StyledH4>{subtitulo}</StyledH4>
            }
            <form type="submit"
            style={{
                width: "80%",
            }}
            onSubmit={(e) => {
                e.preventDefault()
                manejarEnvio()
            }}>
                <Campo 
                titulo={"Edita el nombre de la categoria aqui"} 
                value={titulo} 
                actualizarValor={setTitulo}
                />
                <Campo 
                titulo={"Edita la descripción de la categoria aqui"} 
                value={subtitulo} 
                actualizarValor={setSubtitulo}
                />
                <StyledDiv className="editar-buttons">
                    <StyledBtnEditar type="button" className="btn-cancelar" onClick={() => setMostrar(false)}>Cancelar</StyledBtnEditar>
                    <StyledBtnEditar type="submit" className="btn-guardar">Guardar</StyledBtnEditar>
                </StyledDiv>
            </form>
        </>

        
    )
}

export default EditarCategoria