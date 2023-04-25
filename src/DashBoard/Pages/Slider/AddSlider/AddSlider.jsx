import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import withReactContent from 'sweetalert2-react-content'
import { addFile, getAllFiles } from '../../../../redux/actions/gallery_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { FormBody } from './add.styles'

export default function AddSlider() {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const [sending, setSending] = useState(null)
  const postImg = useSelector((state) => state.file.fileUrl)

  const handleData = async (data) => {
    const post = {
      title: data.title,
      subtitle: data.subtitle,
      url: postImg,
      status: true,
      origin: 'slider',
    }
    try {
      setSending(true)
      await dispatch(addFile(post)).finally(() => dispatch(getAllFiles()))
    } catch (error) {
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <h2>Agregar Nuevo Banner</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input {...register('title', { max: 40 })} />
          </label>
          <label>
            Subtitulo:
            <input {...register('subtitle', { max: 120 })} />
          </label>
          <div className="editImg">
            <span>Cargar nueva imagen:</span>
            <FileUploader folder="gallery" />
          </div>
          <input
            type="submit"
            value="Actualizar publicación"
            disabled={sending ? true : false}
          />
        </form>
      </FormBody>
    </div>
  )
}
