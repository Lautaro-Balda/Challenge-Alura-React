import styled from "styled-components"
import { useContext, useState, useEffect } from "react"
import { CounterContext } from "../../Context"
import { colorPrimario, fuenteTitulos } from "../UI/variables"
import {Btn} from "../../components/UI"
import axios from "axios"
import EditarCategoria from "../EditarCategoria"


const StyledBtn = styled(Btn)`
width: clamp(3rem, 10vw, 6rem);
height: clamp(2rem, 5vh, 5rem);
margin: .4rem .4rem;
background-color: ${colorPrimario};
color: white;
font-family: ${fuenteTitulos};
letter-spacing: .1rem;
`

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 1rem;
margin-bottom: 1rem;
table{
  color: white;
  border: 2px solid ${colorPrimario};
  justify-self: center;
  margin: 1rem 2rem;
  width: 100%;
}
.td-texto{
  padding-left: .5rem;
}
.td-button{
  text-align: center;
}
`

const ListaCategorias = () => {

  const [mostrar, setMostrar] = useState(false)

  const [categoriaTitulo, setTitulo] = useState("")
  const [categoriaColor, setColor] = useState("")
  const [categoriaId, setId] = useState("")

  const [categoriaSubtitulo, setSubtitulo] = useState("")
  const CounterData = useContext(CounterContext)
  const showEditor = (categoria_Titulo, categoriaColor, categoriaSubtitulo, categoriaId) => {
    setMostrar(!mostrar)
    setTitulo(categoria_Titulo)
    setColor(categoriaColor)
    setId(categoriaId)
    setSubtitulo(categoriaSubtitulo)
  } 
  const eliminarCategoria = async (categoriaId) => {
    try {
      const respuesta = await axios.delete(`http://localhost:4000/categorias/${categoriaId}`);
      if (respuesta.status === 200) {
        const categoriasActualizadas = CounterData.categorias.filter(categoria => categoria.id !== categoriaId);
        const videosActualizados = CounterData.videos.filter(video => video.categoria !== categoriasActualizadas.titulo);
        CounterData.setCategorias(categoriasActualizadas);
        CounterData.setVideos(videosActualizados);

      }
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };
  return (
    <StyledDiv>
      <table border="1">
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
        {CounterData.categorias?.map((categoria) => (
          <tr key={categoria.id}>
            <td className="td-texto">{categoria.titulo}</td>
            <td className="td-texto">{categoria.subtitulo}</td>
            <td className="td-button">
              <StyledBtn 
              type="button" 
              onClick={() => showEditor(categoria.titulo, categoria.color, categoria.subtitulo , categoria.id)}>Editar</StyledBtn>
            </td>
            <td className="td-button">
              <StyledBtn type="button" onClick={() => eliminarCategoria(categoria.id)}>Eliminar</StyledBtn>
            </td>
          </tr>
        ))}
      </table>
      {mostrar && (
        <EditarCategoria 
        setMostrar={setMostrar} 
        categoriaTitulo={categoriaTitulo} 
        categoriaSubtitulo={categoriaSubtitulo}
        categoriaColor={categoriaColor} 
        categoriaId={categoriaId}
        />
      )}
    </StyledDiv>
  )
}

export default ListaCategorias
