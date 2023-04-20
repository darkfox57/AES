import { createSlice } from '@reduxjs/toolkit'

import {
  addFormAlliance,
  addFormInstitution,
  addFormSpecialist,
  addFormSuscription,
  deleteFormSuscription,
  getAllCountries,
  getAllForms,
  getAreas,
} from '../actions/form_actions'

import { errorNotify, notification } from '../../components/Footer/ModalWindows'
const initialState = {
  forms: [],

  countries: [],

  areas: [],

  error: null,
}

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAreas.fulfilled, (state, action) => {
        state.areas = action.payload
      })

      .addCase(addFormSpecialist.fulfilled, (state, action) => {
        state.forms.push(action.payload)
      })

      .addCase(addFormInstitution.fulfilled, (state, action) => {
        state.forms.push(action.payload)
      })

      .addCase(addFormAlliance.fulfilled, (state, action) => {
        state.forms.push(action.payload)
      })

      .addCase(getAllForms.fulfilled, (state, action) => {
        state.forms = action.payload
      })

      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.countries = [...action.payload].sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
      })

    // .addMatcher(
    //   (action) => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.error = null
    //     if (action.type.includes('forms')) {
    //       notification()
    //     }
    //   }
    // )
    // .addMatcher(
    //   (action) => action.type.endsWith('/rejected'),
    //   (state, action) => {
    //     state.error = action.error.message
    //     errorNotify()
    //   }
    // )
  },
})

export default formSlice.reducer
