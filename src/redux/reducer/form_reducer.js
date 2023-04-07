import { createSlice } from '@reduxjs/toolkit'
import {
  addFormSpecialist,
  addFormInstitution,
  addFormAlliance,
  getAllForms,
  getAllCountries,
} from '../actions/form_actions'

const initialState = {
  forms: [],
  countries: [],
  error: null,
}

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFormSpecialist.fulfilled, (state, action) => {
        state.forms.push(action.payload)
      })
      .addCase(addFormSpecialist.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(addFormInstitution.fulfilled, (state, action) => {
        state.forms.push(action.payload)
      })
      .addCase(addFormInstitution.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(addFormAlliance.fulfilled, (state, action) => {
        state.forms.push(action.payload)
      })
      .addCase(addFormAlliance.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(getAllForms.fulfilled, (state, action) => {
        state.forms = action.payload
      })
      .addCase(getAllForms.rejected, (state, action) => {
        state.error = action.error.message
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

      .addCase(getAllCountries.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default formSlice.reducer
