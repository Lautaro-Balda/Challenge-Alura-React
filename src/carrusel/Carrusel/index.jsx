import { Carousel } from 'antd';
import styled from 'styled-components';
import player from '../../assets/images/player.png';

const StyledSection = styled.section`
width: 48%;
border-radius: 5%;
`
const StyledDiv = styled.div`
height: 100%;
`
const StyledImg = styled.img`
max-width: 100%;
`
const MiCarousel = () => (
  <StyledSection>
    <Carousel autoplay dotPosition='right'>
      <StyledDiv>
      <StyledImg src={player} alt="img"/>
      </StyledDiv>
      <StyledDiv>
      <StyledImg src={player} alt="" />
      </StyledDiv>
      <StyledDiv>
      <StyledImg src={player} alt="" />
      </StyledDiv>
      <StyledDiv>
      <StyledImg src={player} alt="" />
      </StyledDiv>
    </Carousel>
  </StyledSection>

);
export default MiCarousel;