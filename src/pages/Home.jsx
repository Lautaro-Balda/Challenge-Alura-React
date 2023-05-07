
import MiCarousel from "../carrusel/Carrusel"
import VideoCard from "../carrusel/VideoCard"
import Banner from "../components/Banner"
import AcercaDe from "../components/acercaDe"
import styled from "styled-components"
import { colorDeFondo } from "../components/UI/variables"


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
display: flex;
flex-direction: column;
gap: 2rem;
`
const StyledvDivVideos = styled.div`
position: relative;
top: -60px;
background-color: transparent;
margin-left: 2rem;
`

const Home = () =>{
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
                <VideoCard/>
            </StyledvDivVideos>
            <StyledvDivVideos>
                <VideoCard/>
            </StyledvDivVideos>
        </StyledSectionVideos>
    </main>
}

export default Home