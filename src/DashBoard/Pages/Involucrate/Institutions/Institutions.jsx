import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePagination from '../../../../Hooks/usePagination'
import { getAllInstitutions } from '../../../../redux/actions/dash_forms_actions'
import Paginado from '../../../Components/Paginado/Paginado'
import InstitutionCard from './InstitutionCard/InstitutionCard'
import { SubmitList, Table } from './institutions.styles'

export default function Institutions() {
  const institutions = useSelector((state) => state.dash.institutions)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllInstitutions())
  }, [])

  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(institutions, 10)

  return (
    <>
      <h2>Inscritos Instituciones</h2>
      <SubmitList>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Institución</th>
              <th>Ciudad</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((inst) => (
              <InstitutionCard
                key={inst._id}
                id={inst._id}
                name={inst.fullname}
                email={inst.email}
                institution={inst.organization}
                phone={inst.phone}
                position={inst.post}
                submit={inst.createdAt}
                city={inst.city}
                view={inst.view}
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
