import React from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteFile,
  editFile,
  getAllFiles,
} from '../../../../redux/actions/gallery_actions'
import CardDetail from '../../../Components/Modal/CardDetail'

export default function ImageCard({
  id,
  url,
  status,
  submition,
  activeModal,
  captureIdModal,
  setSelectedCard,
}) {
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
        <img src={url} alt={`Imagen ${id} de galeria de involucrate`} />
        <span>Estado de la imagen: {status ? 'activa' : 'inactiva'}</span>
        <div className="buttons">
          <button className="dashBtn" onClick={() => captureIdModal(id)}>
            Ver
          </button>
          <button className="dashBtn" onClick={handleStatus}>
            {status ? 'desactivar' : 'activar'}
          </button>
          <button className="dashBtn" onClick={handleDelete}>
            Borrar
          </button>
          {activeModal && (
            <CardDetail
              submition={submition}
              type={'gallery'}
              setSelectedCard={setSelectedCard}
            />
          )}
        </div>
      </div>
    </div>
  )
}
