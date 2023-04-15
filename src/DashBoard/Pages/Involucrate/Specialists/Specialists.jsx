import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpecialist } from '../../../../redux/actions/dash_forms_actions'
import SpecialistCard from '../../../Components/SpecialistCard/SpecialistCard'
import { SubmitList, Table } from './specialist.styles'

export default function Specialists() {
  const dispatch = useDispatch()
  const specialists = useSelector((state) => state.dash.specialists)
  const areas = useSelector((state) => state.dash.areas)

  useEffect(() => {
    dispatch(getAllSpecialist())
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
            {specialists.map((inst) => (
              <SpecialistCard
                key={inst._id}
                id={inst._id}
                name={inst.fullname}
                email={inst.email}
                phone={inst.phone}
                submit={inst.createdAt}
                country={inst.country}
                view={inst.view}
              />
            ))}
          </tbody>
        </Table>
      </SubmitList>
    </>
  )
}
