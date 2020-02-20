import React from "react";
import styled from 'styled-components';
import ResumeSection from './ResumeSection';
import ResumeTitle from './ResumeTitle';

const Container = styled.div`
  width: 85%;
  margin-left: 25px;
`

const RightSide = styled.div`
    width: 50%;
    float: right;
    display: inline;
    background-color: lavenderblush;
`

const Title = styled.h2`
    font-size: 1.2em;
`


const ResumeSide = ({education, mainProject, projects, coursework, work}) => (
    <RightSide>
        <Container>
            <div>
                <ResumeTitle title="Education:" />
                {education.map((degree) => {
                    return <ResumeSection title={degree.title} description={degree.education} />
                })}
            </div>

            <div className='mainProject'>
                <ResumeTitle title="Main Project:" />
                <ResumeSection 
                    title={mainProject.title}
                />

                {mainProject.description.map((list) => {
                    return <ResumeSection description={list} />
                })}
            </div>
            
            <div className='projects'>
                <ResumeTitle title="Additional Projects:" />

                {projects.map((project) => {
                    return <ResumeSection title={project.title} description={project.description} style={{marginLeft: '200px'}}/>
                })}
            </div>

            <div className='coursework'>
                <ResumeTitle title="Additional Courses:" />
                 {coursework.map((courses) => {
                    return <ResumeSection description={courses} />
                })}
            </div>

            <div className='work'>
                <ResumeTitle title="Work Experience:" />

                {work.map((jobs) => {
                    return <ResumeSection title={jobs.company} description={jobs.description} />
                })}
            </div>
        </Container>
    </RightSide>
)

export default ResumeSide;

