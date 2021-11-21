import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CvCard from './CvCard'
import axios from 'axios'

class Cv extends Component {
  state = {
    cvs: [],
  }

  render() {
    const { cvs } = this.state

    let cvsList = cvs.map((cv) => {
      return (
        <div id={`cv-${cv.id}`} key={cv.id}>
          <CvCard cv={cv} />
        </div>
      )
    })

    return (
      <Container>
        <h1 id="cv-header">My Cv</h1>
        <Grid>{cvsList}</Grid>
      </Container>
    )
  }
  componentDidMount() {
    axios.get('./data/cvhistory.json').then((response) => {
      this.setState({ cvs: response.data })
    })
  }
}
export default Cv















// import React, { Component } from 'react'
// import { Container, Grid } from "semantic-ui-react"
// import { CvCard } from "./CvCard"

// const Cv = () => {

//     return (
//         <Container textAlign="fluid">
//             <h1 id="cv-header">My Cv</h1>
//         </Container>
//     )
// }

// export default Cv;