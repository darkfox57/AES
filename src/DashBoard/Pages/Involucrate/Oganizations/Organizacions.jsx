import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrganizations } from '../../../../redux/actions/dash_forms_actions'
import OrganizationCard from '../../../Components/OrganizationCard/OrganizationCard'
import { SubmitList, Table } from './organizations.styles'

export default function Organizations() {
  const organizations = useSelector((state) => state.dash.organizations)
  const areas = useSelector((state) => state.dash.areas)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrganizations())
  }, [])
  return (
    console.log(organizations),
    (
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
                <th>Ciudad</th>
                <th>Fecha</th>
              </tr>
            </thead>

            <tbody>
              {organizations.map((org) => (
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
                />
              ))}
            </tbody>
          </Table>
        </SubmitList>
      </>
    )
  )
}
