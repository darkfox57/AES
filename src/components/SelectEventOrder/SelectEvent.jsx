import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { orderEvents } from '../../redux/actions/event_actions'

import { OrderContainer } from './SelectEvent.Styles'

export default function SelectEvent() {
  const [order, setOrder] = useState('')
  const [date, setDate] = useState('')

  const dispatch = useDispatch()

  const handleNameOrderChange = (e) => {
    setOrder(e.target.value)
    const option = {
      type: e.target.name,
      sort: e.target.value,
    }
    dispatch(orderEvents(option))
  }

  const handleDateOrderChange = (e) => {
    setDate(e.target.value)
    const option = {
      type: e.target.name,
      sort: e.target.value,
    }
    dispatch(orderEvents(option))
  }

  return (
    <OrderContainer>
      <select name="title" value={order} onChange={handleNameOrderChange}>
        <option value="" defaultValue disabled>
          Alfabetico
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select name="fecha" value={date} onChange={handleDateOrderChange}>
        <option value="" defaultValue disabled>
          Fecha
        </option>
        <option value="asc">Mas Recientes</option>
        <option value="desc">Menos Recientes</option>
      </select>
    </OrderContainer>
  )
}
