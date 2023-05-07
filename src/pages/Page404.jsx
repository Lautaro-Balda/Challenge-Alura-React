import styled from "styled-components";
import { fuenteTitulos, fuenteTexto, colorPrimario } from "../components/UI/variables";

const StyledMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow-y: hidden;
height: calc(100vh - 211px);
`

const StyledH1 = styled.h1`
color: white;
font-family: ${fuenteTitulos};
font-size: 4rem;
letter-spacing: .4rem;
font-weight: 300;
border-bottom: 2px solid white;
text-shadow: 10px -10px 4px ${colorPrimario};
`
const StyledP = styled.p`
color: white;
font-size: 1rem;
font-family: ${fuenteTexto};
font-weight: 300;
`


const Page404 = () =>{
    return (
        <StyledMain>
            <StyledH1>404</StyledH1>
            <StyledP>Esta página no existe.</StyledP>
        </StyledMain>
    )
}

export default Page404