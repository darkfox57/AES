import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OrderBlog } from '../../redux/actions/blog_actions'

const SelectOrder = () => {
    const dispatch = useDispatch()
    const [nameOrder, setNameOrder] = useState("")
    const [dateOrder, setDateOrder] = useState("")
    

    const handleNameOrderChange = (e) => {
        setNameOrder(e.target.value)
        const option = {
            type: e.target.name,
            sort:e.target.value
        }
        dispatch(OrderBlog(option))
        //setNameOrder("")
    }
    
    const handleDateOrderChange = (e) => {
        setDateOrder(e.target.value)
        const option = {
            type:e.target.name,
            sort:e.target.value
        }
        dispatch(OrderBlog(option))
        //setDateOrder("")
    }
    
  return (
    <>
      <select name="title" value={nameOrder} onChange={handleNameOrderChange}>
       <option value="" defaultValue disabled >A-Z</option >
        <option value="asc">A-Z</option >
        <option value="desc">Z-A</option >
      </select>

      <select name="fecha" value={dateOrder} onChange={handleDateOrderChange}>
      <option value="" defaultValue disabled >Fecha</option >
        <option  value="asc">Asendente</option >
        <option value="desc">Descente</option >
      </select>
    </>
  )
}

export default SelectOrder
