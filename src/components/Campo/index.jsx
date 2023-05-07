import styled from "styled-components"
import { inputColor, fuenteTexto, colorDeFondo } from "../UI/variables"

const StyledDiv = styled.div`
  margin: 1.1rem 0;
  width: ${ ({color}) => color ? "10rem" : "100%" };
  height: auto;
  background-color: ${inputColor};
  margin: 1.1rem 0;
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

const StyledInput = styled.input`
  background-color: ${inputColor};
  color: white;
  width: 100%;
  min-height: 50px;
  border: none;
  padding: .5rem .5rem;
  box-sizing: border-box;
  font-family: ${fuenteTexto};
  resize: vertical;
  white-space: pre-wrap;
  &::selection{
    background-color: ${colorDeFondo};
  }
  &:focus {
    outline: none;
  }
`

const Campo = ({titulo, type, autocomplete, color}) =>{
  return (
    <StyledDiv color={color}>
      <StyledLabel>{titulo}</StyledLabel>
      <StyledInput 
        type={type}
        autocomplete={autocomplete}
      />
    </StyledDiv>
  )
}

export default Campo
