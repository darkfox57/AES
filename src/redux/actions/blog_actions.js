import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllBlogs = createAsyncThunk('blogs/getAll', async () => {
  const response = await axios.get(
    'https://projectaes-production.up.railway.app/blogs'
  )
  return response.data
})

export const getBlog = createAsyncThunk('blogs/getOne', async (slug) => {
  const response = await axios.get(
    `https://projectaes-production.up.railway.app/blogs/search?slug=${slug}`
  )
  return response.data
})

export const getCategories = createAsyncThunk('categories/getAll', async () => {
  const response = await axios.get(
    'https://projectaes-production.up.railway.app/'
  )
  return response.data.map((post) => post.slug)
})
