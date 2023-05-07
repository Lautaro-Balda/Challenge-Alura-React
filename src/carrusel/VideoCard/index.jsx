import React, { Component } from "react";
import Slider from "react-slick";
import player from '../../assets/images/player.png'
import styled from "styled-components";


const StyledDiv = styled.div`
background-color: transparent;
`
const StyledDivContent = styled.div`
background-color: transparent;
width: 40%;

`
const StyledImg = styled.img`
width: 97%;
`


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <StyledDiv>
        <Slider {...settings}>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
          <StyledDivContent>
            <StyledImg src={player} />
          </StyledDivContent>
        </Slider>
      </StyledDiv>
    );
  }
}