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
        <span>{text}</span>
        <span>{cant}</span>
    </CardContainer>
  )
}

export default CardCategory
