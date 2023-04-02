import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  const response = await axios.get(
    'https://projectaes-production.up.railway.app/'
  )
  return response.data
})

export const getEvent = createAsyncThunk('events/getOne', async (slug) => {
  const response = await axios.get(
    `https://projectaes-production.up.railway.app/?slug=${slug}`
  )
  return response.data
})
