import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePagination from '../../../Hooks/usePagination'
import { getAllPersons } from '../../../redux/actions/dash_forms_actions'
import Paginado from '../../Components/Paginado/Paginado'
import PersonCard from './PersonCard/PersonCard'
import { SubmitList, Table } from './suscriptions.styles'

export default function Suscriptions() {
  const persons = useSelector((state) => state.dash.persons)

  const filteredPersons = useMemo(() => {
    return persons.filter((p) => p.suscriber === true)
  }, [persons])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPersons())
  }, [])
  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(filteredPersons, 8)

  return (
    <>
      <h2>Suscripciones a NewsLetter</h2>
      <SubmitList>
        <Table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Fecha de suscripción</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((person) => (
              <PersonCard
                key={person._id}
                id={person._id}
                email={person.email}
                submit={person.createdAt}
                view={person.view}
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
