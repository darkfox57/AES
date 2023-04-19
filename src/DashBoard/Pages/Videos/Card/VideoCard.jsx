import React from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteFile,
  editFile,
  getAllFiles,
} from '../../../../redux/actions/gallery_actions'
import CardDetail from '../../../Components/Modal/CardDetail'

export default function ImageCard({ id, url, status }) {
  const dispatch = useDispatch()

  const handleStatus = async () => {
    const body = {
      _id: id,
      status: !status,
      url: url,
    }
    await dispatch(editFile(body)).then(() => {
      dispatch(getAllFiles())
    })
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteFile(id)).finally(() => dispatch(getAllFiles()))
    } catch (error) {
      return console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="content">
        <iframe
          width="100%"
          height="415"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <span>Estado del video: {status ? 'activa' : 'inactiva'}</span>
        <div className="buttons">
          <button className="dashBtn" onClick={handleStatus}>
            {status ? 'desactivar' : 'activar'}
          </button>
          <button className="dashBtn" onClick={handleDelete}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  )
}
