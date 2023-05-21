import styled from 'styled-components';
import { useContext } from "react";
import { CounterContext } from "../../Context";

const StyledDiv = styled.div`
width: 45vw;
`
const StyledImg = styled.img`
width: 100%;
height: 15rem;
`
const ImagenDestacada = () => {
  const CounterData = useContext(CounterContext)
  const colorCategoria = CounterData.colorCategoria
  const video = CounterData.video
  return (
  <StyledDiv>
    {video ? (
      <>
        <a href={video.video_link}>
          <StyledImg src={video.miniatura_link} alt="miniatura" style={{border: '2px solid ' + colorCategoria}}/>
        </a>
      </>
    ) : (
      <p>Cargando...</p>
    )}
  </StyledDiv>

)}
export default ImagenDestacada;