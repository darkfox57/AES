import React from 'react'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { DetailModal, ModalContainer } from './Modal.styled'
const CardDetail = ({ submition, setSelectedCard, type }) => {
  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  return (
    <ModalContainer onClick={handleCloseModal}>
      <DetailModal onClick={(e) => e.stopPropagation()} size={type}>
        <button className="close" onClick={handleCloseModal}>
          <h4>X</h4>
        </button>
        {type === 'especialista' && (
          <>
            {' '}
            <p>Nombre Completo</p>
            <span>{submition.fullname}</span>
            <p>Telefono</p>
            <span>{submition.phone}</span>
            <p>Email</p>
            <span>{submition.email}</span>
            <p>N de asistentes</p>
            <span>{submition.assistants ? submition.assistants : 0}</span>
            <p>Pais</p>
            <span>{submition.country}</span>
            <p>Hoja de vida</p>
            <div>
              <Link to={submition.filepath} target="_blank">
                <i>
                  <IoDocumentAttachOutline />
                </i>
                <span>Ver cv</span>
              </Link>
            </div>
          </>
        )}
        {type === 'institucion' && (
          <>
            <p>Nombre Completo</p>
            <span>{submition.fullname}</span>

            <p>Institución</p>
            <span>{submition.organization}</span>

            <p>Telefono</p>
            <span>{submition.phone}</span>

            <p>Email</p>
            <span>{submition.email}</span>

            <p>Cargo</p>
            <span>{submition.post}</span>

            <p>Ciudad</p>
            <span>{submition.city}</span>
            {submition.area?.name ? (
              <>
                <p>Aréa:</p> <span>{submition.area.name}</span>
              </>
            ) : (
              ''
            )}
          </>
        )}
        {type === 'organizacion' && (
          <>
            <p>Nombre Completo</p>
            <span>{submition.fullname}</span>

            <p>Organización</p>
            <span>{submition.work}</span>

            <p>Telefono</p>
            <span>{submition.phone}</span>

            <p>Email</p>
            <span>{submition.email}</span>

            <p>Cargo</p>
            <span>{submition.post}</span>

            <p>N de asistentes</p>
            <span>{submition.assistants}</span>

            {submition.area?.name ? (
              <>
                <p>Aréa:</p> <span>{submition.area.name}</span>
              </>
            ) : (
              ''
            )}
          </>
        )}
        {type === 'gallery' && (
          <>
            <img
              src={submition.url}
              alt="Imagen de la galeria de involucrate"
            />
          </>
        )}
      </DetailModal>
    </ModalContainer>
  )
}

export default CardDetail
