import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllFiles = createAsyncThunk('dash/gallery', async () => {
 const response = await axios.get('resources/gallery/show')
 return response.data
})