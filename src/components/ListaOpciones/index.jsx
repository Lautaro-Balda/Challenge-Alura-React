import styled from "styled-components"
import {colorPrimario, fuenteTitulos} from "../UI/variables"

const StyledSelect = styled.select`
text-align: center;
width: 10rem;
height: 3rem;
font-size: 1rem;
color: white;
background-color: ${colorPrimario};
font-family: ${fuenteTitulos};
font-size: 1rem;
letter-spacing: .1rem;
line-height: 2.3rem;
margin-bottom: 1rem;
`
const ListaOpciones = ({value, actualizarValor, categorias}) => {
    const handleChange = (e) =>{
        actualizarValor(e.target.value)
    }
    return (
        <StyledSelect
        value={value}
        onChange={handleChange}
        >
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
        {categorias?.map((categoria) => (
            <option key={categoria.id} value={categoria.titulo}>{categoria.titulo}</option>
        ))}
        </StyledSelect>
    )
}

export default ListaOpciones