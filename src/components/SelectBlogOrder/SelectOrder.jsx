import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OrderBlog, getBlogTitle } from '../../redux/actions/blog_actions'
import { ResetBtn, SelectFlex, SelectOrderContainer } from './SelectBlogOrder.Styled'
import { getEventByTitle, orderEvents } from '../../redux/actions/event_actions'

const SelectOrder = ({categorys,handleFilter,size,EventOrder}) => {

  const dispatch = useDispatch()
  const [nameOrder, setNameOrder] = useState('')
  const [dateOrder, setDateOrder] = useState('')

  const handleNameOrderChange = (e) => {
    setNameOrder(e.target.value)
    const option = {
      type: e.target.name,
      sort: e.target.value,
    }
    EventOrder ? dispatch(orderEvents(option)) :  dispatch(OrderBlog(option))
  }

  const handleDateOrderChange = (e) => {
    setDateOrder(e.target.value)
    const option = {
      type: e.target.name,
      sort: e.target.value,
    }
    EventOrder ? dispatch(orderEvents(option)) :  dispatch(OrderBlog(option))
  }

  const handleReset = ()=>{
    EventOrder ? dispatch(getEventByTitle("")) :  dispatch(getBlogTitle(""))
  }

  return (
    <SelectFlex>
      <SelectOrderContainer name="title" value={nameOrder} onChange={handleNameOrderChange}>
        <option value="" defaultValue disabled>
          Alfabetico
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </SelectOrderContainer>

      <SelectOrderContainer name="fecha" value={dateOrder} onChange={handleDateOrderChange}>
        <option value="" defaultValue disabled>
          Fecha
        </option>
        <option value="asc">Más Recientes</option>
        <option value="desc">Menos Recientes</option>
      </SelectOrderContainer>
 <ResetBtn onClick={handleReset} >Todos</ResetBtn>
      { size && <SelectOrderContainer onChange={handleFilter}>
            {categorys?.map((category) => (
              <option key={category._id} value={category.name} >{category.name}</option>
            ))}
        </SelectOrderContainer>}
    </SelectFlex>
  )
}

export default SelectOrder
