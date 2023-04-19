import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const token = localStorage.getItem('access_token');


export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  const response = await axios.get('/events')
  return response.data.reverse()
})

export const getEvent = createAsyncThunk('events/getOne', async (slug) => {
  const response = await axios.get(`/events?slug=${slug}`)
  return response.data
})

export const editEvent = createAsyncThunk('events/editEvent', async (post) => {
  const formatedpost = {
    title: post.title,
    location: post.location,
    frontpage: post.image,
    description: post.description,
    short_description: post.short_description,
    status: post.status,
    date_in: post.start,
    date_out: post.end,
    categories: post.categories,
    tags: post.tags,
  }
  try {
    const response = await axios.put(`/events/${post._id}`, formatedpost, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const addEvent = createAsyncThunk('events/addEvent', async (post) => {
  const formatedpost = {
    title: post.title,
    location: post.location,
    frontpage: post.image,
    description: post.description,
    status: post.status,
    date_in: post.date_in,
    date_out: post.date_out,
    categories: post.categories,
    tags: post.tags,
    short_description: post.short_description
  }

  try {
    const response = await axios.post(`events`, formatedpost, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const createEventSuscription = createAsyncThunk(
  'events/suscription',
  async (suscription) => {
    const response = await axios.post('/person', suscription, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  }
)

export const deleteEvent = createAsyncThunk('events/delete', async (id) => {
  const response = await axios.delete(`events/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})

export const getEventByTitle = createAsyncThunk(
  'events/getByTitle',
  async (title) => {
    const response = await axios(`/events?search=${title}`)
    return response.data
  }
)

export const getAllCategories = createAsyncThunk(
  'events/categories',
  async () => {
    const response = await axios('category')
    return response.data
  }
)

export const filterEvents = createAsyncThunk(
  'events/filter',
  async (filter) => {
    return filter
  }
)

export const filterTagsEvent = createAsyncThunk(
  'events/filterTagsEvent',
  async (tag) => {
    return tag
  }
)

export const getAllTags = createAsyncThunk(
  'events/getAllTags',
  async () => {
    const response = await axios(`/tags`)
    return response.data
  }
)

export const orderEvents = createAsyncThunk(`events/order`, async (type) => {
  return type
})

export const OrderDasboard = createAsyncThunk(`events/OrderDasboard`, async (type) => {
  return type
})
