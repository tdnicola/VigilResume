import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
  float: right;
  display: inline;
`

const ResumeSide = ({education, mainProject, projects, coursework, work}) => (
    <Container className='resumeSide'>
        <div className='education'>
            Education: {education}
        </div>
        <div className='mainProject'>
            main project: {mainProject.title}
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
)

export default ResumeSide;