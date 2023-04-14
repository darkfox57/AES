import React, { useState } from 'react'

import {
  InputContainer,
  FileUploader,
  Label,
  FileName,
  UploadIcon,
  ButtonContainer,
} from './FileInput.Styles'

function FileInput({ register }) {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setFileName(file.name)
  }

  return (
    <InputContainer>
      <FileUploader onChange={handleFileChange} {...register('filepath')} />
      <Label htmlFor="file">
        <ButtonContainer>
          <UploadIcon />
          Seleccionar Archivo
        </ButtonContainer>
        <FileName />
      </Label>

      <span>{fileName}</span>
    </InputContainer>
  )
}

export default FileInput
