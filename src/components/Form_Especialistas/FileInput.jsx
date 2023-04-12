import React, { useState } from 'react'

import {
  InputContainer,
  FileUploader,
  Label,
  FileName,
  UploadIcon,
  ButtonContainer,
} from './FileInput.Styles'

function FileInput() {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setFileName(file.name)
  }

  return (
    <InputContainer>
      <FileUploader onChange={handleFileChange} />
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
