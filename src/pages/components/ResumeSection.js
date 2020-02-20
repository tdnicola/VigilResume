import React from "react";
import styled from 'styled-components';

const ResumeTitle = styled.div`
    margin-right: 10px;   
    font-family: Roboto;
`

const ResumeDescription = styled.li`
    font-family: Roboto;
    margin-left: 50px;
    list-style: none;
`
const Section = styled.div`
    margin-left: 50px;
`

const ResumeSection = ({title, description}) => {
    return (
        <Section>
            <ResumeTitle> 
                {title}
            </ResumeTitle>
            <ResumeDescription>
                {description}
            </ResumeDescription>
        </Section>
    )
}

export default ResumeSection;
