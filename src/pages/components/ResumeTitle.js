import React from "react";
import styled from 'styled-components';

const Titles = styled.h2`
    font-size: 1.2em;
    font-family: Roboto;
`

const ResumeTitle = ({title}) => {
    return (
        <Titles> {title} </Titles>
    )
}

export default ResumeTitle;
