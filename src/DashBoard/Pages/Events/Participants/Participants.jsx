import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePagination from '../../../../Hooks/usePagination'
import { getAllPersons } from '../../../../redux/actions/dash_forms_actions'
import Paginado from '../../../Components/Paginado/Paginado'
import ParticipantCard from './ParticipantCard/Card'
import { SubmitList, Table } from './participants.styles'

export default function Participats() {
  const participants = useSelector((state) => state.dash.persons)
  const events = useSelector((state) => state.event.events)
  const users = participants
    .filter((user) => user.events && user.events.length > 0)
    .filter((user) => user.events.filter((e) => e !== null).length > 0)

  const [selectedCard, setSelectedCard] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPersons())
  }, [])

  const captureIdModal = (cardId) => {
    setSelectedCard(cardId)
  }

  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(users, 10)

  return (
    console.log(users),
    (
      <>
        <h2>Participates</h2>
        <SubmitList>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Evento</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((user) => (
                <ParticipantCard
                  key={user._id}
                  name={user.fullname}
                  email={user.email}
                  userEvents={user.events}
                  submit={user.createdAt}
                  submition={user}
                  activeModal={selectedCard === user._id}
                  captureIdModal={captureIdModal}
                  setSelectedCard={setSelectedCard}
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
  )
}
