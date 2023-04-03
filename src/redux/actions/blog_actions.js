import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllBlogs = createAsyncThunk('blogs/getAllBlogs', async () => {
  const response = await axios.get(
    'https://projectaes-production.up.railway.app/blogs'
  )
  return response.data
})

export const getBlog = createAsyncThunk('blogs/getBlog', async (slug) => {
  const response = await axios.get(
    `https://projectaes-production.up.railway.app/blogs/search?slug=${slug}`
  )
  return response.data
})

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await axios.get(
    'https://projectaes-production.up.railway.app/categoryBlogs/'
  )
  return response.data
})

export const addBlog = createAsyncThunk('blogs/addBlog', async (formData) => {
  const response = await axios.post(
    'https://projectaes-production.up.railway.app/blogs',
    formData,
    {
      body: {


        'Content-Type': 'application/json'
      }
    }
  )
  return response.data
})