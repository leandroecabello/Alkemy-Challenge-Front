import React, { useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { addPost } from '../../services/post.service'

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const createPost = async (e) => {
    e.preventDefault()

    const newPost = {
      title: post.title,
      body: post.body
    }

    await addPost(newPost)

    setPost({
      title: '',
      body: ''
    })

    window.location.href = '/'
  }

  return (
    <Col className="my-4" md={{ span: 4, offset: 4 }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            Create Post
          </Card.Title>
          <Form className="my-4" onSubmit={createPost}>
            <Form.Group>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={post.title}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                name="body"
                rows={3}
                placeholder="Description"
                onChange={handleChange}
                value={post.body}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CreatePost
