import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMessages } from '../../../redux/actions/dash_forms_actions'
import MessagesCard from './MessagesCard/MessagesCard'
import { SubmitList, Table } from './messages.styles'
import Paginado from '../../Components/Paginado/Paginado'
import usePagination from '../../../Hooks/usePagination'

export default function Messages() {
  const contacts = useSelector((state) => state.dash.messages)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMessages())
  }, [])

  const {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
  } = usePagination(contacts, 8)

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
            {paginatedData.map((contact) => (
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
        <Paginado
          currentPage={currentPage}
          totalPages={totalPages}
          PreviousPage={PreviousPage}
          NextPage={NextPage}
        />
      </SubmitList>
    </>
  )
}
