import axios from 'axios';
import Campo from "../Campo"
import { Btn, TituloFormulario, TextArea } from "../UI"
import styled from "styled-components"
import { colorPrimario } from "../UI/variables"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"
import {CounterContext} from "../../Context"
import { useContext } from "react";
import ListaOpciones from '../ListaOpciones';
import { v4 as uuid } from 'uuid';

const StyledMain = styled.main`
display: flex;
align-items: start;
flex-direction: column;
margin: 1rem 1rem;
margin-bottom: 5rem;
`

const StyledForm = styled.form`
width: 100%;
`
const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
const StyledBtn = styled(Btn)`
width: 9rem;
height: 2.7rem;
color: ${ ({primary}) => primary ? "white" : "black" };
background-color: ${ ({primary}) => primary ? colorPrimario : "#9E9E9E" };
margin-left: ${({primary}) => primary ? "0" : "2rem"};
margin-top: 2rem;
.nueva-categoria{
    justify-self: end;
}
`
const FormularioVideo = ({titulo}) =>{
    const location = useLocation();

    const [tituloVideo, setTitulo] = useState("")
    const [video_link, setvideo_link] = useState("")
    const [miniatura_link, setminiatura_link] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [codigo, setCodigo] = useState("")
    const [id, setId] = useState(uuid())
    const CounterData = useContext(CounterContext)

    const enviarDatos = async () =>{
        const nuevoVideo = {tituloVideo, video_link, miniatura_link, categoria, descripcion, id};
        try {
          const respuesta = await axios.post('http://localhost:4000/videos', nuevoVideo);
          if (respuesta.status === 201) {
            CounterData.setVideos([...CounterData.videos, respuesta.data]);
          }
        } catch (error) {
          console.error('Error al crear el video:', error);
        }
    }     
    const limpiarInputs = () =>{
        setTitulo("")
        setvideo_link("")
        setminiatura_link("")
        setDescripcion("")
        setCategoria("")
    }
    return <StyledMain>
        <TituloFormulario>{titulo}</TituloFormulario>
        <StyledForm onSubmit={(e) => {
            e.preventDefault()
            enviarDatos()
        }}>
            <Campo 
            titulo="Titulo"
            value={tituloVideo}
            actualizarValor={setTitulo}
            />
            <Campo 
            titulo="Link del video"
            type="url"
            value={video_link}
            actualizarValor={setvideo_link}
            />
            <Campo 
            titulo="Link imagen del video"
            type="url"
            value={miniatura_link}
            actualizarValor={setminiatura_link}
            />

            {/* selectDecategoria */}

            <TextArea 
            titulo="Descripción" 
            rows={5} 
            value={descripcion}
            actualizarValor={setDescripcion}
            />

            <ListaOpciones 
            value={categoria}
            actualizarValor={setCategoria}
            categorias={CounterData.categorias.map((categoria) => categoria)}
            />

            <Campo 
            titulo="Código de seguridad"
            type="password"
            value={codigo}
            actualizarValor={setCodigo}
            />
            <StyledDiv>
                <div>
                    <StyledBtn primary type="submit">Guardar</StyledBtn>
                    <StyledBtn onClick={() => limpiarInputs()}>Limpiar</StyledBtn>
                </div>
                <div>
                    { location.pathname === "/Nuevo_video" && <Link to="/Nueva_Categoria"><StyledBtn className="nueva-categoria" primary>Nueva Categoría</StyledBtn></Link>}
                </div>
            </StyledDiv>
            

        </StyledForm>
    </StyledMain>
}

export default FormularioVideo