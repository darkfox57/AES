import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePagination from '../../../../Hooks/usePagination'
import {
  getAllSpecialist,
  getSpecialist,
} from '../../../../redux/actions/dash_forms_actions'
import Paginado from '../../../Components/Paginado/Paginado'
import SpecialistCard from './SpecialistCard/SpecialistCard'
import { SubmitList, Table } from './specialist.styles'

export default function Specialists() {
  const dispatch = useDispatch()
  const specialists = useSelector((state) => state.dash.specialists)
  //const areas = useSelector((state) => state.dash.areas)
  const submition = useSelector((state) => state.dash.specialist)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    dispatch(getAllSpecialist())
  }, [])
  // capturar el id del modal y usar dispatch
  const captureIdModal = (cardId) => {
    setSelectedCard(cardId)
    dispatch(getSpecialist(cardId))
  }
  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(specialists, 10)

  return (
    <>
      <h2>Inscritos Especialistas</h2>
      <SubmitList>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>País</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((inst) => (
              <SpecialistCard
                key={inst._id}
                id={inst._id}
                name={inst.fullname}
                email={inst.email}
                phone={inst.phone}
                submit={inst.createdAt}
                country={inst.country}
                view={inst.view}
                submition={submition}
                activeModal={selectedCard === inst._id}
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
}
