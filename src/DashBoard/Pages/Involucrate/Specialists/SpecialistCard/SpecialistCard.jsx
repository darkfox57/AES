import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CardDetail from '../../../../Components/Modal/CardDetail'

export default function SpecialistCard({
  id,
  name,
  email,
  phone,
  submit,
  country,
  view,
  activeModal,
  captureIdModal,
  submition,
  setSelectedCard,
}) {
  const dispatch = useDispatch()

  const edited = useSelector((state) => state.blog.confirmation)

  return (
    <>
      <tr>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          <p>{phone}</p>
        </td>
        <td>
          <p>{country}</p>
        </td>
        <td>
          {' '}
          {new Date(submit).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}{' '}
        </td>
        <td>
          <button className="dashBtn" onClick={() => captureIdModal(id)}>
            Ver
          </button>
        </td>
      </tr>
      {activeModal && (
        <CardDetail
          submition={submition}
          type={'especialista'}
          setSelectedCard={setSelectedCard}
        />
      )}
    </>
  )
}
