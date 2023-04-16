import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const uploadFiles = createAsyncThunk('file/upload', async (file) => {
 try {
  const formData = FormData()
  formData.append('file', file)

  const { data } = await axios.post("/api.upload", formData, {
   headers: {
    "Content-Type": "multipart/form-data",
   },
  })
  const fileUrl = await uploadFile(data.path)
  console.log('subido');
  return fileUrl
 }
 catch (error) {
  throw new Error("ERROR_FILE_UPLOAD: El archivo no se pudo cargar")
 }
})