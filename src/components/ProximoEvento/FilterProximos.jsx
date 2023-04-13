import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useConditionalRender from '../../Hooks/useConditionalRender'

import { filterEvents } from '../../redux/actions/event_actions'

import { FilterProximosEvento, FilterButton } from './FilterProximo.Styled'

import { OrderContainer } from '../SelectEventOrder/SelectEvent.Styles'

const FilterProximos = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [showSelect] = useConditionalRender(768)

  const dispatch = useDispatch()
  const categories = useSelector((state) => state.event.categories)

  const arrayCategories = [...categories]
  arrayCategories.unshift({
    _id: 'g55gregtsh5665htrhsfgh',
    name: 'Todas las categorias',
  })

  const handleFilter = (category, index = 0) => {
    setActiveButton(index)
    dispatch(filterEvents(category))
  }

  return (
    <FilterProximosEvento>
      {showSelect ? (
        <OrderContainer>
          <select onChange={() => handleFilter(event.target.value)}>
            {arrayCategories.map((category) => (
              <option key={category._id}>{category.name}</option>
            ))}
          </select>
        </OrderContainer>
      ) : (
        <FilterProximosEvento>
          {arrayCategories.map((category, index) => (
            <FilterButton
              key={category._id}
              active={activeButton === index}
              onClick={() => handleFilter(category.name, index)}
              disabled={activeButton === index}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterProximosEvento>
      )}
    </FilterProximosEvento>
  )
}

export default FilterProximos
