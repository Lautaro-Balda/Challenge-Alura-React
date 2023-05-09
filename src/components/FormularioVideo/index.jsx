import Campo from "../Campo"
import { Btn, TituloFormulario, TextArea } from "../UI"
import styled from "styled-components"
import { colorPrimario } from "../UI/variables"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"

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
    const [linkVideo, setLinkVideo] = useState("")
    const [linkImagen, setLinkImagen] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [codigo, setCodigo] = useState("")
    return <StyledMain>
        <TituloFormulario>{titulo}</TituloFormulario>
        <StyledForm onSubmit={(e) => {
            e.preventDefault()
            
        }}>
            <Campo 
            titulo="Titulo"
            value={tituloVideo}
            actualizarValor={setTitulo}
            />
            <Campo 
            titulo="Link del video"
            type="url"
            value={linkVideo}
            actualizarValor={setLinkVideo}
            />
            <Campo 
            titulo="Link imagen del video"
            type="url"
            value={linkImagen}
            actualizarValor={setLinkImagen}
            />

            {/* selectDecategoria */}

            <TextArea 
            titulo="Descripción" 
            rows={5} 
            value={descripcion}
            actualizarValor={setDescripcion}
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
                    <StyledBtn>Limpiar</StyledBtn>
                </div>
                <div>
                    { location.pathname === "/Nuevo_video" && <Link to="/Nueva_Categoria"><StyledBtn className="nueva-categoria" primary>Nueva Categoría</StyledBtn></Link>}
                </div>
            </StyledDiv>
            

        </StyledForm>
    </StyledMain>
}

export default FormularioVideo