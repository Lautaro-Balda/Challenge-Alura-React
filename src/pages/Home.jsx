import VideoCard from "../carrusel/VideoCard"
import Banner from "../components/Banner"
import AcercaDe from "../components/acercaDe"
import styled from "styled-components"
import { colorDeFondo } from "../components/UI/variables"
import CategoriasVideos from "../components/CategoríasVideos"
import { CounterContext } from "../Context";
import { useContext, useEffect, useState } from "react";
import ImagenDestacada from "../components/ImagenDestacada"

const StyledSection = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 0 2rem;
height: 17.87rem;
width: 90%;
position: absolute;
top: 45vh;
color: white;
background-color: transparent;
`
const StyledSectionVideos = styled.section`
position: relative;
background-color: ${colorDeFondo};
padding-left: 2rem;
`
const StyledSectionCategorias = styled.section`
position: relative;
background-color: ${colorDeFondo};
display: flex;
flex-direction: column;
gap: 1rem;
padding-left: 2rem;
margin-bottom: 2rem;
`
const StyledvDivVideos = styled.div`
position: relative;
top: -60px;
background-color: transparent;
`
const Home = () =>{
    const CounterData = useContext(CounterContext)
    const videosConCategorias = CounterData.videosConCategorias
    return <main>
        <section>
            <Banner/>
            <StyledSection>
                <AcercaDe />
                <ImagenDestacada/>
            </StyledSection>
        </section>
        <StyledSectionVideos>
            <StyledvDivVideos>
                <VideoCard videos={videosConCategorias} color="lightblue" CounterData={CounterData}/>
            </StyledvDivVideos>
        </StyledSectionVideos>
        <StyledSectionCategorias>
            <CategoriasVideos/>
        </StyledSectionCategorias>
    </main>
}
export default Home