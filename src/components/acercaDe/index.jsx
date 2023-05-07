import styled from "styled-components";
import { colorSecundario } from "../UI/variables";

const StyledDiv = styled.div`
width: 47%;
display: flex;
flex-direction: column;
align-items: start;
background-color: transparent;
 h1{
    background-color: ${colorSecundario};
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
    font-size: .9rem;
    font-weight: 400;
 }
`

const AcercaDe = () =>{
    return (
        <StyledDiv>
            <h1>Front End</h1>
            <h3>Challenge React</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, similique. Cumque, repellat, cum, numquam doloribus suscipit obcaecati temporibus est corrupti molestiae alias rerum ullam? Placeat commodi sit voluptatem mollitia! Assumenda.</p>
        </StyledDiv>
    )
}

export default AcercaDe