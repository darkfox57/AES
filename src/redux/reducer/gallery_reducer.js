import { createAction, createSlice } from '@reduxjs/toolkit'

import { Action } from '@cloudinary/url-gen/internal/Action'
import { getAllFiles } from '../actions/gallery_actions'

const initialState = {
 files: [],
 status: null,
 error: null,
 confirmation: '',
}

const gallery = createSlice({
 name: 'gallery',
 initialState,
 reducers: {
 },
 extraReducers: (builder) => {
  builder
   .addCase(getAllFiles.fulfilled, (state, action) => {
    state.files = action.payload.reverse()
   })
   .addCase(getAllFiles.rejected, (state, action) => {
    state.error = action.error.message
   })
 },
})

export default gallery.reducer