import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
const token = localStorage.getItem('access_token');

export const getAllFiles = createAsyncThunk('dash/gallery', async () => {
 const response = await axios.get('resources/gallery/show')
 return response.data
})

export const getFile = createAsyncThunk('gallery/file', async (id) => {
 const response = await axios.get(`resources/gallery/${id}`)
 return response.data
})

export const deleteFile = createAsyncThunk('gallery/delete', async (id) => {
 const response = await axios.delete(`resources/gallery/${id}`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const addFile = createAsyncThunk('gallery/add', async (post) => {
 const formatedpost = {
  'title': post.title,
  'subtitle': post.subtitle,
  'url': post.url,
  'status': post.status,
  'origin': post.origin,
 }
 try {
  const response = await axios.post(`resources/gallery/upload`, formatedpost, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  if (response.data.succes === true) {

   await Swal.fire({
    icon: 'success',
    title: 'Genial',
    text: 'Creado con Éxito!!',
   })
  }
  return response.data
 }
 catch (error) {
  await Swal.fire({
   icon: 'error',
   title: 'Oops...',
   text: `${error.response.data.error}`,
  })
 }
})


export const editFile = createAsyncThunk('gallery/edit', async (post) => {
 try {
  const response = await axios.put(`resources/gallery/${post._id}`, post, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })



  await Swal.fire({
   icon: 'success',
   title: 'Genial',
   text: 'Actualizado con éxito!!',
  })
  return response.data

 }
 catch (error) {
  await Swal.fire({
   icon: 'error',
   title: 'Oops...',
   text: `${error.response.data.error}`,
  })
 }
})

