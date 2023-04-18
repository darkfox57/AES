import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getMessage } from '../../../../redux/actions/dash_forms_actions'
import { Detail_Body } from '../../Involucrate/detail.styles'

export default function MessageDetail() {
  const { id } = useParams()

  const submition = useSelector((state) => state.dash.message)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessage(id))
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
        <p>Asunto: {submition.title}</p>
        <p>Mensaje: {submition.content}</p>
      </Detail_Body>
    </>
  )
}
