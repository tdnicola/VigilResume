import React from "react";
import styled from 'styled-components';
import Background from '../../../data/images/VigilImage.png'

const AboutMe = styled.div`
    width: 50%;
    float: left;
    height: 110vh;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url(${Background});
    background-size: cover;
  `

const AboutMeText = styled.div`
  margin-top: 20%;
  width: 100%;
  text-align: center;
  color: black;
`

const ImageSide = () => (
    <AboutMe>
      <AboutMeText>
        <h2>Hello there, I'm Joey.</h2>
        <h3>Electrical and mechatronics engineer based in Colorado.</h3>
        <h3>Currently looking for opportunites to expand my expertise.</h3>
      </AboutMeText>
    </AboutMe>
)

export default ImageSide
