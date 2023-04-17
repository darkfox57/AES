import { createAction, createSlice } from '@reduxjs/toolkit'

import { Action } from '@cloudinary/url-gen/internal/Action'
import { addFile, deleteFile, editFile, getAllFiles, getFile } from '../actions/gallery_actions'

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
      .addCase(editFile.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(addFile.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(getFile.fulfilled, (state, action) => {
        state.file = action.payload
      })
      .addCase(getFile.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default gallery.reducer