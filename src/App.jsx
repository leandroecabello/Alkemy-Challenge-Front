import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import CreatePost from './components/CreatePost/CreatePost'
import ListPost from './components/ListPost/ListPost'
import PostDetails from './components/PostDetails/PostDetails'

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Route path="/" exact component={ListPost} />
        <Route path="/createPost" component={CreatePost} />
        <Route path="/postDetails" component={PostDetails} />
      </Container>
    </Router>
  )
}

export default App
