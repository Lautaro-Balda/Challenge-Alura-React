import MiCarousel from "../carrusel/Carrusel"
import VideoCard from "../carrusel/VideoCard"
import Banner from "../components/Banner"
import AcercaDe from "../components/acercaDe"
import styled from "styled-components"
import { colorDeFondo } from "../components/UI/variables"
import CategoriasVideos from "../components/CategoríasVideos"
import { CounterContext } from "../Context";
import { useContext } from "react";

const StyledSection = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 0 1rem;
height: 17.87rem;
position: absolute;
top: 56vh;
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
`
const StyledvDivVideos = styled.div`
position: relative;
top: -60px;
background-color: transparent;
`

const Home = () =>{
    
    const CounterData = useContext(CounterContext)

    return <main>
        <section>
            <Banner/>
            <StyledSection>
                <AcercaDe/>
                <MiCarousel/>
            </StyledSection>
        </section>
        <StyledSectionVideos>
            <StyledvDivVideos>
                <VideoCard videos={CounterData.videos} color="lightblue"/>
            </StyledvDivVideos>
        </StyledSectionVideos>
        <StyledSectionCategorias>
            <CategoriasVideos/>
        </StyledSectionCategorias>
    </main>
}

export default Home