import React, { useEffect, useState } from 'react'
import { SearchContainer } from './Search.Styled'
import { useDispatch } from 'react-redux'
import { getBlogTitle } from '../../../redux/actions/blog_actions'
import { FiSearch } from 'react-icons/fi'
import { getEventByTitle } from '../../../redux/actions/event_actions'

const SearchBlog = ({Event}) => {
  const [title, setTitle] = useState("")

  const dispatch = useDispatch()

  const handleSearch = () => {
    Event ? dispatch(getEventByTitle(title)) :  dispatch(getBlogTitle(title))
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  return (
    <SearchContainer>
      <h4><FiSearch className='icon-search'/> Buscar</h4>
      <div>
        <input value={title} type="search" placeholder="Ingresa tu busqueda" onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </SearchContainer>
  )
}

export default SearchBlog


