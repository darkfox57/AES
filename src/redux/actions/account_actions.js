import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('login/validate', async (userData) => {
 const response = await axios.post('/auth/login', userData, {
  body: {
   'Content-Type': 'application/json'
  },
 })
 return response.data
})