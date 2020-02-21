import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import ResumeSide from "./components/Resume";
import ImageSide from './components/ImageSide';
import styled from 'styled-components';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          coursework
          education {
            description
            title
          }
          mainProject {
            description
            title
          }
          projects {
            description
            title
          }
          work {
            company
            description
            date
          }
          skills {
            description
            type
          }
        }
      }
    }
  `)

  const resume = data.allDataJson.nodes

  const Container = styled.div`
    display: inline;
    color: #A0B9C6;

`

  return (
    <Container>
 
      <ImageSide />

      {resume.map((info) => {
      
        return (
          <ResumeSide 
            coursework={info.coursework}
            education={info.education}
            mainProject={info.mainProject}
            projects={info.projects}
            work={info.work}
          />

        )
      })}
      
    </Container>
  )
}