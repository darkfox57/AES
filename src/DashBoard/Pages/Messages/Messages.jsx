import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMessages } from '../../../redux/actions/dash_forms_actions'
import MessagesCard from '../../Components/MesaggesCard/MessagesCard'
import { SubmitList, Table } from './messages.styles'

export default function Messages() {
  const contacts = useSelector((state) => state.dash.messages)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMessages())
  }, [])
  return (
    <>
      <h2>Formularios de Contacto</h2>
      <SubmitList>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Asunto</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <MessagesCard
                key={contact._id}
                id={contact._id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                subject={contact.title}
                submit={contact.createdAt}
                view={contact.view}
              />
            ))}
          </tbody>
        </Table>
      </SubmitList>
    </>
  )
}
