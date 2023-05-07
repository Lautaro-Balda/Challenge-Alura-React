import logo from "../../assets/images/logo.png"
import styled from "styled-components"
import {colorDeFondo, colorPrimario} from "../UI/variables"
import { Link } from "react-router-dom"

const StyledFooter = styled.footer`
    height: 5.15rem;
    background-color: ${colorDeFondo};
    display: flex;
    justify-content: center;
    align-items: top;
    border-top: 2px solid ${colorPrimario};
    padding-top: 1rem;
`
const StyledImg = styled.img`
    width: 12.5rem;
    height: 3rem;

`


const Footer = () =>{
    return (
        <StyledFooter>
            <Link to="/"><StyledImg src={logo} alt="logo" /></Link> 
        </StyledFooter>
    )
}

export default Footer