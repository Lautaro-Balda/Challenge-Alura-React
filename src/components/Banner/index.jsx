import styled from 'styled-components'
import banner from "../../assets/images/banner.jpg"


const StyledImg = styled.img`
max-width: 100%;
`
const Banner = () =>{
    return <StyledImg primary src={banner} alt="banner" />
}

export default Banner