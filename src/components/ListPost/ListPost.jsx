import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Col, Container, ListGroup, Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ListPost.css'

const ListPost = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = await res.data
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container className="my-4">
      <Row>
        <Col className="my-4">
          <ListGroup as="ul">
            {
              posts.map((post) => {
                return (
                  <ListGroup.Item as="li" key={post.id}>
                    <Link className="linkTitle" to="/">{post.title}</Link>
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ListPost
