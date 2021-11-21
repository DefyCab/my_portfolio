import React, { useEffect, useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CvCard from './CvCard'
import axios from 'axios'

const Cvs = () => {

  const [cvs, setCvs] = useState([]);

  let cvList = cvs.map((cv) => {
    return (
      <div id={`cv-${cv.id}`} key={cv.id}>
        <CvCard cv={cv} />
      </div>
    )
  });

  useEffect(() => {
    axios.get("./data/cvhistory.json").then((response) => {
      setCvs(response.data);
    });
  }, []);

  return (
    <Container>
      <h1 id="cv-header">My Projects</h1>
      <Grid>{cvList}</Grid>
    </Container>
  );

};

export default Cvs;



























