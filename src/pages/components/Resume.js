import React from "react";
import styled from 'styled-components';
import ResumeSection from './ResumeSection';

const Container = styled.div`
  width: 85%;
`

const RightSide = styled.div`
    width: 50%;
    float: right;
    display: inline;
    background-color: lavenderblush;
    `
const Title = styled.span`
    margin-right: 10px;   
`

const ResumeSide = ({education, mainProject, projects, coursework, work}) => (
    <RightSide>
        <Container>
            <div>
                Education: {education}
            </div>
            <div className='mainProject'>

                <ResumeSection 
                    title={mainProject.title}
                />

                {/* <Title>main project:</Title> {mainProject.title} */}
                {mainProject.description.map((list) => {
                    return <li> {list} </li>
                })}
                
            </div>
            
            <div className='projects'>

                <ResumeSection title='Additional Projects:'/>

                {projects.map((project) => {
                    return <ResumeSection title={project.title} description={project.description} />
                })}

            </div>

            <div className='coursework'>
                <ResumeSection title="Additional Courses:" />
                 {coursework.map((courses) => {
                    return <ResumeSection description={courses} />
                })}
            </div>

            <div className='work'>
                work experience: {work.map((jobs) => {
                    return <ResumeSection title={jobs.company} description={jobs.description} />
                })}
            </div>

        </Container>
    </RightSide>
)

export default ResumeSide;

                    // <div className='additionalProjects'>Title: {project.title}
                    //     <div>
                    //         description: {project.description}
                    //     </div>
                    // </div>