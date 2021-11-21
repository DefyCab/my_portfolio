import React from "react"
import { Container, Image } from "semantic-ui-react"

const Hello = () => {
  return (
    <Container textAlign="fluid">
      <h1 id="hello">Hello and welcome to my portfolio.</h1>
      <Image
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsZSUyMGNhYmluZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        fluid
      ></Image>
    </Container>
  )
}

export default Hello
