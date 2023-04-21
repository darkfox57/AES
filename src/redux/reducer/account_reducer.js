import { createSlice } from '@reduxjs/toolkit'
import { createUser, deleteUser, getAllUsers, getOtherUser, getRoles, getUser, logOut, login, newPassword, resetPassword, updateUser, userValidation } from '../actions/account_actions'

const initialState = {
  user: {},
  anotherUser: {},
  users: [],
  roles: [],
  status: '',
  validation: '',
  confirmation: '',
  passConfirmation: '',
  error: ''
}


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = action.payload
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.status = action.payload
      })
      .addCase(userValidation.fulfilled, (state, action) => {
        state.validation = action.payload
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.roles = action.payload
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(getOtherUser.fulfilled, (state, action) => {
        state.anotherUser = action.payload
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.passConfirmation = action.payload
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(newPassword.fulfilled, (state, action) => {
        state.passConfirmation = action.payload
      })
  },
})

export default usersSlice.reducer