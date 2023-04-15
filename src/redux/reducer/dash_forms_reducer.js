import { createAction, createSlice } from '@reduxjs/toolkit'

import { getAllAreas, getAllInstitutions, getAllOrganizations, getAllPersons, getAllSpecialist } from '../actions/dash_forms_actions'

const initialState = {
 areas: [],
 institutions: [],
 organizations: [],
 persons: [],
 specialists: [],
 submitions: [],
 status: null,
 error: null,
 confirmation: '',
}

const dashSlice = createSlice({
 name: 'dash',
 initialState,
 reducers: {
 },
 extraReducers: (builder) => {
  builder
   .addCase(getAllInstitutions.fulfilled, (state, action) => {
    state.institutions = action.payload.reverse()
   })
   .addCase(getAllInstitutions.rejected, (state, action) => {
    state.error = action.error.message
   })
   .addCase(getAllOrganizations.fulfilled, (state, action) => {
    state.organizations = action.payload.reverse()
   })
   .addCase(getAllOrganizations.rejected, (state, action) => {
    state.error = action.error.message
   })
   .addCase(getAllSpecialist.fulfilled, (state, action) => {
    state.specialists = action.payload.reverse()
   })
   .addCase(getAllSpecialist.rejected, (state, action) => {
    state.error = action.error.message
   })
   .addCase(getAllAreas.fulfilled, (state, action) => {
    state.areas = action.payload.reverse()
   })
   .addCase(getAllAreas.rejected, (state, action) => {
    state.error = action.error.message
   })
 },
})

export default dashSlice.reducer