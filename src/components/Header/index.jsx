import Button from '../Button'
import logo from "../../assets/images/logo.png"
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    border: 1px solid swhite;
    padding: .6rem 1rem;
`

const StyledImg = styled.img`
    width: 8.4rem;
    height: 2rem;
    transition: transform 0.2s ease-in-out;
    background-color: black;
    &:hover{
        transform: scale(1.1);
    }
`
 
const Header = () =>{

    const location = useLocation();

    return (
        <StyledHeader>
            <Link to="/"><StyledImg src={logo} alt="logo" /></Link>
            {location.pathname === "/" && <Link to="/Nuevo_video"><Button texto="Nuevo video"/></Link>}
        </StyledHeader>
    )
}


export default Header