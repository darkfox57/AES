import React from 'react'
import { useDispatch } from 'react-redux'

import { filterEvents } from '../../redux/actions/event_actions'

import { FilterProximosEvento } from './FilterProximo.Styled'

const FilterProximos = () => {
  const dispatch = useDispatch()

  const handleFilter = (event) => {
    dispatch(filterEvents(event.target.value))
  }

  return (
    <FilterProximosEvento>
      <button value="Default" onClick={handleFilter}>
        Todas las categorias
      </button>
      <button value="Dia del agua" onClick={handleFilter}>
        Dia del agua
      </button>
      <button value="Educacion" onClick={handleFilter}>
        Educación
      </button>
      <button value="Salud" onClick={handleFilter}>
        Salud
      </button>
      <button value="Instituciones" onClick={handleFilter}>
        Instituciones
      </button>
    </FilterProximosEvento>
  )
}

export default FilterProximos
