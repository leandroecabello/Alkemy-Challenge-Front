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

export { getPosts, addPost }
