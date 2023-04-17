import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileUrl: null,
  pdfUrl: null,
};
const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFileUrl: (state, action) => {
      state.fileUrl = action.payload;
    },
    setPdfUrl: (state, action) => {
      state.pdfUrl = action.payload;
    },
  }
});

export const { setFileUrl, setPdfUrl } = fileSlice.actions;
export default fileSlice.reducer;