import { createSlice } from '@reduxjs/toolkit'
import sortOptions from '../../DashBoard/Pages/OrderSort/OrderSort'
import { errorNotify, notification } from '../../components/Footer/ModalWindows'
import {
  OrderDasboard,
  deleteEvent,
  editEvent,
  filterEvents,
  filterTagsEvent,
  getAllCategories,
  getAllEvents,
  getAllTags,
  getEvent,
  getEventByTitle,
  orderEvents,
} from '../actions/event_actions'

const initialState = {
  events: [],
  copyEvents: [],
  swiperEvents: [],
  categories: [],
  tags: [],
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
        state.events = action.payload
        state.swiperEvents = action.payload.filter((post) => post.status)
        state.copyEvents = action.payload.filter((post) => post.status)
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
        let search = action.payload.filter((post) => post.status)
        search.sort((a, b) => new Date(b.date_out) - new Date(a.date_out));
        state.copyEvents = search
      })

      .addCase(getEventByTitle.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(getAllTags.fulfilled, (state, action) => {
        state.tags = action.payload
      })
      .addCase(getAllTags.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(editEvent.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.error = action.payload
      })

      .addCase(filterEvents.fulfilled, (state, action) => {
        const Status = state.events.filter((event) => event.status)
        const eventoCategory = Status.filter((blog) =>
          blog.categories.some((category) => category.name === action.payload)
        )
        state.copyEvents = eventoCategory
      })

      .addCase(filterEvents.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(orderEvents.fulfilled, (state, action) => {
        const sortOptions = {
          title: {
            asc: (a, b) => a.title.localeCompare(b.title),
            desc: (a, b) => b.title.localeCompare(a.title),
          },
          fecha: {
            asc: (a, b) => new Date(b.date_out) - new Date(a.date_out),
            desc: (a, b) => new Date(a.date_out) - new Date(b.date_out),
          },
        }

        state.copyEvents = [...state.copyEvents].sort(
          sortOptions[action.payload.type][action.payload.sort]
        )
      })
      .addCase(orderEvents.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(filterTagsEvent.fulfilled, (state, action) => {
        const Status = state.events.filter((event) => event.status)
        const EvenTag = Status.filter((event) =>
          event.tags.some((tag) => tag.name === action.payload)
        )
        state.copyEvents = EvenTag
      })

      .addCase(OrderDasboard.fulfilled, (state, action) => {
        state.events = [...state.events].sort(
          sortOptions[action.payload.type][action.payload.sort]
        )
      })

    // .addMatcher(
    //   (action) => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.error = null
    //     if (action.type.includes('events/suscription')) {
    //       notification()
    //     }
    //   }
    // )

    // .addMatcher(
    //   (action) => action.type.endsWith('/rejected'),
    //   (state, action) => {
    //     state.error = null
    //     if (action.type.includes('events/suscription')) {
    //       errorNotify()
    //     }
    //   }
    // )
  },
})

export default eventSlice.reducer
