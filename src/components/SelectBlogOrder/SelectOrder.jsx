import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OrderBlog } from '../../redux/actions/blog_actions'
import { SelectOrderContainer } from './SelectBlogOrder.Styled'

const SelectOrder = () => {
  const dispatch = useDispatch()
  const [nameOrder, setNameOrder] = useState('')
  const [dateOrder, setDateOrder] = useState('')

  const handleNameOrderChange = (e) => {
    setNameOrder(e.target.value)
    const option = {
      type: e.target.name,
      sort: e.target.value,
    }
    dispatch(OrderBlog(option))
  }

  const handleDateOrderChange = (e) => {
    setDateOrder(e.target.value)
    const option = {
      type: e.target.name,
      sort: e.target.value,
    }
    dispatch(OrderBlog(option))
  }

  return (
    <>
      <SelectOrderContainer name="title" value={nameOrder} onChange={handleNameOrderChange}>
        <option value="" defaultValue disabled>
          A-Z
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </SelectOrderContainer>

      <SelectOrderContainer name="fecha" value={dateOrder} onChange={handleDateOrderChange}>
        <option value="" defaultValue disabled>
          Fecha
        </option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </SelectOrderContainer>
    </>
  )
}

export default SelectOrder
