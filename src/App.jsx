import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Router from './router/Router'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  )
}

export default App
