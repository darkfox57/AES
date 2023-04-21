import axios from 'axios'
import { Image } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPdfUrl } from '../../redux/reducer/files_reducer'
import {
  ButtonContainer,
  FileName,
  FileUploader,
  InputContainer,
  Label,
  UploadIcon,
} from './pdfUploades.styles'

function PdfUploader({ register }) {
  const dispatch = useDispatch()
  const [uploading, setUploading] = useState(null)
  const [selectedFile, setSelectedFile] = useState()
  const [imgUrl, setImgUrl] = useState(null)
  const [uploadError, setUploadError] = useState()
  const uploadedFile = useSelector((state) => state.file.fileUrl)

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    validatePdf(file)
    setSelectedFile(file)
    setImgUrl(URL.createObjectURL(file))
    uploadFile(file)
  }

  const validatePdf = (file) => {
    if (file.size > 10000000) {
      setUploadError('El archivo PDF debe tener menos de 10MB')
    } else {
      setSelectedFile(file)
    }
  }

  const uploadFile = async (file) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'huy1gm9a')
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dpisdt9i3/image/upload',
        formData
      )
      dispatch(setPdfUrl(response.data.secure_url))
    } catch (error) {
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <InputContainer>
        <Label>
          <FileUploader onChange={handleFileInputChange} />
          <ButtonContainer>
            <UploadIcon />
            Seleccionar Archivo
          </ButtonContainer>
          <FileName />
        </Label>
        <p>{uploadedFile}</p>
      </InputContainer>
      <div className="confirmation">
        {uploading ? (
          <p>Subiendo archivo...</p>
        ) : uploading === false ? (
          <p>Archivo subido</p>
        ) : null}
        {uploadError ? <p>{uploadError}</p> : null}
      </div>
    </>
  )
}

export default PdfUploader
