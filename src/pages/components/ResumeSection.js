import React from "react";
import styled from 'styled-components';

const ResumeDescription = styled.div`
    font-family: Roboto;
`

const ResumeTitle = styled.div`
    margin-right: 10px;   
    font-family: Roboto;
`

const Container = styled.div`
`

const ResumeSection = ({title, description}) => {
    return (
        <Container>
            <ResumeTitle> 
                {title}
            </ResumeTitle>
            <ResumeDescription>
                {description}
            </ResumeDescription>
        </Container>
    )
}

export default ResumeSection;
