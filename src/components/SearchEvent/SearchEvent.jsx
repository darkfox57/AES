import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { HiSearch } from 'react-icons/hi'

import { getEventByTitle } from '../../redux/actions/event_actions'

import { SearchContainer } from './SearchEvent.Styles'

export default function SearchEvent() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleTitle = () => {
    dispatch(getEventByTitle(title))
    setTitle('')
  }

  return (
    <SearchContainer>
      <input
        value={title}
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleTitle}>
        <HiSearch />
      </button>
    </SearchContainer>
  )
}
