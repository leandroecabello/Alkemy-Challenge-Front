import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Challenge-Front</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createPost">Create Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
