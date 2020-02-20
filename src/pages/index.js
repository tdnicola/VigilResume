import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import ResumeSide from "./components/Resume";
import ImageSide from './components/ImageSide';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          coursework
          education
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
          }
        }
      }
    }
  `)

  const resume = data.allDataJson.nodes

  return (
    <div style={{display: 'inline'}}>
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
      
    </div>
  )
}