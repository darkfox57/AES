import { createSlice } from '@reduxjs/toolkit'
import { getAllEvents, getEvent } from '../actions/event_actions'

const initialState = {
  events: [],
  event: {},
  error: null,
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.event = action.payload
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default eventSlice.reducer
