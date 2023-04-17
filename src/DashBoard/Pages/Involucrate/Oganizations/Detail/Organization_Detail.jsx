import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOrganization } from '../../../../../redux/actions/dash_forms_actions'
import { Detail_Body } from '../../detail.styles'

export default function Organization_Detail() {
  const { id } = useParams()

  const submition = useSelector((state) => state.dash.organization)
  const areas = useSelector((state) => state.dash.areas)
  const dispatch = useDispatch()

  // const areaObj = areas.find((area) => {
  //   area._id === submition.area[0]
  // })

  useEffect(() => {
    dispatch(getOrganization(id))
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
        <p>Organización: {submition.work}</p>
        <p>Nombre completa: {submition.fullname}</p>
        <p>Email: {submition.email}</p>
        <p>Teléfono: {submition.phone}</p>
        <p>Cargo: {submition.post}</p>
        <p>Ciudad: {submition.city}</p>
        <p>Número de asistentes: {submition.assistants}</p>
        <p>Aréa: {submition.area?.name}</p>
      </Detail_Body>
    </>
  )
}
