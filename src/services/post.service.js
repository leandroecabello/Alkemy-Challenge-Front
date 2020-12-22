import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

const getPosts = async () => {
  try {
    const res = await axios.get(baseUrl)
    const data = await res.data
    return data
  } catch (error) {
    return error
  }
}

const addPost = async (post) => {
  try {
    return await axios.post(baseUrl, post)
  } catch (error) {
    return error
  }
}

const getPostById = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/${id}`)
    const data = await res.data
    return data
  } catch (error) {
    return error
  }
}

const updatePost = async (id, post) => {
  try {
    return await axios.put(`${baseUrl}/${id}`, post)
  } catch (error) {
    return error
  }
}

const deletePost = async (id) => {
  try {
    return await axios.delete(`${baseUrl}/${id}`)
  } catch (error) {
    return error
  }
}

export { getPosts, addPost, getPostById, deletePost, updatePost }
