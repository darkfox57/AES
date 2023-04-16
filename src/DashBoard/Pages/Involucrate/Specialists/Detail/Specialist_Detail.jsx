import React, { useEffect } from 'react'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getSpecialist } from '../../../../../redux/actions/dash_forms_actions'
import { Detail_Body } from '../../detail.styles'

export default function Specialist_Detail() {
  const { id } = useParams()

  const submition = useSelector((state) => state.dash.specialist)
  const areas = useSelector((state) => state.dash.areas)
  const dispatch = useDispatch()

  // const areaObj = areas.find((area) => {
  //   area._id === submition.area[0]
  // })

  useEffect(() => {
    dispatch(getSpecialist(id))
  }, [id])

  return (
    <>
      <h2>Detalle de Inscripción</h2>
      <Detail_Body>
        <p>
          Registrado:{' '}
          {new Date(submition.createdAt).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p>Nombre completa: {submition.fullname}</p>
        <p>Email: {submition.email}</p>
        <p>Teléfono: {submition.phone}</p>
        <p>País: {submition.country}</p>
        <p>Número de asistentes: {submition.assistants}</p>
        <p>Hoja de vida:</p>
        <Link to={submition.filepath} target="_blank">
          <i>
            <IoDocumentAttachOutline /> <span>Ver cv</span>
          </i>
        </Link>
      </Detail_Body>
    </>
  )
}
