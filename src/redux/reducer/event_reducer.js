import { createSlice } from '@reduxjs/toolkit'
import {
  editEvent,
  filterEvents,
  getAllCategories,
  getAllEvents,
  getEvent,
  getEventByTitle,
  orderEvents,
} from '../actions/event_actions'

const initialState = {
  events: [],
  filteredEvents: [],

  categories: [],

  event: {},

  error: null,
  confirmation: '',
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload.reverse()
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

      .addCase(getEventByTitle.fulfilled, (state, action) => {
        state.filteredEvents = action.payload
      })
      .addCase(getEventByTitle.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(editEvent.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })

      .addCase(filterEvents.fulfilled, (state, action) => {
        if (action.payload === 'Todas las categorias')
          state.filteredEvents = state.events
        else {
          state.filteredEvents = state.events.filter((event) =>
            event.categories.some(
              (category) => category.name === action.payload
            )
          )
        }
      })

      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(filterEvents.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(orderEvents.fulfilled, (state, action) => {
        const sortOptions = {
          title: {
            asc: (a, b) => a.title.localeCompare(b.title),
            desc: (a, b) => b.title.localeCompare(a.title),
          },
          fecha: {
            asc: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            desc: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
          },
        }

        state.filteredEvents = [...state.events].sort(
          sortOptions[action.payload.type][action.payload.sort]
        )
      })
      .addCase(orderEvents.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default eventSlice.reducer
