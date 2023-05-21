import styled from "styled-components"
import { fuenteTitulos, colorPrimario } from "../UI/variables"
import { Btn } from "../UI";

const StyledButton = styled(Btn)`
    width: 9rem;
    height: 2.3rem;
    color: white;
    font-family: ${fuenteTitulos};
    font-size: 1.2rem;
    letter-spacing: .2rem;
    line-height: 2.3rem;
    &:hover{
    border-color: ${colorPrimario};
    color: ${colorPrimario}
    }
`

const Button = ({texto, type, onClick}) =>{
    
    return <StyledButton type={type} onClick={onClick}>
        {texto}
    </StyledButton>
}

export default Button