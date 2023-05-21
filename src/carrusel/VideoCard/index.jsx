import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import axios from "axios";
import { BsTrash3, BsBoxArrowInUp } from 'react-icons/bs'
import { colorPrimario } from "../../components/UI/variables";

const StyledDiv = styled.div`
background-color: transparent;
`

const StyledDivElement = styled.div`
position: relative;
width: 100%;
height: 10rem;
.trash{
  color: white;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
}
.trash:hover{
  background-color: rgba(207, 0, 17, 0.733);
  padding: .2rem .2rem;
  border-radius: .4rem;
} 
.arrow{
  color: white;
  position: absolute;
  right: 15px;
  top: 55px;
  cursor: pointer;
  
}
.arrow:hover{
  background-color: rgba(255, 81, 95, 0.4);
  padding: .2rem .2rem;
  border-radius: .4rem;
}
.arrow:active{
  background-color: rgba(81, 255, 0, 0.4);
}

`
const StyledA = styled.a`
background-color: transparent;
`
const StyledImg = styled.img`
width: 97%;
height: 100%;
`

export default class Responsive extends Component {
  render() {
    const { videos, color, CounterData } = this.props;
    var settings = {
      dots: false,
      arrows: false,
      infinite: false,
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
            infinite: false,
            dots: false
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
    const eliminarVideo = async (videoId) => {
      try {
        const respuesta = await axios.delete(`https://my-json-server.typicode.com/Lautaro-Balda/datosAlura/videos/${videoId}`)
        if (respuesta.status === 200) {
          const videosActualizados = CounterData.videos.filter(video => video.id !== videoId)
          CounterData.setVideos(videosActualizados);
        }
      } catch (error) {
        console.error('Error al eliminar el video:', error)
      }
    }

    const mandarVideo = async (video) => {
      CounterData.setVideo(video);
    }

    return (
      <StyledDiv>
        <Slider {...settings}>
          {
            videos?.map(video => (
              <StyledDivElement key={video.id}>
                <StyledA href={video.video_link}>
                  <StyledImg src={video.miniatura_link} alt="video" style={{ border: `2px solid ${color}` }}
                  />
                </StyledA>
                <BsTrash3 onClick={() => eliminarVideo(video.id)} className="trash">Eliminar</BsTrash3>
                <BsBoxArrowInUp className="arrow" onClick={() => mandarVideo(video)}></BsBoxArrowInUp>
              </StyledDivElement>
            ))
          }
        </Slider>
      </StyledDiv>
    );
  }
}