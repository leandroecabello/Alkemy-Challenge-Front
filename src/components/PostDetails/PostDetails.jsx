import React, { useEffect, useState } from 'react'
import {
  Card,
  Col
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../services/post.service'

const PostDetails = () => {
  const [data, setData] = useState([])
  const { id } = useParams()

  const getPost = async () => {
    const res = await getPostById(id)
    setData(res)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <Col className="my-4">
      <Card className="text-center">
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {data.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PostDetails
