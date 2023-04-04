import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  const response = await axios.get('/event')
  return response.data
})

export const getEvent = createAsyncThunk('events/getOne', async (slug) => {
  const response = await axios.get(`/?slug=${slug}`)
  return response.data
})
