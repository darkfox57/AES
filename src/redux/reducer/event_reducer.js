import { createSlice } from '@reduxjs/toolkit'
import { filterEvents, getAllEvents, getEvent } from '../actions/event_actions'

const initialState = {
  events: [],
  filteredEvents: [],
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
        state.filteredEvents = action.payload
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(getEvent.fulfilled, (state, action) => {
        state.event = action.payload
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(filterEvents.fulfilled, (state, action) => {
        if (action.payload === 'Default') state.filteredEvents = state.events
        else {
          state.filteredEvents = state.events.filter((event) =>
            event.categories.some(
              (category) => category.name === action.payload
            )
          )
        }
      })
      .addCase(filterEvents.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default eventSlice.reducer
