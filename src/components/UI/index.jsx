import { colorPrimario, fuenteTitulos, fuenteTexto, inputColor } from "./variables"
import styled from "styled-components"

export const Btn = styled.button`
background-color: black;
border: 2px solid white;
border-radius: 5px;
cursor: pointer;
box-sizing: border-box;
`

export const TituloFormulario = styled.h1`
color: white;
font-family: ${fuenteTitulos};
font-size: 2rem;
font-weight: 300;
letter-spacing: .4rem;
align-self: center;
`


const StyledDiv = styled.div`
margin: 3rem 0;
`
const StyledLabel = styled.label`
  display: block;
  background-color: ${inputColor};
  color: #E5E5E5;
  font-size: .7rem;
  font-family: ${fuenteTexto};
  letter-spacing: .1rem;
  font-weight: 300;
  padding-left: .5rem;
  padding-top: .3rem;
`
const StyledTextArea = styled.textarea`
  background-color: ${inputColor};
  color: white;
  width: 100%;
  min-height: 50px;
  border: none;
  padding: .5rem .5rem;
  box-sizing: border-box;
  font-family: ${fuenteTexto};
  resize: none;
  &:focus {
    outline: none;
  }
`
export const TextArea = ({titulo, rows}) =>{
    return (
        <StyledDiv>
            <StyledLabel>{titulo}</StyledLabel>
            <StyledTextArea 
            rows={rows}
            />
        </StyledDiv>
    )
}
