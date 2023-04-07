import React from 'react'
import { SearchContainer } from './Search.Styled'

const SearchBlog = () => {
  return (
    <SearchContainer>
      <h4>🔍 Buscar</h4>
      <div>
        <input type="search" placeholder='Ingresa tu busqueda'/>
        <button>Buscar</button>
      </div>
    </SearchContainer>
  )
}

export default SearchBlog
