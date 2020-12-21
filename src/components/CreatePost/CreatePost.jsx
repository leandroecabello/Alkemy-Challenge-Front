import axios from 'axios'
import React, { useState } from 'react'
import {
  Button, Card, Col, Form
} from 'react-bootstrap'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addPost = async (e) => {
    e.preventDefault()

    const newPost = {
      title,
      body: description
    }

    await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)

    setTitle('')
    setDescription('')
  }

  return (
    <Col className="my-4" md={{ span: 4, offset: 4 }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Create Post</Card.Title>
          <Form className="my-4" onSubmit={addPost}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => { return setTitle(e.target.value) }}
                value={title}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                onChange={(e) => { return setDescription(e.target.value) }}
                value={description}
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
