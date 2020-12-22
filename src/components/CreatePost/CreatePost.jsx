import React, { useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { addPost } from '../../services/post.service'

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const { register, errors, handleSubmit } = useForm()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const createPost = async () => {
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
          <Form className="my-4" onSubmit={handleSubmit(createPost)}>
            <Form.Group>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={post.title}
                ref={
                  register({
                    required: {
                      value: true,
                      message: 'Title is required'
                    }
                  })
                }
              />
              <span className="text-danger text-small d-block mb-2">
                {errors?.title?.message}
              </span>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                name="body"
                rows={3}
                placeholder="Description"
                onChange={handleChange}
                value={post.body}
                ref={
                  register({
                    required: {
                      value: true,
                      message: 'Description is required'
                    }
                  })
                }
              />
              <span className="text-danger text-small d-block mb-2">
                {errors?.body?.message}
              </span>
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
