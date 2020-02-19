import React from "react";
import styled from 'styled-components';

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
                <Title>main project:</Title> {mainProject.title}
                {mainProject.description.map((list) => {
                    return <li> {list} </li>
                })}
            </div>
            
            <div className='projects'>
                additional projects: 
                {projects.map((project) => {
                    return <div className='additionalProjects'>Title: {project.title}
                        <div>
                            description: {project.description}
                        </div>
                    </div>
                })}
            </div>

            <div className='coursework'>
                coursework: {coursework.map((courses) => {
                    return courses
                })}
            </div>

            <div className='work'>
                work experience: {work.map((jobs) => {
                    return jobs.company
                })}
            </div>

        </Container>
    </RightSide>
)

export default ResumeSide;