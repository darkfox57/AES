import { createAction, createSlice } from '@reduxjs/toolkit'

import { getAllAreas, getAllInstitutions, getAllMessages, getAllOrganizations, getAllPersons, getAllSpecialist, getInstitution, getMessage, getOrganization, getSpecialist } from '../actions/dash_forms_actions'

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
  institution: {},
  organization: {},
  specialist: {},
  messages: [],
  message: {}
}

const dashSlice = createSlice({
  name: 'dash',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPersons.fulfilled, (state, action) => {
        state.persons = action.payload.reverse()
      })
      .addCase(getAllPersons.rejected, (state, action) => {
        state.error = action.error.message
      })
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
      .addCase(getInstitution.fulfilled, (state, action) => {
        state.institution = action.payload
      })
      .addCase(getInstitution.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getOrganization.fulfilled, (state, action) => {
        state.organization = action.payload
      })
      .addCase(getOrganization.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getSpecialist.fulfilled, (state, action) => {
        state.specialist = action.payload
      })
      .addCase(getSpecialist.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.messages = action.payload
      })
      .addCase(getAllMessages.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.message = action.payload
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default dashSlice.reducer