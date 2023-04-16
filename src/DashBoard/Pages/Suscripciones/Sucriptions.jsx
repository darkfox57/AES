import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPersons } from '../../../redux/actions/dash_forms_actions'
import PersonCard from './PersonCard/PersonCard'
import { SubmitList, Table } from './suscriptions.styles'

export default function Suscriptions() {
  const persons = useSelector((state) => state.dash.persons)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPersons())
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
            {persons
              .filter((p) => p.suscriber === true)
              .map((person) => (
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
      </SubmitList>
    </>
  )
}
