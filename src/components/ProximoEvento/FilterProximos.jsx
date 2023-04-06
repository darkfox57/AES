import React from 'react'
import { FilterProximosEvento } from './FilterProximo.Styled'

const FilterProximos = () => {
  return (
    <FilterProximosEvento>
            <button>Todas las categorias</button>
            <button>Dia del agua</button>
            <button>Educación</button>
            <button>Salud</button>
            <button>Instituciones</button>
    </FilterProximosEvento>
  )
}

export default FilterProximos
