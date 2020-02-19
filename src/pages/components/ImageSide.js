import React from "react";
import styled from 'styled-components';
import Background from '../../../data/images/VigilImage.png'

const AboutMe = styled.div`
    width: 50%;
    float: left;
    height: 100vh; 
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url(${Background});
    background-size: cover;
  `

const ImageSide = () => (
    <AboutMe />
)

export default ImageSide
