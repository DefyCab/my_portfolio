import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

const About = () => {
  return (
    <Container>
      <Segment inverted color="blue">
      <h2 id="about-header">About Me:</h2>
      <br></br>
      <h1>
        I am currently trying to navigate through the mists of coding together
        with my brave cohort of keyboard warriors.
      </h1>
      </Segment>
    </Container>
  )
}

export default About
