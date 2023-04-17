import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllFiles = createAsyncThunk('gallery', async () => {
 const response = await axios.get('resources/gallery/show')
 return response.data
})

export const getFile = createAsyncThunk('gallery/file', async (id) => {
 const response = await axios.get(`resources/gallery/${id}`)
 return response.data
})

export const addFile = createAsyncThunk('gallery/add', async (post) => {
 const formatedpost = {
  'title': post.title,
  'subtitle': post.subtitle,
  'url': post.url,
  'origin': post.origin,
  'status': post.status,
 }
 try {
  const response = await axios.post(`resources/gallery/upload`, formatedpost)
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})


export const editFile = createAsyncThunk('gallery/edit', async (post) => {
 const formatedpost = {
  'title': post.title,
  'subtitle': post.subtitle,
  'url': post.url,
  'status': post.status,
 }
 try {
  const response = await axios.put(`resources/gallery/${post._id}`, formatedpost)
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})



