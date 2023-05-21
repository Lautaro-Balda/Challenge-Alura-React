import styled from "styled-components";
import { useContext } from "react";
import { CounterContext } from "../../Context";

const StyledDiv = styled.div`
width: 45vw;
display: flex;
flex-direction: column;
align-items: start;
background-color: transparent;
box-sizing: border-box;
h1{
padding: 0.5rem 1.5rem;
box-sizing: border-box;
border-radius: 5%;
font-size: 2rem;
}
h3{
font-size: 1.8rem;
background-color: transparent;
}
p{
background-color: transparent;
width: 80%;
font-size: 1rem;
font-weight: 400;
}
`

const AcercaDe = () =>{

    const CounterData = useContext(CounterContext)
    const colorCategoria = CounterData.colorCategoria
    const video = CounterData.video
    return (
        <StyledDiv>
            {video ? (
                <>
                    <h1 style={{backgroundColor: colorCategoria}}>{video.categoria}</h1>
                    <h3>{video.tituloVideo}</h3>
                    <p>{video.descripcion}</p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </StyledDiv>
    )
}

export default AcercaDe