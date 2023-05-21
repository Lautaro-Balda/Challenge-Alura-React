import axios from 'axios';
import Campo from "../Campo"
import { Btn, TextArea, TituloFormulario } from "../UI"
import styled from "styled-components"
import { colorPrimario } from "../UI/variables"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"
import {CounterContext} from "../../Context"
import { useContext } from "react";
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
const FormularioVideo = ({tituloForm}) =>{
    const location = useLocation();
    const [titulo,setTitulo] = useState("")
    const [subtitulo, setSubtitulo] = useState("")
    const [color, setColor] = useState("")
    const [codigo, setCodigo] = useState("")

    const CounterData = useContext(CounterContext)
    const enviarDatos = async () =>{
        const nuevaCategoria = {titulo, color, subtitulo, id: uuid()};
        try {
          const respuesta = await axios.post('http://localhost:4000/categorias', nuevaCategoria);
          if (respuesta.status === 201) {
            CounterData.setCategorias([...CounterData.categorias, respuesta.data]);
          }
        } catch (error) {
          console.error('Error al crear la categoría:', error);
        }
    }
    const limpiarInputs = () =>{
        setTitulo("")
        setSubtitulo("")
        setColor("")
        setCodigo("")
    }
    return <StyledMain>
        <TituloFormulario>{tituloForm}</TituloFormulario>
        <StyledForm onSubmit={
            (e) => {
                e.preventDefault();
                enviarDatos();
            }
        }>
            <Campo 
            titulo="Nombre"
            value={titulo}
            actualizarValor={setTitulo}
            />
            <TextArea 
            titulo="Descripcion"
            rows={5} 
            value={subtitulo}
            actualizarValor={setSubtitulo}
            />

            {/* selectDecategoria */}

            <Campo 
            color
            titulo="Color" 
            type="color"
            value={color}
            actualizarValor={setColor}
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