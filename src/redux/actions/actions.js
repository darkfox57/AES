import axios from 'axios'

export const GET_ALL_BLOGS = 'GET_BLOGS'
export const GET_BLOG = 'GET_BLOG'
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS'
export const GET_EVENT = 'GET_EVENT'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ERROR = 'GET_ERROR'


export const getAllBlogs = () => (dispatch) => {
  axios
    .get('https://projectaes-production.up.railway.app/blogs')
    .then((response) => {
      dispatch({
        type: GET_ALL_BLOGS,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_ERROR,
        payload: error,
      })
    })
}

export const getBlog = (slug) => (dispatch) => {
  axios
    .get(`https://projectaes-production.up.railway.app/blogs?slug=${slug}`)
    .then((response) => {
      dispatch({
        type: GET_BLOG,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_ERROR,
        payload: error,
      })
    })
}

export const getAllEvents = () => (dispatch) => {
  axios
    .get('https://projectaes-production.up.railway.app/')
    .then((response) => {
      dispatch({
        type: GET_ALL_EVENTS,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_ERROR,
        payload: error,
      })
    })
}

export const getEvent = (slug) => (dispatch) => {
  axios
    .get(`https://projectaes-production.up.railway.app/  /?slug=${slug}`)
    .then((response) => {
      dispatch({
        type: GET_EVENT,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_ERROR,
        payload: error,
      })
    })
}



export const getCategories = () => (dispatch) => {
  axios
    .get('https://projectaes-production.up.railway.app/')
    .then((response) => {
      dispatch({
        type: GET_CATEGORIES,
        payload: response.data.map((post) => post.slug),
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_ERROR,
        payload: error,
      })
    })
}




