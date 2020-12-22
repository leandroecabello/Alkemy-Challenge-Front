import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL
const postUrl = `${baseUrl}/posts`

const getPosts = async () => {
  try {
    const res = await axios.get(postUrl)
    const data = await res.data
    return data
  } catch (error) {
    return error
  }
}

const addPost = async (post) => {
  try {
    return await axios.post(postUrl, post)
  } catch (error) {
    return error
  }
}

const getPostById = async (id) => {
  try {
    const res = await axios.get(`${postUrl}/${id}`)
    const data = await res.data
    return data
  } catch (error) {
    return error
  }
}

const updatePost = async (id, post) => {
  try {
    return await axios.patch(`${postUrl}/${id}`, post)
  } catch (error) {
    return error
  }
}

const deletePost = async (id) => {
  try {
    return await axios.delete(`${postUrl}/${id}`)
  } catch (error) {
    return error
  }
}

export { getPosts, addPost, getPostById, deletePost, updatePost }
