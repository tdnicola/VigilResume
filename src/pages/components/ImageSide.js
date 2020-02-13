import React from "react";
import styled from 'styled-components';
import Background from '../../../data/images/VigilImage.png'

const AboutMe = styled.div`
  width: 45%;
  float: left
  `

const ImageSide = () => (
    <AboutMe className='imageSide'>
            <img src={ Background } />
    </AboutMe>
)

export default ImageSide
