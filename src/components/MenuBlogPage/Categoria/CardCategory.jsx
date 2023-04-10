import React from 'react'
import { CardContainer } from './CardCategory.Styled'
import { useDispatch } from 'react-redux'
import { filterCategory } from '../../../redux/actions/blog_actions'
import useScroll from '../../../Hooks/useScrollTop'

const CardCategory = ({text,cant}) => {
  const dispatch = useDispatch()

  const handleCategory = ()=>{
    dispatch(filterCategory(text))
    useScroll(520)
  }
  
  return (
    <CardContainer onClick={handleCategory}>
        <span className='text'>{text}</span>
        <span className='cant'>{cant}</span>
    </CardContainer>
  )
}

export default CardCategory
