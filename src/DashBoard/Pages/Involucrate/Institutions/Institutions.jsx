import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllInstitutions,
  getAllOrganizations,
  getInstitution,
} from '../../../../redux/actions/dash_forms_actions'
import InstitutionCard from './InstitutionCard/InstitutionCard'
import { SubmitList, Table } from './institutions.styles'

export default function Institutions() {
  const institutions = useSelector((state) => state.dash.institutions)
  const areas = useSelector((state) => state.dash.areas)
  const [selectedCard, setSelectedCard] = useState(null);
  const submition = useSelector((state) => state.dash.institution)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllInstitutions())
  }, [])

  const captureIdModal = (cardId) => {
    setSelectedCard(cardId);
    dispatch(getInstitution(cardId));
  };
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
                submition={submition}
                activeModal={selectedCard === inst._id}
                captureIdModal={captureIdModal}
                setSelectedCard={setSelectedCard}
              />
            ))}
          </tbody>
        </Table>
      </SubmitList>
    </>
  )
}
