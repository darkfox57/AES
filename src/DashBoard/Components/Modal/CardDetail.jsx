import React from 'react'
import { DetailModal, ModalContainer } from './Modal.styled'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const CardDetail = ({ submition, setSelectedCard,type }) => {
  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  return (
    <ModalContainer onClick={handleCloseModal}>
      <DetailModal onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={handleCloseModal}>
          Close
        </button>
        {type === "especialista" && <> <h4>Nombre Completo</h4>
        <span>{submition.fullname}</span>

        <h4>Telefono</h4>
        <span>{submition.phone}</span>

        <h4>Email</h4>
        <span>{submition.email}</span>

         <h4>N de asistentes</h4>
        <span>{submition.assistants ? submition.assistants : 0}</span>

        <h4>Pais</h4>
        <span>{submition.country}</span>

        <h4>Hoja de vida</h4>
        <div>
         <Link to={submition.filepath} target="_blank">
          <i>
           <IoDocumentAttachOutline /> <span>Ver cv</span>
          </i>
        </Link>
        </div>
        </>}
        {type === "institucion" && <> 
        <h4>Nombre Completo</h4>
        <span>{submition.fullname}</span>

        <h4>Institución</h4>
        <span>{submition.organization}</span>

        <h4>Telefono</h4>
        <span>{submition.phone}</span>

        <h4>Email</h4>
        <span>{submition.email}</span>

         <h4>Cargo</h4>
        <span>{submition.post}</span>

        <h4>Ciudad</h4>
        <span>{submition.city}</span>
        {submition.area?.name ? <><h4>Aréa:</h4> <span>{submition.area.name}</span></> : ''}
    
        </>}
        {
          type === "organizacion"&& <> 
          <h4>Nombre Completo</h4>
          <span>{submition.fullname}</span>
  
          <h4>Organización</h4>
          <span>{submition.work}</span>
  
          <h4>Telefono</h4>
          <span>{submition.phone}</span>
  
          <h4>Email</h4>
          <span>{submition.email}</span>
  
           <h4>Cargo</h4>
          <span>{submition.post}</span>

          <h4>N de asistentes</h4>
          <span>{submition.assistants}</span>

          <h4>Ciudad</h4>
          <span>{submition.city}</span>
          {submition.area?.name ? <><h4>Aréa:</h4> <span>{submition.area.name}</span></> : ''}
      
          </>
        }
      </DetailModal>
    </ModalContainer>
  )
}

export default CardDetail

