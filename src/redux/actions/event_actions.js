import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  const response = await axios.get('/events')
  return response.data
})

export const getEvent = createAsyncThunk('events/getOne', async (slug) => {
  const response = await axios.get(`/events?slug=${slug}`)
  return response.data
})

export const filterEvents = createAsyncThunk(
  'events/filter',
  async (filter) => {
    return filter
  }
)
