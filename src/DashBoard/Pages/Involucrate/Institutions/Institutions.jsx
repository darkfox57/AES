import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllInstitutions,
  getAllOrganizations,
} from '../../../../redux/actions/dash_forms_actions'
import InstitutionCard from '../../../Components/InstitutionCard/InstitutionCard'
import { SubmitList, Table } from './institutions.styles'

export default function Institutions() {
  const institutions = useSelector((state) => state.dash.institutions)
  const areas = useSelector((state) => state.dash.areas)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllInstitutions())
  }, [])

  // {categories.map((category) => (
  //  <label key={category.name}>
  //    <input
  //      type="checkbox"
  //      value={category._id}
  //      defaultChecked={blogPost.categories?.some(
  //        (c) => c._id === category._id
  //      )}
  //      {...register('categories')}
  //    />
  //    <span>{category.name}</span>
  //  </label>
  // ))}

  return (
    <>
      <h2>Inscritos Involucrate</h2>
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
            {institutions.map((inst) => (
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
      </SubmitList>
    </>
  )
}
