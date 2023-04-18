import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePagination from '../../../../Hooks/usePagination'
import {
  getAllOrganizations,
  getOrganization,
} from '../../../../redux/actions/dash_forms_actions'
import Paginado from '../../../Components/Paginado/Paginado'
import OrganizationCard from './OrganizationCard/OrganizationCard'
import { SubmitList, Table } from './organizations.styles'

export default function Organizations() {
  const organizations = useSelector((state) => state.dash.organizations)
  const [selectedCard, setSelectedCard] = useState(null)
  const submition = useSelector((state) => state.dash.organization)
  const areas = useSelector((state) => state.dash.areas)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrganizations())
  }, [])

  const captureIdModal = (cardId) => {
    setSelectedCard(cardId)
    dispatch(getOrganization(cardId))
  }

  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(organizations, 10)

  return (
    <>
      <h2>Inscritos Alianzas</h2>
      <SubmitList>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Organización</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((org) => (
              <OrganizationCard
                key={org._id}
                id={org._id}
                name={org.fullname}
                email={org.email}
                organization={org.organizations}
                phone={org.phone}
                submit={org.createdAt}
                city={org.city}
                view={org.view}
                submition={submition}
                activeModal={selectedCard === org._id}
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
