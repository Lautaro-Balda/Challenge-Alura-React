import React, { Component } from "react";
import Slider from "react-slick";
import player from '../../assets/images/player.png'
import styled from "styled-components";


const StyledDiv = styled.div`
background-color: transparent;
`
const StyledA = styled.a`
background-color: transparent;
`
const StyledImg = styled.img`
width: 97%;
`


export default class Responsive extends Component {
  render() {
    const {videos, color} = this.props;
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 3,
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
          {/* {console.log(videos)} */}
          {
          videos?.map(video => (
            <StyledA href={video.video_link} key={video.id}><StyledImg src={video.miniatura_link} alt="video" style={{border: `2px solid ${color}`}}/></StyledA>
          ))
          }
        </Slider>
      </StyledDiv>
    );
  }
}