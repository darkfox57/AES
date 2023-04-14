import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { filterEvents } from '../../redux/actions/event_actions'
import { FilterProximosEvento, FilterButton } from './FilterProximo.Styled'



const FilterProximos = ({categories}) => {
  const [activeButton, setActiveButton] = useState(0)
  const dispatch = useDispatch()

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
    </FilterProximosEvento>
  )
}

export default FilterProximos
