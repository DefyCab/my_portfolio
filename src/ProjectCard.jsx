import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image 
      src={project.image} height={300}/>
        <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Meta> <span className="date">Completed in 2021</span> </Card.Meta>
        <Card.Description style ={{
          color: "blue"}}>
          
          {project.description}</Card.Description>
        </Card.Content>
    </Card>
  )
}

export default ProjectCard
