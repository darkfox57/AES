import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllBlogs = createAsyncThunk('blogs/getAllBlogs', async () => {
  const response = await axios.get('blogs')
  return response.data
})

export const getBlog = createAsyncThunk('blogs/getBlog', async (slug) => {
  const response = await axios.get(`blogs?slug=${slug}`)
  return response.data
})

export const getBlogTitle = createAsyncThunk('blogs/getBlogTitle', async (title) => {
  const response = await axios.get(`blogs?search=${title}`)
  return response.data
})

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('category')
    return response.data
  }
)

export const addBlog = createAsyncThunk('blogs/addBlog', async (post) => {
  const formatedpost = {
    'title': post.title,
    'description': post.description,
    'image': post.image,
    'categories': post.categories,
    'status': post.status,
    'tags': post.tags,
    'files': post.files,
  }
  try {
    const response = await axios.post('blogs', formatedpost)
    return response.data
  }
  catch (error) {
    error.response.data
  }
})

export const editBlog = createAsyncThunk('blogs/editBlog', async (post) => {
  console.log(post);
  const formatedpost = {
    'title': post.title,
    'description': post.description,
    'image': post.image,
    'categories': post.categories,
    'status': post.status,
    'tags': post.tags,
    'files': post.files
  }
  try {
    const response = await axios.put(`blogs/${post._id}`, formatedpost)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const getTags = createAsyncThunk('blogs/getTagBlog', async () => {
  const response = await axios.get('tags')
  return response.data
})

export const filterCategory = createAsyncThunk('blogs/filterCategory', async (category) => {
  return category
})

export const OrderBlog = createAsyncThunk('blogs/OrderBlog', async (type) => {
  return type
})
export const filterTags = createAsyncThunk('blogs/filterTags', async (tag) => {
  return tag
})


export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  const response = await axios.delete(`blogs/${id}`)
  return response.data
})

