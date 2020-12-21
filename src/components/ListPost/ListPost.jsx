import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Col, Container, ListGroup, Row
} from 'react-bootstrap'
import './ListPost.css'
import { getPosts } from '../../services/post.service'

const ListPost = () => {
  const [posts, setPosts] = useState([])

  const listPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  useEffect(() => {
    listPosts()
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
                    <Link className="linkTitle" to="/postDetails">{post.title}</Link>
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
