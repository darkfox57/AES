import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllBlogs = createAsyncThunk('blogs/getAllBlogs', async () => {
  const response = await axios.get('/blogs')
  return response.data
})

export const getBlog = createAsyncThunk('blogs/getBlog', async (slug) => {
  const response = await axios.get(`/blogs?slug=${slug}`)
  return response.data
})

export const getBlogTitle = createAsyncThunk('blogs/getBlogTitle', async (title) => {
  const response = await axios.get(`/blogs?search=${title}`)
  return response.data
})

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('/category')
    return response.data
  }
)

export const addBlog = createAsyncThunk('blogs/addBlog', async (formData) => {
  const response = await axios.post('/blogs', formData)
  return response.data
})


export const editBlog = createAsyncThunk('blogs/editBlog', async (post) => {

  const formatedpost = {
    'title': post.title,
    'description': post.description,
    'image': post.image,
    'categories': post.categories,
    'status': post.status,
    'tags': post.tags
  }
  try {
    const response = await axios.put(`/blogs/${post.id}`, formatedpost)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})


export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  const response = await axios.delete(`/blogs/${id}`)
  return response.data
})
