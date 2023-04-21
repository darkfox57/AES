import axios from 'axios'
import { Image } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFileUrl } from '../../redux/reducer/files_reducer'
import { FileUploaderComponent } from './filepuloader.styles'

function FileUploader({ folder }) {
  const dispatch = useDispatch()
  const [uploading, setUploading] = useState(false)
  const [selectedImg, setSelectedImg] = useState()
  const [imgUrl, setImgUrl] = useState(null)
  const [uploadError, setUploadError] = useState()
  const [apiPreset, setApiPreset] = useState('')

  const apiFolder = (folder) => {
    if (folder === 'blog') setApiPreset('o9vqchkp')
    if (folder === 'events') setApiPreset('npqltswp')
    if (folder === 'files') setApiPreset('huy1gm9a')
    if (folder === 'gallery') setApiPreset('tqwwuudk')
    if (folder === 'uploads') setApiPreset('gddsicqt')
  }

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    if (file.type.startsWith('image/')) {
      validateImage(file)
    } else if (file.type === 'application/pdf') {
      validatePdf(file)
    } else {
      setSelectedImg(file)
      setImgUrl(URL.createObjectURL(file))
    }
  }

  const validateImage = (file) => {
    if (
      file.size > 2000000 ||
      (file.dimensions &&
        (file.dimensions.width > 2000 || file.dimensions.height > 2000))
    ) {
      setUploadError(
        'La imagen debe tener menos de 2MB y una resolución máxima de 2000x2000px'
      )
    } else {
      setSelectedImg(file)
      setImgUrl(URL.createObjectURL(file))
    }
  }

  const validatePdf = (file) => {
    setApiPreset('e2fy8smu')
    if (file.size > 10000000) {
      setUploadError('El archivo PDF debe tener menos de 10MB')
    } else {
      setSelectedImg(file)
    }
    uploadImg()
  }

  const uploadImg = async (event) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', selectedImg)
    formData.append('upload_preset', apiPreset)
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dpisdt9i3/image/upload',
        formData
      )
      dispatch(setFileUrl(response.data.secure_url))
    } catch (error) {
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  useEffect(() => {
    apiFolder(folder)
  }, [])

  return (
    <FileUploaderComponent>
      <div className="frame">
        <div className="center">
          <div className="title">
            <h3>Sube aquí tu archivo</h3>
          </div>

          <div className="dropzone">
            <img
              src="http://100dayscss.com/codepen/upload.svg"
              className="upload-icon"
            />
            <input
              className="upload-input"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileInputChange}
            />
            <button className="btn" onClick={handleFileInputChange}>
              Subir Archivo
            </button>
          </div>
        </div>
      </div>
      <div className="confirmation">
        {uploading ? <p>Subiendo archivo...</p> : null}
        {uploadError ? <p>{uploadError}</p> : null}
        {imgUrl && <img src={imgUrl} alt="Preview" className="preview" />}
        {imgUrl && (
          <>
            <span>Confirma la imagen antes de continuar</span>
            <div className="button" onClick={uploadImg}>
              Confirmar imagen
            </div>
          </>
        )}
      </div>
    </FileUploaderComponent>
  )
}

export default FileUploader
