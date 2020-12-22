import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getPostById, updatePost } from '../../services/post.service'

const EditPost = () => {
  const { id } = useParams()
  const [data, setData] = useState({
    title: '',
    body: ''
  })

  const getPost = async () => {
    const res = await getPostById(id)
    setData({
      title: res.title,
      body: res.body
    })
  }

  useEffect(() => {
    getPost()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const editPost = async (e) => {
    e.preventDefault()
    await updatePost(id, data)
    setData({
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
            Edit Post
          </Card.Title>
          <Form className="my-4" onSubmit={editPost}>
            <Form.Group>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={data.title}
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
                value={data.body}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EditPost
