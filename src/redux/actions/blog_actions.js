import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllBlogs = createAsyncThunk('blogs/getAllBlogs', async () => {
  const response = await axios.get('/blogs')
  return response.data
})

export const getBlog = createAsyncThunk('blogs/getBlog', async (slug) => {
  const response = await axios.get(`/blogs/search?slug=${slug}`)
  return response.data
})

export const getBlogTitle = createAsyncThunk('blogs/getBlogTitle', async (title) => {
  const response = await axios.get(`/blogs?search=${title}`)
  console.log(response.data);
  return response.data
})

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('/categoryBlogs/')
    return response.data
  }
)

export const addBlog = createAsyncThunk('blogs/addBlog', async (formData) => {
  const response = await axios.post('/blogs', formData, {
    body: {
      'Content-Type': 'application/json',
    },
  })
  return response.data
})
