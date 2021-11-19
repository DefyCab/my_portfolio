import React from 'react'
import { Menu, MenuItem, Segment } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <Segment inverted color="blue">
      <Menu inverted secondary>
        <MenuItem
          id="header"
          name="my projects"
          as={Link}
          to={{ pathname: '/' }}
        />
        <MenuItem
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: '/about' }}
        />
        <MenuItem
          id="projects-tab"
          name="my portfolio"
          as={NavLink}
          to={{ pathname: '/projects' }}
        />
        <MenuItem
          id="cv-tab"
          name="cv"
          as={NavLink}
          to={{ pathname: '/cv'}}
          />
      </Menu>
    </Segment>
  )
}

export default Header
