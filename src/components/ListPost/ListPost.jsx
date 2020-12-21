import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import './ListPost.css'
import { TrashFill, PencilFill } from 'react-bootstrap-icons'
import { getPosts, deletePost } from '../../services/post.service'

const ListPost = () => {
  const [posts, setPosts] = useState([])

  const listPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  useEffect(() => {
    listPosts()
  }, [])

  const deletePostById = async (id) => {
    await deletePost(id)
    const arrayFilter = posts.filter((item) => { return item.id !== id })
    setPosts(arrayFilter)
  }

  return (
    <Row className="my-4">
      <Col className="my-4">
        <ListGroup as="ul">
          {
              posts.map((post) => {
                return (
                  <ListGroup.Item as="li" key={post.id}>
                    <Link
                      className="linkTitle"
                      to={`/${post.id}`}
                    >
                      {post.title}
                    </Link>
                    <Link
                      variant="primary"
                      className="btn btn-warning btn-sm float-right"
                      to={`/edit/${post.id}`}
                    >
                      <PencilFill />
                    </Link>
                    <Button
                      variant="danger"
                      className="btn btn-float btn-sm float-right mr-2"
                      onClick={() => { return deletePostById(post.id) }}
                    >
                      <TrashFill />
                    </Button>
                  </ListGroup.Item>
                )
              })
            }
        </ListGroup>
      </Col>
    </Row>
  )
}

export default ListPost
