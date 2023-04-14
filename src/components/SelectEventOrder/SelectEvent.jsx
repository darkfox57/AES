import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { orderEvents } from '../../redux/actions/event_actions'
import { SelectOrderContainer } from '../SelectBlogOrder/SelectBlogOrder.Styled'

export default function SelectEvent({categorys,handleFilter,size}) {
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
    <div style={{display:"flex",gap:"10px"}}>
      <SelectOrderContainer name="title" value={order} onChange={handleNameOrderChange}>
        <option value="" defaultValue disabled>
          Alfabetico
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </SelectOrderContainer>

      <SelectOrderContainer name="fecha" value={date} onChange={handleDateOrderChange}>
        <option value="" defaultValue disabled>
          Fecha
        </option>
        <option value="asc">Mas Recientes</option>
        <option value="desc">Menos Recientes</option>
      </SelectOrderContainer>

      {size && <SelectOrderContainer onChange={handleFilter}>
            {categorys?.map((category) => (
              <option key={category._id} value={category.name} >{category.name}</option>
            ))}
      </SelectOrderContainer>}
    </div>
  )
}
